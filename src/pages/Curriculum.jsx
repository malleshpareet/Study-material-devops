import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Share2,
    MessageSquare,
    Youtube,
    ExternalLink,
    ChevronDown,
    ChevronRight,
    ChevronLeft,
    BookOpen,
    Menu,
    X,
    Check,
    Search,
    Clock,
    Zap,
    Book
} from 'lucide-react';
import { roadmapData } from '../data/roadmapData';
import { cn } from '../utils/cn';

const Curriculum = () => {
    const { id } = useParams();
    const [activeModuleIndex, setActiveModuleIndex] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [copied, setCopied] = useState(false);

    const stage = roadmapData?.find(s => String(s.id) === String(id));

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [activeModuleIndex, id]);

    if (!stage) return <Navigate to="/roadmap" />;

    const modules = stage.curriculum || [];
    const currentModule = modules[activeModuleIndex] || modules[0] || {};

    // Grouping for Sidebar (Matching Roadmap Phases)
    const phases = [
        { name: "01. Orientation", items: roadmapData.slice(0, 4) },
        { name: "02. Foundations", items: roadmapData.slice(4, 8) },
        { name: "03. Core Engineering", items: roadmapData.slice(8, 12) },
        { name: "04. Advanced Platforms", items: roadmapData.slice(12, 16) },
    ];

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-[#0b0c10] min-h-screen text-slate-300 selection:bg-indigo-500/30 font-sans pt-16">
            {/* Top GFG Style Nav */}
            <nav className="fixed top-16 left-0 right-0 z-40 bg-[#12141d] border-b border-white/5 h-12 flex items-center px-10 overflow-hidden shadow-2xl">
                <div className="flex gap-8 overflow-x-auto no-scrollbar h-full">
                    {["DevOps Tutorial", "Interview Ques", "Quizzes", "Industry Best Practices", "System Design", "Cloud Architecture"].map((tab, i) => (
                        <button
                            key={i}
                            className={cn(
                                "text-[10px] font-black uppercase tracking-widest whitespace-nowrap px-2 transition-all border-b-2 h-full flex items-center",
                                i === 0 ? "text-indigo-400 border-indigo-500" : "text-slate-500 hover:text-slate-300 border-transparent"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </nav>

            <div className="flex pt-12">
                {/* --- SIDEBAR --- */}
                <aside
                    className={cn(
                        "fixed lg:sticky top-28 h-[calc(100vh-112px)] z-50 bg-[#0d0f16] border-r border-white/5 transition-all duration-300 flex flex-col overflow-hidden",
                        isSidebarOpen ? "w-80 translate-x-0" : "w-0 -translate-x-full lg:w-0 lg:translate-x-0 lg:border-none"
                    )}
                >
                    <div className="p-5 border-b border-white/5 bg-black/20">
                        <span className="text-white font-black text-sm tracking-tight italic uppercase">Course <span className="text-indigo-500">Modules</span></span>
                        <div className="flex items-center gap-2 mt-2">
                            <Zap size={10} className="text-indigo-500" />
                            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em]">16 Technical Steps</span>
                        </div>
                    </div>

                    <div className="p-4 overflow-y-auto flex-1 custom-scrollbar space-y-6">
                        {phases.map((phase, pIdx) => (
                            <div key={pIdx}>
                                <div className="text-[10px] font-black text-slate-700 uppercase tracking-[0.3em] mb-3 px-3">
                                    {phase.name}
                                </div>
                                <div className="space-y-1">
                                    {phase.items.map((s) => (
                                        <div key={s.id} className="group/item">
                                            <Link
                                                to={`/curriculum/${s.id}`}
                                                className={cn(
                                                    "w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center justify-between text-sm font-bold border",
                                                    String(id) === String(s.id)
                                                        ? "bg-indigo-600/10 border-indigo-500/20 text-white"
                                                        : "bg-transparent border-transparent text-slate-500 hover:bg-white/5"
                                                )}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={cn(
                                                        "w-1.5 h-1.5 rounded-full transition-all duration-500",
                                                        String(id) === String(s.id) ? "bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,1)] scale-125" : "bg-slate-800"
                                                    )} />
                                                    <span className="truncate text-xs tracking-tight">{s.title}</span>
                                                </div>
                                                <ChevronRight size={14} className={cn("transition-transform", String(id) === String(s.id) ? "rotate-90 text-indigo-500" : "opacity-0 group-hover/item:opacity-100")} />
                                            </Link>

                                            {/* Sub-modules for current active stage */}
                                            {String(id) === String(s.id) && (
                                                <div className="ml-5 mt-1 pb-2 border-l border-indigo-500/10 pl-4 flex flex-col gap-1">
                                                    {modules.map((m, mIdx) => (
                                                        <button
                                                            key={mIdx}
                                                            onClick={() => setActiveModuleIndex(mIdx)}
                                                            className={cn(
                                                                "text-left p-2 rounded-lg text-[10px] font-bold tracking-tight transition-all",
                                                                mIdx === activeModuleIndex ? "text-indigo-400 bg-indigo-500/5 shadow-inner" : "text-slate-600 hover:text-slate-400"
                                                            )}
                                                        >
                                                            {m.title}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-4 border-t border-white/5 bg-black/40">
                        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex items-center justify-between">
                            <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Progress</span>
                            <span className="bg-emerald-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow-lg">Level 0{stage.stage || 1}</span>
                        </div>
                    </div>
                </aside>

                {/* --- MAIN CONTENT --- */}
                <main className="flex-1 min-w-0 bg-[#0b0b0f] px-6 lg:px-20 py-10 pb-40">
                    <div className="max-w-4xl mx-auto">
                        <header className="mb-10 text-left border-b border-white/5 pb-10">
                            <div className="flex items-center justify-between gap-4 mb-4">
                                <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter italic leading-none">
                                    {currentModule.title || stage.title}
                                </h1>
                                <div className="flex items-center gap-3 shrink-0">
                                    <button onClick={handleCopy} className="p-2.5 rounded-full bg-white/5 border border-white/5 text-slate-500 hover:text-white transition-all relative">
                                        {copied ? <Check size={16} className="text-emerald-400" /> : <Share2 size={16} />}
                                    </button>
                                    <button className="p-2.5 rounded-full bg-white/5 border border-white/5 text-slate-500 hover:text-white transition-all">
                                        <MessageSquare size={16} />
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-6 text-[10px] text-slate-600 font-black uppercase tracking-[0.2em]">
                                <div className="flex items-center gap-2">
                                    <Clock size={12} className="text-indigo-500" />
                                    Updated: <span className="text-slate-300">{currentModule.lastUpdated || 'Feb 2026'}</span>
                                </div>
                                <div className="h-3 w-px bg-white/5" />
                                <div className="flex items-center gap-2">
                                    <Book size={12} className="text-indigo-500" />
                                    Step <span className="text-slate-300">0{stage.id} of 16</span>
                                </div>
                            </div>
                        </header>

                        <div className="space-y-10 text-slate-400 text-lg leading-[1.8]">
                            <p className="text-slate-200 font-medium text-xl md:text-2xl leading-relaxed">
                                {currentModule.content || stage.description}
                            </p>

                            {currentModule.points && (
                                <ul className="space-y-4 my-10">
                                    {currentModule.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                                            <p className="text-base text-slate-400">
                                                <span className="text-slate-100 font-black italic pr-2">{point.split(' ')[0]}</span>
                                                {point.split(' ').slice(1).join(' ')}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {currentModule.subsections?.map((sub, i) => (
                                <div key={i} className="pt-10 space-y-6">
                                    <h2 className="text-2xl font-black text-white italic tracking-tighter flex items-center gap-3">
                                        <span className="text-indigo-500 opacity-30 italic font-mono">{i + 1}.</span> {sub.title}
                                    </h2>
                                    <p className="text-base text-slate-400">{sub.content}</p>
                                </div>
                            ))}

                            {/* External Links */}
                            {currentModule.externalLinks && currentModule.externalLinks.length > 0 && (
                                <div className="pt-32 space-y-10">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-black text-slate-700 uppercase tracking-[0.4em] whitespace-nowrap">Technical Repository</span>
                                        <div className="h-px w-full bg-white/5" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {currentModule.externalLinks.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group p-6 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-indigo-500/30 hover:bg-indigo-500/[0.02] transition-all flex items-center justify-between"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className={cn(
                                                        "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                                                        link.type === 'video' ? "bg-rose-500/10 text-rose-500 group-hover:bg-rose-500 group-hover:text-white" : "bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white"
                                                    )}>
                                                        {link.type === 'video' ? <Youtube size={18} /> : <BookOpen size={18} />}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-white font-black text-xs group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{link.label}</span>
                                                        <span className="text-[8px] text-slate-700 uppercase tracking-widest font-black mt-1">{link.type === 'video' ? 'Video Case' : 'Documentation'}</span>
                                                    </div>
                                                </div>
                                                <ExternalLink size={14} className="text-slate-800 group-hover:text-white transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Section Navigation */}
                            <div className="mt-40 pt-12 border-t border-white/5 flex items-center justify-between">
                                <button
                                    onClick={() => setActiveModuleIndex(prev => Math.max(0, prev - 1))}
                                    disabled={activeModuleIndex === 0}
                                    className={cn(
                                        "px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all inline-flex items-center gap-2",
                                        activeModuleIndex === 0 ? "opacity-0 pointer-events-none" : "bg-white/5 border border-white/5 text-slate-600 hover:text-white"
                                    )}
                                >
                                    <ChevronLeft size={14} /> Back
                                </button>
                                <button
                                    onClick={() => setActiveModuleIndex(prev => Math.min(modules.length - 1, prev + 1))}
                                    disabled={activeModuleIndex === modules.length - 1 || modules.length === 0}
                                    className={cn(
                                        "px-8 py-3 rounded-xl bg-indigo-600 text-white font-black text-[10px] uppercase tracking-widest transition-all inline-flex items-center gap-2 shadow-xl shadow-indigo-500/20 hover:bg-indigo-500",
                                        (activeModuleIndex === modules.length - 1 || modules.length === 0) ? "opacity-0 pointer-events-none" : ""
                                    )}
                                >
                                    Next Phase <ChevronRight size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Mobile Sidebar Toggle */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center z-[70]"
            >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
    );
};

export default Curriculum;
