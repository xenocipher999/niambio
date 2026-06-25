import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, ExternalLink } from 'lucide-react'
import appleLogo from '../apple-logo.png'
import amazonLogo from '../social.png'

/* ── Real YouTube video IDs ── */
const episodes = [
    {
        id: 'kTjYfR2PoU8',
        num: '01',
        title: 'Can Lifestyle Change Improve Complex Disorders?',
        desc: 'The debut episode exploring the power of precision living and its role in managing complex health conditions.',
        color: '#6C63FF',
    },
    {
        id: 'UB1EUH_2sMg',
        num: '02',
        title: 'Unlocking Precision Health—InsideTracker’s Data-Driven Approach',
        desc: 'How personalized blood analytics and data-driven insights are revolutionizing personal health optimization.',
        color: '#4FC3F7',
    },
    {
        id: 'kg6YuCbNbn4',
        num: '03',
        title: 'The Science of Happiness: Precision Living for Inner Well-being',
        desc: 'Deep dive into the biological and psychological factors that contribute to sustainable happiness and mental health.',
        color: '#00C2A8',
    },
    {
        id: '5le3ubNNd4M',
        num: '04',
        title: 'How Lifestyle Shapes Multiple Sclerosis & Neurological Recovery',
        desc: 'Discussing the 6 pillars of lifestyle medicine and their impact on autoimmune and neurological health.',
        color: '#6C63FF',
    },
    {
        id: 'rlg2I6eO0vo',
        num: '05',
        title: 'From Chaos to Clarity: The Precision Path to Addiction Recovery & Leadership',
        desc: 'Exploring the intersection of neurological recovery, discipline, and high-performance leadership.',
        color: '#4FC3F7',
    },
    {
        id: 'VNv5uj3BhTE',
        num: '06',
        title: 'Harmony with Cancer: Living a Happy, Healthy Life Despite the Diagnosis',
        desc: 'A profound conversation on maintaining quality of life, mindset, and physical well-being while navigating a cancer diagnosis.',
        color: '#00C2A8',
    },
]

const platformLinks = [
    { name: 'Spotify', href: 'https://open.spotify.com/show/45UiMs3OUSjPxwAANaCUMy', color: '#1DB954' },
    { name: 'Amazon Music', href: 'https://music.amazon.com/podcasts/e807ddd2-d7ec-4bd7-a29e-75a3d68054ba/precision-pulse-with-amit', color: '#FF9900' },
    { name: 'Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/precision-pulse-with-amit/id1803270345', color: '#B150E2' },
    { name: 'YouTube', href: 'https://www.youtube.com/@Precision_Pulse_with_Amit', color: '#FF0000' },
]

const shorts = [
    { id: 'FOX5UJ_3d-0', title: 'Happiness & Quality of Life', num: 'S1' },
    { id: 'h4FRpsyybeQ', title: 'Addiction Recovery Insights', num: 'S2' },
    { id: 'nUrPFKPGvDQ', title: 'Precision Living Highlights', num: 'S3' },
    { id: 'sY-z3CMj1lI', title: 'Episode 06 Preview', num: 'S4' },
]

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
}

