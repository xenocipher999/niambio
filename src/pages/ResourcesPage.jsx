import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FileText, Download, Play, BookOpen, Coffee, HelpCircle, Lock, Clock, ArrowRight } from 'lucide-react'

const resources = [
    {
        title: "2026 Global MedTech Outlook",
        type: "Whitepaper",
        icon: FileText,
        color: "bg-teal/10 text-teal",
        desc: "A comprehensive analysis of the next decade of medical technology innovation.",
        locked: false
    },
    {
        title: "Market Entry Toolkit (APAC)",
        type: "Guide",
        icon: BookOpen,
        color: "bg-blue-500/10 text-blue-500",
        desc: "Step-by-step regulatory and commercial roadmap for entering Southeast Asian markets.",
        locked: true
    },
    {
        title: "Navigational Excellence Training",
        type: "Video Series",
        icon: Play,
        color: "bg-purple-500/10 text-purple-500",
        desc: "Mastering the complexities of global supply chain management for life sciences.",
        locked: true
    },
    {
        title: "IVD Regulatory Framework",
        type: "Checklist",
        icon: HelpCircle,
        color: "bg-orange-500/10 text-orange-500",
        desc: "Essential compliance requirements for In-Vitro Diagnostics across major jurisdictions.",
        locked: false
    }
]

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

export default function ResourcesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-44 pb-24 px-6 md:px-12 lg:px-20 gradient-bg relative min-h-[50vh] flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'linear-gradient(45deg, #ffffff 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                    }}
                />
                <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-semibold mb-5">
                            Expert Knowledge
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight max-w-4xl mx-auto">
                            KNOWLEDGE <span className="gradient-text">RESOURCES</span> & TOOLKITS
                        </h1>
                        <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed mb-8">
                            Access our curated collection of whitepapers, tactical guides, and regulatory toolkits designed for life sciences leaders.
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal text-white text-sm font-bold animate-pulse">
                            <Clock size={16} /> RESOURCES COMING SOON
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
                                Expert Toolkits <span className="gradient-text">Coming Soon</span>
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                                Our library of regulatory toolkits, market entry guides, and strategic whitepapers is currently being finalized. Join our network to be the first to know when they launch.
                            </p>
                            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                                Request Early Access <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
