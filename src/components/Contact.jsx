import '../App.css'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import send from '../assets/send.svg'
import phone from '../assets/phone-call.svg'

function Contact() {
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
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "55%"]);
    
  
    return (
      <section ref={targetRef} className="relative h-[200vh] container mx-auto">
        
        <motion.div
          className="sticky top-0 flex h-screen items-center justify-center overflow-hidden "
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 2, ease: 'easeIn' }}
                    >
            {/* https://www.framer.com/motion/use-scroll/ */}
  
           
            <div className='absolute z-20 max-w-4xl text-md p-20 md:text-2xl'><p>Ready to dive into new challenges as a Product Owner. let's connect and explore how we can create impactful solutions together</p>  
              <div className='flex flex-row gap-10 mt-5'>
                <a target="_blank" href="https://github.com/alessndro"><img src={github} alt="icon of github logo"/></a>
                <a target="_blank" href="https://www.linkedin.com/in/alessandro-degenkamp-390a231b5/"><img src={linkedin} alt="icon of linkedin logo"/></a>
                <a href="mailto:alessandrodegenkamp@hotmail.com" ><img src={send} alt="icon of sending arrow"/></a>
                <a href="tel:+31624490497"><img src={phone} alt="icon of phone"/></a>
              </div>
            </div>
          <motion.div style={{ x }} className="flex gap-4 relative z-1 -left-80">
            <div className='group flex h-[450px] w-[1150px] justify-center items-center overflow-hidden'>
                <h2 className='background-text relative gray-text'>CONTACT ME</h2>
            </div>
          </motion.div>
        </motion.div>

    </section>
    );
  };
  
  export default Contact;
  
