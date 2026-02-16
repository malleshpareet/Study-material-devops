import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Clock, ChevronRight, Zap, BookOpen } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useApp } from '../context/AppContext';
import { cn } from '../utils/cn';

const StageCard = ({ stage, index }) => {
    const { completedStages, toggleStage } = useApp();
    const isCompleted = completedStages.includes(stage.id);
    const Icon = LucideIcons[stage.icon] || LucideIcons.HelpCircle;

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={cn(
                "group relative bg-white/5 border backdrop-blur-xl rounded-[2.5rem] p-6 md:p-8 transition-all duration-500",
                isCompleted
                    ? "border-emerald-500/30 shadow-2xl shadow-emerald-500/5 bg-emerald-500/[0.02]"
                    : "border-white/10 shadow-2xl shadow-black hover:border-indigo-500/40 hover:bg-white/[0.07]"
            )}
        >
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                {/* Visual Icon Area */}
                <div className={cn(
                    "w-16 h-16 rounded-[1.5rem] flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-105 shadow-2xl border",
                    isCompleted
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : "bg-white/5 text-slate-500 border-white/10 group-hover:bg-indigo-500/10 group-hover:text-indigo-400 group-hover:border-indigo-500/20"
                )}>
                    <Icon size={30} strokeWidth={1.5} />
                </div>

                {/* Content Area */}
                <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={cn(
                            "text-[9px] font-black px-3 py-1 rounded-lg uppercase tracking-widest border",
                            stage.level === 'Beginner' ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                                stage.level === 'Intermediate' ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
                                    "bg-rose-500/10 text-rose-400 border-rose-500/20"
                        )}>
                            {stage.level}
                        </span>
                        <div className="flex items-center gap-1.5 text-slate-500">
                            <Clock size={14} />
                            <span className="text-[10px] font-bold uppercase tracking-wider">{stage.time}</span>
                        </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-black text-white mb-2 group-hover:text-indigo-400 transition-colors tracking-tighter italic">
                        {stage.title}
                    </h3>

                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-4 font-medium opacity-80 max-w-xl">
                        {stage.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {stage.tools.map((tool, i) => (
                            <span key={i} className="text-[10px] font-bold px-3 py-1.5 bg-white/5 text-slate-400 border border-white/10 rounded-xl group-hover:border-indigo-500/30 group-hover:text-indigo-300 transition-colors">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Actions Area */}
                <div className="lg:w-48 flex lg:flex-col items-center gap-3">
                    <button
                        onClick={() => toggleStage(stage.id)}
                        className={cn(
                            "flex-1 lg:w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 active:scale-95 shadow-xl",
                            isCompleted
                                ? "bg-emerald-500 text-white shadow-emerald-500/20"
                                : "bg-white text-black hover:bg-slate-100 shadow-white/5"
                        )}
                    >
                        {isCompleted ? <CheckCircle2 size={16} /> : <Zap size={14} />}
                        {isCompleted ? 'Finished' : 'Mark Ready'}
                    </button>

                    <Link
                        to={`/curriculum/${stage.id}`}
                        className="flex items-center gap-2 text-slate-500 hover:text-indigo-400 font-black text-[10px] uppercase tracking-[0.2em] group/btn py-2 transition-colors"
                    >
                        <BookOpen size={14} />
                        Curriculum
                        <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Subtle stage number background */}
            <div className="absolute top-4 right-8 font-black text-[120px] text-white/[0.03] pointer-events-none select-none italic leading-none">
                {stage.stage}
            </div>
        </motion.div>
    );
};

export default StageCard;
