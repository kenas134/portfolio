import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-slate-600 dark:text-slate-400 text-sm">
                    &copy; {new Date().getFullYear()} Kirubel Tasew Birhanu. All rights reserved.
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> using React & Tailwind
                </div>
            </div>
        </footer>
    );
};

export default Footer;
