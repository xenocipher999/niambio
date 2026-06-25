import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const footerLinks = {
    Company: [
        { label: 'Home', path: '/' },
        { label: 'Team', path: '/team' },
        { label: 'Contact', path: '/contact' },
    ],
    Services: [
        { label: 'Strategic Consulting', path: '/consulting' },
        { label: 'Podcast', path: '/podcast' },
        { label: 'Venture Studio', path: '/innovation' },
    ],
    Media: [
        { label: 'Blog', path: '/blog' },
        { label: 'Market Updates', path: '/news' },
        { label: 'Resources', path: '/resources' },
        { label: 'Podcast Episodes', path: '/podcast' },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-navy text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-8">
                {/* Top */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center mb-6 group w-fit bg-white px-2 py-1 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                            <img
                                src="/niambio-logo.png"
                                alt="NIAMBIO Logo"
                                className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
                            />
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-5">
                            Empowering life sciences innovators with expert guidance across every stage — from R&D through global commercial launch.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { s: 'LI', href: '#', bg: '#0077B5' },
                                { s: 'TW', href: '#', bg: '#1DA1F2' },
                                { s: 'YT', href: 'https://www.youtube.com/@Precision_Pulse_with_Amit', bg: '#FF0000' },
                            ].map(({ s, href, bg }) => (
                                <a
                                    key={s}
                                    href={href}
                                    id={`footer-social-${s.toLowerCase()}`}
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:brightness-110"
                                    style={{ backgroundColor: bg }}
                                >
                                    {s}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-sm font-semibold font-heading mb-4 text-white/80 uppercase tracking-wider">
                                {category}
                            </h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <NavLink
                                            to={link.path}
                                            id={`footer-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                                            className={({ isActive }) =>
                                                `text-sm transition-colors ${isActive ? 'text-teal' : 'text-white/40 hover:text-teal'}`
                                            }
                                        >
                                            {link.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mb-6" />

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-sm">
                    <p>© 2025 NIAMBIO LLC – All Rights Reserved</p>
                    <p className="gradient-text font-medium text-sm">Life Sciences Innovation Platform</p>
                </div>
            </div>
        </footer>
    )
}
