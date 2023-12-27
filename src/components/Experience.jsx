import '../App.css'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react'


function Experience() {

    return (
    <HorizontalScrollCarousel />
    );
  };
  
  const HorizontalScrollCarousel = () => {
    // When element in view, fade in
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    const controls2 = useAnimation();
    const [ref2, inView2] = useInView();
  
    const controls3 = useAnimation();
    const [ref3, inView3] = useInView();
  
    const controls4 = useAnimation();
    const [ref4, inView4] = useInView();
  
    React.useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1});
      } else {
        controls.start({ opacity: 0});
      }
    }, [controls, inView]);
  
    React.useEffect(() => {
      if (inView2) {
        controls2.start({ opacity: 1});
      } else {
        controls2.start({ opacity: 0});
      }
    }, [controls2, inView2]);
  
    React.useEffect(() => {
      if (inView3) {
        controls3.start({ opacity: 1});
      } else {
        controls3.start({ opacity: 0});
      }
    }, [controls3, inView3]);
  
    React.useEffect(() => {
      if (inView4) {
        controls4.start({ opacity: 1});
      } else {
        controls4.start({ opacity: 0});
      }
    }, [controls4, inView4]);
  
    // Create the horizontal scroll whereby change in Y will result in change in x
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);
    
  
    return (
      <section ref={targetRef} className="relative h-[300vh]  container mx-auto px-10">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            {/* https://www.framer.com/motion/use-scroll/ */}
          <motion.div style={{ x }} className="flex gap-20 md:gap-2">
            <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 0.5, ease: 'easeIn' }}
                    className="group relative h-[450px] w-[100vw] overflow-hidden"
                    >
                <p className='gray-text text-7xl md:text-9xl'>2017-2020</p>
                
                <div className='flex flex-row gap-10'>
                  <div className='py-20 text-md md:text-xl'>
                      <p className='mb-10 font-thin'>BACHELOR BUSINESS ADMINISTRATION</p>
                      <p className='mb-10 font-thin'>MINOR PROGRAMMING</p>
                      <p className='font-thin'>ASSISTENT MANAGER</p>
                  </div>
                  <div className='py-20 text-md md:text-xl'>
                      <p className='mb-10 font-thin'>University of Amsterdam</p>
                      <p className='mb-10 font-thin'>University of Amsterdam</p>
                      <p className='font-thin'>Coop</p>
                  </div>
                </div>
                  
       
            </motion.div>

            <motion.div
                    ref={ref2}
                    initial={{ opacity: 0 }}
                    animate={controls2}
                    transition={{ duration: 0.5, ease: 'easeIn' }}
                    className="group relative h-[450px] w-[100vw] overflow-hidden"
                    >
                <p className='gray-text text-7xl md:text-9xl'>2020-2022</p>
                <div className='flex flex-row gap-10'>
                  <div className='py-20 text-md md:text-xl'>
                    <p className='mb-10 font-thin'>MASTER ENTREPRENEURSHIP</p>
                    <p className='mb-10 font-thin'>SCRUM MEMBER, JR PROJECT LEADER</p>
                    <p className='font-thin'>ASSISTENT MANAGER</p>
                  </div>
                  <div className='py-20 text-md md:text-xl'>
                      <p className='mb-10 font-thin'>University of Amsterdam</p>
                      <p className='mb-10 font-thin'>Telesuper</p>
                      <p className='font-thin'>Coop</p>
                  </div>
                </div>
            </motion.div>

            <motion.div
                    ref={ref3}
                    initial={{ opacity: 0 }}
                    animate={controls3}
                    transition={{ duration: 0.5, ease: 'easeIn' }}
                    className="group relative h-[450px] w-[100vw] overflow-hidden"
            >
                <p className='gray-text text-7xl md:text-9xl'>2022-2023</p>
                <div className='flex flex-row gap-10'>
                  <div className='py-20 text-md md:text-xl'>
                    <p className='mb-10 font-thin'>BACKPACKING TRIP</p>
                  </div>
                  <div className='py-20 text-md md:text-xl'>
                      <p className='mb-10 font-thin'>South East Asia</p>
                  </div>
                </div>
            </motion.div>

            <motion.div
                    ref={ref4}
                    initial={{ opacity: 0 }}
                    animate={controls4}
                    transition={{ duration: 0.5, ease: 'easeIn' }}
                    className="group relative h-[450px] w-[100vw] overflow-hidden"
            >
                <p className='gray-text text-7xl md:text-9xl'>2023-2024</p>
                <div className='flex flex-row gap-10'>
                  <div className='py-20 text-md md:text-xl'>
                    <p className='mb-10 font-thin'>INTRODUCTION TO COMPUTER SCIENCE</p>
                    <p className='mb-10 font-thin'>UX DESIGN</p>
                    <p className='mb-10 font-thin'>FRONT END DEVELOPER BOOTCAMP</p>
                    <p className='font-thin'>SCRUM CERTIFICATES I </p>
                  </div>
                  <div className='py-20 text-md md:text-xl'>
                      <p className='mb-10 font-thin'>CS50 Harvard</p>
                      <p className='mb-10 font-thin'>Growth Tribe</p>
                      <p className='mb-10 font-thin'>Scrimba</p>
                      <p className='font-thin'>Scrum.org</p>
                  </div>
                </div>
            </motion.div>

            <div className='flex items-center justify-center '>
            <h2 className='gray-text text-8xl'>MY PROJECTS</h2>
            </div>
          </motion.div>
          
          <motion.div
                className="absolute top-10 progress-bar z-2"
                style={{ scaleX: scrollYProgress }}
            />
        </div>
      </section>
    );
  };
  
  export default Experience;
 