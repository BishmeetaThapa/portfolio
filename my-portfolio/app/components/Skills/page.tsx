"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Database, Cpu, Wrench } from "lucide-react";

const skillsData = {
  Frontend: [
    "HTML", "Version Control System (Git)", "CSS / Tailwind CSS", "JavaScript",
    "React JS", "Next.js", "Vite", "Client-side form validation (Yup)",
    "Form handling (Formik)", "UI Components / AI-based UI", "REST API Integration",
    "Axios", "Tanstack", "GraphQL Basics", "Apollo Client",
    "Chart Libraries (Data Visualization)", "React Leaflet (Maps)"
  ],
  "AI Integrations": [
    "LLM Integration (Google Gemini)", "LLM Integration (ChatGPT APIs)",
    "Advanced Prompt Engineering", "Token Optimization", "Tool Conversions",
    "Cloud & Scaling", "Agents-based Development (Cursor)",
    "Agents-based Development (Codex)", "Agents-based Development (Antigravity)"
  ],
  Backend: [
    "Node.js", "Express.js", "NestJS", "REST API", "Axios",
    "Nodemailer", "MongoDB", "PostgreSQL", "bcrypt", "JWT"
  ],
  Tools: [
    "VS Code", "GitHub", "Responsive Design", "Vercel", "Netlify",
    "Postman", "Docker Basics"
  ]
};

const tabIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 size={20} />,
  "AI Integrations": <Cpu size={20} />,
  Backend: <Database size={20} />,
  Tools: <Wrench size={20} />
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>("Frontend");
  const tabs = Object.keys(skillsData);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Technological stack and tools I use to build seamless digital experiences.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === tab
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md"
                }`}
            >
              {tabIcons[tab]}
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skillsData[activeTab as keyof typeof skillsData].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center border border-gray-100"
              >
                <span className="text-gray-800 font-medium text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
