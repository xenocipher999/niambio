import React from 'react'
import { motion } from 'framer-motion'
import { Database, TrendingUp, Globe } from 'lucide-react'

const blocks = [
    {
        icon: Database,
        title: 'Innovation Repository',
        description:
            'Curated database of cutting-edge life sciences innovations and technologies.',
        gradient: 'from-teal/20 to-teal/5',
        accent: '#00C2A8',
    },
    {
        icon: TrendingUp,
        title: 'Venture Fund Access',
        description:
            'Dedicated venture capital resources to accelerate diagnostics and therapeutic breakthroughs.',
        gradient: 'from-lightblue/20 to-lightblue/5',
        accent: '#4FC3F7',
    },
    {
        icon: Globe,
        title: 'Global Expert Network',
        description:
            'Collaborative ecosystem of scientists, clinicians, and biotech leaders.',
        gradient: 'from-purple/20 to-purple/5',
        accent: '#6C63FF',
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15 } }),
}

export default function Innovation() {
    return (
        <section id="innovation" className="section-padding bg-navy relative overflow-hidden">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(#00C2A8 1px,transparent 1px),linear-gradient(90deg,#00C2A8 1px,transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    custom={0}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-semibold mb-4">
                        Innovation
                    </span>
                    <h2 className="text-4xl font-bold font-heading text-white mb-4 leading-tight">
                        Accelerating Breakthrough{' '}
                        <span className="gradient-text">Bio-Technologies</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Our ecosystem provides the infrastructure and connections needed to transform ideas into
                        market-ready solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blocks.map((block, i) => (
                        <motion.div
                            key={block.title}
                            custom={i + 1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeUp}
                            whileHover={{ y: -8, transition: { duration: 0.28 } }}
                            id={`innovation-${i}`}
                            className={`bg-gradient-to-br ${block.gradient} rounded-2xl p-8 border border-white/10 cursor-default`}
                        >
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 glassmorphism"
                            >
                                <block.icon size={26} color={block.accent} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold font-heading text-white mb-3">{block.title}</h3>
                            <p className="text-white/60 leading-relaxed text-sm">{block.description}</p>

                            <div className="flex items-center gap-2 mt-8">
                                <div className="h-1 w-8 rounded-full" style={{ background: block.accent }} />
                                <div className="h-1 w-4 rounded-full opacity-40" style={{ background: block.accent }} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
