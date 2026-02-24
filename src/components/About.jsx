import { motion } from 'framer-motion';
import { Code, Terminal, Brain, Coffee } from 'lucide-react';

const About = () => {
    const interests = [
        {
            icon: <Code className="w-6 h-6" />,
            title: "Web Development",
            description: "Building modern, responsive applications with React and Node.js."
        },
        {
            icon: <Terminal className="w-6 h-6" />,
            title: "Competitive Programming",
            description: "Solving algorithmic challenges and optimizing code efficiency."
        },
        {
            icon: <Brain className="w-6 h-6" />,
            title: "Problem Solving",
            description: "Breaking down complex problems into manageable solutions."
        },
        {
            icon: <Coffee className="w-6 h-6" />,
            title: "Continuous Learning",
            description: "Always exploring new technologies and best practices."
        }
    ];

    return (
        <section id="about" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                            I am <span className="font-semibold text-indigo-600 dark:text-indigo-400">Kirubel Tasew Birhanu</span>,
                            a dedicated Software Engineering student with a deep passion for technology. My journey began with a curiosity
                            for how things work, which led me to the world of programming.
                        </p>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                            I specialize in full-stack web development and have a strong background in competitive programming.
                            Efficiency and clean code are my top priorities. When I'm not coding, I'm likely solving LeetCode problems
                            or learning the latest browser APIs.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {interests.map((item, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-800"
                            >
                                <div className="text-indigo-600 dark:text-indigo-400 mb-4">{item.icon}</div>
                                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
