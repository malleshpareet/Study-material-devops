import React from 'react';
import { motion } from 'framer-motion';
import { FileCode, Sparkles, Star, Users } from 'lucide-react';
import { projectsData } from '../data/roadmapData';
import ProjectCard from '../components/ProjectCard';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const Projects = () => {
    return (
        <div className="bg-[#020202] min-h-screen selection:bg-indigo-500/30 text-white">
            {/* Minimal Ambient Glows */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
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
                        Practical Mastery
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter mb-10 leading-none">
                        Build to <span className="text-indigo-500">Pro.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed mb-16 px-4">
                        Theory is just the beginning. Apply your expertise by crafting industry-grade architectures and automated pipelines.
                    </p>

                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
                </header>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-48"
                >
                    {projectsData.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </motion.div>

                {/* Refined Community CTA */}
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
                                        <Users size={12} />
                                        Engineer Network
                                    </div>
                                    <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter mb-8 leading-tight">
                                        Need a <span className="text-indigo-500">Review?</span>
                                    </h2>
                                    <p className="text-lg text-slate-500 mb-12 max-w-xl font-medium leading-relaxed">
                                        Don't build in isolation. Join our community of senior architects to get feedback on your CI/CD pipelines and cloud deployments.
                                    </p>

                                    <a
                                        href="https://github.com/techiescamp/devops-projects/tree/main"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block"
                                    >
                                        <motion.button
                                            whileTap={{ scale: 0.95 }}
                                            whileHover={{ scale: 1.02 }}
                                            className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-2xl font-black text-lg transition-all shadow-xl shadow-white/5 group"
                                        >
                                            Join Engineering Alpha
                                            <FileCode size={20} className="group-hover:rotate-12 transition-transform" />
                                        </motion.button>
                                    </a>
                                </div>

                                <div className="flex-1 w-full max-w-lg hidden lg:block">
                                    <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 relative group overflow-hidden aspect-square flex flex-col items-center justify-center text-center">
                                        <FileCode size={80} strokeWidth={1} className="text-indigo-500/20 mb-8 group-hover:text-indigo-500/40 transition-colors duration-700" />
                                        <p className="text-slate-600 font-mono text-xs uppercase tracking-[0.3em]">Proprietary Patterns</p>
                                        <div className="absolute inset-x-10 bottom-10 h-1 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                animate={{ x: ['100%', '-100%'] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                className="w-1/2 h-full bg-indigo-500/20"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>
        </div>
    );
};

export default Projects;
