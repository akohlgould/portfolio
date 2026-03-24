import { motion } from 'framer-motion';
import type { Education } from '../data/Data';


interface EducationSectionProps {
    education: Education;
}

const EducationSection = ({ education }: EducationSectionProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 p-8 rounded-2xl border border-stone-200 bg-stone-50 shadow-sm flex flex-col md:flex-row items-center gap-6"
        >
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 border border-stone-200 shadow-sm overflow-hidden">
                <img 
                    src="/images/brandeis-logo.png" 
                    alt="Brandeis University Logo" 
                    className="w-full h-full object-contain p-1"
                />
            </div>
            <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-stone-900 mb-1">{education.institution}</h3>
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-3 gap-y-1 text-stone-600 font-medium">
                    <span>{education.degree}</span>
                    <span className="hidden md:inline text-stone-300">•</span>
                    <span className="text-stone-500">{education.expectedDate}</span>
                    <span className="hidden md:inline text-stone-300">•</span>
                    <span className="px-2 py-0.5 rounded-full bg-stone-200 text-stone-700 text-xs font-bold uppercase tracking-wider">{education.gpa}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default EducationSection;
