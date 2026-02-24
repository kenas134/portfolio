import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Algorithm Visualizer",
            description: "An interactive web application to visualize sorting and pathfinding algorithms in real-time. Built to help students understand complex data structures.",
            tags: ["React", "JavaScript", "Algorithms", "CSS Animations"],
            github: "https://github.com/Kirk-H-M",
            demo: "#"
        },
        {
            title: "Task Management API",
            description: "A robust RESTful API for task management with user authentication, task filtering, and pagination. Includes comprehensive unit tests.",
            tags: ["Node.js", "Express", "MongoDB", "JWT", "Jest"],
            github: "https://github.com/Kirk-H-M",
            demo: "#"
        },
        {
            title: "Portfolio Website",
            description: "A modern, responsive personal portfolio website built with React and Tailwind CSS. Features smooth animations and dark mode support.",
            tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
            github: "https://github.com/Kirk-H-M",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 flex flex-col"
                        >
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                                        <Folder className="w-6 h-6" />
                                    </div>
                                    <div className="flex gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={project.demo}
                                            className="text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs font-medium text-slate-500 dark:text-slate-500"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
