"use client";
import React from "react";
import { MoveRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Ecommerce Website",
        description: "A fully responsive e-commerce platform featuring product listings, shopping cart management, and secure checkout. Built with React and Redux for state management.",
        tags: ["React", "Redux", "Tailwind CSS"],
        image: "/project1.png",
        demo: "#",
        code: "https://github.com/BishmeetaThapa/ecommerce",
    },
    {
        title: "To Do List",
        description: "A feature-rich task management app to organize daily activities with local storage support.",
        tags: ["React", "JavaScript", "CSS"],
        image: "/project2.png",
        demo: "#",
        code: "https://github.com/BishmeetaThapa/todo-list",
    },
    {
        title: "Quiz App",
        description: "An interactive quiz application with timer, score tracking, and category selection.",
        tags: ["React", "TypeScript", "Tailwind"],
        image: "/project3.png",
        demo: "#",
        code: "https://github.com/BishmeetaThapa/quiz-app",
    },
    {
        title: "Calculator",
        description: "A fully functional calculator with standard arithmetic operations and a sleek design.",
        tags: ["JavaScript", "HTML", "CSS"],
        image: "/project4.png",
        demo: "#",
        code: "https://github.com/BishmeetaThapa/calculator",
    },
    {
        title: "Tic Tac Toe",
        description: "A classic game featuring Player vs Player and Player vs AI modes.",
        tags: ["React", "Next.js", "Tailwind CSS"],
        image: "/project5.png",
        demo: "#",
        code: "https://github.com/BishmeetaThapa/tic-tac-toe",
    },
    {
        title: "Personal Portfolio",
        description: "My personal portfolio website built with Next.js and Framer Motion.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        image: "/project6.png",
        demo: "#",
        code: "https://github.com/BishmeetaThapa/portfolio",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Here are some of the projects I&apos;ve worked on, showcasing my skills in full-stack development.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                                {/* Fallback visual */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-xl text-center px-4 bg-gradient-to-br from-gray-100 to-gray-200">
                                    {project.title}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">{project.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{project.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center justify-between mt-auto">
                                    <Link
                                        href={project.demo}
                                        className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
                                    >
                                        Live Demo <ExternalLink size={16} />
                                    </Link>
                                    <Link
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-black transition"
                                    >
                                        Code <Github size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="mt-12 text-center">
                    <Link
                        href="https://github.com/BishmeetaThapa?tab=repositories"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition transform hover:-translate-y-1"
                    >
                        View All Projects <MoveRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
