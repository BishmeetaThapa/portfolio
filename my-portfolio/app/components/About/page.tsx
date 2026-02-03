import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col items-center text-center md:w-2/3">
        
        {/* Text Content */}
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 mb-4">
          Hi! I'm Bishmeeta, a passionate Frontend Developer who loves building
          interactive and responsive web experiences. I specialize in React, Next.js,
          and Tailwind CSS.
        </p>
        <p className="text-gray-700 mb-6">
          I enjoy turning designs into code, learning new technologies, and creating
          projects that make a difference.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Me
        </a>

      </div>
    </section>
  );
};

export default About;
