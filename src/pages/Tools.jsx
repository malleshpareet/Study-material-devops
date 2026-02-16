import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Star, Sparkles, Plus } from 'lucide-react';
import ToolsGrid from '../components/ToolsGrid';

const Tools = () => {
    return (
        <div className="bg-[#020202] min-h-screen selection:bg-indigo-500/30 text-white">
            {/* Minimal Ambient Glows */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <main className="relative z-10 container mx-auto px-6">
                {/* Clean God-Tier Header */}
                <header className="pt-48 pb-32 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-10"
                    >
                        <Star size={12} className="fill-indigo-400" />
                        Industry Standards
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter mb-10 leading-none">
                        The <span className="text-indigo-500">Stack.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed mb-16 px-4">
                        A precision-engineered collection of the world's most powerful DevOps technologies. Optimized for scale and performance.
                    </p>

                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
                </header>

                <div className="space-y-48">
                    <section>
                        <div className="flex items-center gap-6 mb-20">
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase tracking-[0.2em]">Essential Arsenal</h2>
                                <div className="h-[2px] w-12 bg-indigo-500 mt-2 rounded-full" />
                            </div>
                            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                        </div>
                        <ToolsGrid />
                    </section>

                    {/* Dark Minimalist CTA */}
                    <section className="pb-40">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[4rem]"
                        >
                            <div className="bg-[#020202] rounded-[3.9rem] p-12 md:p-24 overflow-hidden relative">
                                {/* Inner Glow */}
                                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

                                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-20">
                                    <div className="flex-1 text-center lg:text-left">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-8">
                                            <Sparkles size={12} />
                                            Community Driven
                                        </div>
                                        <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter mb-8 leading-tight">
                                            Missing a <span className="text-indigo-500">Component?</span>
                                        </h2>
                                        <p className="text-lg text-slate-500 mb-12 max-w-xl font-medium leading-relaxed">
                                            The ecosystem evolves every day. If there's a tool that's fundamental to your pipeline, let us know and we'll integrate it.
                                        </p>

                                        <motion.button
                                            whileTap={{ scale: 0.95 }}
                                            whileHover={{ scale: 1.02 }}
                                            className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-2xl font-black text-lg transition-all shadow-xl shadow-white/5 group"
                                        >
                                            Suggest a Tool
                                            <Plus size={20} className="group-hover:rotate-90 transition-transform duration-500" />
                                        </motion.button>
                                    </div>

                                    <div className="flex-1 w-full max-w-lg hidden lg:block">
                                        <div className="p-12 rounded-[3rem] bg-white/5 border border-white/10 relative group overflow-hidden aspect-video flex flex-col items-center justify-center text-center">
                                            <Wrench size={60} strokeWidth={1} className="text-indigo-500/20 mb-8 group-hover:text-indigo-500/40 group-hover:rotate-12 transition-all duration-700" />
                                            <p className="text-slate-600 font-mono text-[10px] uppercase tracking-[0.4em] leading-relaxed">Infrastructure As Code<br />Configuration Management</p>

                                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Tools;
