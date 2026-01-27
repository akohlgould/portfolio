import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sculptures } from '../data/Data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SculptureGrid = () => {
    return (
        <div className="w-full py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {sculptures.map((item, index) => (
                    <SculptureCard key={item.id} item={item} index={index} />
                ))}
            </div>
        </div>
    );
};

const SculptureCard = ({ item, index }: { item: typeof sculptures[0], index: number }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="group cursor-pointer"
        >
            <div className="overflow-hidden mb-6 shadow-lg shadow-stone-200 relative aspect-[4/5] bg-stone-200">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        src={item.images[currentImageIndex]}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 absolute inset-0"
                    />
                </AnimatePresence>

                {item.images.length > 1 && (
                    <div className="absolute inset-x-0 bottom-4 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <button
                            onClick={prevImage}
                            className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors backdrop-blur-md"
                        >
                            <ChevronLeft size={20} className="text-stone-800" />
                        </button>

                        <div className="flex gap-1 items-center">
                            {item.images.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-stone-800' : 'bg-stone-800/30'}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextImage}
                            className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors backdrop-blur-md"
                        >
                            <ChevronRight size={20} className="text-stone-800" />
                        </button>
                    </div>
                )}
            </div>
            <h3 className="text-2xl font-serif italic mb-2 text-stone-800">{item.title}</h3>
            <p className="text-stone-600 text-sm mb-3 leading-relaxed">{item.description}</p>
            <div className="flex gap-2">
                {item.tags.map(tag => (
                    <span key={tag} className="text-xs uppercase tracking-widest text-stone-400 border border-stone-200 px-2 py-1">
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default SculptureGrid;
