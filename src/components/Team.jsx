import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Linkedin, Twitter, ArrowRight } from 'lucide-react'

export default function Team() {
    return (
        <section id="team" className="section-padding bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-semibold mb-4">
                        Leadership
                    </span>
                    <h2 className="text-4xl font-bold font-heading text-white mb-4">Meet the Founder</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Founder image placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex justify-center"
                    >
                        <div className="relative w-[340px] h-[400px]">
                            <div className="w-full h-full rounded-3xl overflow-hidden relative shadow-2xl">
                                <img
                                    src="/ceo-amit-jain.jpg"
                                    alt="Amit K. Jain – Founder & CEO, NIAMBIO"
                                    className="w-full h-full object-cover object-top"
                                />
                                {/* Gradient overlay at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy/80 to-transparent" />
                                <div className="absolute bottom-5 left-0 right-0 text-center">
                                    <div className="text-white font-bold text-lg font-heading">Amit K. Jain</div>
                                    <div className="text-teal text-sm">Founder & CEO, NIAMBIO</div>
                                </div>
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -bottom-6 -right-6 glassmorphism border border-white/10 rounded-2xl p-4 shadow-xl"
                            >
                                <div className="text-white font-bold text-lg font-heading">25+ yrs</div>
                                <div className="text-white/50 text-xs">Industry Experience</div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="flex items-start gap-3 mb-6">
                            <Quote size={40} color="#00C2A8" className="shrink-0 rotate-180 opacity-60" />
                        </div>
                        <blockquote className="text-2xl font-semibold font-heading text-white leading-relaxed mb-8">
                            At NIAMBIO, our mission is “Empowering life sciences innovation through data-driven diagnostics development, commercialization, and patient access”
                        </blockquote>

                        <p className="text-white/70 leading-relaxed mb-8 text-base">
                            Amit K. Jain brings over 25+ years of expertise in life sciences, diagnostics, and
                            biotech consulting. As the founder and CEO of NIAMBIO, he is dedicated to bridging the
                            gap between cutting-edge research and global market success.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <button
                                id="founder-bio"
                                className="btn-primary flex items-center gap-2"
                            >
                                Read Bio <ArrowRight size={18} />
                            </button>
                            <div className="flex items-center gap-3">
                                <a
                                    id="founder-linkedin"
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal/20 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={18} color="#ffffff" />
                                </a>
                                <a
                                    id="founder-twitter"
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal/20 transition-colors"
                                    aria-label="Twitter"
                                >
                                    <Twitter size={18} color="#ffffff" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
