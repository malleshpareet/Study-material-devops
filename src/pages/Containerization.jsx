import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Box,
    Ship,
    Zap,
    ExternalLink,
    ArrowRight,
    ChevronLeft,
    Cpu,
    Workflow,
    Layers,
    Server,
    Globe,
    Activity,
    BookOpen,
    Youtube,
    FileCode,
    Terminal,
    ShieldCheck
} from 'lucide-react';
import { cn } from '../utils/cn';

const Containerization = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const dockerModules = [
        {
            title: "Docker Engine & Runtimes",
            desc: "Understanding the difference between Virtual Machines and Containers. Master the client-server architecture of Docker.",
            icon: Cpu,
            color: "blue",
            commands: ["docker version", "docker info", "docker run"]
        },
        {
            title: "Images & Dockerfiles",
            desc: "Mastering the declarative build process. Layer caching, multi-stage builds, and minimizing attack surfaces.",
            icon: FileCode,
            color: "sky",
            commands: ["docker build", "docker images", "docker history"]
        },
        {
            title: "Container Lifecycle",
            desc: "Managing state, logs, and network namespaces. Executing into running containers and managing resource limits.",
            icon: RotateCcwIcon(),
            color: "indigo",
            commands: ["docker ps", "docker exec", "docker logs", "docker stop"]
        },
        {
            title: "Docker Compose",
            desc: "Orchestrating multi-container applications locally. Managing networks, volumes, and environment variables.",
            icon: Layers,
            color: "cyan",
            commands: ["docker-compose up", "docker-compose down"]
        }
    ];

    const resources = [
        {
            title: "Official Documentation",
            links: [
                { label: "Docker Docs Home", url: "https://docs.docker.com/", type: "Guides" },
                { label: "Dockerfile Reference", url: "https://docs.docker.com/engine/reference/builder/", type: "Technical" },
                { label: "Docker Hub Registry", url: "https://hub.docker.com/", type: "Cloud" }
            ]
        },
        {
            title: "YouTube Masterclasses",
            links: [
                { label: "Docker Tutorial for Beginners (Nana)", url: "https://www.youtube.com/watch?v=pTFZFxd4hZ0", type: "Video" },
                { label: "Docker Full Course (FreeCodeCamp)", url: "https://www.youtube.com/watch?v=fqMOX6JJhGo", type: "Video" },
                { label: "Containers on Linux (NetworkChuck)", url: "https://www.youtube.com/watch?v=EnJ7qX9fkcU", type: "Video" }
            ]
        }
    ];

    function RotateCcwIcon() {
        return (props) => <Activity {...props} />; // Fallback or custom
    }

    return (
        <div className="bg-[#0b0c10] min-h-screen text-slate-300 selection:bg-blue-500/30 font-sans pb-40 overflow-x-hidden">
            {/* --- HERO SECTION --- */}
            <section className="pt-40 pb-20 relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-8">
                            <Box size={12} />
                            Module 10: Ship Anywhere
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-8 leading-[0.9]">
                            Container<span className="text-blue-500">ization.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed mb-12">
                            Packaging applications with <span className="text-white font-bold">Docker</span>. Eliminate the "It works on my machine" problem forever by standardizing your environment from dev to prod.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- MAIN CONTENT --- */}
            <section className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8 space-y-24">

                        {/* Technical Deep Dive */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {dockerModules.map((module, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="p-8 bg-white/[0.01] border border-white/5 rounded-[2.5rem] flex flex-col transition-all hover:bg-white/[0.03] hover:border-blue-500/20"
                                >
                                    <div className={cn(
                                        "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-xl",
                                        `bg-${module.color}-500/10 text-${module.color}-400`
                                    )} style={{
                                        backgroundColor: i === 0 ? 'rgba(59, 130, 246, 0.1)' : i === 1 ? 'rgba(14, 165, 233, 0.1)' : i === 2 ? 'rgba(99, 102, 241, 0.1)' : 'rgba(6, 182, 212, 0.1)',
                                        color: i === 0 ? '#60a5fa' : i === 1 ? '#38bdf8' : i === 2 ? '#818cf8' : '#22d3ee'
                                    }}>
                                        <module.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-4 italic tracking-tight">{module.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-8">{module.desc}</p>

                                    <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                                        {module.commands.map((cmd, cIdx) => (
                                            <code key={cIdx} className="text-[10px] bg-white/5 border border-white/5 px-2 py-0.5 rounded text-blue-400/70 font-mono">
                                                $ {cmd}
                                            </code>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Resource Repositories */}
                        <div className="space-y-12">
                            <h2 className="text-3xl font-black text-white italic tracking-tight uppercase flex items-center gap-4">
                                <BookOpen size={28} className="text-blue-500" />
                                Knowledge Hub
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {resources.map((section, i) => (
                                    <div key={i} className="p-8 bg-white/[0.01] border border-white/5 rounded-[3rem] space-y-6">
                                        <h4 className="text-lg font-black text-white italic tracking-tight flex items-center gap-3">
                                            {i === 0 ? <Globe size={20} className="text-blue-500" /> : <Youtube size={20} className="text-rose-500" />}
                                            {section.title}
                                        </h4>
                                        <div className="space-y-3">
                                            {section.links.map((link, lIdx) => (
                                                <a
                                                    key={lIdx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl group hover:bg-white/10 hover:border-blue-500/20 transition-all"
                                                >
                                                    <span className="text-[11px] font-bold text-slate-400 group-hover:text-white transition-colors">{link.label}</span>
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-[8px] font-black uppercase tracking-widest text-slate-600">{link.type}</span>
                                                        <ExternalLink size={12} className="text-slate-700 group-hover:text-blue-500 transition-colors" />
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-10 bg-blue-500/[0.03] border border-blue-500/10 rounded-[3rem] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <ShieldCheck size={80} className="text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-black text-white italic tracking-tighter mb-4">Security First</h3>
                            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
                                Containers are not sandboxes by default. Mastering <span className="text-white font-bold">non-root users</span>, <span className="text-white font-bold">read-only file systems</span>, and <span className="text-white font-bold">image scanning</span> is mandatory for any production-ready DevOps architect.
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
                                        { label: "Cloud Architecture", path: "/cloud-providers", current: false },
                                        { label: "Containerization", path: "/containerization", current: true },
                                        { label: "CI/CD Pipelines", path: "/curriculum/11", current: false },
                                    ].map((step, i) => (
                                        <Link to={step.path} key={i} className="flex items-center gap-4 group cursor-pointer block">
                                            <div className={cn("w-1.5 h-1.5 rounded-full transition-all duration-300", step.current ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]" : "bg-slate-800 group-hover:bg-slate-600")} />
                                            <span className={cn("text-[11px] font-bold tracking-tight transition-colors", step.current ? "text-white" : "text-slate-600 group-hover:text-slate-400")}>{step.label}</span>
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Link to="/cloud-providers" className="w-full h-14 bg-white/5 border border-white/5 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-white/10 transition-all">
                                        <ChevronLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Previous
                                    </Link>
                                    <Link to="/roadmap" className="w-full h-14 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">
                                        Back to Roadmap <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            <div className="p-8 border border-white/5 rounded-[2.5rem] bg-white/[0.01]">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center shadow-inner">
                                        <Ship size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Industry Standard</p>
                                        <p className="text-white font-black italic">Docker Runtime</p>
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

export default Containerization;