function EpisodeCard({ ep, index }) {
    return (
        <motion.div
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            id={`podcast-ep-${ep.num}`}
            className="glassmorphism rounded-2xl overflow-hidden border border-white/10"
        >
            {/* YouTube embed */}
            <div className="relative w-full aspect-video bg-navy">
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${ep.id}`}
                    title={`Precision Pulse – Episode ${ep.num}: ${ep.title}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>

            {/* Card body */}
            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <span
                        className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{ background: `${ep.color}18`, color: ep.color }}
                    >
                        EP. {ep.num}
                    </span>
                    <a
                        href={`https://youtu.be/${ep.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-white transition-colors"
                        aria-label="Open on YouTube"
                    >
                        <ExternalLink size={14} />
                    </a>
                </div>
                <h3 className="text-base font-bold font-heading text-gray-900 mb-2 leading-snug">{ep.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{ep.desc}</p>
            </div>
        </motion.div>
    )
}

const PlatformIcon = ({ name, color }) => {
    switch (name) {
        case 'Spotify':
            return (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color }}>
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.508 17.304c-.216.355-.678.468-1.034.252-2.868-1.752-6.478-2.148-10.73-1.173-.404.091-.81-.158-.901-.562-.091-.403.158-.809.562-.901 4.655-1.066 8.647-.613 11.85 1.341.356.216.469.678.253 1.043zm1.468-3.264c-.273.444-.852.585-1.296.312-3.28-2.016-8.277-2.604-12.153-1.428-.5.151-1.026-.134-1.178-.634-.151-.5.134-1.026.634-1.178 4.426-1.343 9.932-.676 13.681 1.632.444.273.585.852.312 1.296zm.126-3.384C15.016 8.244 8.28 8.016 4.392 9.192c-.612.186-1.258-.168-1.444-.78-.186-.612.168-1.258.78-1.444 4.476-1.356 11.916-1.092 16.632 1.704.552.324.732 1.032.408 1.584-.324.552-1.032.732-1.584.408z"/>
                </svg>
            )
        case 'YouTube':
            return (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color }}>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            )
        case 'Apple Podcasts':
            return (
                <img src={appleLogo} alt="Apple Podcasts" className="w-4 h-4 object-contain brightness-0 invert" />
            )
        case 'Amazon Music':
            return (
                <img src={amazonLogo} alt="Amazon Music" className="w-5 h-5 object-contain" />
            )
        default:
            return <ExternalLink size={14} color={color} />
    }
}

export default function PodcastPage() {
    return (
        <div className="bg-transparent">
            {/* ── Page Hero ── */}
            <section className="pt-44 pb-24 px-6 md:px-12 lg:px-20 gradient-bg relative overflow-hidden min-h-[60vh] flex flex-col justify-center">
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'linear-gradient(#ffffff 1px,transparent 1px),linear-gradient(90deg,#ffffff 1px,transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-semibold mb-5">
                            Podcast
                        </span>
                        <h1 className="text-5xl md:text-8xl font-bold font-heading text-white mb-6 leading-tight">
                            The Precision <span className="gradient-text">Pulse</span>
                        </h1>
                        <p className="text-white/70 text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                            Redefining Precision for a Healthier Life
                        </p>

                        {/* Platform links */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {platformLinks.map((p) => (
                                <a
                                    key={p.name}
                                    href={p.href}
                                    id={`podcast-platform-${p.name.toLowerCase().replace(' ', '-')}`}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-full glassmorphism text-white text-sm font-medium hover:scale-105 transition-transform group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <PlatformIcon name={p.name} color={p.color} />
                                    <span className="group-hover:text-white transition-colors">{p.name}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── About the Podcast ── */}
            <section className="section-padding bg-transparent">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glassmorphism rounded-3xl p-10 md:p-16 shadow-sm border border-white/10"
                    >
                        <h2 className="text-3xl font-bold font-heading text-gray-900 mb-8 text-center">About the Show</h2>
                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                            <p className="text-xl font-medium text-gray-900">
                                The Precision Pulse Podcast: Where science, technology, and everyday living converge through the lens of precision.
                            </p>
                            
                            <p>
                                Hosted by <strong className="text-gray-900">Amit K. Jain (AJ)</strong>, The Precision Pulse explores how precision-driven thinking is reshaping healthcare, human performance, and the way we live. Each episode bridges cutting edge innovation with practical, real world impact—making complex ideas accessible, relevant, and actionable.
                            </p>

                            <p>
                                Through conversations with global experts, innovators, clinicians, and thought leaders, the podcast dives into:
                            </p>
                            
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    'Breakthroughs in precision medicine, diagnostics, and AI enabled healthcare',
                                    'Emerging technologies transforming disease detection, treatment, and prevention',
                                    'The expanding role of data, real world evidence, and personalized care',
                                    'Practical strategies for mindset, physical health, and intentional living'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                                        <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2.5 shrink-0" />
                                        <span className="text-base font-medium leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p>
                                What sets The Precision Pulse apart is its holistic perspective. It doesn’t just decode scientific advances—it connects them to the small, precise habits that shape long term well being. Whether unpacking the future of diagnostics or exploring how micro behaviors influence performance, the podcast brings clarity to what truly matters.
                            </p>
                            
                            <p>
                                At its core, The Precision Pulse is about empowerment through precision—helping listeners make smarter decisions, adopt meaningful practices, and stay ahead in a rapidly evolving health and technology landscape.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── All Episodes Grid ── */}
            <section className="section-padding bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl font-bold font-heading text-gray-900 mb-3">Full Episodes</h2>
                        <p className="text-gray-600">In-depth conversations with industry leaders</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {episodes.map((ep, i) => (
                            <EpisodeCard key={ep.id} ep={ep} index={i} />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl font-bold font-heading text-gray-900 mb-3">Precision Pulse Shorts</h2>
                        <p className="text-gray-600">Quick insights and highlights from the show</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {shorts.map((short, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-navy rounded-2xl overflow-hidden aspect-[9/16] relative group"
                            >
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={`https://www.youtube.com/embed/${short.id}?modestbranding=1&rel=0`}
                                    title={short.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="text-white text-xs font-bold">{short.num}</div>
                                    <div className="text-white text-sm font-medium truncate">{short.title}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Appear on Podcast CTA ── */}
            <section className="py-20 px-6 bg-transparent">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center gradient-bg rounded-3xl p-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                    <div className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center mx-auto mb-4">
                        <Mail size={22} color="#00C2A8" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-white mb-3 relative z-10">
                        GET IN TOUCH FOR PODCAST
                    </h2>
                    <p className="text-white/70 mb-6 relative z-10">
                        Are you a Subject Matter Expert in a specific area of interest or would you like to
                        appear on our podcast? We'd love to hear from you.
                    </p>
                    <Link to="/contact" className="btn-primary inline-flex items-center gap-2 relative z-10">
                        Contact Us <Mail size={16} />
                    </Link>
                </motion.div>
            </section>
        </div>
    )
}
