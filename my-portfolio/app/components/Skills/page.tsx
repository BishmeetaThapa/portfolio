"use client";
import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: "95%" },
      { name: "CSS", level: "90%" },
      { name: "JavaScript", level: "85%" },
      { name: "React", level: "85%" },
      { name: "Next.js", level: "80%" },
      { name: "Tailwind CSS", level: "90%" },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "75%" },
      { name: "Express.js", level: "75%" },
      { name: "MongoDB", level: "70%" },
      { name: "REST API", level: "80%" },
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: "85%" },
      { name: "VS Code", level: "90%" },
      { name: "Responsive Design", level: "95%" },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Technological stack and tools I use to build seamless digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-6 border-b pb-4">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      {/* <span className="text-sm text-gray-500">{skill.level}</span> */}
                      {/* Level number hidden for cleaner look, visual bar only */}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
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
