import { useTheme } from '../context/ThemeContext';
import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    const { mode } = useTheme();

    return (
        <div className="relative min-h-screen transition-colors duration-700 w-full overflow-hidden">
            {/* Background Layer */}
            <motion.div
                initial={false}
                animate={{
                    backgroundColor: mode === 'art' ? '#f5f5f4' : '#0f172a', // stone-100 vs slate-900
                }}
                className="absolute inset-0 z-0"
            />

            {/* Content Layer */}
            <div className={`relative z-10 transition-all duration-700 ${mode === 'art' ? 'font-serif text-stone-900' : 'font-mono text-slate-100'}`}>
                <Navigation />
                <main className="pt-24 px-6 md:px-12 max-w-7xl mx-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default RootLayout;
