import '../App.css'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react'

function About() {
    return (
      <div>
        <HorizontalScrollCarousel />
      </div>
    );
  };
  
  const HorizontalScrollCarousel = () => {
    // When element in view, fade in
    const controls = useAnimation();
    const [ref, inView] = useInView();
    
    React.useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1});
      } else {
        controls.start({ opacity: 0});
      }
    }, [controls, inView]);

    // Create the horizontal scroll whereby change in Y will result in change in x
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);
    
  
    return (
      <section ref={targetRef} className="relative h-[200vh] container mx-auto">
        
        <motion.div
          className="sticky top-0 flex h-screen items-center justify-center overflow-hidden"
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 2, ease: 'easeIn' }}
                    >
            {/* https://www.framer.com/motion/use-scroll/ */}
  
           
            <p className='absolute z-20 max-w-4xl text-md p-20 md:text-2xl'>Bridging business insights with front-end expertise, I aspire to excel as a Product Owner, transforming complex ideas into valuable digital solutions.</p>
          <motion.div style={{ x }} className="flex gap-4 relative z-1 -right-80">
            <div className='group flex h-[450px] w-[1150px] justify-center items-center overflow-hidden'>
                <h2 className='background-text relative gray-text'>ABOUT ME</h2>
            </div>
          </motion.div>
        </motion.div>

    </section>
    );
  };
  
  
  export default About;
  
