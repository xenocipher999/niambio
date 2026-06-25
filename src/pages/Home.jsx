import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import {
    ArrowRight, ChevronDown, Database, TrendingUp, Globe,
} from 'lucide-react'

import podcastJpeg from '../Podacast logo.jpeg'
import niambioLogo from '../check logo.png'

/* ─── Shared animation variants ─── */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.13 } }),
}

/* ─── Ecosystem cards data ─── */
const ecosystemCards = [
    {
        image: '/ecosystem-expert.png',
        title: 'Strategic Consulting',
        description:
            'Empowering life sciences innovation through data-driven diagnostics development, commercialization, and patient access.',
        color: '#00C2A8',
        glow: 'rgba(0,194,168,0.18)',
        link: '/consulting',
    },
    {
        image: podcastJpeg,
        title: 'The Precision Pulse Podcast',
        description:
            'Exploring precision health, meditation science, diagnostics innovation and lifestyle transformation.',
        color: '#4FC3F7',
        glow: 'rgba(79,195,247,0.18)',
        link: '/podcast',
    },
    {
        image: '/ecosystem-bio.png',
        title: 'Venture Studio',
        description:
            'NIAMBIO is evolving beyond traditional consulting by integrating a venture fund with its advisory services and The Precision Pulse podcast—creating a unique ecosystem that identifies, validates, and accelerates innovation in diagnostics, digital health, and precision medicine.',
        color: '#6C63FF',
        glow: 'rgba(108,99,255,0.18)',
        link: '/innovation',
    },
]

/* ─── Innovation blocks ─── */
const innovationBlocks = [
    {
        icon: Database,
        title: 'Innovation Repository',
        description: 'Curated database of cutting-edge life sciences innovations and technologies.',
        accent: '#ffffff',
        bg: 'linear-gradient(135deg, #00C2A8 0%, #009E89 100%)',
        shadow: 'rgba(0, 194, 168, 0.3)',
    },
    {
        icon: TrendingUp,
        title: 'Seed Fund Access',
        description: 'Dedicated seed capital to accelerate diagnostics and therapeutics breakthroughs',
        accent: '#ffffff',
        bg: 'linear-gradient(135deg, #4FC3F7 0%, #1976D2 100%)',
        shadow: 'rgba(79, 195, 247, 0.3)',
    },
    {
        icon: Globe,
        title: 'Global Expert Network',
        description: 'Collaborative ecosystem of scientists, clinicians, and biotech leaders.',
        accent: '#ffffff',
        bg: 'linear-gradient(135deg, #6C63FF 0%, #4B45B2 100%)',
        shadow: 'rgba(108, 99, 255, 0.3)',
    },
]

