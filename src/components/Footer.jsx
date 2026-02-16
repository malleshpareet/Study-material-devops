import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight, Zap, Target, Shield } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#020202] border-t border-white/5 pt-32 pb-12 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="inline-flex items-center gap-3 mb-10 group">
                            <img src={logo} alt="DevOps Roadmap" className="h-10 w-auto object-contain transition-transform group-hover:scale-105 duration-300" />
                        </Link>

                        <p className="text-slate-500 max-w-sm mb-12 leading-relaxed font-medium">
                            The definitive <span className="text-white font-bold italic text-indigo-400 underline decoration-indigo-500/30">2026 Blueprint</span> for mastering high-scale infrastructure, cloud-native engineering, and elite automation workflows.
                        </p>

                        <div className="flex gap-4">
                            {[
                                { icon: Github, url: "#" },
                                { icon: Twitter, url: "#" },
                                { icon: Linkedin, url: "#" },
                                { icon: Mail, url: "#" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:border-indigo-500/40 hover:text-white hover:bg-white/[0.08] transition-all active:scale-95 group"
                                >
                                    <social.icon size={18} className="transition-transform group-hover:scale-110" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-black mb-10 uppercase text-[10px] tracking-[0.4em] italic flex items-center gap-2">
                            <Target size={14} className="text-indigo-500" />
                            Navigation
                        </h4>
                        <ul className="space-y-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
                            <li>
                                <Link to="/roadmap" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                                    Roadmap <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/tools" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                                    Tools Arsenal <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                                    Side Projects <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/resources" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                                    Resource Hub <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black mb-10 uppercase text-[10px] tracking-[0.4em] italic flex items-center gap-2">
                            <Shield size={14} className="text-indigo-500" />
                            Stability
                        </h4>
                        <ul className="space-y-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Career Guide</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Study Material</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Community</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Legal Terms</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                            <Zap size={14} />
                        </div>
                        <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
                            Built for the next generation of DevOps Engineers.
                        </p>
                    </div>

                    <p className="text-slate-700 text-[10px] font-black uppercase tracking-[0.2em]">
                        &copy; 2026 Engineering Blueprint. Operational & Secure.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
