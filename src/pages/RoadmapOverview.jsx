import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Map,
    ChevronRight,
    ArrowRight,
    Terminal,
    Network,
    GitBranch,
    Code2,
    Cloud,
    Box,
    Repeat,
    Ship,
    Globe,
    Settings,
    FileCode2,
    BarChart3,
    Sparkles,
    CheckCircle2,
    Zap,
    Flag,
    LayoutGrid
} from 'lucide-react';
import { cn } from '../utils/cn';

const RoadmapOverview = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const roadmapPhases = [
        {
            name: "Phase 1: Orientation",
            color: "indigo",
            steps: [
                { id: 1, title: "Introduction", icon: Sparkles },
                { id: 2, title: "Target Audience", icon: Flag },
                { id: 3, title: "Resources", icon: Globe },
                { id: 4, title: "Roadmap Overview", icon: Map },
            ]
        },
        {
            name: "Phase 2: Foundations",
            color: "blue",
            steps: [
                { id: 5, title: "Linux Fundamentals", icon: Terminal },
                { id: 6, title: "Networking Concepts", icon: Network },
                { id: 7, title: "Version Control (Git)", icon: GitBranch },
                { id: 8, title: "Programming Languages", icon: Code2 },
            ]
        },
        {
            name: "Phase 3: Core Infrastructure",
            color: "emerald",
            steps: [
                { id: 9, title: "Cloud Providers", icon: Cloud },
                { id: 10, title: "Containerization", icon: Box },
                { id: 11, title: "CI/CD Pipelines", icon: Repeat },
                { id: 12, title: "Orchestration (K8s)", icon: Ship },
            ]
        },
        {
            name: "Phase 4: Advanced Platforms",
            color: "rose",
            steps: [
                { id: 13, title: "Infra Services", icon: Globe },
                { id: 14, title: "Config Management", icon: Settings },
                { id: 15, title: "IaC (Terraform)", icon: FileCode2 },
                { id: 16, title: "Monitoring/Logging", icon: BarChart3 },
            ]
        }
    ];

    return (
        <div className="bg-[#0b0c10] min-h-screen text-slate-300 selection:bg-indigo-500/30 font-sans pb-20 overflow-x-hidden">
            {/* --- COMPACT HERO --- */}
            <section className="pt-32 pb-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[9px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-6">
                            <LayoutGrid size={12} />
                            Architectural Blueprint
                        </div>

                        <h1 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter mb-6 leading-none">
                            The Complete <span className="text-indigo-500 text-gradient">Roadmap.</span>
                        </h1>

                        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
                            A high-density 16-step sequence across 4 strategic phases. Optimized for zero technical friction and maximum retention.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- COMPACT GRID SECTION --- */}
            <section className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
                    {roadmapPhases.map((phase, pIdx) => (
                        <motion.div
                            key={pIdx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: pIdx * 0.1 }}
                            className="bg-white/[0.01] border border-white/5 rounded-[2.5rem] p-8 flex flex-col hover:border-indigo-500/20 transition-all group"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h2 className={cn(
                                    "text-[10px] font-black uppercase tracking-[0.3em]",
                                    pIdx === 0 ? "text-indigo-500" : pIdx === 1 ? "text-blue-500" : pIdx === 2 ? "text-emerald-500" : "text-rose-500"
                                )}>
                                    {phase.name}
                                </h2>
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-700 font-black italic text-[10px]">
                                    0{pIdx + 1}
                                </div>
                            </div>

                            <div className="space-y-3">
                                {phase.steps.map((step, sIdx) => (
                                    <div
                                        key={sIdx}
                                        className="p-4 bg-white/[0.01] border border-white/5 rounded-2xl flex items-center gap-4 group/step hover:bg-white/[0.03] transition-all cursor-default"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-600 group-hover/step:text-indigo-400 group-hover/step:bg-indigo-400/10 transition-all">
                                            <step.icon size={16} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[11px] font-black text-white italic tracking-tight truncate leading-none mb-1">{step.title}</span>
                                            <span className="text-[8px] text-slate-600 uppercase font-bold tracking-widest">Step {step.id}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-[9px] font-black text-slate-700 uppercase tracking-widest">Phase Ready</span>
                                <CheckCircle2 size={12} className="text-emerald-500/50" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- COMPACT CTA STRIP --- */}
                <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-indigo-500/[0.02] border border-indigo-500/10 rounded-[3rem] max-w-[1400px] mx-auto">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shadow-inner shrink-0">
                            <Zap size={28} />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-white italic tracking-tighter">Ready to Deploy?</h3>
                            <p className="text-[11px] text-slate-500 uppercase font-black tracking-widest mt-1">Estimated Mastery Time: 6-8 Months</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Link to="/resources" className="px-8 py-4 bg-white/5 border border-white/5 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                            View Resources
                        </Link>
                        <Link to="/roadmap" className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 shadow-xl shadow-indigo-500/20 hover:bg-indigo-500 transition-all group">
                            Start Journey <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RoadmapOverview;
