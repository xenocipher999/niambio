#!/usr/bin/env python3
"""
Self-contained static + API server for the Niambio site.

Why this exists: `python -m http.server` only serves static files, so it
returns 404 on SPA deep links (e.g. /contact on refresh) and 501 on the
contact form's POST /api/contact. This script fixes both:

  1. Serves the built files in ./dist
  2. Falls back to index.html for client-side routes (SPA refresh works)
  3. Handles POST /api/contact and sends email via Microsoft 365 (Graph API)

Usage:
    python3 serve.py          # uses PORT from .env, or 8000
    python3 serve.py 8001     # override the port
"""

import os
import sys
import json
import urllib.request
import urllib.parse
import urllib.error
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.abspath(__file__))
DIST = os.path.join(ROOT, "dist")


def load_env(path):
    env = {}
    if os.path.exists(path):
        with open(path) as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith("#") or "=" not in line:
                    continue
                key, value = line.split("=", 1)
                env[key.strip()] = value.strip()
    return env


ENV = load_env(os.path.join(ROOT, ".env"))
TENANT_ID = ENV.get("TENANT_ID")
CLIENT_ID = ENV.get("CLIENT_ID")
CLIENT_SECRET = ENV.get("CLIENT_SECRET")
MAILBOX = ENV.get("MAILBOX")
MAIL_FROM_NAME = ENV.get("MAIL_FROM_NAME", "Niambio")
MAIL_TO = ENV.get("MAIL_TO") or MAILBOX
MAIL_CONFIGURED = all([TENANT_ID, CLIENT_ID, CLIENT_SECRET, MAILBOX])


def get_graph_token():
    data = urllib.parse.urlencode({
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "scope": "https://graph.microsoft.com/.default",
        "grant_type": "client_credentials",
    }).encode()
    req = urllib.request.Request(
        f"https://login.microsoftonline.com/{TENANT_ID}/oauth2/v2.0/token",
        data=data, method="POST",
    )
    with urllib.request.urlopen(req) as resp:
        return json.load(resp)["access_token"]


def send_mail(token, to, subject, html, reply_to=None):
    message = {
        "subject": subject,
        "body": {"contentType": "HTML", "content": html},
        "toRecipients": [{"emailAddress": {"address": to}}],
    }
    if reply_to:
        message["replyTo"] = [{"emailAddress": {"address": reply_to}}]
    body = json.dumps({"message": message, "saveToSentItems": True}).encode()
    req = urllib.request.Request(
        f"https://graph.microsoft.com/v1.0/users/{urllib.parse.quote(MAILBOX)}/sendMail",
        data=body, method="POST",
        headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"},
    )
    urllib.request.urlopen(req).read()


def thank_you_html(name):
    safe = (name or "there").strip()
    return f"""
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#1f2937;">
      <div style="background:linear-gradient(90deg,#5fbfa8,#7cc0ef);padding:28px 24px;border-radius:16px 16px 0 0;">
        <h1 style="margin:0;color:#fff;font-size:22px;">Thank you, {safe}! 🎉</h1>
      </div>
      <div style="background:#f3f7fb;padding:28px 24px;border-radius:0 0 16px 16px;">
        <p style="font-size:15px;line-height:1.6;margin-top:0;">
          We've received your message and truly appreciate you reaching out to <strong>Niambio</strong>.
        </p>
        <p style="font-size:15px;line-height:1.6;">
          Our team will review your inquiry and get back to you within <strong>24 hours</strong>.
        </p>
        <p style="font-size:15px;line-height:1.6;">Warm regards,<br/>The Niambio Team</p>
      </div>
    </div>"""


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIST, **kwargs)

    def _json(self, code, obj):
        payload = json.dumps(obj).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

    def do_POST(self):
        if self.path != "/api/contact":
            return self._json(404, {"error": "Not found"})

        length = int(self.headers.get("Content-Length", 0))
        try:
            data = json.loads(self.rfile.read(length) or b"{}")
        except Exception:
            return self._json(400, {"error": "Invalid request body."})

        name = (data.get("name") or "").strip()
        email = (data.get("email") or "").strip()
        message = (data.get("message") or "").strip()
        if not name or not email or not message:
            return self._json(400, {"error": "Name, email and message are required."})

        if not MAIL_CONFIGURED:
            return self._json(500, {
                "error": "Email service is not configured. Set MAILBOX, TENANT_ID, "
                         "CLIENT_ID and CLIENT_SECRET in .env.",
            })

        try:
            token = get_graph_token()
            send_mail(token, email, "Thank you for contacting Niambio", thank_you_html(name))
            owner_html = (
                f"<p><strong>Name:</strong> {name}</p>"
                f"<p><strong>Email:</strong> {email}</p>"
                f"<p><strong>Message:</strong><br/>{message.replace(chr(10), '<br/>')}</p>"
            )
            send_mail(token, MAIL_TO, f"New contact form submission from {name}",
                      owner_html, reply_to=email)
            return self._json(200, {"ok": True})
        except urllib.error.HTTPError as e:
            sys.stderr.write(f"Failed to send email: {e} {e.read().decode(errors='ignore')}\n")
            return self._json(500, {"error": "Failed to send email. Please try again later."})
        except Exception as e:
            sys.stderr.write(f"Failed to send email: {e}\n")
            return self._json(500, {"error": "Failed to send email. Please try again later."})

    def do_GET(self):
        # SPA fallback: serve index.html for any path that isn't a real file.
        path = self.translate_path(self.path)
        if not os.path.exists(path) and not self.path.startswith("/api"):
            self.path = "/index.html"
        return super().do_GET()


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else int(ENV.get("PORT", "8000"))
    if not os.path.isdir(DIST):
        sys.exit("dist/ not found — run `npm run build` first.")
    status = "Microsoft 365 email: ON" if MAIL_CONFIGURED else "Email: NOT configured (.env missing values)"
    print(f"🚀 Serving {DIST} on http://localhost:{port}  |  {status}")
    ThreadingHTTPServer(("", port), Handler).serve_forever()


if __name__ == "__main__":
    main()
