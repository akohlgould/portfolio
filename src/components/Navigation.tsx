import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { Palette, Terminal } from 'lucide-react';

const Navigation = () => {
    const { mode, toggleMode } = useTheme();

    return (
        <nav className={`fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center transition-colors duration-700 ${mode === 'art' ? 'text-stone-900' : 'text-slate-100'}`}>
            <div className="text-xl font-bold tracking-widest uppercase">
                {mode === 'art' ? 'Adam / Art' : 'Adam_Dev'}
            </div>

            <button
                onClick={toggleMode}
                className={`flex items-center gap-3 px-4 py-2 rounded-full border transition-colors backdrop-blur-sm ${mode === 'art'
                        ? 'border-stone-300 bg-white/20 hover:bg-stone-200/50'
                        : 'border-slate-700 bg-slate-800/20 hover:bg-slate-800/50'
                    }`}
            >
                <div className="relative w-6 h-6">
                    <motion.div
                        initial={false}
                        animate={{ opacity: mode === 'art' ? 1 : 0, scale: mode === 'art' ? 1 : 0.5 }}
                        className="absolute inset-0"
                    >
                        <Palette size={24} />
                    </motion.div>
                    <motion.div
                        initial={false}
                        animate={{ opacity: mode === 'code' ? 1 : 0, scale: mode === 'code' ? 1 : 0.5 }}
                        className="absolute inset-0"
                    >
                        <Terminal size={24} />
                    </motion.div>
                </div>
                <span className="text-sm font-medium tracking-wide">
                    Switch to {mode === 'art' ? 'Code' : 'Art'}
                </span>
            </button>
        </nav>
    );
};

export default Navigation;
