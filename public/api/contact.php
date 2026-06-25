<?php
// Contact form handler for static/PHP hosting (Hostinger, XAMPP, etc.).
// Receives the form POST and sends two emails via Microsoft 365 (Graph API).
// Credentials are read from config.php (generated from .env at build time).

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$configFile = __DIR__ . '/config.php';
if (!file_exists($configFile)) {
    http_response_code(500);
    echo json_encode(['error' => 'Email service is not configured (config.php missing).']);
    exit;
}
$cfg = require $configFile;

$data = json_decode(file_get_contents('php://input'), true) ?: [];
$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Name, email and message are required.']);
    exit;
}

foreach (['TENANT_ID', 'CLIENT_ID', 'CLIENT_SECRET', 'MAILBOX'] as $k) {
    if (empty($cfg[$k])) {
        http_response_code(500);
        echo json_encode(['error' => 'Email service is not configured.']);
        exit;
    }
}

function graph_token(array $c): string {
    $ch = curl_init("https://login.microsoftonline.com/{$c['TENANT_ID']}/oauth2/v2.0/token");
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => http_build_query([
            'client_id' => $c['CLIENT_ID'],
            'client_secret' => $c['CLIENT_SECRET'],
            'scope' => 'https://graph.microsoft.com/.default',
            'grant_type' => 'client_credentials',
        ]),
    ]);
    $res = curl_exec($ch);
    $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    $json = json_decode($res, true);
    if ($code !== 200 || empty($json['access_token'])) {
        throw new Exception("token request failed ($code): $res");
    }
    return $json['access_token'];
}

function send_mail(string $token, string $mailbox, string $to, string $subject, string $html, ?string $replyTo = null): void {
    $msg = [
        'subject' => $subject,
        'body' => ['contentType' => 'HTML', 'content' => $html],
        'toRecipients' => [['emailAddress' => ['address' => $to]]],
    ];
    if ($replyTo) {
        $msg['replyTo'] = [['emailAddress' => ['address' => $replyTo]]];
    }
    $url = 'https://graph.microsoft.com/v1.0/users/' . rawurlencode($mailbox) . '/sendMail';
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode(['message' => $msg, 'saveToSentItems' => true]),
        CURLOPT_HTTPHEADER => [
            "Authorization: Bearer $token",
            'Content-Type: application/json',
        ],
    ]);
    $res = curl_exec($ch);
    $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    if ($code < 200 || $code >= 300) {
        throw new Exception("sendMail failed ($code): $res");
    }
}

function thank_you_html(string $name): string {
    $safe = htmlspecialchars($name, ENT_QUOTES);
    return '
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#1f2937;">
      <div style="background:linear-gradient(90deg,#5fbfa8,#7cc0ef);padding:28px 24px;border-radius:16px 16px 0 0;">
        <h1 style="margin:0;color:#fff;font-size:22px;">Thank you, ' . $safe . '! 🎉</h1>
      </div>
      <div style="background:#f3f7fb;padding:28px 24px;border-radius:0 0 16px 16px;">
        <p style="font-size:15px;line-height:1.6;margin-top:0;">
          We&#39;ve received your message and truly appreciate you reaching out to <strong>Niambio</strong>.
        </p>
        <p style="font-size:15px;line-height:1.6;">
          Our team will review your inquiry and get back to you within <strong>24 hours</strong>.
        </p>
        <p style="font-size:15px;line-height:1.6;">Warm regards,<br/>The Niambio Team</p>
      </div>
    </div>';
}

try {
    $token = graph_token($cfg);

    // 1) Thank-you to the visitor
    send_mail($token, $cfg['MAILBOX'], $email, 'Thank you for contacting Niambio', thank_you_html($name));

    // 2) Notification to the site owner
    $safeName = htmlspecialchars($name, ENT_QUOTES);
    $safeEmail = htmlspecialchars($email, ENT_QUOTES);
    $safeMsg = nl2br(htmlspecialchars($message, ENT_QUOTES));
    $ownerHtml = "<p><strong>Name:</strong> $safeName</p>"
        . "<p><strong>Email:</strong> $safeEmail</p>"
        . "<p><strong>Message:</strong><br/>$safeMsg</p>";
    $owner = !empty($cfg['MAIL_TO']) ? $cfg['MAIL_TO'] : $cfg['MAILBOX'];
    send_mail($token, $cfg['MAILBOX'], $owner, "New contact form submission from $safeName", $ownerHtml, $email);

    echo json_encode(['ok' => true]);
} catch (Exception $e) {
    error_log('contact.php: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email. Please try again later.']);
}
