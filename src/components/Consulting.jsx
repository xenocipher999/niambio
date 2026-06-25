import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, FlaskConical } from 'lucide-react'

const bullets = [
    'Global market strategy',
    'Diagnostic product launch',
    'Regulatory guidance',
    'Fractional leadership support',
    'Commercial strategy',
]

const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
}

const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } },
}

export default function Consulting() {
    return (
        <section id="consulting" className="section-padding bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left: visual */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeLeft}
                    className="relative"
                >
                    <div className="rounded-3xl overflow-hidden aspect-[4/5] gradient-bg flex items-center justify-center relative">
                        {/* Abstract biotech illustration */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-20">
                            {[1, 2, 3].map((r) => (
                                <div
                                    key={r}
                                    className="absolute rounded-full border border-white"
                                    style={{ width: r * 120, height: r * 120 }}
                                />
                            ))}
                        </div>

                        <div className="relative z-10 flex flex-col items-center gap-6 p-10">
                            <div className="w-20 h-20 rounded-2xl glassmorphism flex items-center justify-center">
                                <FlaskConical size={36} color="#00C2A8" />
                            </div>
                            <p className="text-white/80 text-center font-medium text-lg leading-relaxed">
                                "Precision consulting to drive your biotech vision from concept to global market."
                            </p>
                        </div>

                        {/* Stat badges */}
                        <div className="absolute top-8 right-8 glassmorphism rounded-xl px-4 py-3">
                            <div className="text-white font-bold text-xl font-heading">95%</div>
                            <div className="text-white/60 text-xs">Success Rate</div>
                        </div>
                        <div className="absolute bottom-8 left-8 glassmorphism rounded-xl px-4 py-3">
                            <div className="text-white font-bold text-xl font-heading">30+</div>
                            <div className="text-white/60 text-xs">Markets Served</div>
                        </div>
                    </div>

                    {/* Floating accent */}
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal/20 rounded-full blur-2xl pointer-events-none" />
                </motion.div>

                {/* Right: content */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeRight}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-semibold mb-5">
                        Our Services
                    </span>
                    <h2 className="text-4xl font-bold font-heading text-white mb-5 leading-tight">
                        Strategic Consulting
                    </h2>
                    <p className="text-white/60 leading-relaxed mb-8 text-base">
                        Our team of subject matter experts supports innovators in R&D strategy, regulatory
                        navigation, market access, and commercial launch across global markets.
                    </p>

                    <ul className="space-y-4 mb-10">
                        {bullets.map((b, i) => (
                            <motion.li
                                key={b}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i, duration: 0.4 }}
                                className="flex items-center gap-3 text-white/80 font-medium"
                            >
                                <CheckCircle2 size={20} color="#00C2A8" className="shrink-0" />
                                {b}
                            </motion.li>
                        ))}
                    </ul>

                    <button
                        id="consulting-cta"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn-primary flex items-center gap-2 w-fit"
                    >
                        Book Consultation <ArrowRight size={18} />
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
