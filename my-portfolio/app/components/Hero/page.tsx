"use client";

import Image from "next/image";

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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* TEXT CONTENT */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-wide text-gray-900">
            Hi, I’m <span className="text-blue-500">Bishmeeta Thapa</span>
          </h1>

          <p className="text-gray-700 text-lg sm:text-xl md:text-2xl font-medium">
            {skills.join(" | ")}
          </p>

          <p className="text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I craft modern, responsive web applications with a focus on clean
            design, smooth interactions, and full-stack capabilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start mt-6">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 
                         shadow-md hover:scale-105 transform transition duration-300 ease-out font-semibold text-white"
            >
              Hire Me
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 rounded-full border border-gray-400 
                         hover:border-blue-500 hover:scale-105 transform transition duration-300 ease-out font-semibold text-gray-800"
            >
              See Projects
            </button>
          </div>
        </div>

        {/* PROFILE IMAGE */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden 
                          border-4 border-blue-500 shadow-lg 
                          transition-transform duration-500 hover:scale-110 hover:rotate-3 hover:shadow-blue-300/40">
            <Image
              src="/profile.png"
              alt="Bishmeeta Thapa"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
