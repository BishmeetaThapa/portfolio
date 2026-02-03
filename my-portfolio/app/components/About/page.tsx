"use client";
import React from "react";
import { Award, Briefcase, Headphones } from "lucide-react"; // Changed icons
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Get to know a bit more about who I am and what I do.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">

          {/* Info Cards (Replacing Image) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <div className="bg-gray-50 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="flex justify-center mb-3 text-blue-600">
                <Briefcase size={28} />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Experience</h3>
              <p className="text-gray-500 text-sm">1+ Years</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="flex justify-center mb-3 text-blue-600">
                <Award size={28} />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Completed</h3>
              <p className="text-gray-500 text-sm">5+ Projects</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="flex justify-center mb-3 text-blue-600">
                <Headphones size={28} />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Support</h3>
              <p className="text-gray-500 text-sm">Online 24/7</p>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800">
              I&apos;m a passionate <span className="text-blue-600">Full-Stack Developer</span> based in Kathmandu.
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              I started my journey with a curiosity for how websites work, which quickly turned into a passion for building them.
              I love creating efficient, scalable, and user-friendly web applications.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              My expertise lies in the JavaScript ecosystem, particularly **React**, **Next.js**, and **Node.js**.
              I&apos;m always eager to learn new technologies and improve my skills to deliver better digital experiences.
            </p>

            {/* Download CV Button or similar could go here */}
            {/* <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">Download CV</button> */}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
