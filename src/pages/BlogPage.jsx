import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowRight, BookOpen, Bell } from 'lucide-react'

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1 }
    }),
}

export default function BlogPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-44 pb-24 px-6 md:px-12 lg:px-20 gradient-bg relative overflow-hidden min-h-[50vh] flex flex-col justify-center">
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'linear-gradient(#ffffff 1px,transparent 1px),linear-gradient(90deg,#ffffff 1px,transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
                <div className="max-w-7xl mx-auto relative z-10 w-full">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-semibold mb-5">
                            Insights & Thinking
                        </span>
                        <h1 className="text-5xl md:text-8xl font-bold font-heading text-white mb-6 leading-tight">
                            NIAMBIO <span className="gradient-text">BLOG</span>
                        </h1>
                        <p className="text-white/70 text-xl max-w-2xl leading-relaxed mb-10">
                            Our subject matter experts are curating deep dives into the latest trends, breakthroughs, and strategies in the global life sciences industry.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Coming Soon Message */}
            <section className="section-padding bg-transparent relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-96 bg-teal/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="glassmorphism p-12 md:p-20 rounded-[40px] border border-white/10 shadow-2xl flex flex-col items-center"
                    >
                        <div className="w-20 h-20 bg-teal/10 rounded-3xl flex items-center justify-center mb-8">
                            <BookOpen className="text-teal" size={40} />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold font-heading text-gray-900 mb-6">
                            Something <span className="gradient-text">Big</span> is Coming
                        </h2>
                        <p className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10">
                            We're currently preparing our first set of insights. Subscribe below to be the first to know when we launch our blog.
                        </p>

                        <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-teal/5 border border-teal/20 text-teal font-bold tracking-widest text-sm">
                            <Clock size={18} className="animate-spin-slow" />
                            ESTIMATED LAUNCH: Q2 2026
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-3xl" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
                        Stay Ahead of the <span className="gradient-text">Curve</span>
                    </h2>
                    <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                        Subscribe to our newsletter to receive the latest industry insights and market updates directly in your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white flex-1 outline-none focus:ring-2 focus:ring-teal"
                        />
                        <button className="btn-primary">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
