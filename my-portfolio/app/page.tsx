'use client'
import React from 'react'
import Navbar from './components/Navbar/page'
import Footer from './components/Footer/page'
import Hero from './components/Hero/page'
import About from './components/About/page'
import Contact from './components/Contact/page'
import Skills from './components/Skills/page'
import Projects from './components/Projects/page'
import Qualification from './components/qualification/page'


const home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Qualification />
      <About />

      <Contact />
      <Footer />
    </>
  )
}

export default home