import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Network,
    Globe,
    Zap,
    ExternalLink,
    ArrowRight,
    ChevronLeft,
    ShieldCheck,
    Cpu,
    Server,
    Activity,
    BookOpen,
    Wifi,
    Lock,
    Radio,
    Link as LinkIcon
} from 'lucide-react';
import { cn } from '../utils/cn';

const NetworkingConcepts = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const networkingModules = [
        {
            title: "OSI & TCP/IP Models",
            desc: "Understanding how data travels through layers, from physical electrical signals to application-level protocols.",
            icon: Radio,
            color: "blue",
            topics: ["Physical", "Data Link", "Network", "Transport", "Application"]
        },
        {
            title: "IP Addressing & Subnetting",
            desc: "Mastering IPv4/IPv6, CIDR notation, and how to divide large networks into efficient, logical segments.",
            icon: Globe,
            color: "sky",
            topics: ["Public vs Private", "CIDR", "Subnet Masks", "DHCP"]
        },
        {
            title: "DNS & Domain Management",
            desc: "The phonebook of the internet. Understanding A-records, CNAMEs, propagation, and resolver mechanics.",
            icon: LinkIcon,
            color: "indigo",
            topics: ["Records", "TTL", "Propagation", "Root Servers"]
        },
        {
            title: "Protocols (HTTP/S, SSH, FTP)",
            desc: "The languages of the web. Deep dive into request/response cycles, handshakes, and port management.",
            icon: Activity,
            color: "cyan",
            topics: ["HTTP/2", "TLS Handshake", "TCP vs UDP", "Ports"]
        },
        {
            title: "Load Balancers & Proxies",
            desc: "Distributing traffic at scale. Understanding Reverse Proxies, Layer 4 vs Layer 7 load balancing.",
            icon: Server,
            color: "violet",
            topics: ["Nginx", "HAProxy", "Round Robin", "Sticky Sessions"]
        },
        {
            title: "Firewalls & Network Security",
            desc: "Securing the perimeter. Mastering VPCs, Security Groups, Access Control Lists (ACLs), and VPNs.",
            icon: Lock,
            color: "rose",
            topics: ["VPC", "NACLs", "VPN", "SSL/TLS"]
        }
    ];

    return (
        <div className="bg-[#0b0c10] min-h-screen text-slate-300 selection:bg-blue-500/30 font-sans pb-40 overflow-x-hidden">
            {/* --- NETWORK HERO --- */}
            <section className="pt-40 pb-20 relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-8">
                            <Wifi size={12} />
                            Module 06: Network Architecture
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-8 leading-[0.9]">
                            Networking <span className="text-blue-500">Concepts.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed mb-12">
                            How systems communicate at scale. Master the protocols and traffic mechanics that power the <span className="text-white">Global Infrastructure</span> of the modern web.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- MAIN CONTENT --- */}
            <section className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8 space-y-24">

                        {/* Technical Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {networkingModules.map((module, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="p-8 bg-white/[0.01] border border-white/5 rounded-[2.5rem] flex flex-col transition-all hover:bg-white/[0.03] hover:border-blue-500/20"
                                >
                                    <div className={cn(
                                        "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-xl",
                                        `bg-${module.color}-500/10 text-${module.color}-400`
                                    )} style={{
                                        backgroundColor: i === 0 ? 'rgba(59, 130, 246, 0.1)' : i === 1 ? 'rgba(14, 165, 233, 0.1)' : i === 2 ? 'rgba(99, 102, 241, 0.1)' : i === 3 ? 'rgba(6, 182, 212, 0.1)' : i === 4 ? 'rgba(139, 92, 246, 0.1)' : 'rgba(244, 63, 94, 0.1)',
                                        color: i === 0 ? '#60a5fa' : i === 1 ? '#38bdf8' : i === 2 ? '#818cf8' : i === 3 ? '#22d3ee' : i === 4 ? '#a78bfa' : '#fb7185'
                                    }}>
                                        <module.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-4 italic tracking-tight">{module.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-8">{module.desc}</p>

                                    <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                                        {module.topics.map((topic, tIdx) => (
                                            <span key={tIdx} className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 bg-white/5 text-slate-400 rounded-md border border-white/5">
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Interactive Insight */}
                        <div className="p-10 bg-blue-500/[0.03] border border-blue-500/10 rounded-[3rem] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Zap size={80} className="text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-black text-white italic tracking-tighter mb-6 uppercase flex items-center gap-3">
                                <Activity size={20} className="text-blue-500" />
                                Fundamental Bridge
                            </h3>
                            <p className="text-base text-slate-400 leading-relaxed">
                                DevOps engineers are the bridge between application logic and physical traffic. Understanding <span className="text-white font-bold">Latency</span>, <span className="text-white font-bold">Bandwidth</span>, and <span className="text-white font-bold">TCP Congestion Control</span> is critical when scaling systems to millions of users.
                            </p>
                        </div>

                        <p className="text-xl text-slate-400 leading-relaxed font-medium pb-20 border-b border-white/5">
                            Modern infrastructure is <span className="text-white">Software Defined Networking (SDN)</span>. Your ability to configure and troubleshoot virtual networks will be the backbone of your cloud expertise.
                        </p>
                    </div>

                    {/* --- SIDEBAR --- */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-40 space-y-8">
                            <div className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-[2.5rem] backdrop-blur-xl">
                                <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-6">Learning Path</h4>
                                <div className="space-y-4 mb-10">
                                    {[
                                        { label: "Linux Fundamentals", path: "/linux-fundamentals", current: false },
                                        { label: "Networking Concepts", path: "/networking-concepts", current: true },
                                        { label: "Version Control (Git)", path: "/curriculum/7", current: false },
                                    ].map((step, i) => (
                                        <Link to={step.path} key={i} className="flex items-center gap-4 group cursor-pointer block">
                                            <div className={cn("w-1.5 h-1.5 rounded-full transition-all duration-300", step.current ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]" : "bg-slate-800 group-hover:bg-slate-600")} />
                                            <span className={cn("text-[11px] font-bold tracking-tight transition-colors", step.current ? "text-white" : "text-slate-600 group-hover:text-slate-400")}>{step.label}</span>
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl mb-4">
                                        <p className="text-white font-black italic text-xs mb-3">Master Course</p>
                                        <a
                                            href="https://www.geeksforgeeks.org/computer-networks/basics-computer-networking/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-3 bg-blue-500 text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-blue-400 transition-all shadow-lg shadow-blue-500/20"
                                        >
                                            GFG Networking <ExternalLink size={12} />
                                        </a>
                                    </div>
                                    <Link to="/linux-fundamentals" className="w-full h-14 bg-white/5 border border-white/5 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-white/10 transition-all">
                                        <ChevronLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Previous
                                    </Link>
                                    <Link to="/roadmap" className="w-full h-14 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-blue-500 transition-all">
                                        Back to Roadmap <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            <div className="p-8 border border-white/5 rounded-[2.5rem] bg-white/[0.01]">
                                <div className="flex items-center gap-4 text-xs">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center shadow-inner">
                                        <BookOpen size={28} />
                                    </div>
                                    <div>
                                        <p className="text-white font-black italic">Verified Guide</p>
                                        <p className="text-slate-500 font-bold">Standard 2026 Edition</p>
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

export default NetworkingConcepts;
