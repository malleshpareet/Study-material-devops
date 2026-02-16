import React from 'react';
import { motion } from 'framer-motion';
import { toolsData } from '../data/roadmapData';

const ToolsGrid = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {toolsData.map((tool, index) => (
                <motion.a
                    key={tool.name}
                    href={tool.docUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 100,
                        delay: index * 0.05
                    }}
                    whileHover={{ y: -8 }}
                    className="group relative flex flex-col items-center p-10 rounded-[2.5rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden cursor-pointer"
                >
                    {/* Subtle Highlight Reflection */}
                    <div className="absolute top-0 left-0 right-0 h-[80px] bg-gradient-to-b from-indigo-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="w-20 h-20 mb-10 bg-white/5 rounded-[2rem] flex items-center justify-center p-4 group-hover:bg-indigo-500/10 border border-white/10 group-hover:border-indigo-500/20 transition-all duration-500 relative z-10">
                        {tool.mandatory && (
                            <div className="absolute -top-2 -right-2 bg-indigo-500 text-[8px] font-black uppercase px-2 py-1 rounded-md shadow-lg shadow-indigo-500/20 z-20 border border-indigo-400/50">
                                Mandatory
                            </div>
                        )}
                        <img
                            src={tool.logoUrl}
                            alt={`${tool.name} logo`}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 filter brightness-110"
                        />
                    </div>

                    <h4 className="text-xl font-black text-white mb-2 tracking-tighter italic group-hover:text-indigo-400 transition-colors duration-300 relative z-10">
                        {tool.name}
                    </h4>
                    <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em] relative z-10 group-hover:text-slate-400 transition-colors">
                        {tool.category}
                    </span>

                    {/* Interactive highlight line - Minimal */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-indigo-500 rounded-full group-hover:w-8 transition-all duration-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
                </motion.a>
            ))}
        </div>
    );
};

export default ToolsGrid;
