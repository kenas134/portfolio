import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, GitBranch, Cpu } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Code2 className="w-6 h-6" />,
            skills: ["Python", "JavaScript (ES6+)", "C++", "Java"]
        },
        {
            title: "Frontend",
            icon: <Layout className="w-6 h-6" />,
            skills: ["React", "HTML5", "CSS3 / Tailwind", "Framer Motion"]
        },
        {
            title: "Backend",
            icon: <Database className="w-6 h-6" />,
            skills: ["Node.js", "Express", "MongoDB", "SQL"]
        },
        {
            title: "Tools & Others",
            icon: <Terminal className="w-6 h-6" />,
            skills: ["Git & GitHub", "Linux", "VS Code", "Docker"]
        },
        {
            title: "Core Concepts",
            icon: <Cpu className="w-6 h-6" />,
            skills: ["Data Structures", "Algorithms", "OOP", "System Design"]
        },
        {
            title: "Competitive Programming",
            icon: <GitBranch className="w-6 h-6" />, // Using GitBranch as a placeholder for branched logic/complexity
            skills: ["Dynamic Programming", "Graph Theory", "Number Theory"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise and the technologies I work with.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-sm font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
