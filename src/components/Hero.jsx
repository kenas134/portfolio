import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <h2 className="text-xl md:text-2xl font-medium text-indigo-600 dark:text-indigo-400">
                        Hello, I'm
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
                        Kirubel Tasew Birhanu
                    </h1>
                    <h3 className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Software Engineering Student & <span className="text-indigo-600 dark:text-indigo-400">Competitive Programmer</span>
                    </h3>

                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        I build accessible, pixel-perfect, secure, and performant web applications.
                        Passionate about solving complex problems through algorithms and code.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-indigo-600 dark:hover:border-indigo-400 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-all"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="flex justify-center gap-6 mt-12 text-slate-600 dark:text-slate-400">
                        <a href="https://github.com/Kirk-H-M" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            <Github className="w-8 h-8" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="mailto:kirubel@example.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            <Mail className="w-8 h-8" />
                            <span className="sr-only">Email</span>
                        </a>
                        {/* Add LinkedIn if available */}
                        {/* <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Linkedin className="w-8 h-8" />
              <span className="sr-only">LinkedIn</span>
            </a> */}
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <a href="#about" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    <ChevronDown className="w-8 h-8" />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
