import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FileCode2,
    Box,
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
    Database,
    Cloud,
    GitBranch,
    RefreshCw
} from 'lucide-react';
import { cn } from '../utils/cn';

const InfrastructureAsCode = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const terraformCoreConcepts = [
        {
            title: "HCL (HashiCorp Config Language)",
            desc: "The declarative language of the cloud. Define what you want, and let Terraform handle the 'how' through resource graphing.",
            icon: FileCode2,
            color: "violet",
            topics: ["Variables", "Output Values", "Local Values", "HCL Syntax"]
        },
        {
            title: "State Management",
            desc: "The single source of truth. Terraform tracks your infrastructure state to determine necessary changes and ensure parity.",
            icon: Database,
            color: "indigo",
            topics: ["terraform.tfstate", "Remote State", "State Locking", "Workspaces"]
        },
        {
            title: "Providers & Modules",
            desc: "The building blocks of IaC. Connect to any API (AWS, Azure, SaaS) and build reusable infrastructure components.",
            icon: Layers,
            color: "purple",
            topics: ["Terraform Registry", "Resource Blocks", "Child Modules", "Versioning"]
        },
        {
            title: "Execution Lifecycle",
            desc: "The safe path to production. Predicting changes before they happen to avoid catastrophic infrastructure drift.",
            icon: RefreshCw,
            color: "violet",
            topics: ["TF Plan", "TF Apply", "TF Destroy", "Drift Detection"]
        }
    ];

    const resources = [
        {
            title: "Official Knowledge",
            links: [
                { label: "Terraform Documentation", url: "https://developer.hashicorp.com/terraform/docs", type: "Docs" },
                { label: "Terraform Registry", url: "https://registry.terraform.io/", type: "Registry" },
                { label: "HCL Style Guide", url: "https://developer.hashicorp.com/terraform/language/style", type: "Style" }
            ]
        },
        {
            title: "Top Tutorials",
            links: [
                { label: "Terraform Course - 2026 Edition", url: "https://www.youtube.com/watch?v=7xngnjfIlK8", type: "Video" },
                { label: "Terraform in 12 Minutes", url: "https://www.youtube.com/watch?v=l5k1ai_ubfU", type: "Video" },
                { label: "Infrastructure as Code Explained", url: "https://www.youtube.com/watch?v=v_U_j_vXfX8", type: "Concept" }
            ]
        }
    ];

    return (
        <div className="bg-[#0b0c10] min-h-screen text-slate-300 selection:bg-violet-500/30 font-sans pb-40 overflow-x-hidden">
            {/* --- HERO SECTION --- */}
            <section className="pt-40 pb-20 relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-[10px] font-black text-violet-400 uppercase tracking-[0.2em] mb-8">
                            <Box size={12} />
                            Module 15: Declarative Provisioning
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-8 leading-[0.9]">
                            Infras. as <span className="text-violet-500">Code.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed mb-12">
                            Stop clicking, start <span className="text-white font-bold italic text-violet-400">coding</span>. Provision, version, and manage your entire cloud ecosystem using <span className="text-white">Terraform</span> and Immutable Infrastructure patterns.
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
                            {terraformCoreConcepts.map((concept, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="p-10 bg-white/[0.01] border border-white/5 rounded-[3rem] flex flex-col transition-all hover:bg-white/[0.03] hover:border-violet-500/20 group"
                                >
                                    <div className={cn(
                                        "w-16 h-16 rounded-3xl flex items-center justify-center mb-8 shadow-2xl transition-transform group-hover:scale-110",
                                        concept.color === 'violet' ? "bg-violet-500/10 text-violet-400" :
                                            concept.color === 'indigo' ? "bg-indigo-500/10 text-indigo-400" : "bg-purple-500/10 text-purple-400"
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
                                <BookOpen size={28} className="text-violet-500" />
                                IaC Resource Hub
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {resources.map((section, i) => (
                                    <div key={i} className="p-8 bg-white/[0.01] border border-white/5 rounded-[3rem] space-y-6">
                                        <h4 className="text-lg font-black text-white italic tracking-tight flex items-center gap-3">
                                            {i === 0 ? <Cloud size={20} className="text-violet-500" /> : <Youtube size={20} className="text-rose-500" />}
                                            {section.title}
                                        </h4>
                                        <div className="space-y-3">
                                            {section.links.map((link, lIdx) => (
                                                <a
                                                    key={lIdx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl group hover:bg-white/10 hover:border-violet-500/20 transition-all font-mono"
                                                >
                                                    <span className="text-[11px] font-bold text-slate-400 group-hover:text-white transition-colors uppercase tracking-widest">{link.label}</span>
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-[8px] font-black uppercase tracking-widest text-slate-600">{link.type}</span>
                                                        <ExternalLink size={12} className="text-slate-700 group-hover:text-violet-500 transition-colors" />
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-10 bg-violet-500/[0.03] border border-violet-500/10 rounded-[3rem] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <ShieldCheck size={80} className="text-violet-500" />
                            </div>
                            <h3 className="text-2xl font-black text-white italic tracking-tighter mb-4">The "Immutable" Infrastructure</h3>
                            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
                                IaC allows you to treat your operations exactly like your application code. Use <span className="text-white font-bold">GitOps</span> to manage changes, perform code reviews on your network topology, and ensure that your production environment is <span className="text-white">identical</span> every single time you deploy.
                            </p>
                        </div>
                    </div>

                    {/* --- SIDEBAR --- */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-40 space-y-8">
                            <div className="p-8 bg-violet-600/5 border border-violet-500/20 rounded-[2.5rem] backdrop-blur-xl">
                                <h4 className="text-[10px] font-black text-violet-400 uppercase tracking-[0.2em] mb-6">Learning Path</h4>
                                <div className="space-y-4 mb-10">
                                    {[
                                        { label: "Config Management", path: "/config-management", current: false },
                                        { label: "Infrastructure as Code", path: "/infrastructure-as-code", current: true },
                                        { label: "Monitoring & Logging", path: "/curriculum/16", current: false },
                                    ].map((step, i) => (
                                        <Link to={step.path} key={i} className="flex items-center gap-4 group cursor-pointer block">
                                            <div className={cn("w-1.5 h-1.5 rounded-full transition-all duration-300", step.current ? "bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,1)]" : "bg-slate-800 group-hover:bg-slate-600")} />
                                            <span className={cn("text-[11px] font-bold tracking-tight transition-colors", step.current ? "text-white" : "text-slate-600 group-hover:text-slate-400")}>{step.label}</span>
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Link to="/config-management" className="w-full h-14 bg-white/5 border border-white/5 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-white/10 transition-all">
                                        <ChevronLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Previous
                                    </Link>
                                    <Link to="/roadmap" className="w-full h-14 bg-violet-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-violet-500 transition-all shadow-xl shadow-violet-500/20">
                                        Back to Roadmap <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            <div className="p-8 border border-white/5 rounded-[2.5rem] bg-white/[0.01]">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-violet-500/10 text-violet-400 flex items-center justify-center shadow-inner">
                                        <Activity size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Global Status</p>
                                        <p className="text-white font-black italic">HCL Validated</p>
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

export default InfrastructureAsCode;
