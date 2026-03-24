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
                    backgroundColor: 
                        mode === 'art' ? '#f5f5f4' : 
                        mode === 'code' ? '#0f172a' : 
                        '#ececeb', // Bridging neutral
                }}
                className="absolute inset-0 z-0"
            />

            {/* Content Layer */}
            <div className={`relative z-10 transition-all duration-700 ${
                mode === 'art' ? 'font-serif text-stone-900' : 
                mode === 'code' ? 'font-mono text-slate-100' : 
                'font-serif text-stone-900 tracking-tight' // Bridge: serif but more compressed/modern
            }`}>
                <Navigation />
                <main className="pt-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default RootLayout;
