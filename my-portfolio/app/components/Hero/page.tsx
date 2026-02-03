"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  const skills = [
    "Frontend Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "JavaScript",
    "TypeScript",
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 px-6 pt-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-wide text-gray-900">
            Hi, I&apos;m <span className="text-blue-600">Bishmeeta Thapa</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gray-700 text-lg sm:text-xl md:text-2xl font-medium"
          >
            Full-Stack Developer
          </motion.p>

          <p className="text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed text-base md:text-lg">
            I craft modern, responsive web applications with a focus on clean
            design, smooth interactions, and robust functionality.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start mt-8">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 hover:scale-105 transform transition duration-300 flex items-center justify-center gap-2"
            >
              Hire Me <ArrowRight size={20} />
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3.5 rounded-full border-2 border-gray-300 text-gray-700 font-bold hover:border-blue-600 hover:text-blue-600 hover:scale-105 transform transition duration-300 flex items-center justify-center gap-2"
            >
              See Projects <FileText size={20} />
            </button>
          </div>
        </motion.div>

        {/* PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end mt-8 md:mt-0"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden 
                          border-4 border-white shadow-2xl 
                          transition-transform duration-500 hover:scale-105 bg-blue-50">
            {/* Placeholder for when image might be missing, but keeping logic */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold text-6xl">
              BT
            </div>
            <Image
              src="/profile.png"
              alt="Bishmeeta Thapa"
              fill
              className="object-cover rounded-full"
              priority
              onError={(e) => {
                // Fallback logic not directly supported in Next/Image props inline easily without state, 
                // but styling ensures it looks okay if missing.
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
