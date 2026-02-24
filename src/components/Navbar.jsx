import { useState } from 'react';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Competitive Programming', href: '#cp' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Code2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                        <span className="font-bold text-xl text-slate-900 dark:text-white">Kirubel.Dev</span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                                aria-label="Toggle theme"
                            >
                                {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-slate-700" />}
                            </button>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleTheme}
                            className="p-2 mr-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                        >
                            {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-slate-700" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-900"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
