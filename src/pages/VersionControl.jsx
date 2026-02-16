import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    GitBranch,
    GitMerge,
    GitCommit,
    Github,
    Globe,
    Zap,
    ExternalLink,
    ArrowRight,
    ChevronLeft,
    ShieldCheck,
    Cpu,
    History,
    Users,
    BookOpen,
    Code2,
    RotateCcw,
    Layers,
    Terminal
} from 'lucide-react';
import { cn } from '../utils/cn';

const VersionControl = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const gitModules = [
        {
            title: "Core Mechanics",
            desc: "Mastering the fundamental state of Git: Working Directory, Staging Area, and Local Repository.",
            icon: GitCommit,
            color: "orange",
            commands: ["git init", "git add", "git commit", "git status"]
        },
        {
            title: "Branching Strategy",
            desc: "Understanding isolations. Mastering Git Flow, Feature Branching, and Trunk-Based Development.",
            icon: GitBranch,
            color: "indigo",
            commands: ["git branch", "git checkout -b", "git switch"]
        },
        {
            title: "Merging & Conflict Resolution",
            desc: "Handling standard merges vs. rebasing. Learning how to resolve technical overlaps with precision.",
            icon: GitMerge,
            color: "emerald",
            commands: ["git merge", "git rebase", "git cherry-pick"]
        },
        {
            title: "Remote Collaboration",
            desc: "Syncing work across teams. Mastering distributed workflows with Fetch, Pull, and Push mechanics.",
            icon: Globe,
            color: "blue",
            commands: ["git remote", "git push", "git fetch", "git pull"]
        },
        {
            title: "History Management",
            desc: "Mastering time travel. Using logs, reflogs, and resetting to maintain a clean project lineage.",
            icon: History,
            color: "rose",
            commands: ["git log", "git reflog", "git reset", "git revert"]
        },
        {
            title: "Advanced Scenarios",
            desc: "Internal optimization. Using Stash for context switching and Hooks for automation.",
            icon: Layers,
            color: "amber",
            commands: ["git stash", "git hooks", "git ammend"]
        }
    ];

    return (
        <div className="bg-[#0b0c10] min-h-screen text-slate-300 selection:bg-orange-500/30 font-sans pb-40 overflow-x-hidden">
            {/* --- GIT HERO --- */}
            <section className="pt-40 pb-20 relative">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-black text-orange-400 uppercase tracking-[0.2em] mb-8">
                            <GitBranch size={12} />
                            Module 07: Distributed Version Control
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-8 leading-[0.9]">
                            Git & Version <span className="text-orange-500">Control.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed mb-12">
                            The backbone of modern collaboration. Master distributed version control to ensure <span className="text-white">perfect code integrity</span> and seamless team synchronization.
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
                            {gitModules.map((module, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="p-8 bg-white/[0.01] border border-white/5 rounded-[2.5rem] flex flex-col transition-all hover:bg-white/[0.03] hover:border-orange-500/20"
                                >
                                    <div className={cn(
                                        "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-xl",
                                        `bg-${module.color}-500/10 text-${module.color}-400`
                                    )} style={{
                                        backgroundColor: i === 0 ? 'rgba(249, 115, 22, 0.1)' : i === 1 ? 'rgba(99, 102, 241, 0.1)' : i === 2 ? 'rgba(16, 185, 129, 0.1)' : i === 3 ? 'rgba(59, 130, 246, 0.1)' : i === 4 ? 'rgba(244, 63, 94, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                                        color: i === 0 ? '#f97316' : i === 1 ? '#818cf8' : i === 2 ? '#34d399' : i === 3 ? '#60a5fa' : i === 4 ? '#fb7185' : '#fbbf24'
                                    }}>
                                        <module.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-4 italic tracking-tight">{module.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-8">{module.desc}</p>

                                    <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                                        {module.commands.map((cmd, cIdx) => (
                                            <code key={cIdx} className="text-[10px] bg-white/5 border border-white/5 px-2 py-0.5 rounded text-orange-400/70 font-mono">
                                                $ {cmd}
                                            </code>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Interactive Insight */}
                        <div className="p-10 bg-orange-500/[0.03] border border-orange-500/10 rounded-[3rem] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <RotateCcw size={80} className="text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-black text-white italic tracking-tighter mb-6 uppercase flex items-center gap-3">
                                <Zap size={20} className="text-orange-500" />
                                Commit Philosophy
                            </h3>
                            <p className="text-base text-slate-400 leading-relaxed">
                                A great DevOps engineer treats commits as <span className="text-white font-bold">Atomic Units of Progress</span>. Each commit should represent a single, working change accompanied by a meaningful message. This makes root-cause analysis during deployment failures 10x faster.
                            </p>
                        </div>

                        <p className="text-xl text-slate-400 leading-relaxed font-medium pb-20 border-b border-white/5">
                            Git is not just for code. In the world of <span className="text-white italic">Everything as Code</span>, Git manages your infrastructure, your security policies, and your CI/CD pipelines.
                        </p>
                    </div>

                    {/* --- SIDEBAR --- */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-40 space-y-8">
                            <div className="p-8 bg-orange-600/5 border border-orange-500/20 rounded-[2.5rem] backdrop-blur-xl">
                                <h4 className="text-[10px] font-black text-orange-400 uppercase tracking-[0.2em] mb-6">Learning Path</h4>
                                <div className="space-y-4 mb-10">
                                    {[
                                        { label: "Networking Concepts", path: "/networking-concepts", current: false },
                                        { label: "Version Control (Git)", path: "/version-control", current: true },
                                        { label: "Programming Mastery", path: "/curriculum/8", current: false },
                                    ].map((step, i) => (
                                        <Link to={step.path} key={i} className="flex items-center gap-4 group cursor-pointer block">
                                            <div className={cn("w-1.5 h-1.5 rounded-full transition-all duration-300", step.current ? "bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,1)]" : "bg-slate-800 group-hover:bg-slate-600")} />
                                            <span className={cn("text-[11px] font-bold tracking-tight transition-colors", step.current ? "text-white" : "text-slate-600 group-hover:text-slate-400")}>{step.label}</span>
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl mb-4">
                                        <p className="text-white font-black italic text-xs mb-3">Master Reference</p>
                                        <a
                                            href="https://about.gitlab.com/topics/version-control/what-is-git-version-control/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-3 bg-orange-600 text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-orange-500 transition-all shadow-lg shadow-orange-500/20"
                                        >
                                            GitLab Source <ExternalLink size={12} />
                                        </a>
                                    </div>
                                    <Link to="/networking-concepts" className="w-full h-14 bg-white/5 border border-white/5 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-white/10 transition-all">
                                        <ChevronLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Previous
                                    </Link>
                                    <Link to="/roadmap" className="w-full h-14 bg-orange-700 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-orange-600 transition-all">
                                        Back to Roadmap <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            <div className="p-8 border border-white/5 rounded-[2.5rem] bg-white/[0.01]">
                                <div className="flex items-center gap-4 text-xs">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center shadow-inner">
                                        <Github size={28} />
                                    </div>
                                    <div>
                                        <p className="text-white font-black italic">Platform Standard</p>
                                        <p className="text-slate-500 font-bold">DVCS Architecture</p>
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

export default VersionControl;
