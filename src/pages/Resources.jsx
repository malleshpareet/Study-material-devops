import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Library,
    BookOpen,
    Youtube,
    Globe,
    ExternalLink,
    ArrowRight,
    Sparkles,
    CheckCircle2,
    Zap,
    Github,
    Code2,
    Terminal,
    ChevronLeft,
    MonitorPlay,
    FileText
} from 'lucide-react';
import { cn } from '../utils/cn';

const Resources = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const resourceSections = [
        {
            title: "Official Documentation",
            icon: FileText,
            color: "indigo",
            links: [
                { label: "Docker Documentation", url: "https://docs.docker.com/", type: "Official" },
                { label: "Kubernetes Documentation", url: "https://kubernetes.io/docs/home/", type: "Official" },
                { label: "Terraform HCL Docs", url: "https://developer.hashicorp.com/terraform/docs", type: "Official" },
                { label: "AWS Cloud Practitioner", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/", type: "Certification" },
                { label: "Linux Kernel Archives", url: "https://www.kernel.org/doc/html/latest/", type: "Engine" }
            ]
        },
        {
            title: "YouTube Masterclasses",
            icon: MonitorPlay,
            color: "rose",
            links: [
                { label: "TechWorld with Nana", url: "https://www.youtube.com/@TechWorldwithNana", type: "Visual Mastery" },
                { label: "Kunal Kushwaha (DevOps)", url: "https://www.youtube.com/@KunalKushwaha", type: "Full Course" },
                { label: "NetworkChuck", url: "https://www.youtube.com/@NetworkChuck", type: "Infrastructure" },
                { label: "Jeff Geerling (Ansible)", url: "https://www.youtube.com/@geerlingguy", type: "Automation" },
                { label: "KodeKloud", url: "https://www.youtube.com/@KodeKloud", type: "Hands-on Labs" }
            ]
        },
        {
            title: "Technical Ecosystems",
            icon: Globe,
            color: "blue",
            links: [
                { label: "Roadmap.sh (DevOps)", url: "https://roadmap.sh/devops", type: "Strategy" },
                { label: "The Cloud Native Landscape", url: "https://landscape.cncf.io/", type: "Architecture" },
                { label: "Azure DevOps Blog", url: "https://devblogs.microsoft.com/devops/", type: "Insights" },
                { label: "Google SRE Workbook", url: "https://sre.google/workbook/table-of-contents/", type: "Reliability" }
            ]
        }
    ];

    return (
        <div className="bg-[#0b0c10] min-h-screen text-slate-300 selection:bg-indigo-500/30 font-sans pb-40">
            {/* --- HERO SECTION --- */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto lg:mx-0"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-8">
                            <Library size={12} />
                            Module 03: Resource Repository
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-8 leading-[0.9]">
                            Curated <span className="text-indigo-500">Knowledge.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed mb-12">
                            A vetted collection of <span className="text-white">official documentation</span>, <span className="text-white">YouTube masterclasses</span>, and <span className="text-white">technical blogs</span> to fuel your DevOps journey in 2026.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- MAIN CONTENT --- */}
            <section className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8 space-y-24">

                        {resourceSections.map((section, sIdx) => (
                            <div key={sIdx}>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className={cn(
                                        "w-10 h-10 rounded-xl flex items-center justify-center",
                                        `bg-${section.color}-500/10 text-${section.color}-400`
                                    )} style={{
                                        backgroundColor: sIdx === 0 ? 'rgba(99, 102, 241, 0.1)' : sIdx === 1 ? 'rgba(244, 63, 94, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                                        color: sIdx === 0 ? '#818cf8' : sIdx === 1 ? '#fb7185' : '#60a5fa'
                                    }}>
                                        <section.icon size={20} />
                                    </div>
                                    <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase whitespace-nowrap">{section.title}</h2>
                                    <div className="h-px w-full bg-white/5" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {section.links.map((link, i) => (
                                        <motion.a
                                            key={i}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ x: 5 }}
                                            className="group p-6 bg-white/[0.01] border border-white/5 rounded-2xl flex items-center justify-between transition-all hover:bg-white/[0.03] hover:border-indigo-500/30 shadow-2xl"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-600 group-hover:text-white transition-colors">
                                                    {section.icon === MonitorPlay ? <Youtube size={14} /> : <Globe size={14} />}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-black text-white italic tracking-tight group-hover:text-indigo-400 transition-colors">{link.label}</span>
                                                    <span className="text-[9px] text-slate-600 uppercase font-bold tracking-widest mt-1">{link.type}</span>
                                                </div>
                                            </div>
                                            <ExternalLink size={14} className="text-slate-800 group-hover:text-white transition-all transform group-hover:scale-110" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Interactive Section */}
                        <div className="p-10 bg-indigo-500/[0.03] border border-indigo-500/10 rounded-[3rem] relative overflow-hidden">
                            <h3 className="text-2xl font-black text-white italic tracking-tighter mb-6">Learning Strategy</h3>
                            <p className="text-base text-slate-400 leading-relaxed mb-8">
                                Documentation is the <span className="text-white">source of truth</span>, but video courses provide the <span className="text-white">context</span>. We recommend reading official docs alongside hands-on practice for 100% mastery.
                            </p>
                            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">
                                <Zap size={14} />
                                Master the fundamentals first
                            </div>
                        </div>
                    </div>

                    {/* --- SIDEBAR --- */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-40 space-y-8">
                            <div className="p-8 bg-indigo-600/5 border border-indigo-500/20 rounded-[2.5rem] backdrop-blur-xl">
                                <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-6">Course Navigation</h4>
                                <div className="space-y-4 mb-10">
                                    {[
                                        { label: "Introduction to DevOps", current: false, path: "/introduction" },
                                        { label: "Target Audience", current: false, path: "/target-audience" },
                                        { label: "Global Resources", current: true, path: "/resources" }
                                    ].map((step, i) => (
                                        <Link to={step.path} key={i} className="flex items-center gap-4 group cursor-pointer block">
                                            <div className={cn("w-1.5 h-1.5 rounded-full transition-all duration-300", step.current ? "bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,1)]" : "bg-slate-800 group-hover:bg-slate-600")} />
                                            <span className={cn("text-[11px] font-bold tracking-tight transition-colors", step.current ? "text-white" : "text-slate-600 group-hover:text-slate-400")}>{step.label}</span>
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Link to="/target-audience" className="w-full h-14 bg-white/5 border border-white/5 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-white/10 transition-all">
                                        <ChevronLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Previous Module
                                    </Link>
                                    <Link to="/roadmap" className="w-full h-14 bg-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-indigo-500 transition-all">
                                        Go to Roadmap <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            <div className="p-8 border border-white/5 rounded-[2.5rem] bg-white/[0.01]">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shadow-inner">
                                        <CheckCircle2 size={28} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-white italic">Module Completed</p>
                                        <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest mt-0.5">Vetted Resources Ready</p>
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

export default Resources;
