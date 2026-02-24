import { motion } from 'framer-motion';
import { Trophy, Target, TrendingUp, Code } from 'lucide-react';

const CompetitiveProgramming = () => {
    const stats = [
        { label: "Problems Solved", value: "500+", icon: <Code className="w-6 h-6" /> },
        { label: "Max Rating", value: "1500", icon: <TrendingUp className="w-6 h-6" /> },
        { label: "Contests", value: "50+", icon: <Trophy className="w-6 h-6" /> },
    ];

    const platforms = [
        {
            name: "LeetCode",
            role: "Guardian",
            rating: "2000+",
            link: "https://leetcode.com/",
            color: "text-yellow-600 dark:text-yellow-500",
            bg: "bg-yellow-100 dark:bg-yellow-900/20"
        },
        {
            name: "Codeforces",
            role: "Specialist",
            rating: "1450",
            link: "https://codeforces.com/",
            color: "text-blue-600 dark:text-blue-400",
            bg: "bg-blue-100 dark:bg-blue-900/20"
        }
    ];

    return (
        <section id="cp" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Competitive Programming</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Regularly participating in coding contests to sharpen algorithmic thinking.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                            Problem Solving Statistics
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg text-center border border-slate-200 dark:border-slate-700">
                                    <div className="w-full flex justify-center text-indigo-600 dark:text-indigo-400 mb-2">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Competitive programming has been instrumental in my growth as a developer. It has taught me
                            to write efficient code, handle edge cases, and think under pressure. I actively compete
                            on platforms like LeetCode and Codeforces.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="grid gap-6"
                    >
                        {platforms.map((platform, index) => (
                            <a
                                key={index}
                                href={platform.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-between p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 group bg-white dark:bg-slate-800`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-full ${platform.bg} ${platform.color}`}>
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            {platform.name}
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-400">{platform.role}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-slate-500 dark:text-slate-500">Rating</div>
                                    <div className={`text-xl font-bold ${platform.color}`}>{platform.rating}</div>
                                </div>
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CompetitiveProgramming;
