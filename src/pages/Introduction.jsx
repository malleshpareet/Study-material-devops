import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    BookOpen,
    Zap,
    Target,
    Users,
    ArrowRight,
    Rocket,
    ShieldCheck,
    Cpu,
    Sparkles,
    CheckCircle2,
    Users2,
    Activity,
    Repeat,
    RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

const Introduction = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const devopsPillars = [
        {
            title: "Collaboration",
            desc: "Breaking siloes between Dev and Ops to ensure transparent communication and shared goals.",
            icon: Users2,
            color: "indigo"
        },
        {
            title: "Automation",
            desc: "Automating repetitive tasks to reduce human error and increase deployment velocity.",
            icon: Zap,
            color: "amber"
        },
        {
            title: "CI/CD",
            desc: "Continuous Integration and Delivery ensures code is always in a deployable state.",
            icon: Repeat,
            color: "emerald"
        },
        {
            title: "Monitoring",
            desc: "Constant feedback loops through monitoring and logging to maintain system stability.",
            icon: Activity,
            color: "blue"
        }
    ];

    return (
        <div className="bg-[#0b0c10] min-h-screen text-slate-300 selection:bg-indigo-500/30 font-sans pb-40">
            {/* --- HERO SECTION --- */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-8">
                            <Sparkles size={12} />
                            Module 01: The Core Philosophy
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-8 leading-[0.9]">
                            Introduction to <span className="text-indigo-500">DevOps.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed mb-12">
                            A modern software development approach that unifies <span className="text-white">Development (Dev)</span> and <span className="text-white">Operations (Ops)</span> to deliver software faster, more reliably, and with higher quality.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- MAIN CONTENT --- */}
            <section className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8 space-y-20">
                        {/* The Challenge Block */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-black text-white italic tracking-tight flex items-center gap-4">
                                <span className="text-indigo-500 opacity-50 font-mono">/</span> The Historical Friction
                            </h2>
                            <p className="text-lg leading-relaxed text-slate-400">
                                In traditional software environments, development and operations teams worked in isolation. Developers focused on building features, while operations teams handled deployment and infrastructure. This separation often caused <span className="text-slate-200 font-bold">delays, miscommunication, and deployment failures</span>.
                            </p>
                            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
                                <p className="text-lg leading-relaxed text-slate-300 font-medium italic">
                                    "DevOps is not just a set of tools — it is a mindset that emphasizes teamwork, faster delivery cycles, and continuous improvement."
                                </p>
                            </div>
                        </div>

                        {/* Culture & Pillars */}
                        <div className="space-y-12">
                            <h2 className="text-3xl font-black text-white italic tracking-tight">Promoting a Culture of Excellence</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {devopsPillars.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 5 }}
                                        className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center gap-6"
                                    >
                                        <div className={cn(
                                            "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-lg",
                                            item.color === 'indigo' ? "bg-indigo-500/10 text-indigo-400" :
                                                item.color === 'amber' ? "bg-amber-500/10 text-amber-400" :
                                                    item.color === 'blue' ? "bg-blue-500/10 text-blue-400" : "bg-emerald-500/10 text-emerald-400"
                                        )}>
                                            <item.icon size={22} />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-black text-white italic uppercase tracking-wider">{item.title}</h3>
                                            <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Benefits Section */}
                        <div className="space-y-12 pt-10 px-8 py-10 bg-indigo-500/[0.03] border border-indigo-500/10 rounded-[3rem] relative overflow-hidden">
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
                            <h3 className="text-2xl font-black text-white italic tracking-tighter mb-8">Business Impact & Innovation</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                                        <CheckCircle2 size={18} />
                                    </div>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        Organizations can release updates <span className="text-slate-200">more frequently</span>, reduce system failures, and respond quickly to customer needs.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                                        <RefreshCw size={18} />
                                    </div>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        Enables businesses to <span className="text-slate-200">innovate faster</span> while maintaining system stability and scalability.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Summary Footer */}
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Today, DevOps plays a critical role in modern software development, especially in <span className="text-white">cloud computing</span>, <span className="text-white">microservices architecture</span>, and <span className="text-white">agile product delivery</span>.
                        </p>
                    </div>

                    {/* --- SIDEBAR --- */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-40 space-y-8">
                            <div className="p-8 bg-indigo-600/5 border border-indigo-500/20 rounded-[2.5rem] backdrop-blur-xl">
                                <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-6">Course Navigation</h4>
                                <div className="space-y-4 mb-10">
                                    {[
                                        { label: "Introduction to DevOps", current: true },
                                        { label: "Historical Challenges", current: false },
                                        { label: "The Shift in Culture", current: false }
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-center gap-4 group cursor-pointer">
                                            <div className={cn("w-1.5 h-1.5 rounded-full transition-all duration-300", step.current ? "bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,1)]" : "bg-slate-800 group-hover:bg-slate-600")} />
                                            <span className={cn("text-[11px] font-bold tracking-tight transition-colors", step.current ? "text-white" : "text-slate-600 group-hover:text-slate-400")}>{step.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/roadmap" className="w-full h-14 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-slate-200 transition-all">
                                    Go to Roadmap <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="p-8 border border-white/5 rounded-[2.5rem] bg-white/[0.01]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shadow-inner">
                                        <ShieldCheck size={28} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-white italic">Curriculum Certified</p>
                                        <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest mt-0.5">Technical Scripter 2026</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Introduction;
