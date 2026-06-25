import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        }).then(() => setInit(true))
    }, [])

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden gradient-bg"
        >
            {/* Particle background */}
            {init && (
                <Particles
                    id="tsparticles"
                    options={{
                        background: { color: { value: 'transparent' } },
                        fpsLimit: 60,
                        particles: {
                            color: { value: ['#00C2A8', '#4FC3F7', '#6C63FF'] },
                            links: {
                                color: '#00C2A8',
                                distance: 150,
                                enable: true,
                                opacity: 0.25,
                                width: 1,
                            },
                            move: {
                                direction: 'none',
                                enable: true,
                                outModes: { default: 'bounce' },
                                random: true,
                                speed: 0.8,
                                straight: false,
                            },
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

            {/* Decorative orbs */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-teal/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-lightblue/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left: Text */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-6"
                    >
                        <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
                        <span className="text-teal text-sm font-medium">Life Sciences Innovation</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold font-heading text-white leading-tight mb-6"
                    >
                        Empowering{' '}
                        <span className="gradient-text">Life Sciences</span>{' '}
                        Innovation Through Precision
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg"
                    >
                        Empowering life sciences innovation through data-driven diagnostics development, commercialization, and patient access.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <button
                            id="hero-explore"
                            onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-primary flex items-center gap-2"
                        >
                            Explore Ecosystem <ArrowRight size={18} />
                        </button>
                        <button
                            id="hero-consulting"
                            onClick={() => document.getElementById('consulting')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-outline"
                        >
                            Get Consulting
                        </button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
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

                {/* Right: Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hidden lg:flex justify-center items-center"
                >
                    <div className="relative w-[500px] h-[500px]">
                        {/* Central circle */}
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
                        {/* Core */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-48 h-48 rounded-full shadow-2xl flex items-center justify-center glassmorphism overflow-hidden border-2 border-teal/20 p-6">
                                <img src="/niambio-logo.png" alt="NIAMBIO Logo" className="w-full h-full object-contain brightness-0 invert opacity-90" />
                            </div>
                        </div>
                        {/* Orbiting dots */}
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

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="text-xs font-medium">Scroll</span>
                <ChevronDown size={18} />
            </motion.div>
        </section>
    )
}
