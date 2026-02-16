import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { roadmapData } from '../data/roadmapData';
import { useApp } from '../context/AppContext';
import {
    Search,
    Zap,
    Target,
    Grid2X2,
    List,
    ChevronRight,
    BookOpen,
    Settings,
    Activity,
    Box,
    Terminal,
    Network as NetworkIcon,
    Code2,
    GitBranch,
    Cloud,
    Repeat,
    Ship,
    FileCode2,
    BarChart3,
    Globe,
    Users,
    Library,
    Map,
    Clock,
    Download,
    Calendar
} from 'lucide-react';
import { cn } from '../utils/cn';

const iconMap = {
    BookOpen: BookOpen,
    Users: Users,
    Library: Library,
    Map: Map,
    Terminal: Terminal,
    Network: NetworkIcon,
    GitBranch: GitBranch,
    Code2: Code2,
    Cloud: Cloud,
    Box: Box,
    Repeat: Repeat,
    Ship: Ship,
    Globe: Globe,
    Settings: Settings,
    FileCode2: FileCode2,
    BarChart3: BarChart3
};

const Roadmap = () => {
    const { searchQuery, setSearchQuery, filterLevel, setFilterLevel, completedStages } = useApp();
    const [viewMode, setViewMode] = useState('grid');

    const filteredData = roadmapData.filter(item => {
        const matchesSearch = (item.title?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
            (item.tools?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) || false);
        const matchesLevel = filterLevel === 'All' || item.level === filterLevel;
        return matchesSearch && matchesLevel;
    });

    const progress = Math.min(Math.round((completedStages.length / roadmapData.length) * 100), 100);

    const phases = [
        { name: "Orientation", start: 0, end: 4, color: "slate" },
        { name: "Foundations", start: 4, end: 8, color: "indigo" },
        { name: "Core Engineering", start: 8, end: 12, color: "blue" },
        { name: "Advanced Platforms", start: 12, end: 16, color: "emerald" },
    ];

    const exportStudyPlan = () => {
        const data = [];
        let currentDate = new Date();

        roadmapData.forEach((module) => {
            const startDate = new Date(currentDate);

            // Parse duration
            let days = 1;
            const timeStr = module.time.toLowerCase();
            if (timeStr.includes('week')) {
                const matches = timeStr.match(/\d+/g);
                const num = matches ? Math.max(...matches.map(Number)) : 1;
                days = num * 7;
            } else if (timeStr.includes('day')) {
                const matches = timeStr.match(/\d+/);
                days = matches ? Number(matches[0]) : 1;
            }

            const endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + days - 1);

            data.push({
                'Step': module.id,
                'Topic': module.title,
                'Level': module.level,
                'Estimate': module.time,
                'Start Date': startDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
                'End Date': endDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
                'Focus Tools': module.tools.join(', '),
                'Status': completedStages.includes(module.id) ? 'Completed' : 'Planned'
            });

            // Set next current date to day after end date
            currentDate = new Date(endDate);
            currentDate.setDate(endDate.getDate() + 1);
        });

        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Roadmap Plan");

        // Auto-size columns
        const colWidths = Object.keys(data[0]).map(key => ({
            wch: Math.max(key.length, ...data.map(row => row[key]?.toString().length || 0)) + 2
        }));
        worksheet['!cols'] = colWidths;

        XLSX.writeFile(workbook, "DevOps_Roadmap_Plan_2026.xlsx");
    };

    return (
        <div className="bg-[#020202] min-h-screen text-white pt-24 pb-32 selection:bg-indigo-500/30 overflow-x-hidden">
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <header className="mb-12 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-6"
                    >
                        <Target size={12} />
                        Engineering Blueprint 2026
                    </motion.div>

                    <div className="flex flex-col items-center gap-6 mb-16">
                        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-[0.9] text-white">
                            Level Up <span className="text-indigo-500">Fast.</span>
                        </h1>
                        <button
                            onClick={exportStudyPlan}
                            className="group flex items-center gap-3 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-xl shadow-indigo-500/20 active:scale-95 border border-indigo-400/30"
                        >
                            <Calendar size={14} className="group-hover:rotate-12 transition-transform" />
                            Generate & Download Study Plan
                            <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
                        </button>
                    </div>

                    <div className="max-w-2xl mx-auto mb-16">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Mastery Status</span>
                            <span className="text-indigo-400 font-black text-xl italic">{progress}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10 p-[2px]">
                            <motion.div
                                className="h-full bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 1 }}
                            />
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-4 bg-white/[0.03] border border-white/10 p-2 rounded-2xl backdrop-blur-xl">
                        <div className="flex-1 relative w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
                            <input
                                type="text"
                                placeholder="Search the 16 modules..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent border-none py-3 pl-12 pr-4 text-white text-sm font-medium placeholder:text-slate-700 focus:ring-0"
                            />
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 rounded-xl p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={cn("p-2 rounded-lg transition-all", viewMode === 'grid' ? "bg-white text-black shadow-lg" : "text-slate-500 hover:text-white")}
                            >
                                <Grid2X2 size={16} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={cn("p-2 rounded-lg transition-all", viewMode === 'list' ? "bg-white text-black shadow-lg" : "text-slate-500 hover:text-white")}
                            >
                                <List size={16} />
                            </button>
                        </div>
                    </div>
                </header>

                <div className="space-y-24">
                    {phases.map((phase, pIdx) => (
                        <div key={pIdx}>
                            <div className="flex items-center gap-6 mb-10">
                                <h2 className="text-xl font-black text-white italic tracking-tighter uppercase shrink-0">
                                    {phase.name}
                                </h2>
                                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                            </div>

                            <div className={cn(
                                viewMode === 'grid'
                                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                                    : "space-y-3 max-w-4xl"
                            )}>
                                {filteredData.slice(phase.start, phase.end).map((module, mIdx) => (
                                    viewMode === 'grid'
                                        ? <ModuleTile key={module.id} module={module} index={mIdx} />
                                        : <ModuleListRow key={module.id} module={module} index={mIdx} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ModuleTile = ({ module, index }) => {
    const { completedStages, toggleStage } = useApp();
    const isDone = completedStages.includes(module.id);
    const Icon = iconMap[module.icon] || BookOpen;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={cn(
                "group relative bg-[#0a0a0a] border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1",
                isDone ? "border-emerald-500/30 bg-emerald-500/[0.02]" : "border-white/5 hover:border-indigo-500/40 hover:bg-white/[0.03]"
            )}
        >
            <div className="flex items-start justify-between mb-6">
                <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                    isDone ? "bg-emerald-500/10 text-emerald-400" : "bg-white/5 text-slate-600 group-hover:text-indigo-400 group-hover:bg-indigo-400/10"
                )}>
                    <Icon size={20} />
                </div>
                <div className="flex flex-col items-end gap-2">
                    {isDone && <Check size={16} className="text-emerald-500" />}
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/5">
                        <Clock size={10} className="text-slate-500" />
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{module.time}</span>
                    </div>
                </div>
            </div>

            <h3 className="text-base font-black text-white italic tracking-tighter mb-2 group-hover:text-indigo-400 transition-colors">
                {module.title}
            </h3>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-6 line-clamp-2">
                {module.description}
            </p>

            <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-white/5">
                <Link
                    to={module.id === 1 ? "/introduction" : module.id === 2 ? "/target-audience" : module.id === 3 ? "/resources" : module.id === 4 ? "/roadmap-overview" : module.id === 5 ? "/linux-fundamentals" : module.id === 6 ? "/networking-concepts" : module.id === 7 ? "/version-control" : module.id === 8 ? "/programming-languages" : module.id === 9 ? "/cloud-providers" : module.id === 10 ? "/containerization" : module.id === 11 ? "/cicd-pipelines" : module.id === 12 ? "/container-orchestration" : module.id === 13 ? "/networking-infra-services" : module.id === 14 ? "/config-management" : module.id === 15 ? "/infrastructure-as-code" : module.id === 16 ? "/monitoring-logging" : `/curriculum/${module.id}`}
                    className="flex-1 text-center py-2 bg-white/5 hover:bg-white/10 text-[9px] font-black uppercase tracking-widest rounded-lg transition-all"
                >
                    Learn
                </Link>
                <button
                    onClick={() => toggleStage(module.id)}
                    className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center transition-all",
                        isDone ? "bg-emerald-500 text-white" : "bg-white/5 text-slate-700 hover:text-white"
                    )}
                >
                    {isDone ? <Check size={14} /> : <Zap size={12} />}
                </button>
            </div>
        </motion.div>
    );
};

const ModuleListRow = ({ module, index }) => {
    const { completedStages, toggleStage } = useApp();
    const isDone = completedStages.includes(module.id);
    const Icon = iconMap[module.icon] || BookOpen;

    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={cn(
                "group bg-white/[0.01] border rounded-xl p-3 flex items-center gap-5 transition-all",
                isDone ? "border-emerald-500/20" : "border-white/5 hover:border-white/10 hover:bg-white/[0.03]"
            )}
        >
            <div className={cn("p-2 rounded-lg", isDone ? "text-emerald-500 bg-emerald-500/10" : "text-slate-700 bg-white/5")}>
                <Icon size={16} />
            </div>
            <div className="flex-1 min-w-0">
                <h4 className="text-sm font-black text-white italic tracking-tighter truncate">{module.title}</h4>
                <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">{module.level} • {module.time}</p>
            </div>
            <div className="flex items-center gap-3 pr-2">
                <Link to={module.id === 1 ? "/introduction" : module.id === 2 ? "/target-audience" : module.id === 3 ? "/resources" : module.id === 4 ? "/roadmap-overview" : module.id === 5 ? "/linux-fundamentals" : module.id === 6 ? "/networking-concepts" : module.id === 7 ? "/version-control" : module.id === 8 ? "/programming-languages" : module.id === 9 ? "/cloud-providers" : module.id === 10 ? "/containerization" : module.id === 11 ? "/cicd-pipelines" : module.id === 12 ? "/container-orchestration" : module.id === 13 ? "/networking-infra-services" : module.id === 14 ? "/config-management" : module.id === 15 ? "/infrastructure-as-code" : module.id === 16 ? "/monitoring-logging" : `/curriculum/${module.id}`} className="text-slate-500 hover:text-indigo-400 transition-colors">
                    <ChevronRight size={18} />
                </Link>
                <button onClick={() => toggleStage(module.id)} className={cn("w-6 h-6 rounded flex items-center justify-center transition-all", isDone ? "text-emerald-500" : "text-slate-800")}>
                    {isDone ? <Check size={14} /> : <Zap size={10} />}
                </button>
            </div>
        </motion.div>
    );
};

const Check = ({ size, className }) => (
    <svg
        width={size} height={size} viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
        className={className}
    >
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

export default Roadmap;
