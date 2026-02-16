import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    BarChart3,
    Activity,
    Zap,
    ExternalLink,
    ArrowRight,
    ChevronLeft,
    ShieldCheck,
    Cpu,
    BookOpen,
    Youtube,
    Play,
    Server,
    Layers,
    Search,
    Bell,
    Eye,
    LineChart,
    PieChart
} from 'lucide-react';
import { cn } from '../utils/cn';

const MonitoringLogging = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const observabilityPillars = [
        {
            title: "Metrics (Prometheus)",
            desc: "The numerical representation of system health. Tracking CPU, memory, and custom application metrics over time.",
            icon: LineChart,
            color: "emerald",
            topics: ["Time Series Data", "PromQL", "Exporters", "Alertmanager"]
        },
        {
            title: "Logging (ELK/Loki)",
            desc: "Recording discrete events. Analyzing text-based logs to understand what happened at a specific point in time.",
            icon: Search,
            color: "blue",
            topics: ["Structured Logging", "Log Aggregation", "Elasticsearch", "Loki"]
        },
        {
            title: "Tracing (Jaeger)",
            desc: "Following a request through microservices. Visualizing the path and latency of requests across your entire system.",
            icon: Activity,
            color: "amber",
            topics: ["Distributed Tracing", "Spans", "Context Propagation", "OpenTelemetry"]
        },
        {
            title: "Alerting & Dashboards",
            desc: "Converting data into action. Building high-fidelity Grafana dashboards and proactive paging systems.",
            icon: Bell,
            color: "rose",
            topics: ["Grafana", "SLOs/SLIs", "Error Budgets", "PagerDuty"]
        }
    ];

    const resources = [
        {
            title: "Observability Stack",
            links: [
                { label: "Prometheus Docs", url: "https://prometheus.io/docs/introduction/overview/", type: "Metrics" },
                { label: "Grafana Learning", url: "https://grafana.com/docs/grafana/latest/getting-started/", type: "Visuals" },
                { label: "Elastic Stack Guide", url: "https://www.elastic.co/guide/index.html", type: "Logging" },
                { label: "OpenTelemetry Docs", url: "https://opentelemetry.io/docs/", type: "Standard" }
            ]
        },
        {
            title: "Video Masterclasses",
            links: [
                { label: "Prometheus & Grafana Full Course", url: "https://www.youtube.com/watch?v=h4Sl21AK9fA", type: "Video" },
                { label: "ELK Stack Explained", url: "https://www.youtube.com/watch?v=4X5W-9Ew1-8", type: "Video" },
                { label: "What is Observability?", url: "https://www.youtube.com/watch?v=mP09I2N_f44", type: "Concept" }
            ]
        }
    ];

    return (
        <div className="bg-[#0b0c10] min-h-screen text-slate-300 selection:bg-emerald-500/30 font-sans pb-40 overflow-x-hidden">
            {/* --- HERO SECTION --- */}
            <section className="pt-40 pb-20 relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] mb-8">
                            <BarChart3 size={12} />
                            Module 16: Total System Visibility
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-8 leading-[0.9]">
                            Monitoring <span className="text-emerald-500">& Logging.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed mb-12">
                            The ultimate <span className="text-white font-bold italic text-emerald-400">Observability</span> suite. Stop guessing and start knowing exactly how your infrastructure breathes with real-time metrics and proactive alerting.
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
                            {observabilityPillars.map((pillar, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="p-10 bg-white/[0.01] border border-white/5 rounded-[3rem] flex flex-col transition-all hover:bg-white/[0.03] hover:border-emerald-500/20 group"
                                >
                                    <div className={cn(
                                        "w-16 h-16 rounded-3xl flex items-center justify-center mb-8 shadow-2xl transition-transform group-hover:scale-110",
                                        pillar.color === 'emerald' ? "bg-emerald-500/10 text-emerald-400" :
                                            pillar.color === 'blue' ? "bg-blue-500/10 text-blue-400" :
                                                pillar.color === 'amber' ? "bg-amber-500/10 text-amber-400" : "bg-rose-500/10 text-rose-400"
                                    )}>
                                        <pillar.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-4 italic tracking-tight">{pillar.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-8">{pillar.desc}</p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {pillar.topics.map((topic, tIdx) => (
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
                                <BookOpen size={28} className="text-emerald-500" />
                                Knowledge Hub
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {resources.map((section, i) => (
                                    <div key={i} className="p-8 bg-white/[0.01] border border-white/5 rounded-[3rem] space-y-6">
                                        <h4 className="text-lg font-black text-white italic tracking-tight flex items-center gap-3">
                                            {i === 0 ? <Eye size={20} className="text-emerald-500" /> : <Youtube size={20} className="text-rose-500" />}
                                            {section.title}
                                        </h4>
                                        <div className="space-y-3">
                                            {section.links.map((link, lIdx) => (
                                                <a
                                                    key={lIdx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl group hover:bg-white/10 hover:border-emerald-500/20 transition-all font-mono"
                                                >
                                                    <span className="text-[11px] font-bold text-slate-400 group-hover:text-white transition-colors uppercase tracking-widest">{link.label}</span>
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-[8px] font-black uppercase tracking-widest text-slate-600">{link.type}</span>
                                                        <ExternalLink size={12} className="text-slate-700 group-hover:text-emerald-500 transition-colors" />
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-10 bg-emerald-500/[0.03] border border-emerald-500/10 rounded-[3rem] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <ShieldCheck size={80} className="text-emerald-500" />
                            </div>
                            <h3 className="text-2xl font-black text-white italic tracking-tighter mb-4">Proactive Resolution</h3>
                            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
                                Monitoring isn't just about pretty graphs—it's about <span className="text-white font-bold">Alerting</span>. By defining clear Service Level Objectives (SLOs) and using Error Budgets, you can resolve issues before your customers even notice them, ensuring true 24/7 reliability.
                            </p>
                        </div>
                    </div>

                    {/* --- SIDEBAR --- */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-40 space-y-8">
                            <div className="p-8 bg-emerald-600/5 border border-emerald-500/20 rounded-[2.5rem] backdrop-blur-xl">
                                <h4 className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] mb-6">Learning Path</h4>
                                <div className="space-y-4 mb-10">
                                    {[
                                        { label: "Infrastructure as Code", path: "/infrastructure-as-code", current: false },
                                        { label: "Monitoring & Logging", path: "/monitoring-logging", current: true },
                                        { label: "Final Certification", path: "/curriculum/17", current: false },
                                    ].map((step, i) => (
                                        <Link to={step.path} key={i} className="flex items-center gap-4 group cursor-pointer block">
                                            <div className={cn("w-1.5 h-1.5 rounded-full transition-all duration-300", step.current ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,1)]" : "bg-slate-800 group-hover:bg-slate-600")} />
                                            <span className={cn("text-[11px] font-bold tracking-tight transition-colors", step.current ? "text-white" : "text-slate-600 group-hover:text-slate-400")}>{step.label}</span>
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Link to="/infrastructure-as-code" className="w-full h-14 bg-white/5 border border-white/5 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-white/10 transition-all">
                                        <ChevronLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Previous
                                    </Link>
                                    <Link to="/roadmap" className="w-full h-14 bg-emerald-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center group hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-500/20">
                                        Final Milestone Reached! <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            <div className="p-8 border border-white/5 rounded-[2.5rem] bg-white/[0.01]">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shadow-inner">
                                        <PieChart size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Global Status</p>
                                        <p className="text-white font-black italic">Operational / Secure</p>
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

export default MonitoringLogging;
