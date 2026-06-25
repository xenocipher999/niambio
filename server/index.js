import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '..', 'dist')

const app = express()
app.use(cors())
app.use(express.json())

// Serve the built front-end (run `npm run build` first)
app.use(express.static(distDir))

const PORT = process.env.PORT || 5050

const FROM_NAME = process.env.MAIL_FROM_NAME || 'Niambio'
const { TENANT_ID, CLIENT_ID, CLIENT_SECRET, MAILBOX } = process.env

const mailConfigured = TENANT_ID && CLIENT_ID && CLIENT_SECRET && MAILBOX

// --- Microsoft 365 app-only auth (client credentials flow) ---
async function getGraphToken() {
    const res = await fetch(
        `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                scope: 'https://graph.microsoft.com/.default',
                grant_type: 'client_credentials',
            }),
        }
    )
    const data = await res.json()
    if (!res.ok) {
        throw new Error(data.error_description || 'Failed to obtain Graph token')
    }
    return data.access_token
}

// --- Send an email as MAILBOX via Microsoft Graph ---
async function sendGraphMail(token, { to, subject, html, replyTo }) {
    const message = {
        subject,
        body: { contentType: 'HTML', content: html },
        toRecipients: [{ emailAddress: { address: to } }],
    }
    if (replyTo) {
        message.replyTo = [{ emailAddress: { address: replyTo } }]
    }

    const res = await fetch(
        `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(MAILBOX)}/sendMail`,
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message, saveToSentItems: true }),
        }
    )
    if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.error?.message || `Graph sendMail failed (${res.status})`)
    }
}

function thankYouHtml(name) {
    const safeName = (name || 'there').trim()
    return `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#1f2937;">
      <div style="background:linear-gradient(90deg,#5fbfa8,#7cc0ef);padding:28px 24px;border-radius:16px 16px 0 0;">
        <h1 style="margin:0;color:#fff;font-size:22px;">Thank you, ${safeName}! 🎉</h1>
      </div>
      <div style="background:#f3f7fb;padding:28px 24px;border-radius:0 0 16px 16px;">
        <p style="font-size:15px;line-height:1.6;margin-top:0;">
          We've received your message and truly appreciate you reaching out to <strong>Niambio</strong>.
        </p>
        <p style="font-size:15px;line-height:1.6;">
          Our team will review your inquiry and get back to you within <strong>24 hours</strong>.
        </p>
        <p style="font-size:15px;line-height:1.6;">
          Warm regards,<br/>
          The Niambio Team
        </p>
      </div>
    </div>`
}

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body || {}

    if (!email || !name || !message) {
        return res.status(400).json({ error: 'Name, email and message are required.' })
    }

    if (!mailConfigured) {
        return res.status(500).json({
            error: 'Email service is not configured. Set MAILBOX, TENANT_ID, CLIENT_ID and CLIENT_SECRET in .env.',
        })
    }

    try {
        const token = await getGraphToken()

        // 1) Thank-you email to the user who filled the form
        await sendGraphMail(token, {
            to: email,
            subject: 'Thank you for contacting Niambio',
            html: thankYouHtml(name),
        })

        // 2) Notification to the site owner
        const owner = process.env.MAIL_TO || MAILBOX
        await sendGraphMail(token, {
            to: owner,
            replyTo: email,
            subject: `New contact form submission from ${name}`,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong><br/>${String(message).replace(/\n/g, '<br/>')}</p>`,
        })

        res.json({ ok: true })
    } catch (err) {
        console.error('Failed to send email:', err)
        res.status(500).json({ error: 'Failed to send email. Please try again later.' })
    }
})

app.get('/api/health', (_req, res) => res.json({ ok: true }))

// SPA fallback: any non-API route serves index.html so client-side
// routing (e.g. /contact) works on direct load / refresh.
app.get(/^\/(?!api\/).*/, (_req, res) => {
    res.sendFile(path.join(distDir, 'index.html'))
})

app.listen(PORT, () => {
    console.log(`🚀 Site + mail server running on http://localhost:${PORT}`)
})
