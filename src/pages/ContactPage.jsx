import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Clock, MapPin, Send, Paperclip, Calendar } from 'lucide-react'

const contactInfo = [
    { icon: Mail, label: 'Email', value: 'akjain@niambio.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=akjain@niambio.com' },
    { icon: Clock, label: 'Office Hours', value: '9:00 AM – 5:00 PM (Mon–Fri)' },
    { icon: MapPin, label: 'Location', value: 'United States' },
]

export default function ContactPage() {
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
        <>
            <section className="pt-44 pb-24 px-6 md:px-12 lg:px-20 gradient-bg relative overflow-hidden min-h-[55vh] flex flex-col justify-center">
                <div className="absolute top-10 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-semibold mb-5">
                            Get In Touch
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold font-heading text-white mb-5 leading-tight">
                            Contact Us
                        </h1>
                        <p className="text-white/70 text-xl max-w-xl leading-relaxed">
                            Ready to accelerate your life sciences innovation? Our team is here to help.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding bg-transparent overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left: info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.65 }}
                    >
                        <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-xl h-full flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-teal/5 rounded-full blur-2xl pointer-events-none" />
                            <div>
                                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">Contact Information</h3>
                                <p className="text-gray-500 mb-10 text-sm">Fill in the form and our team will be in touch within 24 hours.</p>
                                <div className="space-y-7">
                                    {contactInfo.map(({ icon: Icon, label, value, href }) => (
                                        <div key={label} className="flex items-start gap-4">
                                            {href ? (
                                                <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-teal/5 flex items-center justify-center shrink-0 hover:bg-teal/15 transition-colors" aria-label={`${label}: ${value}`}>
                                                    <Icon size={18} className="text-teal" />
                                                </a>
                                            ) : (
                                                <div className="w-10 h-10 rounded-xl bg-teal/5 flex items-center justify-center shrink-0">
                                                    <Icon size={18} className="text-teal" />
                                                </div>
                                            )}
                                            <div>
                                                <div className="text-gray-400 text-xs mb-0.5 font-bold uppercase tracking-widest">{label}</div>
                                                {href ? (
                                                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-900 font-bold hover:text-teal transition-colors">{value}</a>
                                                ) : (
                                                    <div className="text-gray-900 font-bold">{value}</div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="pt-10">
                                <div className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-1">Response Time</div>
                                <div className="text-gray-900 font-bold text-sm">Under 24 Hours</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.15 }}
                    >
                        {sent ? (
                            <div className="h-full flex items-center justify-center flex-col text-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center">
                                    <Send size={28} color="#00C2A8" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-gray-900">Message Sent!</h3>
                                <p className="text-gray-500">Thank you for reaching out. A confirmation email is on its way, and we'll get back to you within 24 hours.</p>
                                <button onClick={() => { setSent(false); setForm({ name: '', email: '', message: '', file: null }) }} className="btn-outline mt-4">Send Another</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="contact-name">Full Name</label>
                                    <input id="contact-name" type="text" required placeholder="Your name"
                                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 outline-none focus:border-teal transition-colors text-gray-900 bg-white placeholder:text-gray-400 text-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="contact-email">Email Address</label>
                                    <input id="contact-email" type="email" required placeholder="your@email.com"
                                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 outline-none focus:border-teal transition-colors text-gray-900 bg-white placeholder:text-gray-400 text-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="contact-message">Message</label>
                                    <textarea id="contact-message" required rows={5} placeholder="Tell us about your project or inquiry..."
                                        value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 outline-none focus:border-teal transition-colors text-gray-900 bg-white placeholder:text-gray-400 text-sm resize-none" />
                                </div>
                                <div>
                                    <label className="flex items-center gap-3 cursor-pointer group" htmlFor="contact-file">
                                        <div className="w-10 h-10 rounded-xl border-2 border-dashed border-white/20 group-hover:border-teal flex items-center justify-center transition-colors">
                                            <Paperclip size={16} color="#00C2A8" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-700">Attach File</div>
                                            <div className="text-xs text-gray-400">{form.file ? form.file.name : 'PDF, DOC, PNG (max 10MB)'}</div>
                                        </div>
                                    </label>
                                    <input id="contact-file" type="file" className="hidden"
                                        onChange={(e) => setForm({ ...form, file: e.target.files[0] })} />
                                </div>
                                {error && (
                                    <p className="text-sm text-red-500 -mt-2">{error}</p>
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
            </section>
            
            <section className="pb-32 px-6 bg-transparent overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glassmorphism rounded-[3rem] p-8 md:p-16 border border-white/10 flex flex-col lg:flex-row items-center gap-12"
                    >
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-bold mb-6">
                                <Calendar size={16} /> SCHEDULE A MEETING
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
                                Let's Discuss Your <span className="gradient-text">Project</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-10 max-w-xl">
                                Skip the form and book a direct consultation with our leadership team. 
                                We're ready to explore how NIAMBIO can accelerate your bio-innovation journey.
                            </p>
                            <a href="https://cal.com/akjain" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                                Book a Meeting <Calendar size={18} />
                            </a>
                        </div>
                        
                        <div className="w-full lg:w-auto flex flex-col items-center gap-4 glassmorphism p-8 rounded-3xl shadow-xl border border-white/10">
                            <div className="w-48 h-48 rounded-2xl overflow-hidden bg-white flex items-center justify-center p-2">
                                <img 
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://cal.com/akjain" 
                                    alt="Scan to schedule a meeting" 
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="text-center">
                                <div className="text-gray-900 font-bold text-sm">Scan to Book</div>
                                <div className="text-gray-400 text-xs mt-1 font-medium">Open with your camera app</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
