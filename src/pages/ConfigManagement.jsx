import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Settings,
    Terminal,
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
    FileCode,
    Users,
    Key
} from 'lucide-react';
import { cn } from '../utils/cn';

const ConfigManagement = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const ansibleConcepts = [
        {
            title: "Playbooks (YAML)",
            desc: "The instruction manual for your servers. Human-readable automation that defines the desired state of your infrastructure.",
            icon: FileCode,
            color: "orange",
            topics: ["YAML Syntax", "Tasks", "Handlers", "Variables"]
        },
        {
            title: "Inventory & Modules",
            desc: "Managing your fleet. Directing Ansible to specific hosts and using built-in modules for thousands of tasks.",
            icon: Users,
            color: "red",
            topics: ["Static/Dynamic Inventory", "Core Modules", "Ad-hoc Commands"]
        },
        {
            title: "Roles & Collections",
            desc: "Scaling your automation. Organizing playbooks into reusable components for complex, enterprise-grade deployments.",
            icon: Layers,
            color: "amber",
            topics: ["Ansible Galaxy", "Role Structure", "Modular Design"]
        },
        {
            title: "Security & Vault",
            desc: "Protecting sensitive data. Encrypting passwords, keys, and secrets within your automation workflows.",
            icon: Key,
            color: "orange",
            topics: ["Ansible Vault", "SSH Keys", "Stateless Execution"]
        }
    ];

    const resources = [
        {
            title: "Official Documentation",
            links: [
                { label: "Ansible Documentation", url: "https://docs.ansible.com/ansible/latest/index.html", type: "Docs" },
                { label: "Ansible Getting Started", url: "https://docs.ansible.com/ansible/latest/getting_started/index.html", type: "Guide" },
                { label: "Ansible Galaxy", url: "https://galaxy.ansible.com/", type: "Registry" }
            ]
        },
        {
            title: "YouTube Masterclasses",
            links: [
                { label: "Ansible 101 (Jeff Geerling)", url: "https://www.youtube.com/playlist?list=PL2_OBreMn7FqZkvW01PqrSpreN9vKnba6", type: "Expert" },
                { label: "Ansible Tutorial for Beginners (TechWorld with Nana)", url: "https://www.youtube.com/watch?v=1id6er7_SIs", type: "Video" },
                { label: "Ansible in 100 Seconds", url: "https://www.youtube.com/watch?v=EcnqJbxBcM0", type: "Brief" }
            ]
        }
    ];

    return (
        <div className="bg-[#0b0c10] min-h-screen text-slate-300 selection:bg-orange-500/30 font-sans pb-40 overflow-x-hidden">
            {/* --- HERO SECTION --- */}
            <section className="pt-40 pb-20 relative">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-black text-orange-400 uppercase tracking-[0.2em] mb-8">
                            <Settings size={12} />
                            Module 14: Server Automation
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-8 leading-[0.9]">
                            Config <span className="text-orange-500">Management.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed mb-12">
                            The power of <span className="text-white font-bold italic text-orange-400">Ansible</span>. Automate server configuration, application deployment, and orchestration with agentless simplicity.
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
                            {ansibleConcepts.map((concept, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="p-10 bg-white/[0.01] border border-white/5 rounded-[3rem] flex flex-col transition-all hover:bg-white/[0.03] hover:border-orange-500/20 group"
                                >
                                    <div className={cn(
                                        "w-16 h-16 rounded-3xl flex items-center justify-center mb-8 shadow-2xl transition-transform group-hover:scale-110",
                                        "bg-orange-500/10 text-orange-400"
                                    )}>
                                        <concept.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-4 italic tracking-tight">{concept.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-8">{concept.desc}</p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {concept.topics.map((topic, tIdx) => (
                                            <span key={tIdx} className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-white/5 text-slate-400 rounded-md border border-white/5">
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Resource Hub */}
                        <div className="space-y-12">
                            <h2 className="text-3xl font-black text-white italic tracking-tight uppercase flex items-center gap-4">
                                <BookOpen size={28} className="text-orange-500" />
                                Ansible Hub
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {resources.map((section, i) => (
                                    <div key={i} className="p-8 bg-white/[0.01] border border-white/5 rounded-[3rem] space-y-6">
                                        <h4 className="text-lg font-black text-white italic tracking-tight flex items-center gap-3">
                                            {i === 0 ? <Server size={20} className="text-orange-500" /> : <Youtube size={20} className="text-rose-500" />}
                                            {section.title}
                                        </h4>
                                        <div className="space-y-3">
                                            {section.links.map((link, lIdx) => (
                                                <a
                                                    key={lIdx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl group hover:bg-white/10 hover:border-orange-500/20 transition-all font-mono"
                                                >
                                                    <span className="text-[11px] font-bold text-slate-400 group-hover:text-white transition-colors uppercase tracking-widest">{link.label}</span>
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-[8px] font-black uppercase tracking-widest text-slate-600">{link.type}</span>
                                                        <ExternalLink size={12} className="text-slate-700 group-hover:text-orange-500 transition-colors" />
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-10 bg-orange-500/[0.03] border border-orange-500/10 rounded-[3rem] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <ShieldCheck size={80} className="text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-black text-white italic tracking-tighter mb-4">Idempotency & Agentless</h3>
                            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
                                Ansible is <span className="text-white">agentless</span>—it works over standard SSH. Its most powerful feature is <span className="text-white font-bold">Idempotency</span>: running a playbook multiple times results in the same state without making unnecessary changes, ensuring server consistency across your hardware fleet.
                            </p>
                        </div>
                    </div>

                    {/* --- SIDEBAR --- */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-40 space-y-8">
                            <div className="p-8 bg-orange-600/5 border border-orange-500/20 rounded-[2.5rem] backdrop-blur-xl">
                                <h4 className="text-[10px] font-black text-orange-400 uppercase tracking-[0.2em] mb-6">Learning Path</h4>
                                <div className="space-y-4 mb-10">
                                    {[
                                        { label: "Networking & Infra", path: "/networking-infra-services", current: false },
                                        { label: "Config Management", path: "/config-management", current: true },
                                        { label: "Infrastructure as Code", path: "/curriculum/15", current: false },
                                    ].map((step, i) => (
                                        <Link to={step.path} key={i} className="flex items-center gap-4 group cursor-pointer block">
                                            <div className={cn("w-1.5 h-1.5 rounded-full transition-all duration-300", step.current ? "bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,1)]" : "bg-slate-800 group-hover:bg-slate-600")} />
                                            <span className={cn("text-[11px] font-bold tracking-tight transition-colors", step.current ? "text-white" : "text-slate-600 group-hover:text-slate-400")}>{step.label}</span>
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Link to="/networking-infra-services" className="w-full h-14 bg-white/5 border border-white/5 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-white/10 transition-all">
                                        <ChevronLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Previous
                                    </Link>
                                    <Link to="/roadmap" className="w-full h-14 bg-orange-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-orange-500 transition-all shadow-xl shadow-orange-500/20">
                                        Back to Roadmap <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            <div className="p-8 border border-white/5 rounded-[2.5rem] bg-white/[0.01]">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-400 flex items-center justify-center shadow-inner">
                                        <Activity size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Execution Mode</p>
                                        <p className="text-white font-black italic">Stateless / Active</p>
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

export default ConfigManagement;
