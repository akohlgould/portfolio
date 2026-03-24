import { motion } from 'framer-motion';
import { codeProjects } from '../data/Data';
import { Terminal, Github, ExternalLink, Puzzle } from 'lucide-react';
import { useState } from 'react';

const CodeGrid = () => {
    return (
        <div className="w-full py-20 min-h-screen bg-slate-900">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {codeProjects.map((item, index) => (
                    <CodeCard key={item.id} item={item} index={index} />
                ))}
            </div>
        </div>
    );
};

const CodeCard = ({ item, index }: { item: typeof codeProjects[0], index: number }) => {
    const [imgIndex, setImgIndex] = useState(0);

    return (
        <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-800 border-2 border-slate-600 p-6 rounded-lg hover:border-blue-400 transition-colors group relative overflow-hidden shadow-2xl"
            onMouseEnter={() => {
                if (item.images.length > 1) {
                    setImgIndex(1 % item.images.length);
                }
            }}
            onMouseLeave={() => setImgIndex(0)}
        >
            <div className="absolute top-0 right-0 p-4 opacity-100 transition-opacity z-10">
                <Terminal size={24} className="text-blue-400" />
            </div>

            <div className="aspect-video mb-6 overflow-hidden rounded bg-black border border-slate-600 relative group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-shadow">
                <motion.img
                    key={imgIndex}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    src={item.images[imgIndex]}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
            </div>

            <h3 className="text-xl font-mono text-white mb-2 group-hover:text-blue-300 transition-colors font-bold">
                <span className="text-blue-400 mr-2">{'>'}</span>
                {item.title}
            </h3>
            <p className="text-slate-200 font-mono text-sm mb-4 h-12 overflow-hidden leading-relaxed">{item.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-900 text-xs text-blue-100 font-mono rounded border border-slate-500">
                        #{tag}
                    </span>
                ))}
            </div>

            <div className="flex gap-4">
                {item.githubUrl && (
                    <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                    >
                        <Github size={14} /> View Source
                    </a>
                )}
                {item.demoUrl && (
                    <a
                        href={item.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                    >
                        <ExternalLink size={14} /> Demo
                    </a>
                )}
                {item.extensionUrl && (
                    <a
                        href={item.extensionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                    >
                        <Puzzle size={14} /> Extension
                    </a>
                )}
            </div>
        </motion.div>
    );
}

export default CodeGrid;
