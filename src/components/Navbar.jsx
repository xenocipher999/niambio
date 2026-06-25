import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Rocket, BookOpen, Newspaper, Users, Mail, Laptop, HeartPulse, Mic } from 'lucide-react'

const navigation = [
    { label: 'Home', path: '/' },
    {
        label: 'Ecosystem',
        children: [
            { label: 'Strategic Consulting', path: '/consulting', desc: 'Strategic expert guidance', icon: Rocket },
            { label: 'Venture Studio', path: '/innovation', desc: 'Accelerate bio-tech', icon: HeartPulse },
            { label: 'Podcast', path: '/podcast', desc: 'Precision Pulse episodes', icon: Mic },
        ]
    },
    {
        label: 'Insights',
        children: [
            { label: 'Blog', path: '/blog', desc: 'Deep industry dives', icon: BookOpen },
            { label: 'Market Updates', path: '/news', desc: 'Latest sector news', icon: Newspaper },
            { label: 'Resources', path: '/resources', desc: 'Toolkits & Whitepapers', icon: Laptop },
        ]
    },
    { label: 'Team', path: '/team' },
    { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()

    const isHome = location.pathname === '/'
    const hasBg = !isHome || scrolled

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => { setMobileOpen(false); setActiveDropdown(null) }, [location.pathname])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${hasBg
                ? 'bg-navy/90 backdrop-blur-md shadow-lg border-b border-white/10'
                : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link to="/" className="flex items-center flex-shrink-0 group bg-white px-2 py-1 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                    <img
                        src="/niambio-logo.png"
                        alt="NIAMBIO Logo"
                        className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
                    />
                </Link>

                {/* Desktop nav */}
                <ul className="hidden lg:flex items-center gap-2">
                    {navigation.map((item) => (
                        <li
                            key={item.label}
                            className="relative group/nav"
                            onMouseEnter={() => setActiveDropdown(item.label)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            {item.children ? (
                                <>
                                    <button
                                        className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${activeDropdown === item.label ? 'text-teal' : 'text-white/70 hover:text-white'
                                            }`}
                                    >
                                        {item.label}
                                        <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {activeDropdown === item.label && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 8, scale: 0.97 }}
                                                transition={{ duration: 0.18 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 w-72 pt-3"
                                            >
                                                <div className="rounded-2xl shadow-2xl border border-white/10 overflow-hidden p-2 grid gap-1"
                                                    style={{ background: 'rgba(5, 15, 40, 0.97)', backdropFilter: 'blur(20px)' }}
                                                >
                                                    {item.children.map((child) => (
                                                        <NavLink
                                                            key={child.label}
                                                            to={child.path}
                                                            className={({ isActive }) =>
                                                                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group/item ${isActive ? 'bg-teal/10 text-teal' : 'hover:bg-white/8 text-white/80 hover:text-white'
                                                                }`
                                                            }
                                                        >
                                                            <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-teal group-hover/item:bg-teal group-hover/item:text-white transition-all duration-200 flex-shrink-0">
                                                                <child.icon size={18} />
                                                            </div>
                                                            <div>
                                                                <div className="text-sm font-semibold mb-0.5">{child.label}</div>
                                                                <div className="text-[11px] text-white/40 leading-tight">{child.desc}</div>
                                                            </div>
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </>
                            ) : (
                                <NavLink
                                    to={item.path}
                                    end={item.path === '/'}
                                    className={({ isActive }) =>
                                        `px-4 py-2 text-sm font-medium transition-colors relative block ${isActive ? 'text-teal' : 'text-white/70 hover:text-white'
                                        }`
                                    }
                                >
                                    {item.label}
                                    {location.pathname === item.path && (
                                        <motion.span
                                            layoutId="activeTab"
                                            className="absolute bottom-1 left-4 right-4 h-0.5 bg-teal rounded-full"
                                        />
                                    )}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="hidden lg:block">
                    <button
                        onClick={() => navigate('/contact')}
                        className="btn-primary text-sm"
                    >
                        Contact us
                    </button>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-navy/95 backdrop-blur-md border-t border-white/10 overflow-y-auto max-h-[90vh]"
                    >
                        <ul className="flex flex-col px-6 py-6 gap-2">
                            {navigation.map((item) => (
                                <li key={item.label} className="py-1">
                                    {item.children ? (
                                        <div className="space-y-2">
                                            <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest pl-1">{item.label}</div>
                                            <div className="grid gap-2">
                                                {item.children.map((child) => (
                                                    <NavLink
                                                        key={child.label}
                                                        to={child.path}
                                                        onClick={() => setMobileOpen(false)}
                                                        className={({ isActive }) =>
                                                            `flex items-center gap-3 p-3 rounded-xl transition-colors ${isActive ? 'bg-teal/10 text-teal' : 'text-white/70 hover:bg-white/5'
                                                            }`
                                                        }
                                                    >
                                                        <child.icon size={18} />
                                                        <span className="font-medium">{child.label}</span>
                                                    </NavLink>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <NavLink
                                            to={item.path}
                                            onClick={() => setMobileOpen(false)}
                                            className={({ isActive }) =>
                                                `block p-3 rounded-xl font-medium transition-colors ${isActive ? 'bg-teal/10 text-teal' : 'text-white/70 hover:bg-white/5'
                                                }`
                                            }
                                        >
                                            {item.label}
                                        </NavLink>
                                    )}
                                </li>
                            ))}
                            <li className="pt-4 border-t border-white/10 mt-2">
                                <button
                                    onClick={() => { navigate('/contact'); setMobileOpen(false) }}
                                    className="btn-primary text-sm w-full"
                                >
                                    Contact us
                                </button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
