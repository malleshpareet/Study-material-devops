import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Repeat,
    Workflow,
    Zap,
    ExternalLink,
    ArrowRight,
    ChevronLeft,
    ShieldCheck,
    Cpu,
    GitBranch,
    Server,
    Globe,
    Activity,
    BookOpen,
    Github,
    Play,
    Youtube,
    CheckCircle2,
    Clock,
    TestTube2
} from 'lucide-react';
import { cn } from '../utils/cn';

const CICDPipelines = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const pipelineStages = [
        {
            title: "Continuous Integration (CI)",
            desc: "The practice of automating the integration of code changes from multiple contributors into a single software project.",
            icon: GitBranch,
            color: "blue",
            steps: ["Code Commit", "Automated Build", "Unit Testing", "Static Analysis"]
        },
        {
            title: "Continuous Delivery (CD)",
            desc: "Ensures that code is always in a deployable state. Involves automated testing and staging environment deployments.",
            icon: Play,
            color: "emerald",
            steps: ["Integration Testing", "Staging Deploy", "Manual Approval", "Release"]
        },
        {
            title: "Continuous Deployment",
            desc: "Every change that passes all stages of your production pipeline is released to your customers automatically.",
            icon: Zap,
            color: "indigo",
            steps: ["Auto Production Deploy", "Canary Releases", "Blue/Green Deploy", "Rollbacks"]
        }
    ];

    const tools = [
        { name: "GitHub Actions", desc: "Native CI/CD for GitHub repositories.", url: "https://github.com/features/actions" },
        { name: "Jenkins", desc: "The industry standard self-hosted automation server.", url: "https://www.jenkins.io/" },
        { name: "GitLab CI", desc: "Integrated DevOps platform with powerful pipelines.", url: "https://docs.gitlab.com/ee/ci/" },
        { name: "CircleCI", desc: "Fast and scalable cloud-based CI/CD.", url: "https://circleci.com/" }
    ];

    return (
        <div className="bg-[#0b0c10] min-h-screen text-slate-300 selection:bg-indigo-500/30 font-sans pb-40 overflow-x-hidden">
            {/* --- HERO SECTION --- */}
            <section className="pt-40 pb-20 relative">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-8">
                            <Repeat size={12} />
                            Module 11: Automation Engine
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-8 leading-[0.9]">
                            CI/CD <span className="text-indigo-500">Pipelines.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed mb-12">
                            The heart of DevOps. Automate the path from <span className="text-white">code commit</span> to <span className="text-white">production release</span> with zero-touch delivery systems.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- MAIN CONTENT --- */}
            <section className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8 space-y-24">

                        {/* Pipeline Architecture */}
                        <div className="space-y-12">
                            <h2 className="text-3xl font-black text-white italic tracking-tight uppercase flex items-center gap-4">
                                <Workflow size={28} className="text-indigo-500" />
                                Delivery Lifecycle
                            </h2>
                            <div className="grid grid-cols-1 gap-6">
                                {pipelineStages.map((stage, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 10 }}
                                        className="p-8 bg-white/[0.01] border border-white/5 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-start transition-all hover:bg-white/[0.03] hover:border-indigo-500/20"
                                    >
                                        <div className={cn(
                                            "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0",
                                            stage.color === 'blue' ? 'bg-blue-500/10 text-blue-400' :
                                                stage.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-indigo-500/10 text-indigo-400'
                                        )}>
                                            <stage.icon size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-white italic mb-4 tracking-tighter">{stage.title}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-2xl">{stage.desc}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {stage.steps.map((step, sIdx) => (
                                                    <span key={sIdx} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 text-slate-400 rounded-full border border-white/5">
                                                        {step}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Best Practices */}
                        <div className="p-10 bg-indigo-500/[0.03] border border-indigo-500/10 rounded-[3rem] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <TestTube2 size={80} className="text-indigo-500" />
                            </div>
                            <h3 className="text-2xl font-black text-white italic tracking-tighter mb-4">The "Shift Left" Rule</h3>
                            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
                                Test early and test often. By shifting security and quality checks to the <span className="text-white">earlier stages</span> of your pipeline, you resolve bugs when they are cheapest to fix, ensuring a stable production environment.
                            </p>
                        </div>

                        {/* Resource Grid */}
                        <div className="space-y-12">
                            <h2 className="text-3xl font-black text-white italic tracking-tight uppercase flex items-center gap-4">
                                <BookOpen size={28} className="text-indigo-500" />
                                Official Tooling
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {tools.map((tool, i) => (
                                    <a
                                        key={i}
                                        href={tool.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-8 bg-white/[0.01] border border-white/5 rounded-[2.5rem] group hover:bg-white/[0.03] hover:border-indigo-500/20 transition-all"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <h4 className="text-xl font-black text-white italic">{tool.name}</h4>
                                            <ExternalLink size={14} className="text-slate-700 group-hover:text-indigo-500 transition-colors" />
                                        </div>
                                        <p className="text-sm text-slate-500 leading-relaxed mb-6">{tool.desc}</p>
                                        <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Documentation →</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* YouTube Masterclasses */}
                        <div className="space-y-12">
                            <h2 className="text-3xl font-black text-white italic tracking-tight uppercase flex items-center gap-4">
                                <Youtube size={28} className="text-rose-500" />
                                Video Masterclasses
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: "CI/CD Pipeline Explained", channel: "TechWorld with Nana", url: "https://www.youtube.com/watch?v=scEDHsr3APg" },
                                    { title: "CI/CD Tutorial for Beginners", channel: "Kunal Kushwaha", url: "https://www.youtube.com/watch?v=R8_veQiYBjI" },
                                    { title: "GitHub Actions Tutorial", channel: "TechWorld with Nana", url: "https://www.youtube.com/watch?v=mFFXuXjVgkU" },
                                    { title: "Complete DevOps Roadmap", channel: "Piyush Garg", url: "https://www.youtube.com/watch?v=f2vO_Yv0XN4" }
                                ].map((vid, i) => (
                                    <a
                                        key={i}
                                        href={vid.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-6 bg-white/[0.01] border border-white/5 rounded-3xl flex items-center justify-between group hover:bg-white/[0.03] hover:border-rose-500/20 transition-all"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                                                <Play size={18} fill="currentColor" />
                                            </div>
                                            <div>
                                                <h4 className="text-[13px] font-black text-white italic tracking-tight">{vid.title}</h4>
                                                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">{vid.channel}</p>
                                            </div>
                                        </div>
                                        <ExternalLink size={14} className="text-slate-700 group-hover:text-rose-500 transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* --- SIDEBAR --- */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-40 space-y-8">
                            <div className="p-8 bg-indigo-600/5 border border-indigo-500/20 rounded-[2.5rem] backdrop-blur-xl">
                                <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-6">Learning Path</h4>
                                <div className="space-y-4 mb-10">
                                    {[
                                        { label: "Containerization", path: "/containerization", current: false },
                                        { label: "CI/CD Pipelines", path: "/cicd-pipelines", current: true },
                                        { label: "Orchestration (K8s)", path: "/curriculum/12", current: false },
                                    ].map((step, i) => (
                                        <Link to={step.path} key={i} className="flex items-center gap-4 group cursor-pointer block">
                                            <div className={cn("w-1.5 h-1.5 rounded-full transition-all duration-300", step.current ? "bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,1)]" : "bg-slate-800 group-hover:bg-slate-600")} />
                                            <span className={cn("text-[11px] font-bold tracking-tight transition-colors", step.current ? "text-white" : "text-slate-600 group-hover:text-slate-400")}>{step.label}</span>
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Link to="/containerization" className="w-full h-14 bg-white/5 border border-white/5 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-white/10 transition-all">
                                        <ChevronLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Previous
                                    </Link>
                                    <Link to="/roadmap" className="w-full h-14 bg-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-500/20">
                                        Back to Roadmap <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            <div className="p-8 border border-white/5 rounded-[2.5rem] bg-white/[0.01]">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shadow-inner">
                                        <Activity size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Global Standard</p>
                                        <p className="text-white font-black italic">Automated Flow</p>
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

export default CICDPipelines;
