import { motion } from 'framer-motion';
import type { Experience } from '../data/Data';

interface ExperienceTimelineProps {
    experiences: Experience[];
}

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
    return (
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-300 before:to-transparent">
            {experiences.map((exp, index) => (
                <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                    {/* Circle marker on timeline */}
                    <div className="absolute left-5 md:left-1/2 w-3 h-3 bg-stone-50 border-2 border-stone-400 rounded-full -translate-x-1/2 z-10 transition-colors duration-300 group-hover:bg-stone-400" />

                    {/* Content container */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-auto md:ml-0 p-6 rounded-xl border border-stone-200 bg-white/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md hover:border-stone-300">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                            <h3 className="font-bold text-lg text-stone-900 leading-tight">{exp.title}</h3>
                            <span className="text-xs font-mono font-medium text-stone-500 uppercase tracking-widest">{exp.dateRange}</span>
                        </div>
                        <div className="text-stone-700 font-medium mb-3 flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span className="text-sm">{exp.organization}</span>
                            <span className="hidden sm:inline text-stone-300">•</span>
                            <span className="text-xs text-stone-500 italic uppercase tracking-wider">{exp.location}</span>
                        </div>
                        <ul className="space-y-2">
                            {exp.bulletPoints.map((point, i) => (
                                <li key={i} className="text-sm text-stone-600 leading-relaxed flex gap-2">
                                    <span className="text-stone-400 mt-1.5 shrink-0 text-[10px]">■</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default ExperienceTimeline;
