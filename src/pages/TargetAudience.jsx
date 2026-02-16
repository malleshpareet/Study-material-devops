import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Users,
    Code2,
    Server,
    ShieldAlert,
    GraduationCap,
    Briefcase,
    ArrowRight,
    Sparkles,
    CheckCircle2,
    Target as TargetIcon,
    Zap,
    Globe,
    Cpu,
    Microscope,
    Database,
    LineChart,
    Rocket,
    Clock,
    Activity,
    ShieldCheck
} from 'lucide-react';
import { cn } from '../utils/cn';

const TargetAudience = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const audiences = [
        {
            id: 1,
            title: "Software Developers",
            desc: "Modern developers are no longer limited to writing code. They are responsible for writing deployment-ready code and integrating CI/CD.",
            icon: Code2,
            color: "indigo",
            benefits: ["Faster releases", "Production awareness", "SDLC Mastery"]
        },
        {
            id: 2,
            title: "System Administrators",
            desc: "Infra is now automated and cloud-based. Transition into Cloud, Platform, or Infrastructure Engineering roles.",
            icon: Server,
            color: "blue",
            benefits: ["IaC Mastery", "Automated Provisioning", "SRE Transition"]
        },
        {
            id: 3,
            title: "Cloud Engineers",
            desc: "Manage K8s clusters and multi-cloud environments. Optimize scalability and cross-region costs.",
            icon: Cloud,
            color: "sky",
            benefits: ["Kubernetes Ops", "Multi-cloud Strategy", "Auto-scaling"]
        },
        {
            id: 4,
            title: "QA / Test Engineers",
            desc: "Testing is continuous. Work with automated frameworks and CI test pipelines as an SDET.",
            icon: Microscope,
            color: "emerald",
            benefits: ["Continuous Testing", "Performance Automation", "Bug Prevention"]
        },
        {
            id: 5,
            title: "IT Operations",
            desc: "Adopting monitoring, incident response automation, and transitioning into Site Reliability Engineering (SRE).",
            icon: Activity,
            color: "violet",
            benefits: ["Observability", "Reliability Practices", "Incident Response"]
        },
        {
            id: 6,
            title: "Security Engineers",
            desc: "The DevSecOps cultural shift. Integrating security scans and compliance checks into the heart of the pipeline.",
            icon: ShieldCheck,
            color: "rose",
            benefits: ["Security as Code", "Vulnerability Scans", "Access Control"]
        },
        {
            id: 7,
            title: "Data & AI Engineers",
            desc: "Automating data pipelines and model deployment (MLOps) for complex AI/ML systems at scale.",
            icon: Database,
            color: "amber",
            benefits: ["MLOps Pipelines", "GPU Orchestration", "Data Reliability"]
        },
        {
            id: 8,
            title: "Freshers & Students",
            desc: "The most in-demand career path. Gain core skills in Linux, Git, Cloud, and Kubernetes for junior roles.",
            icon: GraduationCap,
            color: "teal",
            benefits: ["Junior DevOps Path", "Future-proof Skills", "Competitive Entry"]
        },
        {
            id: 9,
            title: "Startups & Founders",
            desc: "Move fast with limited teams. Automate infrastructure to reduce operational cost and scale globally.",
            icon: Rocket,
            color: "orange",
            benefits: ["Rapid Deployment", "Cost Optimization", "Lean Operations"]
        },
        {
            id: 10,
            title: "Project Managers",
            desc: "Gain better release planning, improved risk management, and data-driven delivery cycles.",
            icon: LineChart,
            color: "slate",
            benefits: ["Release Planning", "Risk Mitigation", "Velocity Tracking"]
        }
    ];

    const industryTrends = [
        "Cloud-native Applications",
        "Microservices Architecture",
        "Kubernetes Adoption",
        "AI/ML Deployment Pipelines",
        "Edge & IoT Infrastructure",
        "Zero-downtime Deployments"
    ];

    return (
        <div className="bg-[#0b0c10] min-h-screen text-slate-300 selection:bg-indigo-500/30 font-sans pb-40">
            {/* --- HERO SECTION --- */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-8">
                            <TargetIcon size={12} />
                            Module 02: Target Audience 2026
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-8 leading-[0.9]">
                            Who Needs <span className="text-indigo-500">DevOps?</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl font-medium leading-relaxed mb-12">
                            DevOps has evolved from a niche engineering practice into a <span className="text-white">core capability</span> required across the technology ecosystem. Organizations prioritising speed, automation, and continuous delivery make these skills <span className="text-indigo-400 italic">universally valuable.</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- MAIN CONTENT --- */}
            <section className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8 space-y-24">

                        <div>
                            <div className="flex items-center gap-4 mb-10">
                                <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase whitespace-nowrap">Professional Personas</h2>
                                <div className="h-px w-full bg-white/5" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {audiences.map((persona, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5 }}
                                        className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl flex flex-col transition-all hover:bg-white/[0.03] hover:border-indigo-500/30"
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={cn(
                                                "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg",
                                                `text-${persona.color}-400 bg-${persona.color}-500/10`
                                            )} style={{
                                                backgroundColor: `rgba(var(--${persona.color}-500-rgb, 99, 102, 241), 0.1)`,
                                                color: `var(--${persona.color}-400, #818cf8)`
                                            }}>
                                                <persona.icon size={20} />
                                            </div>
                                            <h3 className="text-base font-black text-white italic tracking-tight">{persona.title}</h3>
                                        </div>
                                        <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-6">
                                            {persona.desc}
                                        </p>
                                        <div className="mt-auto flex flex-wrap gap-2">
                                            {persona.benefits.map((tag, tIdx) => (
                                                <span key={tIdx} className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 bg-white/5 text-slate-400 rounded-md border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Why Now Section */}
                        <div className="p-10 bg-indigo-500/[0.03] border border-indigo-500/10 rounded-[3rem] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Zap size={80} className="text-indigo-500" />
                            </div>
                            <h3 className="text-2xl font-black text-white italic tracking-tighter mb-8">Why DevOps Skills Matter in 2026</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                {industryTrends.map((trend, tidx) => (
                                    <div key={tidx} className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,1)]" />
                                        <span className="text-sm font-bold text-slate-300">{trend}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase whitespace-nowrap">Final Summary</h2>
                            <p className="text-xl text-slate-400 leading-relaxed font-medium">
                                DevOps is <span className="text-white">no longer limited</span> to operations teams — it is a universal skill set across modern IT roles. Organizations seek professionals who can bridge development, infrastructure, and automation.
                            </p>
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
                                        { label: "Target Audience", current: true, path: "/target-audience" },
                                        { label: "Global Resources", current: false, path: "/resources" }
                                    ].map((step, i) => (
                                        <Link to={step.path} key={i} className="flex items-center gap-4 group cursor-pointer block">
                                            <div className={cn("w-1.5 h-1.5 rounded-full transition-all duration-300", step.current ? "bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,1)]" : "bg-slate-800 group-hover:bg-slate-600")} />
                                            <span className={cn("text-[11px] font-bold tracking-tight transition-colors", step.current ? "text-white" : "text-slate-600 group-hover:text-slate-400")}>{step.label}</span>
                                        </Link>
                                    ))}
                                </div>
                                <Link to="/introduction" className="w-full h-14 bg-white/5 border border-white/5 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-white/10 transition-all mb-4">
                                    Previous Module
                                </Link>
                                <Link to="/roadmap" className="w-full h-14 bg-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-indigo-500 transition-all">
                                    Go to Roadmap <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="p-8 border border-white/5 rounded-[2.5rem] bg-white/[0.01]">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shadow-inner">
                                        <CheckCircle2 size={28} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-white italic">Curriculum Ready</p>
                                        <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest mt-0.5">Updated: Feb 2026</p>
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

// Fallback Icon for Cloud if Lucide-React hasn't exported it properly in current version
const Cloud = ({ size, className }) => (
    <svg
        width={size} height={size} viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className={className}
    >
        <path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.4-1.9-4.5-4.5-4.5h-.1l-.4-1.6c-.6-3-3.2-5.4-6.3-5.4-2.8 0-5.3 1.9-6.1 4.6l-.3 1.4C2.1 9.4 0 11.5 0 14.3 0 17.2 2.3 19.5 5.2 19.5h12.3" />
    </svg>
);

export default TargetAudience;
