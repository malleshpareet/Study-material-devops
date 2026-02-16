import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Hexagon,
    Layers,
    Zap,
    ExternalLink,
    ArrowRight,
    ChevronLeft,
    Cpu,
    Network,
    ShieldCheck,
    Globe,
    Activity,
    BookOpen,
    Youtube,
    Play,
    Server,
    Container,
    Layout,
    Cloud
} from 'lucide-react';
import { cn } from '../utils/cn';

const ContainerOrchestration = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const k8sCoreConcepts = [
        {
            title: "Control Plane",
            desc: "The brain of the cluster. Manages scheduling, API communication, and cluster state via etcd.",
            icon: Cpu,
            color: "blue",
            topics: ["API Server", "Scheduler", "Controller Manager", "etcd"]
        },
        {
            title: "Worker Nodes",
            desc: "The muscle. Where your containers actually run. Managed by the Kubelet and Kube-proxy.",
            icon: Server,
            color: "sky",
            topics: ["Kubelet", "Container Runtime", "Kube-proxy", "Pods"]
        },
        {
            title: "Workload Objects",
            desc: "Declarative definitions of your apps. Managing desired state and automatic self-healing.",
            icon: Layers,
            color: "indigo",
            topics: ["Deployments", "ReplicaSets", "StatefulSets", "DaemonSets"]
        },
        {
            title: "Networking & Storage",
            desc: "How services talk and keep data. Dynamic provisioning and load balancing at scale.",
            icon: Network,
            color: "cyan",
            topics: ["Services", "Ingress", "PV/PVC", "ConfigMaps/Secrets"]
        }
    ];

    const resources = [
        {
            title: "Official Documentation",
            links: [
                { label: "Kubernetes Documentation", url: "https://kubernetes.io/docs/home/", type: "Docs" },
                { label: "Interactive Tutorials", url: "https://kubernetes.io/docs/tutorials/", type: "Guides" },
                { label: "Kubectl Cheat Sheet", url: "https://kubernetes.io/docs/reference/kubectl/cheatsheet/", type: "Reference" }
            ]
        },
        {
            title: "YouTube Masterclasses",
            links: [
                { label: "Kubernetes Tutorial for Beginners", url: "https://www.youtube.com/watch?v=X48VuDVv0do", type: "Video" },
                { label: "K8s Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=s_o8dwzRlu4", type: "Video" },
                { label: "Kubernetes in 10 Minutes", url: "https://www.youtube.com/watch?v=VnvRFRk_51k", type: "Video" }
            ]
        }
    ];

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
                            <Hexagon size={12} />
                            Module 12: Cluster Orchestration
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-8 leading-[0.9]">
                            Container <span className="text-blue-500">Orchestration.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed mb-12">
                            Mastering <span className="text-white font-bold italic text-blue-400">Kubernetes</span>. The standard for automating deployment, scaling, and management of containerized applications at massive scale.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- MAIN CONTENT --- */}
            <section className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8 space-y-24">

                        {/* Technical Deep Dive */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {k8sCoreConcepts.map((concept, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="p-10 bg-white/[0.01] border border-white/5 rounded-[3rem] flex flex-col transition-all hover:bg-white/[0.03] hover:border-blue-500/20 group"
                                >
                                    <div className={cn(
                                        "w-16 h-16 rounded-3xl flex items-center justify-center mb-8 shadow-2xl transition-transform group-hover:scale-110",
                                        concept.color === 'blue' ? "bg-blue-500/10 text-blue-400" :
                                            concept.color === 'sky' ? "bg-sky-500/10 text-sky-400" :
                                                concept.color === 'indigo' ? "bg-indigo-500/10 text-indigo-400" : "bg-cyan-500/10 text-cyan-400"
                                    )}>
                                        <concept.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-4 italic tracking-tight">{concept.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-8">{concept.desc}</p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {concept.topics.map((topic, tIdx) => (
                                            <span key={tIdx} className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-white/5 text-slate-400 rounded-md border border-white/5">
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Resource Hub */}
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
                                                    className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl group hover:bg-white/10 hover:border-blue-500/20 transition-all font-mono"
                                                >
                                                    <span className="text-[11px] font-bold text-slate-400 group-hover:text-white transition-colors uppercase tracking-widest">{link.label}</span>
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
                            <h3 className="text-2xl font-black text-white italic tracking-tighter mb-4">Declarative Infrastructure</h3>
                            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
                                Kubernetes follows a <span className="text-white">declarative model</span>. You tell the cluster the state you WANT (e.g., 'I want 5 copies of this app'), and the Control Plane works tirelessly to ENSURE that state is matched, handling failures and self-healing automatically.
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
                                        { label: "CI/CD Pipelines", path: "/cicd-pipelines", current: false },
                                        { label: "Orchestration (K8s)", path: "/container-orchestration", current: true },
                                        { label: "Infrastructure as Code", path: "/curriculum/13", current: false },
                                    ].map((step, i) => (
                                        <Link to={step.path} key={i} className="flex items-center gap-4 group cursor-pointer block">
                                            <div className={cn("w-1.5 h-1.5 rounded-full transition-all duration-300", step.current ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]" : "bg-slate-800 group-hover:bg-slate-600")} />
                                            <span className={cn("text-[11px] font-bold tracking-tight transition-colors", step.current ? "text-white" : "text-slate-600 group-hover:text-slate-400")}>{step.label}</span>
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Link to="/cicd-pipelines" className="w-full h-14 bg-white/5 border border-white/5 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-white/10 transition-all">
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
                                        <Activity size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Global Status</p>
                                        <p className="text-white font-black italic">Cluster Healthy</p>
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

export default ContainerOrchestration;
