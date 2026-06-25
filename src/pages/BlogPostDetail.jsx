import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft, Share2, MessageCircle } from 'lucide-react'

const blogPosts = [
    {
        id: 1,
        slug: "future-of-diagnostics-2026",
        title: "The Future of Diagnostics in 2026",
        content: `
            <p>Artificial Intelligence (AI) and nanotechnology are not just buzzwords; they are the dual engines driving a profound transformation in how we detect and treat diseases. As we navigate through 2026, the diagnostic landscape is being reshaped by these technologies, moving us closer to a future of truly personalized and preventative medicine.</p>
            
            <h3>The Rise of Nano-Sensors</h3>
            <p>One of the most exciting developments is the commercialization of gold-nanoparticle sensors capable of detecting single-molecule biomarkers for early-stage oncology. These sensors, often integrated into wearable patches or handheld devices, provide clinical-grade data without the need for invasive biopsies.</p>
            
            <h3>AI: From Data to Insight</h3>
            <p>But data alone is not enough. Deep learning models are now being used to analyze these massive diagnostic datasets in real-time. By comparing an individual's molecular profile against millions of historical records, AI can predict disease progression with over 98% accuracy weeks before symptoms manifest.</p>
            
            <blockquote>
                "The shift from symptomatic treatment to molecular prevention is the single greatest achievement of 21st-century medicine."
            </blockquote>
            
            <h3>Global Implications</h3>
            <p>For market access leaders, these innovations represent both a challenge and an opportunity. Decentralized diagnostics mean that high-quality healthcare can finally reach underserved regions, provided that the regulatory and supply chain infrastructures are robust enough to support them.</p>
        `,
        author: "Dr. Sarah Chen",
        date: "March 28, 2026",
        category: "Diagnostics",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
        authorImage: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 2,
        slug: "supply-chain-resilience-life-sciences",
        title: "Global Supply Chain Resilience in Life Sciences",
        content: `
            <p>The global life sciences industry has learned hard lessons about the fragility of supply chains. In 2026, the focus has shifted from "just-in-time" to "just-in-case," with resilience becoming the primary metric of success for logistics leaders.</p>
            
            <h3>Digital Twins and Predictive Logistics</h3>
            <p>Modern supply chains now utilize "Digital Twins"—virtual replicas of the entire physical supply network. These twins allow companies to simulate disruptions—such as geopolitical shifts or extreme weather events—and automatically adjust procurement strategies before a crisis hits.</p>
            
            <h3>The Growth of Regional Hubs</h3>
            <p>We are also seeing a significant move toward "regionalization." By establishing manufacturing and distribution hubs closer to end-markets in APAC and EMEA, companies are reducing carbon footprints and bypassing the bottlenecks of traditional global trade routes.</p>
        `,
        author: "Marcus Thorne",
        date: "March 15, 2026",
        category: "Supply Chain",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 3,
        slug: "digital-transformation-biotech",
        title: "Digital Transformation: A New Era for Biotech",
        content: `
            <p>Digital transformation in biotech is no longer about moving papers to PDF. It's about fundamental architectural changes in how research is conducted and how products are brought to market.</p>
            
            <h3>In-Silico Clinical Trials</h3>
            <p>One of the most revolutionary shifts is the use of in-silico (simulated) clinical trials. By using high-fidelity digital representations of human physiology, researchers can test drug toxicity and efficacy in thousands of diverse "virtual patients" before a single human subject is enrolled.</p>
            
            <h3>Collaborative Clouds</h3>
            <p>Data silos are finally crumbling. Global networks like Niambio's Expert Marketplace are using secure cloud environments to share real-time R&D data across borders, accelerating the time-to-market for life-saving therapeutics by up to 40%.</p>
        `,
        author: "Elena Rodriguez",
        date: "March 10, 2026",
        category: "Digital Transformation",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
        authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    }
]

export default function BlogPostDetail() {
    const { slug } = useParams()
    const post = blogPosts.find(p => p.slug === slug)

    if (!post) {
        return (
            <div className="pt-44 pb-24 text-center">
                <h2 className="text-3xl font-bold mb-4">Post Not Found</h2>
                <Link to="/blog" className="text-teal font-bold hover:underline">Back to Blog</Link>
            </div>
        )
    }

    return (
        <article className="bg-navy min-h-screen">
            {/* Header / Hero */}
            <section className="pt-44 pb-20 px-6 md:px-12 lg:px-20 gradient-bg relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-teal mb-8 transition-colors group">
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Insights
                        </Link>
                        <span className="inline-block px-3 py-1 rounded-md glassmorphism text-teal text-xs font-bold uppercase tracking-wider mb-6">
                            {post.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-8 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-8">
                            <div className="flex items-center gap-3">
                                <img src={post.authorImage} alt={post.author} className="w-12 h-12 rounded-full border-2 border-teal/30 object-cover" />
                                <div>
                                    <div className="text-white font-bold">{post.author}</div>
                                    <div className="text-white/50 text-xs">Subject Matter Expert</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 text-white/50 text-sm border-l border-white/10 pl-8">
                                <span className="flex items-center gap-2"><Calendar size={16} className="text-teal" /> {post.date}</span>
                                <span className="flex items-center gap-2 font-semibold text-teal">8 min read</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-4xl mx-auto">
                    <img src={post.image} alt={post.title} className="w-full h-[500px] object-cover rounded-[2.5rem] mb-16 shadow-2xl" />
                    
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Body Text */}
                        <div className="flex-1 blog-content prose prose-lg prose-teal">
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                            <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
                                <div className="flex gap-4">
                                    <button className="flex items-center gap-2 text-white/40 hover:text-teal transition-colors font-bold text-sm">
                                        <Share2 size={18} /> Share
                                    </button>
                                    <button className="flex items-center gap-2 text-white/40 hover:text-teal transition-colors font-bold text-sm">
                                        <MessageCircle size={18} /> Comment
                                    </button>
                                </div>
                                <div className="flex gap-2">
                                    {["Nanotech", "HealthTech", "2026"].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-white/40 uppercase tracking-widest leading-none">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sticky Sidebar */}
                        <aside className="w-full lg:w-72">
                            <div className="sticky top-32 space-y-10">
                                <div className="glassmorphism rounded-3xl p-8 border border-white/10 text-center">
                                    <h4 className="text-white font-bold mb-4">About the Author</h4>
                                    <img src={post.authorImage} alt={post.author} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
                                    <p className="text-white/70 text-sm mb-6 leading-relaxed">
                                        Dr. Chen is a senior advisor at Niambio with over 15 years of experience in clinical molecular diagnostics.
                                    </p>
                                    <button className="text-teal font-bold text-sm hover:underline">View Profile</button>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-white font-bold px-2">Related Articles</h4>
                                    {blogPosts.filter(p => p.slug !== slug).map(rel => (
                                        <Link key={rel.slug} to={`/blog/${rel.slug}`} className="block p-4 rounded-2xl hover:bg-white/5 transition-colors group">
                                            <div className="text-[10px] text-teal font-bold uppercase tracking-widest mb-1">{rel.category}</div>
                                            <h5 className="text-sm font-bold text-white group-hover:text-teal transition-colors line-clamp-2">{rel.title}</h5>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </article>
    )
}
