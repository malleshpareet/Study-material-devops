import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, Github, Chrome, CheckCircle2, ShieldCheck, Sparkles, Layout, Globe } from 'lucide-react';
import logo from '../assets/logo.png';

const FeatureItem = ({ icon: Icon, title, description }) => (
    <div className="flex gap-4">
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-indigo-400">
            <Icon size={20} />
        </div>
        <div>
            <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
            <p className="text-slate-400 text-xs leading-relaxed">{description}</p>
        </div>
    </div>
);

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="bg-[#000] h-screen w-full flex relative overflow-hidden font-sans">
            {/* Left Side: Branding & Marketing */}
            <div className="hidden lg:flex flex-col flex-1 relative bg-[#050505] border-r border-white/5 p-16 overflow-hidden">
                {/* Visual Background */}
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-indigo-500/10 to-transparent blur-[100px] pointer-events-none" />
                <div
                    className="absolute inset-0 opacity-[0.1]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '32px 32px'
                    }}
                />

                <div className="relative z-10 flex flex-col h-full">
                    <Link to="/" className="mb-20">
                        <img src={logo} alt="DevOps Roadmap" className="h-10 w-auto hover:scale-105 transition-transform duration-300" />
                    </Link>

                    <div className="max-w-md">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-semibold text-white tracking-tight mb-6 leading-tight">
                                The engineering masterclass for <span className="text-indigo-500">2026.</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-12">
                                Join 50,000+ engineers mastering the art of modern infrastructure.
                            </p>

                            <div className="space-y-8">
                                <FeatureItem
                                    icon={Layout}
                                    title="Curated Path"
                                    description="Step-by-step guidance from Linux basics to multi-cloud orchestration."
                                />
                                <FeatureItem
                                    icon={Sparkles}
                                    title="Premium Projects"
                                    description="Build and deploy full-stack systems with production-grade CI/CD."
                                />
                                <FeatureItem
                                    icon={Globe}
                                    title="Global Community"
                                    description="Connect with elite DevOps professionals and industry leaders."
                                />
                            </div>
                        </motion.div>
                    </div>

                    <div className="mt-auto pt-16 border-t border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] bg-slate-800" />
                                ))}
                            </div>
                            <p className="text-xs text-slate-500 font-medium tracking-tight">
                                <span className="text-white">5-star rating</span> from our early batch graduates.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 lg:px-20 relative bg-[#000]">
                {/* Mobile Logo */}
                <div className="lg:hidden mb-12">
                    <img src={logo} alt="DevOps Roadmap" className="h-10 w-auto mx-auto hover:scale-105 transition-transform duration-300" />
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-[400px]"
                >
                    <div className="mb-8">
                        <h1 className="text-2xl font-semibold text-white tracking-tight mb-2">Create your account</h1>
                        <p className="text-slate-500 text-sm">Experience the elite roadmap today.</p>
                    </div>

                    <form className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-slate-400 ml-1">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder:text-slate-700 focus:outline-none focus:border-indigo-500 transition-all font-sans"
                                    placeholder="Linus Torvalds"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-slate-400 ml-1">Work Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder:text-slate-700 focus:outline-none focus:border-indigo-500 transition-all font-sans"
                                    placeholder="linus@linux.org"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-slate-400 ml-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder:text-slate-700 focus:outline-none focus:border-indigo-500 transition-all font-sans"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-2 py-2">
                            <ShieldCheck size={14} className="text-indigo-500" />
                            <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Enterprise AES-256 Encryption</p>
                        </div>

                        <motion.button
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-indigo-600 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-500/10 text-sm"
                        >
                            Create Account
                            <ArrowRight size={16} />
                        </motion.button>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/5"></div>
                        </div>
                        <div className="relative flex justify-center text-[10px] uppercase tracking-widest">
                            <span className="bg-[#000] px-4 text-slate-600 font-bold tracking-widest leading-none">Social Account</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center gap-2 py-2.5 bg-[#0a0a0a] border border-white/10 rounded-xl hover:bg-white/[0.05] transition-all text-sm font-medium text-slate-300">
                            <Github size={18} />
                        </button>
                        <button className="flex items-center justify-center gap-2 py-2.5 bg-[#0a0a0a] border border-white/10 rounded-xl hover:bg-white/[0.05] transition-all text-sm font-medium text-slate-300">
                            <Chrome size={18} />
                        </button>
                    </div>

                    <p className="text-center mt-8 text-slate-500 text-sm">
                        Already joined? <Link to="/login" className="text-white font-medium hover:underline decoration-indigo-500 underline-offset-4">Sign in</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default SignUp;
