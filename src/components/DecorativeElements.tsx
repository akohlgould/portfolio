import { motion } from 'framer-motion';

export const BridgeElements = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Organic shape (Art-inspired) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute -top-20 -left-20 w-96 h-96 bg-stone-200/50 rounded-full blur-3xl"
            />
            
            {/* Geometric grid (Dev-inspired) */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03]" 
                 style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
            />

            {/* Subtle lines */}
            <svg className="absolute top-1/4 -right-10 w-64 h-64 opacity-10 text-stone-900" viewBox="0 0 100 100">
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, delay: 0.5 }}
                    d="M0,50 Q25,0 50,50 T100,50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                />
            </svg>
        </div>
    );
};
