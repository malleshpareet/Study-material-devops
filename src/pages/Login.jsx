import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Github, Chrome, Shield } from 'lucide-react';
import logo from '../assets/logo.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="bg-[#000] h-screen w-full flex items-center justify-center relative overflow-hidden font-sans">
            {/* Professional Grid Background */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Subtle Gradient Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-[420px] px-6">
                <div className="text-center mb-8">
                    <Link to="/" className="inline-block mb-8">
                        <img src={logo} alt="DevOps Roadmap" className="h-10 w-auto mx-auto hover:scale-105 transition-transform duration-300" />
                    </Link>
                    <h1 className="text-2xl font-semibold tracking-tight text-white mb-2">
                        Sign in to your account
                    </h1>
                    <p className="text-slate-400 text-sm">
                        Welcome back! Please enter your details.
                    </p>
                </div>

                <div className="bg-[#050505] border border-white/5 rounded-3xl p-8 shadow-2xl">
                    <form className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-slate-400 ml-1">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder:text-slate-700 focus:outline-none focus:border-indigo-500 transition-all"
                                    placeholder="name@company.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-xs font-medium text-slate-400">Password</label>
                                <button type="button" className="text-[11px] font-medium text-indigo-400 hover:text-indigo-300 transition-colors">Forgot password?</button>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder:text-slate-700 focus:outline-none focus:border-indigo-500 transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <motion.button
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-white text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-100 transition-all shadow-lg text-sm"
                        >
                            Continue
                            <ArrowRight size={16} />
                        </motion.button>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/5"></div>
                        </div>
                        <div className="relative flex justify-center text-[10px] uppercase tracking-widest">
                            <span className="bg-[#050505] px-4 text-slate-600 font-bold">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center gap-2 py-2.5 bg-[#0a0a0a] border border-white/10 rounded-xl hover:bg-white/[0.05] transition-all text-xs font-medium text-slate-300">
                            <Github size={16} />
                            GitHub
                        </button>
                        <button className="flex items-center justify-center gap-2 py-2.5 bg-[#0a0a0a] border border-white/10 rounded-xl hover:bg-white/[0.05] transition-all text-xs font-medium text-slate-300">
                            <Chrome size={16} />
                            Google
                        </button>
                    </div>
                </div>

                <div className="mt-8 flex flex-col items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        Don't have an account? <Link to="/signup" className="text-white font-medium hover:underline decoration-indigo-500 underline-offset-4">Sign up for free</Link>
                    </p>

                    <div className="flex items-center gap-2 text-[10px] text-slate-600 font-medium uppercase tracking-widest">
                        <Shield size={12} className="text-indigo-500/50" />
                        <span>SAML SSO Available for Teams</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
