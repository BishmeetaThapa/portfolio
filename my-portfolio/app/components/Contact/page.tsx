'use client'
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col items-center text-center md:w-2/3">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-700 mb-8">
          Want to work together or just say hi? Fill out the form below or reach me at 
          <span className="font-semibold text-blue-500"> thapabishmeeta@gmail.com</span> 
          or call <span className="font-semibold text-blue-500">9807839090</span>
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={5}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-500 mt-3 font-medium">
              Thank you! Your message has been sent.
            </p>
          )}
        </form>

        {/* Social / Contact Links */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-center">
          <a
            href="mailto:thapabishmeeta@gmail.com"
            className="text-gray-700 hover:text-blue-500 transition font-medium"
          >
            Email: thapabishmeeta@gmail.com
          </a>
          <span className="text-gray-700 font-medium">|</span>
          <a
            href="tel:9807839090"
            className="text-gray-700 hover:text-blue-500 transition font-medium"
          >
            Phone: 9807839090
          </a>
          <a
            href="https://github.com/BishmeetaThapa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-500 transition font-medium"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bishmeeta-thapa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-500 transition font-medium"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
