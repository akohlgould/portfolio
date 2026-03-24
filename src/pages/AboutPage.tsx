import { motion } from 'framer-motion';
import { experienceData, educationData } from '../data/Data';
import ExperienceTimeline from '../components/ExperienceTimeline';
import EducationSection from '../components/EducationSection';
import ContactForm from '../components/ContactForm';
import { BridgeElements } from '../components/DecorativeElements';

const AboutPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pb-32 relative"
        >
            <BridgeElements />

            <div className="max-w-5xl mx-auto relative z-10 px-4">
                {/* Header - Asymmetric Layout */}
                <header className="mb-24 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="flex-1 text-left"
                    >
                        <div className="inline-block px-3 py-1 rounded-full bg-stone-200/50 text-stone-500 text-xs font-bold uppercase tracking-widest mb-6">
                            Introduction
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-stone-900 mb-8 tracking-tight leading-[1.1]">
                            Data Driven, <br />
                            <span className="text-stone-400">Community Centered.</span>
                        </h1>
                        <p className="text-xl text-stone-600 max-w-xl leading-relaxed">
                            Builder, organizer, and problem solver. Studying computer science at Brandeis, I've learned just as much on the campaign trail in New Hampshire, in small businesses in Central Square, and in the woodshop. I write code and I work with my hands.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="w-4/5 max-w-sm mx-auto md:w-2/5 md:mx-0 aspect-[4/5] relative group"
                    >
                        <div className="absolute inset-0 border-2 border-stone-200 rounded-3xl -rotate-3 transition-transform duration-500 group-hover:rotate-0" />
                        <div className="absolute inset-0 bg-stone-200 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                        <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl">
                            <img
                                src="/Photos/Personal Photos/Adam_Portrait.png"
                                alt="Adam Gould Portrait"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>
                </header>

                {/* Experience Section */}
                <section>
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-2xl font-bold text-stone-900 whitespace-nowrap">Professional Journey</h2>
                        <div className="h-px w-full bg-stone-200" />
                    </div>
                    <ExperienceTimeline experiences={experienceData} />
                </section>

                {/* Education Section */}
                <EducationSection education={educationData} />

                {/* Contact Section */}
                <ContactForm />
            </div>
        </motion.div>
    );
};

export default AboutPage;
