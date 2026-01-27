import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { Hammer, Code } from 'lucide-react';
import SculptureGrid from '../components/SculptureGrid';
import CodeGrid from '../components/CodeGrid';

const LandingPage = () => {
    const { mode } = useTheme();

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
            >
                {mode === 'art' ? (
                    <div className="p-6 rounded-full bg-stone-200/50 backdrop-blur-sm">
                        <Hammer size={64} className="text-stone-800" strokeWidth={1} />
                    </div>
                ) : (
                    <div className="p-6 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700">
                        <Code size={64} className="text-blue-400" strokeWidth={2} />
                    </div>
                )}
            </motion.div>

            <div className="overflow-hidden h-32 mb-8 flex flex-col items-center justify-center">
                <motion.h1
                    key={mode}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`text-6xl md:text-8xl font-bold tracking-tighter ${mode === 'art' ? 'font-serif italic' : 'font-mono'
                        }`}
                >
                    {mode === 'art' ? 'Form & Void' : '<Hello_World />'}
                </motion.h1>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className={`text-xl md:text-2xl max-w-2xl ${mode === 'art' ? 'text-stone-800 font-serif font-medium' : 'text-slate-200 font-mono'
                    }`}
            >
                {mode === 'art'
                    ? "Exploring the physical space through sculpture and material."
                    : "Building digital experiences with clean code and playful logic."}
            </motion.p>

            {/* Call to Action or Guide */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className={`mt-16 text-sm mb-20 ${mode === 'art' ? 'text-stone-600' : 'text-slate-400'}`}
            >
                <p className={mode === 'code' ? 'animate-pulse font-mono' : 'font-serif italic'}>
                    {mode === 'art' ? 'Scroll to explore the gallery' : 'Initialize scroll sequence...'}
                </p>
            </motion.div>

            {/* Dynamic Content Section */}
            <div className="w-full min-h-screen">
                {mode === 'art' ? <SculptureGrid /> : <CodeGrid />}
            </div>
        </div>
    );
};

export default LandingPage;
