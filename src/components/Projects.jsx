import React from 'react'
import calm1 from '../assets/calm-mock1.png'
import calm2 from '../assets/calm-mock2.png'
import calm3 from '../assets/calm-mock3.png'
import calm4 from '../assets/calm-mock4.png'
import { motion, useTransform, useScroll } from "framer-motion";

export default function Projects() {
  return (
    <>
    <div className='h-[200vh] fade-in flex container mx-auto border border-blue-500'>
        <div className='w-1/2 h-full border border-yellow-500 relative'>
         
            <div className='h-[80vh] border border-black sticky top-0'>
                <div className='border fade-in border-purple-500 px-10 py-40 relative h-full'>
                <div className='absolute top-5 left-5'>
                  <p className='font-bold text-2xl'>01</p>
                </div>
                <div className='absolute bottom-5 left-5'>
                  <p className='font-bold text-2xl'>HEALTH</p>
                </div>
                  <h4 className='text-4xl font-bold'>Calm.</h4>
                  <p className='mt-2 text-sm'>AI, React, React Router, Firebase Auth, Firestore, Netlify</p>
                  <p className='mt-5 max-w-xl'>The Calm Platform is a Health platform crafted around the five pillars of health: Sleep, Morning Routine, Evening Routine, Exercise, and Relationships. Users will experience the power of the OpenAI API, which provides custom feedback and tutoring tailored to their individual health journeys. Modern, simple and effective.</p>
                </div>
            </div>
        </div>
        <div className='w-1/2 border flex'>
            <div className='border w-1/2 flex flex-col gap-20 p-2 max-w-xl'>
                {/* <img src={calm2} alt="Iphone mock website" /> */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  > <img src={calm1} alt="Iphone mock website" />
                </motion.div>
                <img src={calm3} alt="Iphone mock website" />
                {/* <img src={calm4} alt="Iphone mock website" /> */}
            </div>
            <div className='border flex-col border-black w-1/2 hidden p-2 gap-40 mt-20 max-w-xl md:flex'>
              <img src={calm2} alt="Iphone mock website" />
              <img src={calm4} alt="Iphone mock website" />
            </div>
        </div>
    </div>
    <div className='h-[200vh] flex container mx-auto border border-blue-500'>
        <div className='w-1/2 h-full border border-yellow-500 relative'>
         
            <div className='h-[80vh] border border-black sticky top-0'>
                <div className='border border-purple-500 px-10 py-40 relative h-full'>
                <div className='absolute top-5 left-5'>
                  <p className='font-bold text-2xl'>01</p>
                </div>
                <div className='absolute bottom-5 left-5'>
                  <p className='font-bold text-2xl'>HEALTH</p>
                </div>
                  <h4 className='text-4xl font-bold'>Calm.</h4>
                  <p className='mt-2 text-sm'>AI, React, React Router, Firebase Auth, Firestore, Netlify</p>
                  <p className='mt-5 max-w-xl'>The Calm Platform is a Health platform crafted around the five pillars of health: Sleep, Morning Routine, Evening Routine, Exercise, and Relationships. Users will experience the power of the OpenAI API, which provides custom feedback and tutoring tailored to their individual health journeys. Modern, simple and effective.</p>
                </div>
            </div>
        </div>
        <div className='w-1/2 border flex'>
            <div className='border w-1/2 flex flex-col gap-20 p-2 max-w-xl'>
                {/* <img src={calm2} alt="Iphone mock website" /> */}
                <img src={calm1} alt="Iphone mock website" />
                <img src={calm3} alt="Iphone mock website" />
                {/* <img src={calm4} alt="Iphone mock website" /> */}
            </div>
            <div className='border flex-col border-black w-1/2 hidden p-2 gap-40 mt-20 max-w-xl md:flex'>
              <img src={calm2} alt="Iphone mock website" />
              <img src={calm4} alt="Iphone mock website" />
            </div>
        </div>
    </div>
    <div className='h-[200vh] flex container mx-auto border border-blue-500'>
        <div className='w-1/2 h-full border border-yellow-500 relative'>
         
            <div className='h-[80vh] border border-black sticky top-0'>
                <div className='border border-purple-500 px-10 py-40 relative h-full'>
                <div className='absolute top-5 left-5'>
                  <p className='font-bold text-2xl'>01</p>
                </div>
                <div className='absolute bottom-5 left-5'>
                  <p className='font-bold text-2xl'>HEALTH</p>
                </div>
                  <h4 className='text-4xl font-bold'>Calm.</h4>
                  <p className='mt-2 text-sm'>AI, React, React Router, Firebase Auth, Firestore, Netlify</p>
                  <p className='mt-5 max-w-xl'>The Calm Platform is a Health platform crafted around the five pillars of health: Sleep, Morning Routine, Evening Routine, Exercise, and Relationships. Users will experience the power of the OpenAI API, which provides custom feedback and tutoring tailored to their individual health journeys. Modern, simple and effective.</p>
                </div>
            </div>
        </div>
        <div className='w-1/2 border flex'>
            <div className='border w-1/2 flex flex-col gap-20 p-2 max-w-xl'>
                {/* <img src={calm2} alt="Iphone mock website" /> */}
                <img src={calm1} alt="Iphone mock website" />
                <img src={calm3} alt="Iphone mock website" />
                {/* <img src={calm4} alt="Iphone mock website" /> */}
            </div>
            <div className='border flex-col border-black w-1/2 hidden p-2 gap-40 mt-20 max-w-xl md:flex'>
              <img src={calm2} alt="Iphone mock website" />
              <img src={calm4} alt="Iphone mock website" />
            </div>
        </div>
    </div>
    </>
  )
}
