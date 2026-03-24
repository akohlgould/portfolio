import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        
        try {
            const response = await fetch('https://formspree.io/f/{form_id}', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    return (
        <section className="mt-24 pt-16 border-t border-stone-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold text-stone-900 mb-4">Contact</h2>
                        <p className="text-stone-600 max-w-md leading-relaxed">
                            I'm always open to discussing new opportunities, creative collaborations, or just connecting.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-stone-700">
                            <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500">
                                <Mail size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Email</span>
                                <a href="mailto:AKohlGould@gmail.com" className="font-medium hover:text-stone-900 transition-colors">AKohlGould@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-stone-700">
                            <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500">
                                <Phone size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Phone</span>
                                <a href="tel:617-909-6856" className="font-medium hover:text-stone-900 transition-colors">617-909-6856</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-stone-700">
                            <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500">
                                <MapPin size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Location</span>
                                <span className="font-medium">Cambridge, MA</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1">
                            <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-stone-500">Name</label>
                            <input
                                required
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400/20 focus:border-stone-400 transition-all text-stone-900 placeholder:text-stone-300"
                                placeholder="Your name"
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-stone-500">Email</label>
                            <input
                                required
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400/20 focus:border-stone-400 transition-all text-stone-900 placeholder:text-stone-300"
                                placeholder="Email address"
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-stone-500">Message</label>
                            <textarea
                                required
                                rows={4}
                                id="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400/20 focus:border-stone-400 transition-all text-stone-900 placeholder:text-stone-300 resize-none"
                                placeholder="Tell me about your project or just say hi..."
                            />
                        </div>

                        <button
                            disabled={status === 'submitting'}
                            type="submit"
                            className={`w-full py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-bold tracking-wide uppercase text-sm ${
                                status === 'submitting' 
                                ? 'bg-stone-100 text-stone-400 cursor-not-allowed' 
                                : 'bg-stone-900 text-stone-50 hover:bg-stone-800 shadow-lg hover:shadow-xl active:scale-[0.98]'
                            }`}
                        >
                            {status === 'submitting' ? 'Sending...' : (
                                <>
                                    <span>Send Message</span>
                                    <Send size={16} />
                                </>
                            )}
                        </button>

                        <AnimatePresence mode="wait">
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="p-4 rounded-xl bg-green-50 text-green-700 flex items-center gap-3 border border-green-100 overflow-hidden"
                                >
                                    <CheckCircle size={20} />
                                    <span className="font-medium">Message sent successfully!</span>
                                </motion.div>
                            )}

                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="p-4 rounded-xl bg-red-50 text-red-700 flex items-center gap-3 border border-red-100 overflow-hidden"
                                >
                                    <AlertCircle size={20} />
                                    <span className="font-medium">Something went wrong. Please try again.</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
