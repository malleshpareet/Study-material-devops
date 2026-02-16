import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Terminal,
    ShieldCheck,
    Cpu,
    FolderTree,
    Zap,
    ExternalLink,
    ArrowRight,
    ChevronLeft,
    Monitor,
    Lock,
    Settings,
    HardDrive,
    Activity,
    BookOpen,
    Code2
} from 'lucide-react';
import { cn } from '../utils/cn';

const LinuxFundamentals = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const linuxCoreModules = [
        {
            title: "Shell & Bash Mastery",
            desc: "Understanding the command line interface, piping, redirection, and writing powerful automation scripts.",
            icon: Terminal,
            color: "indigo",
            tools: ["ls", "grep", "sed", "awk", "xargs"]
        },
        {
            title: "Permissions & Security",
            desc: "The root user, sudo, chmod, chown, and managing user/group access across the file system.",
            icon: Lock,
            color: "rose",
            tools: ["chmod", "chown", "sudo", "umask"]
        },
        {
            title: "Process Management",
            desc: "Monitoring system health, managing background jobs, and understanding signals and process IDs.",
            icon: Activity,
            color: "emerald",
            tools: ["top", "htop", "ps", "kill", "systemctl"]
        },
        {
            title: "Networking & SSH",
            desc: "Mastering remote access, secure transfers, and troubleshooting network connectivity from the CLI.",
            icon: Monitor,
            color: "blue",
            tools: ["ssh", "scp", "curl", "netstat", "ip"]
        },
        {
            title: "File System Hierarchy",
            desc: "Understanding /bin, /etc, /var, and /tmp. Mastering disk mounting and storage management.",
            icon: FolderTree,
            color: "amber",
            tools: ["df", "du", "mount", "fstab", "ln"]
        },
        {
            title: "Package Management",
            desc: "Installing software, managing repositories, and handling dependencies using APT, YUM, or DNF.",
            icon: HardDrive,
            color: "sky",
            tools: ["apt", "yum", "dnf", "dpkg", "rpm"]
        }
    ];

    return (
        <div className="bg-[#0b0c10] min-h-screen text-slate-300 selection:bg-indigo-500/30 font-sans pb-40 overflow-x-hidden">
            {/* --- TERMINAL HERO --- */}
            <section className="pt-40 pb-20 relative">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] mb-8">
                            <Terminal size={12} />
                            Module 05: System Administration
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-8 leading-[0.9]">
                            Linux <span className="text-emerald-500">Fundamentals.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed mb-12">
                            The operating system of the cloud. Master Bash, permissions, and system internals to provide the <span className="text-white">perfect foundation</span> for your DevOps career.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- MAIN CONTENT --- */}
            <section className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8 space-y-24">

                        {/* Technical Deep Dive Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {linuxCoreModules.map((module, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="p-8 bg-white/[0.01] border border-white/5 rounded-[2.5rem] flex flex-col transition-all hover:bg-white/[0.03] hover:border-emerald-500/20"
                                >
                                    <div className={cn(
                                        "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-xl",
                                        `bg-${module.color}-500/10 text-${module.color}-400`
                                    )} style={{
                                        backgroundColor: i === 0 ? 'rgba(99, 102, 241, 0.1)' : i === 1 ? 'rgba(244, 63, 94, 0.1)' : i === 2 ? 'rgba(16, 185, 129, 0.1)' : i === 3 ? 'rgba(59, 130, 246, 0.1)' : i === 4 ? 'rgba(245, 158, 11, 0.1)' : 'rgba(14, 165, 233, 0.1)',
                                        color: i === 0 ? '#818cf8' : i === 1 ? '#fb7185' : i === 2 ? '#34d399' : i === 3 ? '#60a5fa' : i === 4 ? '#fbbf24' : '#38bdf8'
                                    }}>
                                        <module.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-4 italic tracking-tight">{module.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-8">{module.desc}</p>

                                    <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                                        {module.tools.map((tool, tIdx) => (
                                            <code key={tIdx} className="text-[10px] bg-white/5 border border-white/5 px-2 py-0.5 rounded text-emerald-400/70 font-mono">
                                                $ {tool}
                                            </code>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Interactive Pro Tip */}
                        <div className="p-10 bg-emerald-500/[0.03] border border-emerald-500/10 rounded-[3rem] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Code2 size={80} className="text-emerald-500" />
                            </div>
                            <h3 className="text-2xl font-black text-white italic tracking-tighter mb-6 uppercase flex items-center gap-3">
                                <Zap size={20} className="text-emerald-500" />
                                Pro Tip: The Three Streams
                            </h3>
                            <p className="text-base text-slate-400 leading-relaxed">
                                Always remember: <code className="text-white bg-white/5 px-1 rounded">stdin (0)</code>, <code className="text-white bg-white/5 px-1 rounded">stdout (1)</code>, and <code className="text-white bg-white/5 px-1 rounded">stderr (2)</code>. Mastering how to redirect and chain these streams using <code className="text-emerald-500">|</code> and <code className="text-emerald-500">&gt;</code> is what separates a developer from a DevOps engineer.
                            </p>
                        </div>

                        {/* Summary */}
                        <p className="text-xl text-slate-400 leading-relaxed font-medium pb-20 border-b border-white/5">
                            In the cloud, <span className="text-white">Everything is a file</span>. Understanding exactly how the Linux kernel manages resources will give you the confidence to debug complex container and infrastructure issues.
                        </p>
                    </div>

                    {/* --- SIDEBAR --- */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-40 space-y-8">
                            <div className="p-8 bg-emerald-600/5 border border-emerald-500/20 rounded-[2.5rem] backdrop-blur-xl">
                                <h4 className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] mb-6">Learning Path</h4>
                                <div className="space-y-4 mb-10">
                                    {[
                                        { label: "Roadmap Overview", path: "/roadmap-overview", current: false },
                                        { label: "Linux Fundamentals", path: "/linux-fundamentals", current: true },
                                        { label: "Networking Concepts", path: "/curriculum/6", current: false },
                                    ].map((step, i) => (
                                        <Link to={step.path} key={i} className="flex items-center gap-4 group cursor-pointer block">
                                            <div className={cn("w-1.5 h-1.5 rounded-full transition-all duration-300", step.current ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,1)]" : "bg-slate-800 group-hover:bg-slate-600")} />
                                            <span className={cn("text-[11px] font-bold tracking-tight transition-colors", step.current ? "text-white" : "text-slate-600 group-hover:text-slate-400")}>{step.label}</span>
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Link to="/roadmap-overview" className="w-full h-14 bg-white/5 border border-white/5 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-white/10 transition-all">
                                        <ChevronLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Previous
                                    </Link>
                                    <Link to="/roadmap" className="w-full h-14 bg-emerald-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-emerald-500 transition-all">
                                        Back to Roadmap <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            <div className="p-8 border border-white/5 rounded-[2.5rem] bg-white/[0.01]">
                                <div className="flex items-center gap-4 text-xs">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shadow-inner">
                                        <BookOpen size={28} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white font-black italic mb-2">Master Course</p>
                                        <a
                                            href="https://www.geeksforgeeks.org/linux-unix/linux-tutorial/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-500 hover:text-white transition-all text-[10px]"
                                        >
                                            GFG Tutorial <ExternalLink size={12} />
                                        </a>
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

export default LinuxFundamentals;
