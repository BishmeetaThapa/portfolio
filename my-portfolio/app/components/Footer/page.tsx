"use client";
import React from "react";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <Link href="#home" className="text-2xl font-bold tracking-tighter hover:text-blue-400 transition">
              Bishmeeta<span className="text-blue-500">.</span>
            </Link>
            <p className="text-gray-400 mt-2 text-sm">
              Building better web experiences, one pixel at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/BishmeetaThapa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/bishmeeta-thapa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-center items-center gap-2">
          <p>&copy; {new Date().getFullYear()} Bishmeeta Thapa. All rights reserved.</p>
          <span className="hidden md:block">•</span>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-current" /> in Nepal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
