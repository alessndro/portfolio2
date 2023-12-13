import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Experience from './components/Experience'
import Hero from './components/Hero'
import About from './components/About'

export default function App() {

    return (
      <div className='h-full gray-bg'>
        <Hero />
        <About />
        <Experience />
      </div>
    );
  };
  
  