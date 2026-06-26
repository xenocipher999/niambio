import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Clock, MapPin, Send, Paperclip } from 'lucide-react'

const contactInfo = [
    { icon: Mail, label: 'Email', value: 'akjain@niambio.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=akjain@niambio.com' },
    { icon: Clock, label: 'Office Hours', value: '9:00 AM – 5:00 PM (Mon–Fri)' },
    { icon: MapPin, label: 'Location', value: 'United States' },
]

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '', file: null })
    const [sent, setSent] = useState(false)
    const [sending, setSending] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)
        setError('')
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    message: form.message,
                }),
            })
            if (!res.ok) {
                const data = await res.json().catch(() => ({}))
                throw new Error(data.error || 'Something went wrong. Please try again.')
            }
            setSent(true)
        } catch (err) {
            setError(err.message || 'Failed to send. Please try again.')
        } finally {
            setSending(false)
        }
    }

    return (
        <section id="contact" className="section-padding bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-semibold mb-4">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl font-bold font-heading text-white mb-4">Contact Us</h2>
                    <p className="text-white/60 text-lg max-w-xl mx-auto">
                        Ready to accelerate your life sciences innovation? Reach out to our team.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left: contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65 }}
                    >
                        <div className="gradient-bg rounded-3xl p-10 h-full flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                            <div>
                                <h3 className="text-2xl font-bold font-heading text-white mb-2">
                                    Contact Information
                                </h3>
                                <p className="text-white/50 mb-10 text-sm">
                                    We'd love to hear from you. Fill in the form and our team will be in touch.
                                </p>

                                <div className="space-y-7">
                                    {contactInfo.map(({ icon: Icon, label, value, href }) => (
                                        <div key={label} className="flex items-start gap-4">
                                            {href ? (
                                                <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glassmorphism flex items-center justify-center shrink-0 hover:bg-white/10 transition-colors" aria-label={`${label}: ${value}`}>
                                                    <Icon size={18} color="#00C2A8" />
                                                </a>
                                            ) : (
                                                <div className="w-10 h-10 rounded-xl glassmorphism flex items-center justify-center shrink-0">
                                                    <Icon size={18} color="#00C2A8" />
                                                </div>
                                            )}
                                            <div>
                                                <div className="text-white/50 text-xs mb-0.5">{label}</div>
                                                {href ? (
                                                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-teal transition-colors">{value}</a>
                                                ) : (
                                                    <div className="text-white font-medium">{value}</div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative dots */}
                            <div className="flex gap-2 mt-10">
                                {[...Array(5)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-2 h-2 rounded-full"
                                        style={{ background: i < 3 ? '#00C2A8' : 'rgba(255,255,255,0.2)' }}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.15 }}
                    >
                        {sent ? (
                            <div className="h-full flex items-center justify-center flex-col text-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center">
                                    <Send size={28} color="#00C2A8" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-white">Message Sent!</h3>
                                <p className="text-white/60">Thank you for reaching out. A confirmation email is on its way, and we'll get back to you within 24 hours.</p>
                                <button onClick={() => { setSent(false); setForm({ name: '', email: '', message: '', file: null }) }} className="btn-outline mt-4 border-white text-white hover:bg-white hover:text-navy">Send Another</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-2" htmlFor="contact-name">
                                        Full Name
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        required
                                        placeholder="Your name"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="w-full px-5 py-3.5 rounded-xl border-2 border-white/10 outline-none focus:border-teal transition-colors text-white bg-white/5 placeholder:text-white/30 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-2" htmlFor="contact-email">
                                        Email Address
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        required
                                        placeholder="your@email.com"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="w-full px-5 py-3.5 rounded-xl border-2 border-white/10 outline-none focus:border-teal transition-colors text-white bg-white/5 placeholder:text-white/30 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-2" htmlFor="contact-message">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        required
                                        rows={5}
                                        placeholder="Tell us about your project or inquiry..."
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        className="w-full px-5 py-3.5 rounded-xl border-2 border-white/10 outline-none focus:border-teal transition-colors text-white bg-white/5 placeholder:text-white/30 text-sm resize-none"
                                    />
                                </div>
                                <div>
                                    <label className="flex items-center gap-3 cursor-pointer group" htmlFor="contact-file">
                                        <div className="w-10 h-10 rounded-xl border-2 border-dashed border-white/20 group-hover:border-teal flex items-center justify-center transition-colors">
                                            <Paperclip size={16} color="#00C2A8" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-white/70">Attach File</div>
                                            <div className="text-xs text-white/40">
                                                {form.file ? form.file.name : 'PDF, DOC, PNG (max 10MB)'}
                                            </div>
                                        </div>
                                    </label>
                                    <input
                                        id="contact-file"
                                        type="file"
                                        className="hidden"
                                        onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
                                    />
                                </div>
                                {error && (
                                    <p className="text-sm text-red-400 -mt-2">{error}</p>
                                )}
                                <button
                                    id="contact-submit"
                                    type="submit"
                                    disabled={sending}
                                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {sending ? 'Sending…' : <>Send Message <Send size={16} /></>}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
