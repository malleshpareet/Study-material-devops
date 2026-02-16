import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Code2,
    Terminal,
    Zap,
    ExternalLink,
    ArrowRight,
    ChevronLeft,
    Cpu,
    Workflow,
    Box,
    FileCode,
    Activity,
    BookOpen,
    Globe,
    Binary,
    Braces
} from 'lucide-react';
import { cn } from '../utils/cn';

const ProgrammingLanguages = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const languages = [
        {
            title: "Python for Automation",
            desc: "The 'Swiss Army Knife' of DevOps. Ideal for scripting, rapid prototyping, and complex data transformations.",
            icon: FileCode,
            color: "blue",
            strengths: ["Highly readable syntax", "Extensive library ecosystem", "Standard for AI/ML Ops"],
            officialUrl: "https://www.python.org/"
        },
        {
            title: "Go for Cloud-Native",
            desc: "Built for performance and concurrency. The language behind Docker, Kubernetes, and Terraform.",
            icon: Binary,
            color: "cyan",
            strengths: ["Static type safety", "Lightning-fast execution", "Efficient concurrency (Goroutines)"],
            officialUrl: "https://go.dev/"
        }
    ];

    const useCases = [
        { title: "Infrastructure Scripting", desc: "Automating cloud resource provisioning and setup.", icon: Terminal },
        { title: "Custom CLI Tools", desc: "Building internal tools to streamline developer workflows.", icon: Box },
        { title: "API Integrations", desc: "Connecting disparate platforms via REST or gRPC.", icon: Workflow },
        { title: "Log Processing", desc: "Parsing and analyzing massive data streams in real-time.", icon: Activity }
    ];

    return (
        <div className="bg-[#0b0c10] min-h-screen text-slate-300 selection:bg-blue-500/30 font-sans pb-40 overflow-x-hidden">
            {/* --- HERO SECTION --- */}
            <section className="pt-40 pb-20 relative">
                <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-8">
                            <Code2 size={12} />
                            Module 08: Language Mastery
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-8 leading-[0.9]">
                            Programming <span className="text-blue-500">Languages.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed mb-12">
                            The backbone of automation. Master <span className="text-white font-bold italic">Python</span> for flexibility and <span className="text-white font-bold italic">Go</span> for performance to build world-class DevOps tools.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- MAIN CONTENT --- */}
            <section className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8 space-y-24">

                        {/* Language Deep Dive */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {languages.map((lang, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="p-10 bg-white/[0.01] border border-white/5 rounded-[3rem] flex flex-col transition-all hover:bg-white/[0.03] hover:border-blue-500/20 group"
                                >
                                    <div className={cn(
                                        "w-16 h-16 rounded-3xl flex items-center justify-center mb-8 shadow-2xl transition-transform group-hover:scale-110",
                                        lang.color === 'blue' ? "bg-blue-500/10 text-blue-400 shadow-blue-500/5" : "bg-cyan-500/10 text-cyan-400 shadow-cyan-500/5"
                                    )}>
                                        <lang.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-4 italic tracking-tight">{lang.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-10">{lang.desc}</p>

                                    <div className="space-y-3 mb-12">
                                        {lang.strengths.map((str, sIdx) => (
                                            <div key={sIdx} className="flex items-center gap-3">
                                                <div className={cn("w-1 h-1 rounded-full", lang.color === 'blue' ? "bg-blue-500" : "bg-cyan-500")} />
                                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{str}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href={lang.officialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            "mt-auto w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all",
                                            lang.color === 'blue'
                                                ? "bg-blue-600/10 text-blue-400 border border-blue-500/20 hover:bg-blue-600 hover:text-white"
                                                : "bg-cyan-600/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-600 hover:text-white"
                                        )}
                                    >
                                        Official Website <ExternalLink size={12} />
                                    </a>
                                </motion.div>
                            ))}
                        </div>

                        {/* Use Cases Section */}
                        <div className="space-y-12">
                            <h2 className="text-3xl font-black text-white italic tracking-tight uppercase flex items-center gap-4">
                                <Braces size={28} className="text-blue-500" />
                                DevOps Use Cases
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {useCases.map((use, i) => (
                                    <div key={i} className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl flex gap-6 items-center">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-500">
                                            <use.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-black text-white italic tracking-tight">{use.title}</h4>
                                            <p className="text-[11px] text-slate-500 leading-relaxed mt-1">{use.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Summary Block */}
                        <div className="p-10 bg-blue-500/[0.03] border border-blue-500/10 rounded-[3.5rem] relative overflow-hidden">
                            <h3 className="text-2xl font-black text-white italic tracking-tighter mb-4">Why learn both?</h3>
                            <p className="text-base text-slate-400 leading-relaxed">
                                Python is your <span className="text-white">productivity engine</span> for day-to-day scripting and data tasks. Go is your <span className="text-white">infrastructure engine</span> for building the high-performance core tools of the future. A senior DevOps engineer is fluent in the strengths of each.
                            </p>
                        </div>
                    </div>

                    {/* --- SIDEBAR --- */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-40 space-y-8">
                            <div className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-[2.5rem] backdrop-blur-xl">
                                <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-6">Learning Path</h4>
                                <div className="space-y-4 mb-10">
                                    {[
                                        { label: "Version Control (Git)", path: "/version-control", current: false },
                                        { label: "Programming Mastery", path: "/programming-languages", current: true },
                                        { label: "Cloud Architecture", path: "/curriculum/9", current: false },
                                    ].map((step, i) => (
                                        <Link to={step.path} key={i} className="flex items-center gap-4 group cursor-pointer block">
                                            <div className={cn("w-1.5 h-1.5 rounded-full transition-all duration-300", step.current ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]" : "bg-slate-800 group-hover:bg-slate-600")} />
                                            <span className={cn("text-[11px] font-bold tracking-tight transition-colors", step.current ? "text-white" : "text-slate-600 group-hover:text-slate-400")}>{step.label}</span>
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Link to="/version-control" className="w-full h-14 bg-white/5 border border-white/5 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-white/10 transition-all">
                                        <ChevronLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Previous
                                    </Link>
                                    <Link to="/roadmap" className="w-full h-14 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-blue-500 transition-all">
                                        Roadmap Dashboard <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            <div className="p-8 border border-white/5 rounded-[2.5rem] bg-white/[0.01]">
                                <div className="flex items-center gap-4 text-xs">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center shadow-inner">
                                        <Binary size={28} />
                                    </div>
                                    <div>
                                        <p className="text-white font-black italic">Industry Choice</p>
                                        <p className="text-slate-500 font-bold">Python / Golang</p>
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

export default ProgrammingLanguages;
