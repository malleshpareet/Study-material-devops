import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Rocket, Layout, Wrench, FileCode, BookOpen } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { roadmapData } from '../data/roadmapData';
import { cn } from '../utils/cn';
import logo from '../assets/logo.png';

const NavLink = ({ to, children, icon: Icon, active }) => (
    <Link
        to={to}
        className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300",
            active
                ? "bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/20"
                : "text-slate-400 hover:text-white hover:bg-white/10"
        )}
    >
        <Icon size={18} />
        <span className="text-sm">{children}</span>
    </Link>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();
    const { completedStages } = useApp();
    const progress = Math.min(Math.round((completedStages.length / roadmapData.length) * 100), 100);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { to: '/', label: 'Home', icon: Rocket },
        { to: '/roadmap', label: 'Roadmap', icon: Layout },
        { to: '/tools', label: 'Tools', icon: Wrench },
        { to: '/projects', label: 'Projects', icon: FileCode },
        { to: '/resources', label: 'Resources', icon: BookOpen },
    ];

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            scrolled
                ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-3"
                : "bg-transparent py-5"
        )}>
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <img src={logo} alt="DevOps Roadmap" className="h-10 w-auto object-contain hover:scale-105 transition-transform duration-300" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-sm">
                        {links.map(link => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                icon={link.icon}
                                active={pathname === link.to}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-8">
                        {/* System Progress */}
                        <div className="flex flex-col items-end border-l border-white/10 pl-8">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                </span>
                                <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black">System Progress</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-black text-white italic tracking-tighter">{progress}% Mastery</span>
                                <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10 p-[2px]">
                                    <motion.div
                                        className="h-full bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.6)]"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ duration: 1.5, ease: "circOut" }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Desktop Auth Grid */}
                        <div className="hidden lg:flex items-center gap-2">
                            <Link
                                to="/login"
                                className="px-5 py-2 text-[11px] font-semibold uppercase tracking-widest text-slate-400 hover:text-white transition-all"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="relative px-6 py-2.5 bg-gradient-to-br from-indigo-500 via-indigo-600 to-violet-700 text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-300 overflow-hidden group shadow-xl whitespace-nowrap"
                            >
                                <span className="relative z-10">Sign Up</span>
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center gap-4">
                        <button
                            className="w-10 h-10 flex items-center justify-center text-white bg-white/10 rounded-xl border border-white/10 shadow-sm"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 px-6 py-8 space-y-6 mx-4 mt-4 rounded-[2.5rem] shadow-2xl"
                >
                    <div className="space-y-2">
                        {links.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "flex items-center gap-3 px-5 py-4 rounded-2xl transition-all",
                                    pathname === link.to
                                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                                        : "text-slate-400 hover:bg-white/5"
                                )}
                            >
                                <link.icon size={20} />
                                <span className="font-bold uppercase text-xs tracking-widest">{link.label}</span>
                            </Link>
                        ))}
                    </div>


                    <div className="grid grid-cols-2 gap-4">
                        <Link
                            to="/login"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center py-6 bg-gradient-to-br from-indigo-500 via-indigo-600 to-violet-700 text-white rounded-3xl text-[14px] font-black uppercase tracking-[0.25em] shadow-2xl shadow-indigo-500/30 active:scale-95 transition-all"
                        >
                            Sign Up
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
