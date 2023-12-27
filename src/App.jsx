import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Experience from './components/Experience'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AnimatedCursor from "react-animated-cursor"

export default function App() {

    return (
      <div className='h-full gray-bg'>
        <AnimatedCursor 
          innerSize={8}
          outerSize={8}
          color='1, 1, 1'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    );
  };
  
  