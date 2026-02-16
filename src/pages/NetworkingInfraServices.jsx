import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Globe,
    Network,
    Zap,
    ExternalLink,
    ArrowRight,
    ChevronLeft,
    ShieldCheck,
    Cpu,
    Activity,
    BookOpen,
    Youtube,
    Play,
    Server,
    Layers,
    Share2,
    Lock,
    Webhook
} from 'lucide-react';
import { cn } from '../utils/cn';

const NetworkingInfraServices = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            title: "Load Balancing",
            desc: "Distributing incoming network traffic across multiple servers. Mastering L4 (Transport) vs L7 (Application) balancing.",
            icon: Share2,
            color: "magenta",
            features: ["Health Checks", "SSL Termination", "Sticky Sessions", "Round Robin"]
        },
        {
            title: "CDNs (Edge Computing)",
            desc: "Caching content at the 'Edge' to reduce latency. Delivering static and dynamic assets globally with millisecond speed.",
            icon: Zap,
            color: "pink",
            features: ["Edge Caching", "DDoS Protection", "WAF Integration", "Image Optimization"]
        },
        {
            title: "API Gateways",
            desc: "The entry point for specialized microservices. Handling cross-cutting concerns at the edge of your infrastructure.",
            icon: Webhook,
            color: "purple",
            features: ["Rate Limiting", "Authentication", "Request Routing", "Metrics Aggregation"]
        },
        {
            title: "DNS & Traffic Routing",
            desc: "Managing global service discovery. Using Latency, Geolocation, and Weighted routing policies.",
            icon: Globe,
            color: "indigo",
            features: ["Anycast DNS", "A/AAAA Records", "CNAME Flattening", "Failover Policies"]
        }
    ];

    const resources = [
        {
            title: "Technical Documentation",
            links: [
                { label: "NGINX Load Balancing Guide", url: "https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/", type: "Docs" },
                { label: "Cloudflare CDN Fundamentals", url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/", type: "Guide" },
                { label: "Kong API Gateway Docs", url: "https://docs.konghq.com/", type: "Technical" }
            ]
        },
        {
            title: "Masterclass Tutorials",
            links: [
                { label: "Networking for Developers (Hussein Nasser)", url: "https://www.youtube.com/@hnasr", type: "Expert" },
                { label: "Load Balancers Explained", url: "https://www.youtube.com/watch?v=K0Ta65OqQkY", type: "Video" },
                { label: "What is a CDN? (Computerphile)", url: "https://www.youtube.com/watch?v=KzYt0A3G24E", type: "Video" }
            ]
        }
    ];

    return (
        <div className="bg-[#0b0c10] min-h-screen text-slate-300 selection:bg-pink-500/30 font-sans pb-40 overflow-x-hidden">
            {/* --- HERO SECTION --- */}
            <section className="pt-40 pb-20 relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-600/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-[10px] font-black text-pink-400 uppercase tracking-[0.2em] mb-8">
                            <Network size={12} />
                            Module 13: Edge Infrastructure
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-8 leading-[0.9]">
                            Infra <span className="text-pink-500">Services.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed mb-12">
                            Optimizing the global delivery path. Master the <span className="text-white">traffic mechanics</span> that power high-availability, low-latency applications at the edge.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- MAIN CONTENT --- */}
            <section className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8 space-y-24">

                        {/* Technical Deep Dive */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {services.map((service, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="p-10 bg-white/[0.01] border border-white/5 rounded-[3rem] flex flex-col transition-all hover:bg-white/[0.03] hover:border-pink-500/20 group"
                                >
                                    <div className={cn(
                                        "w-16 h-16 rounded-3xl flex items-center justify-center mb-8 shadow-2xl transition-transform group-hover:scale-110",
                                        service.color === 'magenta' ? "bg-magenta-500/10 text-magenta-400" :
                                            service.color === 'pink' ? "bg-pink-500/10 text-pink-400" :
                                                service.color === 'purple' ? "bg-purple-500/10 text-purple-400" : "bg-indigo-500/10 text-indigo-400"
                                    )} style={{
                                        backgroundColor: i === 0 ? 'rgba(217, 70, 239, 0.1)' : i === 1 ? 'rgba(236, 72, 153, 0.1)' : i === 2 ? 'rgba(168, 85, 247, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                        color: i === 0 ? '#d946ef' : i === 1 ? '#ec4898' : i === 2 ? '#a855f7' : '#6366f1'
                                    }}>
                                        <service.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-4 italic tracking-tight">{service.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-8">{service.desc}</p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {service.features.map((feat, fIdx) => (
                                            <span key={fIdx} className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-white/5 text-slate-400 rounded-md border border-white/5">
                                                {feat}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Resource Hub */}
                        <div className="space-y-12">
                            <h2 className="text-3xl font-black text-white italic tracking-tight uppercase flex items-center gap-4">
                                <BookOpen size={28} className="text-pink-500" />
                                Engineering Resources
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {resources.map((section, i) => (
                                    <div key={i} className="p-8 bg-white/[0.01] border border-white/5 rounded-[3rem] space-y-6">
                                        <h4 className="text-lg font-black text-white italic tracking-tight flex items-center gap-3">
                                            {i === 0 ? <Server size={20} className="text-pink-500" /> : <Youtube size={20} className="text-rose-500" />}
                                            {section.title}
                                        </h4>
                                        <div className="space-y-3">
                                            {section.links.map((link, lIdx) => (
                                                <a
                                                    key={lIdx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl group hover:bg-white/10 hover:border-pink-500/20 transition-all font-mono"
                                                >
                                                    <span className="text-[11px] font-bold text-slate-400 group-hover:text-white transition-colors uppercase tracking-widest">{link.label}</span>
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-[8px] font-black uppercase tracking-widest text-slate-600">{link.type}</span>
                                                        <ExternalLink size={12} className="text-slate-700 group-hover:text-pink-500 transition-colors" />
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-10 bg-pink-500/[0.03] border border-pink-500/10 rounded-[3rem] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <ShieldCheck size={80} className="text-pink-500" />
                            </div>
                            <h3 className="text-2xl font-black text-white italic tracking-tighter mb-4">Zero Trust at the Edge</h3>
                            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
                                MODERN infrastructure assumes the network is hostile. Implementing <span className="text-white font-bold">mTLS</span>, <span className="text-white font-bold">WAF (Web Application Firewalls)</span>, and <span className="text-white font-bold">Identity-Aware Proxies</span> at your gateway layer ensures security before a request even touches your internal compute.
                            </p>
                        </div>
                    </div>

                    {/* --- SIDEBAR --- */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-40 space-y-8">
                            <div className="p-8 bg-pink-600/5 border border-pink-500/20 rounded-[2.5rem] backdrop-blur-xl">
                                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl mb-8">
                                    <p className="text-white font-black italic text-xs mb-3">Master Course</p>
                                    <a
                                        href="https://www.cloudflare.com/learning/network-layer/what-is-the-network-layer/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-4 bg-pink-600 text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-pink-500 transition-all shadow-lg shadow-pink-500/20"
                                    >
                                        Learn Here <ExternalLink size={12} />
                                    </a>
                                </div>

                                <h4 className="text-[10px] font-black text-pink-400 uppercase tracking-[0.2em] mb-6">Execution Phase</h4>
                                <div className="space-y-4 mb-10">
                                    {[
                                        { label: "Infrastructure as Code", path: "/curriculum/13", current: false },
                                        { label: "Config Management", path: "/curriculum/14", current: false },
                                        { label: "Networking & Infra", path: "/networking-infra-services", current: true },
                                        { label: "Monitoring & Logging", path: "/curriculum/16", current: false },
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-center gap-4 group cursor-pointer block">
                                            <div className={cn("w-1.5 h-1.5 rounded-full transition-all duration-300", step.current ? "bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,1)]" : "bg-slate-800 group-hover:bg-slate-600")} />
                                            {step.current ? (
                                                <span className="text-[11px] font-bold tracking-tight text-white">{step.label}</span>
                                            ) : (
                                                <Link to={step.path} className="text-[11px] font-bold tracking-tight text-slate-600 group-hover:text-slate-400 transition-colors uppercase tracking-widest">{step.label}</Link>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Link to="/roadmap" className="w-full h-14 bg-white/5 border border-white/5 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-white/10 transition-all font-mono">
                                        Roadmap Dashboard
                                    </Link>
                                </div>
                            </div>

                            <div className="p-8 border border-white/5 rounded-[2.5rem] bg-white/[0.01]">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-pink-500/10 text-pink-500 flex items-center justify-center shadow-inner">
                                        <Activity size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Global Status</p>
                                        <p className="text-white font-black italic">Edge Optimized</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NetworkingInfraServices;
