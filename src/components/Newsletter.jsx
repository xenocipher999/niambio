import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Newsletter() {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email) setSubscribed(true)
    }

    return (
        <section id="newsletter" className="py-20 px-6 bg-transparent">
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glassmorphism rounded-3xl p-12 shadow-sm border border-white/10 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-32 h-32 bg-teal/5 rounded-full blur-2xl pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-lightblue/5 rounded-full blur-2xl pointer-events-none" />

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-semibold mb-5">
                            <Sparkles size={14} />
                            Stay Updated
                        </div>
                        <h2 className="text-3xl font-bold font-heading text-white mb-3">
                            Subscribe to Our Updates
                        </h2>
                        <p className="text-white/60 mb-8">
                            Get the latest insights on life sciences innovation, biotech news, and NIAMBIO announcements.
                        </p>

                        {subscribed ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center gap-3"
                            >
                                <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center">
                                    <Sparkles size={24} color="#00C2A8" />
                                </div>
                                <p className="text-white font-semibold">You're subscribed!</p>
                                <p className="text-white/50 text-sm">Welcome to the NIAMBIO community.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                                <input
                                    id="newsletter-email"
                                    type="email"
                                    required
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 px-5 py-3.5 rounded-full border-2 border-white/10 outline-none focus:border-teal transition-colors text-white bg-white/5 placeholder:text-white/30 text-sm"
                                />
                                <button id="newsletter-submit" type="submit" className="btn-primary flex items-center gap-2 whitespace-nowrap">
                                    Sign Up <ArrowRight size={16} />
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
