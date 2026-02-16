import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                damping: 25,
                stiffness: 100,
                delay: index * 0.1
            }}
            whileHover={{ y: -8 }}
            className="group relative flex flex-col p-8 rounded-[2.5rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden"
        >
            {/* Subtle Highlight Reflection */}
            <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-indigo-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="w-12 h-12 bg-white/5 text-indigo-400 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 transition-all duration-500">
                    <Terminal size={22} strokeWidth={1.5} />
                </div>
                <span className={cn(
                    "text-[9px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest border transition-all duration-300",
                    project.difficulty === 'Beginner' ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                        project.difficulty === 'Intermediate' ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
                            "bg-rose-500/10 text-rose-400 border-rose-500/20"
                )}>
                    {project.difficulty}
                </span>
            </div>

            <h3 className="text-2xl font-black text-white mb-4 group-hover:text-indigo-400 transition-colors tracking-tighter italic relative z-10">
                {project.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium relative z-10">
                {project.description}
            </p>

            <div className="mb-10 relative z-10">
                <h4 className="text-[10px] font-black text-slate-600 mb-4 uppercase tracking-[0.2em] italic text-left group-hover:text-slate-500 transition-colors">Core Stack</h4>
                <div className="flex flex-wrap gap-2">
                    {project.tools.map(tool => (
                        <span key={tool} className="px-3.5 py-1.5 bg-white/5 border border-white/5 rounded-xl text-[10px] font-black text-slate-500 group-hover:border-indigo-500/20 group-hover:text-slate-400 transition-all">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex gap-4 relative z-10 mt-auto">
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                >
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-white text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-white/5 hover:bg-slate-100"
                    >
                        View Project
                        <ChevronRight size={18} strokeWidth={2.5} />
                    </motion.button>
                </a>
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="w-14 h-14 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white rounded-2xl flex items-center justify-center transition-all"
                    >
                        <Github size={22} strokeWidth={1.5} />
                    </motion.button>
                </a>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
