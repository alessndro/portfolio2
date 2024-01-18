import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Spline from '@splinetool/react-spline';
import { motion, useTransform, useScroll } from "framer-motion";
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import AlessandroCV from '../assets/AlessandroCv.pdf'

export default function Hero() {
  // Used for fade in
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const controls2 = useAnimation();
  const [ref2, inView2] = useInView();

  const controls3 = useAnimation();
  const [ref3, inView3] = useInView();

  const controls4 = useAnimation();
  const [ref4, inView4] = useInView();

  const controls5 = useAnimation();
  const [ref5, inView5] = useInView();

  const controls6 = useAnimation();
  const [ref6, inView6] = useInView();

  const controls7 = useAnimation();
  const [ref7, inView7] = useInView();
    
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

  React.useEffect(() => {
    if (inView5) {
      controls5.start({ opacity: 1});
    } else {
      controls5.start({ opacity: 0});
    }
  }, [controls5, inView5]);

  React.useEffect(() => {
    if (inView6) {
      controls6.start({ opacity: 1});
    } else {
      controls6.start({ opacity: 0});
    }
  }, [controls6, inView6]);

  React.useEffect(() => {
    if (inView7) {
      controls7.start({ opacity: 1});
    } else {
      controls7.start({ opacity: 0});
    }
  }, [controls7, inView7]);

  return (
    <header className='font-poppins h-full w-full flex container mx-auto px-20'>
        <div className='h-full w-full flex flex-col md:flex-row relative'>
            <motion.div
                  ref={ref7}
                  initial={{ opacity: 0 }}
                  animate={controls7}
                  transition={{ duration: 4, ease: 'easeIn' }}
                  className='absolute mx-auto w-full flex justify-center bottom-5'
                  >
                <a href={AlessandroCV} download="AlessandroDegenkampCV" target='_blank'>
                  <button className='border border-black rounded-xl text-black py-2 px-4 fade-in'>Download CV</button>
                  {/* <Button /> */}
                </a>
            </motion.div>
            
            <div className='hidden md:w-1/2 md:flex md:justify-center flex-col text-focus-in'>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 2, ease: 'easeIn' }}
                    >
                    <h1 className='text-6xl lg:text-8xl font-extralight'>Hi there,</h1>
                </motion.div>
                <motion.div
                  ref={ref2}
                  initial={{ opacity: 0 }}
                  animate={controls2}
                  transition={{ duration: 3, ease: 'easeIn' }}
                  >
                <p className='text-6xl lg:text-8xl font-extralight mb-7'>I'm Alessandro</p>
                </motion.div>
                <motion.div
                  ref={ref3}
                  initial={{ opacity: 0 }}
                  animate={controls3}
                  transition={{ duration: 4, ease: 'easeIn' }}
                  >
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Product Owner',
                        4000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Front-end Developer',
                        4000,
                        'Entrepreneur',
                        4000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '3em', display: 'inline-block', fontWeight: '200',  }}
                    repeat={Infinity}
                />
                </motion.div>
            </div>

            <div className='md:w-1/2 h-1/2 md:h-full'>
            <Spline scene="https://prod.spline.design/8zoWxaaV19VHbPC7/scene.splinecode" />
            </div>
            
            <div className='flex-col text-focus-in text-center md:hidden'>
            <motion.div
                    ref={ref4}
                    initial={{ opacity: 0 }}
                    animate={controls4}
                    transition={{ duration: 2, ease: 'easeIn' }}
                    >
                    <h1 className='text-4xl lg:text-8xl font-extralight custom-thin'>Hi there,</h1>
                </motion.div>
                <motion.div
                  ref={ref5}
                  initial={{ opacity: 0 }}
                  animate={controls5}
                  transition={{ duration: 3, ease: 'easeIn' }}
                  >
                <p className='text-4xl lg:text-8xl font-extralight custom-thin mb-3'>I'm Alessandro</p>
                </motion.div>
                <motion.div
                  ref={ref6}
                  initial={{ opacity: 0 }}
                  animate={controls6}
                  transition={{ duration: 4, ease: 'easeIn' }}
                  >
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Product Owner',
                        4000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Front-end Developer',
                        4000,
                        'Entrepreneur',
                        4000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block', fontWeight: '200',  }}
                    repeat={Infinity}
                />
                </motion.div>
            </div>
        </div>
    </header>
  )
}
