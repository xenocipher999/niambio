import React from 'react'
import { motion } from 'framer-motion'
import { Play, ExternalLink } from 'lucide-react'

const episodes = [
    {
        num: '01',
        title: 'Precision Health Revolution',
        desc: 'Exploring how precision medicine is transforming healthcare outcomes worldwide.',
        duration: '42 min',
        color: '#00C2A8',
    },
    {
        num: '02',
        title: 'Meditation & Energy Flow',
        desc: 'The science behind meditation, biohacking, and optimizing your biological energy.',
        duration: '35 min',
        color: '#4FC3F7',
    },
    {
        num: '03',
        title: 'Diagnostics Innovation',
        desc: 'Next-generation diagnostic tools accelerating early detection and personalized treatment.',
        duration: '38 min',
        color: '#6C63FF',
    },
]

const platformLinks = [
    { name: 'Spotify', href: '#', color: '#1DB954' },
    { name: 'Apple Podcasts', href: '#', color: '#B150E2' },
    { name: 'YouTube', href: 'https://www.youtube.com/@Precision_Pulse_with_Amit', color: '#FF0000' },
]

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.12 } }),
}

export default function Podcast() {
    return (
        <section id="podcast" className="section-padding gradient-bg relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full border border-white"
                        style={{
                            width: 200 + i * 80,
                            height: 200 + i * 80,
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%,-50%)',
                            opacity: 0.3 - i * 0.04,
                        }}
                    />
                ))}
            </div>

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
                        Listen & Learn
                    </span>
                    <h2 className="text-4xl font-bold font-heading text-white mb-4">
                        The Precision Pulse Podcast
                    </h2>
                    <p className="text-white/70 text-lg max-w-xl mx-auto">
                        Redefining precision for a healthier life.
                    </p>

                    {/* Platform links */}
                    <div className="flex justify-center flex-wrap gap-4 mt-8">
                        {[
                            { name: 'Spotify', href: '#', color: '#1DB954' },
                            { name: 'Amazon Music', href: '#', color: '#FF9900' },
                            { name: 'Apple Podcasts', href: '#', color: '#B150E2' },
                            { name: 'YouTube', href: 'https://www.youtube.com/@Precision_Pulse_with_Amit', color: '#FF0000' },
                        ].map((p) => (
                            <a
                                key={p.name}
                                href={p.href}
                                id={`podcast-${p.name.toLowerCase().replace(' ', '-')}`}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full glassmorphism text-white text-sm font-medium hover:scale-105 transition-transform"
                                style={{ borderColor: p.color }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExternalLink size={14} color={p.color} />
                                {p.name}
                            </a>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {episodes.map((ep, i) => (
                        <motion.div
                            key={ep.num}
                            custom={i + 1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={fadeUp}
                            whileHover={{ y: -6, transition: { duration: 0.25 } }}
                            id={`podcast-ep-${ep.num}`}
                            className="glassmorphism rounded-2xl p-7 cursor-pointer group"
                        >
                            <div className="flex items-center justify-between mb-5">
                                <span
                                    className="text-xs font-bold font-heading px-3 py-1 rounded-full"
                                    style={{ background: `${ep.color}22`, color: ep.color }}
                                >
                                    EP. {ep.num}
                                </span>
                                <span className="text-white/40 text-xs">{ep.duration}</span>
                            </div>

                            <h3 className="text-lg font-bold font-heading text-white mb-3 leading-snug">
                                {ep.title}
                            </h3>
                            <p className="text-white/60 text-sm leading-relaxed mb-6">{ep.desc}</p>

                            <button
                                className="flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                                style={{ color: ep.color }}
                            >
                                <span className="w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                                    style={{ background: `${ep.color}22` }}
                                >
                                    <Play size={14} fill={ep.color} color={ep.color} />
                                </span>
                                Listen Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
