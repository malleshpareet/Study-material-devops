import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, Shield, Cpu, Cloud, ArrowRight, Star } from 'lucide-react';
import FloatingLines from '../components/FloatingLines';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#000]">
            {/* Original Animated Floating Lines */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <FloatingLines
                    enabledWaves={["top", "middle", "bottom"]}
                    lineCount={5}
                    lineDistance={5}
                    bendRadius={5}
                    bendStrength={-0.5}
                    interactive={true}
                    parallax={true}
                />
            </div>

            {/* Subtle Overlay to ensure text readability if needed */}
            <div className="absolute inset-0 z-[1] bg-black/10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    {/* Compact Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-2xl backdrop-blur-md">
                        <Star size={12} className="fill-white" />
                        Professional Guide
                    </div>

                    {/* Balanced Title */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1] tracking-tighter max-w-5xl mx-auto italic drop-shadow-2xl">
                        Master the <span className="text-indigo-400 drop-shadow-[0_0_20px_rgba(129,140,248,0.5)]">Infrastructure</span>
                    </h1>

                    {/* Refined Subtitle */}
                    <p className="text-base md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-12 font-medium opacity-90">
                        The most complete, community-focused roadmap for anyone aspiring to become a world-class DevOps engineer in 2026.
                    </p>

                    {/* Action Buttons - High Contrast for Dark Theme */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.02 }}>
                            <Link
                                to="/roadmap"
                                className="px-10 py-4 bg-white text-black hover:bg-slate-100 rounded-2xl font-black text-base transition-all shadow-xl shadow-white/5 min-w-[200px] flex items-center justify-center"
                            >
                                Start Learning
                            </Link>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.02 }}>
                            <a
                                href="/roadmap-guide.docx"
                                download
                                className="px-10 py-4 bg-transparent text-white hover:text-white border border-white/20 rounded-2xl font-black text-base transition-all backdrop-blur-sm shadow-xl min-w-[200px] flex items-center justify-center gap-2"
                            >
                                Download Guide
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const FeatureItem = ({ icon: Icon, title, desc, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all group backdrop-blur-xl"
    >
        <div className="w-14 h-14 bg-indigo-500/10 text-indigo-400 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner">
            <Icon size={28} strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight italic">{title}</h3>
        <p className="text-slate-400 leading-relaxed font-medium opacity-80 text-sm">{desc}</p>
    </motion.div>
);

const Home = () => {
    return (
        <div className="bg-[#000] selection:bg-indigo-500/30">
            <Hero />

            <div className="space-y-40 pb-40 mt-32">
                <section className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <FeatureItem
                            index={0}
                            icon={Cpu}
                            title="Modern Tech"
                            desc="Stay ahead with tools companies actually look for in 2026, from K8s to serverless IaC."
                        />
                        <FeatureItem
                            index={1}
                            icon={Shield}
                            title="Security Focus"
                            desc="DevSecOps is the core of our path. Learn to build secure, resilient infrastructure from day one."
                        />
                        <FeatureItem
                            index={2}
                            icon={Cloud}
                            title="Cloud Mastery"
                            desc="Bridge the gap between AWS, GCP and Azure with cloud-agnostic principles that scale."
                        />
                    </div>
                </section>

                <section className="container mx-auto px-6">
                    <div className="bg-indigo-950/20 border border-white/5 backdrop-blur-xl rounded-[4rem] p-20 text-center relative overflow-hidden shadow-2xl">
                        {/* Glow effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter italic">Ready to climb the ladder?</h2>
                            <p className="text-slate-300 text-lg md:text-xl mb-14 max-w-2xl mx-auto font-medium opacity-90">
                                Our roadmap is divided into 12 intensive stages, designed to take you from total beginner to industry-standard DevOps architect.
                            </p>
                            <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.02 }} className="inline-block">
                                <Link
                                    to="/roadmap"
                                    className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-3xl font-bold text-xl hover:bg-slate-50 transition-all shadow-xl group"
                                >
                                    View Roadmap
                                    <ArrowRight size={24} strokeWidth={2.5} className="group-hover:translate-x-1.5 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>
                        <div className="absolute top-0 right-0 p-20 opacity-10">
                            <Rocket size={300} strokeWidth={1} className="text-white" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
