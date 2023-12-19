import React from 'react'
import calm1 from '../assets/calm-mock1.png'
import calm2 from '../assets/calm-mock2.png'
import calm3 from '../assets/calm-mock3.png'
import calm4 from '../assets/calm-mock4.png'
import travel1 from '../assets/travel-mock1.png'
import travel2 from '../assets/travel-mock2.png'
import travel3 from '../assets/travel-mock5.png'
import travel4 from '../assets/travel-mock6.png'

import mind1 from '../assets/mind-mock1.png'
import mind2 from '../assets/mind-mock2.png'
import mind3 from '../assets/mind-mock3.png'
import mind4 from '../assets/mind-mock4.png'

import { motion, useTransform, useScroll } from "framer-motion";
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const controls2 = useAnimation();
  const [ref2, inView2] = useInView();

  const controls3 = useAnimation();
  const [ref3, inView3] = useInView();

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

  return (
    <>
    <div className='h-[200vh] fade-in flex container mx-auto border border-blue-500'>
        
        <div className='w-1/2 h-full border border-yellow-500 relative'>
         
            <div className='h-[80vh] border border-black sticky top-0'>
                <div className='border flex flex-col justify-center items-center md:justify-start fade-in border-purple-500 px-6 py-10 md:py-40 md:px-10 relative h-full'>
                  <motion.div
                  ref={ref}
                  initial={{ opacity: 0 }}
                  animate={controls}
                  transition={{ duration: 1, ease: 'easeIn' }}
                  >
                    <div className='absolute top-2 left-2 md:top-5 md:left-5'>
                      <p className='font-bold text-xl md:text-2xl'>01</p>
                    </div>
                    <div className='absolute bottom-2 left-2 md:bottom-5 md:left-5' >
                      <p className='font-bold text-xl md:text-2xl'>HEALTH</p>
                    </div>
                    <div className='absolute bottom-2 right-2 md:bottom-5 md:right-5' >
                      <a target="_blank" href="https://spectacular-tartufo-1e017e.netlify.app"><p className='font-bold text-xl md:text-2xl'>DEMO</p></a>
                    </div>
                      <h4 className='text-2xl font-bold md:text-4xl'>Calm.</h4>
                  <p className='mt-2 text-xs'>AI, React, React Router, Firebase Auth, Firestore, Netlify</p>
                  <p className='mt-5 max-w-xl text-xs md:text-lg overflow-y-auto'>The Calm Platform is a Health platform crafted around the five pillars of health: Sleep, Morning Routine, Evening Routine, Exercise, and Relationships. Users will experience the power of the OpenAI API, which provides custom feedback and tutoring tailored to their individual health journeys. Modern, simple and effective.</p>
                  </motion.div>
                </div>
            </div>
        </div>

        <div className='w-1/2 border flex'>
            <div className='border flex flex-col gap-20 p-2 max-w-xl items-center md:w-1/2 '>
                {/* <img src={calm2} alt="Iphone mock website" /> */}
                <img src={calm1} alt="Iphone mock website" />
                <img src={calm3} alt="Iphone mock website" />
                {/* <img src={calm4} alt="Iphone mock website" /> */}
            </div>
            <div className='border flex-col border-black w-1/2 hidden p-2 gap-40 justify-center max-w-xl md:flex'>
              <img src={calm2} alt="Iphone mock website" />
              <img src={calm4} alt="Iphone mock website" />
            </div>
        </div>
    </div>



    <div className='h-[200vh] flex container mx-auto border border-blue-500'>
        <div className='w-1/2 h-full border border-yellow-500 relative'>
         
            <div className='h-[80vh] border border-black sticky top-0'>
               <div className='border flex flex-col justify-center items-center md:justify-start fade-in border-purple-500 px-6 py-10 md:py-40 md:px-10 relative h-full'>
                  <motion.div
                  ref={ref2}
                  initial={{ opacity: 0 }}
                  animate={controls2}
                  transition={{ duration: 1, ease: 'easeIn' }}
                  >
                    <div className='absolute top-2 left-2 md:top-5 md:left-5'>
                      <p className='font-bold text-xl md:text-2xl'>02</p>
                    </div>
                    <div className='absolute bottom-2 left-2 md:bottom-5 md:left-5' >
                      <p className='font-bold text-xl md:text-2xl'>TRAVEL</p>
                    </div>
                    <div className='absolute bottom-2 right-2 md:bottom-5 md:right-5' >
                      <a target="_blank" href="https://gotravelapp.netlify.app"><p className='font-bold text-xl md:text-2xl'>DEMO</p></a>
                    </div>
                      <h4 className='text-2xl font-bold md:text-4xl'>Traveler's Insight</h4>
                  <p className='mt-2 text-sm'>Next.js 13, TypeScript, OPEN AI API, Netlify</p>
                  <p className='mt-5 max-w-xl text-xs md:text-lg overflow-y-auto'>Traveler's Insight built with Next.js 13 and TypeScript, features a unique, AI-driven platform. It starts with a survey to gauge your 'travel personality' based on cuisine, nightlife, and more. This creates a personal travel profile, which is then used to develop a tailored travel plan using OPEN AI API.</p>
                  </motion.div>
                </div>
            </div>
        </div>
        <div className='w-1/2 border flex'>
            <div className='border flex flex-col gap-20 p-2 max-w-xl items-center md:w-1/2 '>
                {/* <img src={calm2} alt="Iphone mock website" /> */}
                <img src={travel1} alt="Iphone mock website" />
                <img src={travel2} alt="Iphone mock website" />
                {/* <img src={calm4} alt="Iphone mock website" /> */}
            </div>
            <div className='border flex-col border-black w-1/2 hidden p-2 gap-40 justify-center max-w-xl md:flex'>
              <img src={travel3} alt="Iphone mock website" />
              <img src={travel4} alt="Iphone mock website" />
            </div>
        </div>
    </div>




    <div className='h-[200vh] flex container mx-auto border border-blue-500'>
        <div className='w-1/2 h-full border border-yellow-500 relative'>
         
            <div className='h-[80vh] border border-black sticky top-0'>
             <div className='border flex flex-col justify-center items-center md:justify-start fade-in border-purple-500 px-6 py-10 md:py-40 md:px-10 relative h-full'>
                  <motion.div
                  ref={ref3}
                  initial={{ opacity: 0 }}
                  animate={controls3}
                  transition={{ duration: 1, ease: 'easeIn' }}
                  >
                    <div className='absolute top-2 left-2 md:top-5 md:left-5'>
                      <p className='font-bold text-xl md:text-2xl'>03</p>
                    </div>
                    <div className='absolute bottom-2 left-2 md:bottom-5 md:left-5'>
                      <p className='font-bold text-xl md:text-2xl'>STUDY</p>
                    </div>
                    <div className='absolute bottom-2 right-2 md:bottom-5 md:right-5' >
                      <a target="_blank" href="https://main--lighthearted-tulumba-ad8574.netlify.app/dashboard"><p className='font-bold text-xl md:text-2xl'>DEMO</p></a>
                    </div>
                      <h4 className='text-2xl font-bold md:text-4xl'>MindScribe</h4>
                  <p className='mt-2 text-sm'>React, React Router, Firebase, External APIs, Netlify</p>
                  <p className='mt-5 max-w-xl text-xs md:text-lg overflow-y-auto'>MindScribe, a web app, enhances learning by simplifying complex educational material from videos and articles. It uses APIs like Rapid API's summarization service and OpenAI API to create brief summaries, interactive questions and tutoring, boosting comprehension and engagement. </p>
                  </motion.div>
                </div>
            </div>
        </div>
        <div className='w-1/2 border flex'>
          <div className='border flex flex-col gap-20 p-2 max-w-xl items-center md:w-1/2 '>
                {/* <img src={calm2} alt="Iphone mock website" /> */}
                <img src={mind1} alt="Iphone mock website" />
                <img src={mind3} alt="Iphone mock website" />
                {/* <img src={calm4} alt="Iphone mock website" /> */}
            </div>
            <div className='border flex-col border-black w-1/2 hidden p-2 gap-40 justify-center max-w-xl md:flex'>
              <img src={mind2} alt="Iphone mock website" />
              <img src={mind4} alt="Iphone mock website" />
            </div>
        </div>
    </div>
    </>
  )
}
