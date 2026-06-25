import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Quote, Linkedin, Twitter, ArrowRight, GraduationCap, Award, Briefcase, Globe, Target } from 'lucide-react'

export default function TeamPage() {
    return (
        <>
            <section className="pt-44 pb-24 px-6 md:px-12 lg:px-20 gradient-bg relative overflow-hidden min-h-[55vh] flex flex-col justify-center">
                <div className="absolute top-10 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full glassmorphism text-teal text-sm font-semibold mb-5">
                            Leadership
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-5 leading-tight">
                            Meet the <span className="gradient-text">Team</span>
                        </h1>
                        <p className="text-white/70 text-xl max-w-2xl leading-relaxed">
                            Driven by a passion for precision and a commitment to advancing life sciences innovation globally.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding bg-transparent overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.7 }}
                        className="sticky top-32"
                    >
                        <div className="relative w-full max-w-[440px] mx-auto lg:mx-0">
                            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative shadow-2xl border-8 border-white/5">
                                <img
                                    src="/ceo-amit-jain.jpg"
                                    alt="Amit K. Jain – Founder & President, NIAMBIO"
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                                <div className="absolute bottom-10 left-10 right-10">
                                    <div className="text-white font-bold text-3xl font-heading mb-1">Amit K. Jain, MBA</div>
                                    <div className="text-teal text-base font-semibold tracking-widest uppercase">Founder & President</div>
                                    <div className="text-white/50 text-xs mt-2 uppercase tracking-widest font-bold">Boston, USA</div>
                                </div>
                            </div>

                            <motion.div
                                animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-10 -right-10 glassmorphism rounded-3xl p-6 shadow-2xl border border-teal/20 hidden md:block"
                            >
                                <div className="text-gray-900 font-bold text-3xl font-heading mb-1">25+</div>
                                <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">Years of Global<br />Experience</div>
                            </motion.div>
                        </div>

                        <div className="mt-16">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Academic Background</h3>
                            <div className="grid grid-cols-1 gap-4 max-w-[440px]">
                                <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-teal/5 flex items-center justify-center text-teal shrink-0">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div>
                                        <div className="text-gray-900 font-bold text-sm">MBA</div>
                                        <div className="text-gray-500 text-[11px]">Babson College, Massachusetts, USA</div>
                                    </div>
                                </div>
                                <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-teal/5 flex items-center justify-center text-teal shrink-0">
                                        <Award size={24} />
                                    </div>
                                    <div>
                                        <div className="text-gray-900 font-bold text-sm">M.Sc. Genetics</div>
                                        <div className="text-gray-500 text-[11px]">Haryana Agricultural University, India</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-10"
                    >
                        <div>
                            <div className="flex items-start gap-3 mb-8">
                                <Quote size={48} color="#00C2A8" className="shrink-0 rotate-180 opacity-60" />
                            </div>
                            <blockquote className="text-2xl md:text-3xl font-bold font-heading text-gray-900 leading-tight mb-10">
                                At NIAMBIO, our mission is "Empowering life sciences innovation through data-driven diagnostics development, commercialization, and patient access"
                            </blockquote>
                        </div>

                        <div className="text-gray-900 mb-6">
                            <h1 className="text-3xl md:text-4xl font-extrabold font-heading mb-2">Amit K. Jain, MBA</h1>
                            <p className="text-teal font-bold text-lg">Founder & President (Boston)</p>
                        </div>

                        <div className="text-gray-700 space-y-6 text-[16px] leading-relaxed">
                            <ul className="space-y-6">
                                <li className="flex gap-4 group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2.5 shrink-0 group-hover:scale-150 transition-transform" />
                                    <span>Amit Jain brings over <strong>25 years of global experience</strong> in in vitro diagnostic (IVD) development and commercialization, with a strong track record across oncology, infectious diseases, general medicine, and digital health. His career spans leadership roles in R&D, program management, business and corporate development, and strategic consulting.</span>
                                </li>
                                <li className="flex gap-4 group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2.5 shrink-0 group-hover:scale-150 transition-transform" />
                                    <span>Most recently, Amit served as a senior leader in the Precision Medicine Practice at <strong>Veranex</strong>, where he played dual roles as Business Development Lead and Subject Matter Expert (SME). In this capacity, he supported biopharma, diagnostics, and digital health clients in market research, capability building, and Rx/Dx strategy development, guiding projects from early-stage innovation through commercialization.</span>
                                </li>
                                <li className="flex gap-4 group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2.5 shrink-0 group-hover:scale-150 transition-transform" />
                                    <span>Prior to Veranex, Amit was <strong>Managing Director at Diaceutics</strong>, leading corporate and business development initiatives while managing client engagement and delivery. Earlier, at <strong>Leica Biosystems</strong>, he directed companion diagnostics (CDx) development programs and led regulatory submission strategies for global markets.</span>
                                </li>
                                <li className="flex gap-4 group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2.5 shrink-0 group-hover:scale-150 transition-transform" />
                                    <span>At <strong>Immunetics</strong>, Amit headed Molecular Diagnostics programs for infectious diseases, successfully advancing IVD tests from concept to commercial launch in areas such as multi drug resistant bacteria, invasive fungal infections, and parasite identification.</span>
                                </li>
                                <li className="flex gap-4 group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2.5 shrink-0 group-hover:scale-150 transition-transform" />
                                    <span>Earlier in his career, Amit held client-facing technical consulting and application development roles with increasing responsibility at <strong>Febit</strong> and <strong>Kamtek Inc.</strong></span>
                                </li>
                            </ul>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                    <div className="text-teal font-bold text-xs uppercase tracking-widest mb-3">Core Expertise</div>
                                    <div className="flex flex-wrap gap-2">
                                        {['Rx/Dx Strategy', 'Market Access', 'IVD Development', 'Commercial Readiness', 'Regulatory Affairs'].map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-[11px] font-bold text-gray-600">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                    <div className="text-teal font-bold text-xs uppercase tracking-widest mb-3">Therapeutic Areas</div>
                                    <div className="flex flex-wrap gap-2">
                                        {['Oncology', 'Infectious Diseases', 'General Medicine', 'Digital Health'].map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-[11px] font-bold text-gray-600">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 mt-10 border-t border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="space-y-1">
                                    <div className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">Global Headquarters</div>
                                    <div className="text-gray-900 font-bold text-sm">Boston, Massachusetts, USA</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <a href="https://www.linkedin.com/in/amitkjain/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-[#0077B5] flex items-center justify-center shadow-lg hover:shadow-[#0077B5]/40 transition-all hover:-translate-y-1">
                                        <Linkedin size={18} color="#ffffff" />
                                    </a>
                                    <a href="#" className="w-11 h-11 rounded-xl bg-[#1DA1F2] flex items-center justify-center shadow-lg hover:shadow-[#1DA1F2]/40 transition-all hover:-translate-y-1">
                                        <Twitter size={18} color="#ffffff" />
                                    </a>
                                    <Link to="/contact" className="btn-primary h-11 px-6 text-sm flex items-center">
                                        Contact Amit
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 bg-transparent relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} className="max-w-4xl mx-auto text-center relative z-10"
                >
                    <span className="text-teal font-bold text-xs uppercase tracking-widest mb-4 inline-block">Collaborate</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">Join Our Expert Network</h2>
                    <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
                        Are you a subject matter expert in life sciences, diagnostics, or biotech? We're always
                        looking to grow our network of exceptional professionals.
                    </p>
                    <Link to="/contact" className="btn-primary py-4 px-12 text-lg inline-flex items-center gap-2">
                        Get In Touch <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </section>
        </>
    )
}
