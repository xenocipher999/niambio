import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Database, TrendingUp, Globe, ArrowRight, Clock } from 'lucide-react'

const blocks = [
    {
        icon: Database,
        title: 'Innovation Repository',
        description: 'Curated database of cutting-edge life sciences innovations and technologies.',
        accent: '#00C2A8',
    },
    {
        icon: TrendingUp,
        title: 'Seed Fund Access',
        description: 'Dedicated seed capital to accelerate diagnostics and therapeutics breakthroughs',
        accent: '#4FC3F7',
    },
    {
        icon: Globe,
        title: 'Global Expert Network',
        description: 'Collaborative ecosystem of scientists, clinicians, and biotech leaders.',
        accent: '#6C63FF',
    },
]

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

export default function InnovationPage() {
    return (
        <>
            {/* ── Hero ── */}
            <section className="pt-44 pb-24 px-6 md:px-12 lg:px-20 gradient-bg relative overflow-hidden min-h-[55vh] flex flex-col justify-center">
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'linear-gradient(#ffffff 1px,transparent 1px),linear-gradient(90deg,#ffffff 1px,transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-semibold mb-5">
                            Venture Studio
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold font-heading text-white mb-5 leading-tight">
                            Venture Studio
                        </h1>
                        <p className="text-white/80 text-xl max-w-3xl leading-relaxed">
                            NIAMBIO is evolving beyond traditional consulting by integrating a venture fund with its advisory services and The Precision Pulse podcast—creating a unique ecosystem that identifies, validates, and accelerates innovation in diagnostics, digital health, and precision medicine.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Coming Soon block ── */}
            <section className="section-padding bg-transparent">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={0}
                        className="glassmorphism rounded-3xl p-16 shadow-sm border border-white/10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-40 h-40 bg-teal/5 rounded-full blur-2xl pointer-events-none" />
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-lightblue/5 rounded-full blur-2xl pointer-events-none" />
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6">
                                <Clock size={30} color="white" />
                            </div>
                            <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">COMING SOON</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Venture Studio platform is under active development. We're building something extraordinary to support innovators in bringing cutting-edge diagnostics and therapeutics to global markets.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                                    Get Notified <ArrowRight size={18} />
                                </Link>
                                <Link to="/consulting" className="btn-outline inline-flex items-center gap-2">
                                    Explore Consulting
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Feature blocks ── */}
            <section className="section-padding bg-transparent relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(#00C2A8 1px,transparent 1px),linear-gradient(90deg,#00C2A8 1px,transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl font-bold font-heading text-gray-900 mb-3">
                            What's{' '}
                            <span className="gradient-text">Coming</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-lg mx-auto">
                            Three powerful pillars to supercharge your bio-innovation journey.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blocks.map((block, i) => (
                            <motion.div
                                key={block.title}
                                custom={i + 1}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                                className="glassmorphism rounded-2xl p-8 border border-gray-200"
                            >
                                <div className="w-14 h-14 rounded-xl glassmorphism flex items-center justify-center mb-6">
                                    <block.icon size={26} color={block.accent} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">{block.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{block.description}</p>
                                <div className="mt-6 inline-block px-3 py-1 rounded-full text-xs font-semibold"
                                    style={{ background: `${block.accent}22`, color: block.accent }}>
                                    Coming Soon
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
