"use client";
import React from "react";
import { MoveRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ecommerceImg from "../../../public/ecommerce.png";
import todolistImg from "../../../public/todolist.png";
import portfolioImg from "../../../public/portfolio.png";
import weatherImg from "../../../public/weather.png";

const projects = [
    {
        title: "Ecommerce Website",
        description: "A fully responsive e-commerce platform featuring product listings, shopping cart management, and secure checkout. Built with React and Redux for state management.",
        tags: ["React", "Redux", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
        backend: "Node.js, Express, MongoDB",
        image: ecommerceImg,
        demo: "#",
        code: "https://github.com/BishmeetaThapa/ecommerce",
    },

    {
        title: "Weather Dashboard",
        description: "A weather application that provides real-time weather data, forecasts, and location-based information with an intuitive interface.",
        tags: ["React", "API", "Tailwind CSS", "Node.js", "Express"],
        backend: "Custom Weather API (Node.js, Express)",
        image: weatherImg,
        demo: "#",
        code: "https://github.com/BishmeetaThapa/weather-dashboard",
    },

    {
        title: "Personal Portfolio",
        description: "My personal portfolio website built with Next.js and Framer Motion.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        image: portfolioImg,
        demo: "#",
        code: "https://github.com/BishmeetaThapa/portfolio",
    },


    {
        title: "To-do-list-app",
        description: "A feature-rich task management app to organize daily activities with local storage support.",
        tags: ["React", "JavaScript", "CSS"],
        image: todolistImg,
        demo: "#",
        code: "https://github.com/BishmeetaThapa/To-do-list-app",
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
                                {typeof project.image === 'object' ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
                                        <span className="text-white text-4xl font-bold">{project.title.charAt(0)}</span>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">{project.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{project.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Backend/Source */}
                                {project.backend && (
                                    <div className="mb-4">
                                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Backend/Source: </span>
                                        <span className="text-xs text-gray-700">{project.backend}</span>
                                    </div>
                                )}

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
