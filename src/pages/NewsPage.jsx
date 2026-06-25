import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TrendingUp, Globe, ArrowRight, Rss, Bell, Clock } from 'lucide-react'

const marketUpdates = [
    {
        title: "European Biotech Index Rises 12%",
        date: "March 29, 2026",
        source: "Market Watch",
        summary: "The European biotech sector shows strong quarterly growth behind several key approval milestones.",
        tags: ["Markets", "Europe"],
        type: "update"
    },
    {
        title: "Breakthrough Therapy Designation for Orphan Drugs",
        date: "March 27, 2026",
        source: "FDA News",
        summary: "The FDA has granted breakthrough status to two new therapies targeting rare genetic conditions in pediatrics.",
        tags: ["Regulatory", "FDA"],
        type: "news"
    },
    {
        title: "Major Diagnostics Merger Announced in SEA",
        date: "March 25, 2026",
        source: "Asian Business Review",
        summary: "A $2.4B merger aims to consolidate the molecular diagnostics landscape across Southeast Asian markets.",
        tags: ["M&A", "APAC"],
        type: "news"
    },
    {
        title: "Next-Gen Sequencing Costs Hit New Record Lows",
        date: "March 22, 2026",
        source: "Tech Insights",
        summary: "New sequencing technologies are making personalized genomics more accessible than ever before.",
        tags: ["Tech", "Genetics"],
        type: "update"
    }
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

export default function NewsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-44 pb-24 px-6 md:px-12 lg:px-20 gradient-bg relative min-h-[50vh] flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                    }}
                />
                <div className="max-w-7xl mx-auto relative z-10 w-full">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-semibold mb-5 flex items-center gap-2 w-fit">
                            <span className="flex h-2 w-2 rounded-full bg-teal animate-pulse" /> Live Market Feed
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight">
                            NEWS & MARKET <span className="gradient-text">UPDATES</span>
                        </h1>
                        <p className="text-white/70 text-xl max-w-2xl leading-relaxed mb-8">
                            Stay informed with the latest breakthroughs, regulatory shifts, and commercial trends across the global life sciences sector.
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal text-white text-sm font-bold animate-pulse">
                            <Clock size={16} /> NEWS COMING SOON
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Coming Soon Section */}
            <section className="section-padding bg-transparent min-h-[40vh] flex items-center">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glassmorphism rounded-[3rem] p-12 md:p-20 border border-white/10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl pointer-events-none" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
                                Market Insights <span className="gradient-text">Coming Soon</span>
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                                We're curating a premium selection of market updates, regulatory shifts, and commercial trends. Stay tuned for deep industry dives and strategic analysis.
                            </p>
                            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                                Get Notified <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
