import { useTheme } from '../context/ThemeContext';
import type { Mode } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { Palette, Terminal, User } from 'lucide-react';

const Navigation = () => {
    const { mode, setMode } = useTheme();

    const navItems: { id: Mode; label: string; icon: any }[] = [
        { id: 'about', label: 'About', icon: User },
        { id: 'art', label: 'Art', icon: Palette },
        { id: 'code', label: 'Dev', icon: Terminal },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center transition-all duration-700 backdrop-blur-md border-b border-transparent ${
            mode === 'art' ? 'text-stone-900 bg-stone-100/80 border-stone-200/50' : 
            mode === 'code' ? 'text-slate-100 bg-slate-900/80 border-slate-700/50' : 
            'text-stone-900 bg-[#ececeb]/80 border-stone-300/50'
        }`}>
            <div className="text-xl font-bold tracking-widest uppercase">
                {mode === 'art' ? 'Adam / Art' : mode === 'code' ? 'Adam_Dev' : 'Adam Gould'}
            </div>

            <div className={`flex items-center gap-1 p-1 rounded-full border transition-all duration-700 backdrop-blur-sm ${
                mode === 'art' ? 'border-stone-300 bg-white/20' : 
                mode === 'code' ? 'border-slate-700 bg-slate-800/20' : 
                'border-stone-400 bg-stone-200/30'
            }`}>
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setMode(item.id)}
                        className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                            mode === item.id 
                            ? (mode === 'art' ? 'bg-stone-900 text-stone-50' : mode === 'code' ? 'bg-slate-100 text-slate-900' : 'bg-stone-800 text-stone-50')
                            : (mode === 'art' ? 'hover:bg-stone-200/50' : mode === 'code' ? 'hover:bg-slate-800/50' : 'hover:bg-stone-300/50')
                        }`}
                    >
                        <item.icon size={18} />
                        <span className="text-sm font-medium tracking-wide hidden sm:inline">{item.label}</span>
                        {mode === item.id && (
                            <motion.div
                                layoutId="nav-pill"
                                className="absolute inset-0 rounded-full z-[-1]"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Navigation;
