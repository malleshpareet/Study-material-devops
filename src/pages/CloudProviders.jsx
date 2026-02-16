import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Cloud,
    ShieldCheck,
    Zap,
    ExternalLink,
    ArrowRight,
    ChevronLeft,
    Cpu,
    Database,
    Network,
    Lock,
    Container,
    Layers,
    Server,
    Globe,
    Activity,
    BookOpen
} from 'lucide-react';
import { cn } from '../utils/cn';

const CloudProviders = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const providers = [
        {
            name: "AWS (Amazon Web Services)",
            desc: "The market leader with the most extensive ecosystem. Known for its 'Build everything yourself' philosophy and deep technical control.",
            color: "orange",
            officialUrl: "https://aws.amazon.com/",
            keyServices: ["EC2 (Compute)", "S3 (Storage)", "RDS (Database)", "IAM (Security)", "VPC (Network)"]
        },
        {
            name: "Microsoft Azure",
            desc: "The enterprise powerhouse. Seamless integration with active directory and Windows ecosystems. Strongest hybrid cloud presence.",
            color: "blue",
            officialUrl: "https://azure.microsoft.com/",
            keyServices: ["Azure VMs", "Blob Storage", "SQL Database", "Entra ID", "VNet"]
        },
        {
            name: "GCP (Google Cloud Platform)",
            desc: "The engineer's choice. Built on Google's internal scale tech. Home of Kubernetes and advanced data/AI offerings.",
            color: "emerald",
            officialUrl: "https://cloud.google.com/",
            keyServices: ["Compute Engine", "GCS", "Cloud Spanner", "Cloud IAM", "Cloud VPC"]
        }
    ];

    const coreMechanics = [
        {
            title: "Identity & Access (IAM)",
            desc: "Who can do what? Mastering Roles, Policies, and multi-factor authentication across resources.",
            icon: Lock,
            color: "rose"
        },
        {
            title: "Virtual Private Cloud (VPC)",
            desc: "Isolated network environments. Managing subnets, route tables, and internet gateways.",
            icon: Network,
            color: "indigo"
        },
        {
            title: "Compute & Serverless",
            desc: "From bare metal VMs to ephemeral functions. Understanding when to use Lambda vs EC2.",
            icon: Cpu,
            color: "amber"
        },
        {
            title: "Managed Services",
            desc: "Focus on code, not hardware. Leveraging managed Databases, K8s, and Messaging systems.",
            icon: Layers,
            color: "sky"
        }
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
                            <Cloud size={12} />
                            Module 09: Cloud Infrastructure
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-8 leading-[0.9]">
                            Cloud <span className="text-indigo-500">Providers.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed mb-12">
                            The backbone of modern DevOps. Master the <span className="text-white">mechanical internals</span> of the world's most powerful platforms to build global-scale applications.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- MAIN CONTENT --- */}
            <section className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8 space-y-24">

                        {/* THE BIG THREE */}
                        <div className="space-y-12">
                            <h2 className="text-3xl font-black text-white italic tracking-tight uppercase flex items-center gap-4">
                                <Globe size={28} className="text-indigo-500" />
                                The Big Three
                            </h2>

                            <div className="space-y-6">
                                {providers.map((p, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 10 }}
                                        className="p-8 bg-white/[0.01] border border-white/5 rounded-[2.5rem] hover:bg-white/[0.03] hover:border-indigo-500/20 transition-all group"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                                            <div className="flex-1">
                                                <h3 className={cn("text-2xl font-black italic tracking-tighter mb-4", p.color === 'orange' ? 'text-orange-500' : p.color === 'blue' ? 'text-blue-500' : 'text-emerald-500')}>
                                                    {p.name}
                                                </h3>
                                                <p className="text-slate-400 leading-relaxed max-w-2xl mb-6">
                                                    {p.desc}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {p.keyServices.map((s, sIdx) => (
                                                        <span key={sIdx} className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 bg-white/5 text-slate-500 rounded border border-white/5">
                                                            {s}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <a
                                                href={p.officialUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="h-14 px-8 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-2 text-white font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all"
                                            >
                                                Visit Site <ExternalLink size={14} />
                                            </a>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Internal Mechanics */}
                        <div className="space-y-12">
                            <h2 className="text-3xl font-black text-white italic tracking-tight uppercase flex items-center gap-4">
                                <Layers size={28} className="text-indigo-500" />
                                Mechanical Foundation
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {coreMechanics.map((mech, i) => (
                                    <div key={i} className="p-8 bg-white/[0.01] border border-white/5 rounded-[2.5rem] flex flex-col group hover:border-indigo-500/20 transition-all">
                                        <div className={cn(
                                            "w-12 h-12 rounded-2xl flex items-center justify-center mb-6",
                                            mech.color === 'rose' ? 'bg-rose-500/10 text-rose-400' :
                                                mech.color === 'indigo' ? 'bg-indigo-500/10 text-indigo-400' :
                                                    mech.color === 'amber' ? 'bg-amber-500/10 text-amber-400' : 'bg-sky-500/10 text-sky-400'
                                        )}>
                                            <mech.icon size={24} />
                                        </div>
                                        <h4 className="text-xl font-black text-white italic mb-4">{mech.title}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">{mech.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-10 bg-indigo-500/[0.03] border border-indigo-500/10 rounded-[3rem]">
                            <p className="text-lg text-slate-400 leading-relaxed italic">
                                "The Cloud is just someone else's computer." — while partially true, the real power lies in the <span className="text-white">API-driven automation layers</span> that allow you to provision thousands of servers with a single line of code.
                            </p>
                        </div>
                    </div>

                    {/* --- SIDEBAR --- */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-40 space-y-8">
                            <div className="p-8 bg-indigo-600/5 border border-indigo-500/20 rounded-[2.5rem] backdrop-blur-xl">
                                <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-6">Learning Path</h4>
                                <div className="space-y-4 mb-10">
                                    {[
                                        { label: "Programming Mastery", path: "/programming-languages", current: false },
                                        { label: "Cloud Providers", path: "/cloud-providers", current: true },
                                        { label: "Containerization", path: "/curriculum/10", current: false },
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-center gap-4 group cursor-pointer block">
                                            <div className={cn("w-1.5 h-1.5 rounded-full transition-all duration-300", step.current ? "bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,1)]" : "bg-slate-800 group-hover:bg-slate-600")} />
                                            {step.current ? (
                                                <span className="text-[11px] font-bold tracking-tight text-white">{step.label}</span>
                                            ) : (
                                                <Link to={step.path} className="text-[11px] font-bold tracking-tight text-slate-600 group-hover:text-slate-400 transition-colors">{step.label}</Link>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Link to="/programming-languages" className="w-full h-14 bg-white/5 border border-white/5 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-white/10 transition-all">
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
                                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Global Status</p>
                                        <p className="text-white font-black italic">Providers Active</p>
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

export default CloudProviders;
