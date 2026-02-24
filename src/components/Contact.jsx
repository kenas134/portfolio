import { motion } from 'framer-motion';
import { Mail, Github, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-800"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <a href="mailto:kirubel.tba@gmail.com" className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-full text-indigo-600 dark:text-indigo-400">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <span className="text-lg">kirubel.tba@gmail.com</span>
                            </a>

                            <a href="https://github.com/kenas134" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-full text-indigo-600 dark:text-indigo-400">
                                    <Github className="w-6 h-6" />
                                </div>
                                <span className="text-lg">https://github.com/kenas134</span>
                            </a>
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                            <p className="text-slate-500 dark:text-slate-500 mb-4">
                                I am currently open to new opportunities and collaborations. Feel free to reach out!
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-800"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-slate-900 dark:text-white"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-slate-900 dark:text-white"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-slate-900 dark:text-white resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