export default function Home() {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        }).then(() => setInit(true))
    }, [])

    return (
        <>
            {/* ══════════════════ HERO ══════════════════ */}
            <section className="relative min-h-screen flex items-center overflow-hidden gradient-bg">
                {init && (
                    <Particles
                        id="tsparticles"
                        options={{
                            background: { color: { value: 'transparent' } },
                            fpsLimit: 60,
                            particles: {
                                color: { value: ['#00C2A8', '#4FC3F7', '#6C63FF'] },
                                links: { color: '#00C2A8', distance: 150, enable: true, opacity: 0.22, width: 1 },
                                move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, random: true, speed: 0.8 },
                                number: { density: { enable: true, area: 900 }, value: 60 },
                                opacity: { value: 0.5 },
                                shape: { type: 'circle' },
                                size: { value: { min: 1, max: 3 } },
                            },
                            detectRetina: true,
                        }}
                        className="absolute inset-0 z-0"
                    />
                )}

                {/* Decorative glow orbs */}
                <div className="absolute top-20 right-10 w-72 h-72 bg-teal/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-20 left-10 w-64 h-64 bg-lightblue/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-36 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-6"
                        >
                            <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
                            <span className="text-teal text-sm font-medium">Expert Guidance</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-white leading-tight mb-10 max-w-4xl"
                        >
                            Empowering <span className="gradient-text">life sciences innovation</span> through data-driven diagnostics development, commercialization, and patient access.
                        </motion.h2>



                        <motion.div
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-wrap gap-4 mt-4"
                        >
                            <Link to="/contact" id="hero-consulting" className="btn-primary flex items-center gap-2">
                                Contact us <ArrowRight size={18} />
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.65 }}
                            className="flex flex-wrap gap-8 mt-14"
                        >
                            {[
                                { num: '100+', label: 'Experts Connected' },
                                { num: '20+', label: 'Projects Launched' },
                                { num: '30+', label: 'Global Markets' },
                            ].map((s) => (
                                <div key={s.label}>
                                    <div className="text-2xl font-bold font-heading text-teal">{s.num}</div>
                                    <div className="text-white/50 text-sm mt-0.5">{s.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: animated orbital visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
                        className="hidden lg:flex justify-center items-center"
                    >
                        <div className="relative w-[500px] h-[500px]">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                                    className="w-[432px] h-[432px] rounded-full border border-teal/30"
                                />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                    className="w-[312px] h-[312px] rounded-full border border-lightblue/40 border-dashed"
                                />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[300px] h-[300px] rounded-full bg-white shadow-2xl flex items-center justify-center p-10 overflow-hidden border-2 border-white/20">
                                    <img src={niambioLogo} alt="NIAMBIO Logo" className="w-full h-auto object-contain" />
                                </div>
                            </div>
                            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-3.5 h-3.5 rounded-full"
                                    style={{
                                        background: i % 2 === 0 ? '#00C2A8' : '#4FC3F7',
                                        top: `${50 - 45 * Math.cos((deg * Math.PI) / 180)}%`,
                                        left: `${50 + 45 * Math.sin((deg * Math.PI) / 180)}%`,
                                        transform: 'translate(-50%,-50%)',
                                    }}
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                                    transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Scroll cue */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span className="text-xs font-medium">Scroll</span>
                    <ChevronDown size={18} />
                </motion.div>
            </section>

            {/* ══════════════════ OUR OFFERINGS ══════════════════ */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp} custom={0} className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-semibold mb-4">
                            What We Offer
                        </span>
                        <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">Our Offerings</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">A fully integrated platform built to accelerate life sciences innovation at every stage.</p>

                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {ecosystemCards.map((card, i) => (
                            <motion.div
                                key={card.title}
                                custom={i + 1}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeUp}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="glassmorphism rounded-2xl overflow-hidden cursor-default group flex flex-col h-[520px]"
                            >
                                <div className={`w-[calc(100%+2px)] -ml-[1px] -mt-[1px] h-[351px] flex items-center justify-center overflow-hidden relative rounded-t-2xl ${card.title.includes('Podcast') ? 'bg-[#000000]' : ''}`}>
                                    <div className="absolute inset-0 bg-gradient-to-b from-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className={`w-full h-full ${card.title.includes('Podcast') ? 'object-contain scale-100' : 'object-cover group-hover:scale-105 transition-transform duration-700'}`}
                                    />
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold font-heading text-gray-900 mb-3 group-hover:text-teal transition-colors">
                                        {card.title}
                                    </h3>
                                    <p className={`text-gray-500 leading-relaxed text-sm mb-6 flex-grow min-h-[80px] ${card.title.includes('Venture') ? 'line-clamp-4' : ''}`}>
                                        {card.description}
                                    </p>
                                    <Link
                                        to={card.link}
                                        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors mt-auto w-max text-teal hover:text-teal-dark"
                                    >
                                        Learn more <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════ INNOVATION STRIP ══════════════════ */}
            <section className="section-padding bg-transparent relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(#00C2A8 1px,transparent 1px),linear-gradient(90deg,#00C2A8 1px,transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
                        className="text-center mb-14"
                    >
                        <h2 className="text-4xl font-bold font-heading text-gray-900 mb-3">
                            Accelerating Breakthrough{' '}
                            <span className="gradient-text">Bio-Technologies</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-xl mx-auto">
                            Infrastructure and connections to transform ideas into market-ready solutions.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {innovationBlocks.map((b, i) => (
                            <motion.div
                                key={b.title}
                                custom={i + 1}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                whileHover={{
                                    y: -10,
                                    boxShadow: `0 25px 50px -12px ${b.shadow}`,
                                }}
                                className="border-0 rounded-3xl p-10 transition-all duration-300 group relative overflow-hidden"
                                style={{ background: b.bg }}
                            >
                                {/* Decorative white glow */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-white/20"
                                    style={{ background: 'rgba(255, 255, 255, 0.15)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
                                    <b.icon size={28} color="#ffffff" strokeWidth={2} />
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-white mb-4">
                                    {b.title}
                                </h3>
                                <p className="text-white/80 text-sm leading-relaxed mb-6">
                                    {b.description}
                                </p>
                                <div className="w-12 h-1.5 bg-white/30 rounded-full transition-all duration-300 group-hover:w-24 group-hover:bg-white" />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}
                        className="text-center mt-12"
                    >
                        <Link to="/innovation" className="btn-primary inline-flex items-center gap-2">
                            Explore Venture Studio <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════ CTA BANNER ══════════════════ */}
            <section className="py-20 px-6 bg-transparent">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
                    className="max-w-4xl mx-auto text-center gradient-bg rounded-3xl p-14 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-52 h-52 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4 relative z-10">
                        Ready to Accelerate Your Innovation?
                    </h2>
                    <p className="text-white/70 text-lg mb-8 relative z-10">
                        Talk to our team of subject matter experts today.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 relative z-10">
                        <Link to="/contact" id="home-cta-contact" className="btn-primary">
                            Get In Touch
                        </Link>
                        <Link to="/consulting" id="home-cta-consulting" className="btn-outline border-white text-white hover:bg-white hover:text-navy">
                            View Services
                        </Link>
                    </div>
                </motion.div>
            </section>
        </>
    )
}
