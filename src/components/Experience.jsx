import '../App.css'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";


function Experience() {

    return (
    <HorizontalScrollCarousel />
    );
  };
  
  const HorizontalScrollCarousel = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
    
  
    return (
      <section ref={targetRef} className="relative h-[300vh] border border-red-500 container mx-auto px-10">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            {/* https://www.framer.com/motion/use-scroll/ */}
            {/* <motion.div
                className="progress-bar z-2"
                style={{ scaleX: scrollYProgress }}
            /> */}
          <motion.div style={{ x }} className="flex gap-2">
            {/* {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })} */}
              <div
                className="group relative h-[450px] w-[100vw] overflow-hidden"
                >
                <p className='gray-text text-8xl'>2017-2020</p>
                <div className='flex flex-row gap-10'>
                  <div className='py-20'>
                      <p className='mb-10 text-xl font-thin'>BACHELOR BUSINESS ADMINISTRATION</p>
                      <p className='mb-10 text-xl font-thin'>MINOR PROGRAMMING</p>
                      <p className='text-xl font-thin'>ASSISTENT MANAGER</p>
                  </div>
                  <div className='py-20'>
                      <p className='mb-10 text-xl font-thin'>University of Amsterdam</p>
                      <p className='mb-10 text-xl font-thin'>University of Amsterdam</p>
                      <p className='text-xl font-thin'>Coop</p>
                  </div>
                </div>
                  
       
            </div>

            <div
                className="group relative h-[450px] w-[100vw] overflow-hidden"
            >
                <p className='gray-text text-8xl'>2020-2022</p>
                <div className='flex flex-row gap-10'>
                  <div className='py-20'>
                    <p className='mb-10 text-xl font-thin'>MASTER ENTREPRENEURSHIP</p>
                    <p className='mb-10 text-xl font-thin'>SCRUM MEMBER, JR PROJECT LEADER</p>
                    <p className='text-xl font-thin'>ASSISTENT MANAGER</p>
                  </div>
                  <div className='py-20'>
                      <p className='mb-10 text-xl font-thin'>University of Amsterdam</p>
                      <p className='mb-10 text-xl font-thin'>Telesuper</p>
                      <p className='text-xl font-thin'>Coop</p>
                  </div>
                </div>
            </div>

            <div
                className="group relative h-[450px] w-[100vw] overflow-hidden"
            >
                <p className='gray-text text-8xl'>2022-2023</p>
                <div className='flex flex-row gap-10'>
                  <div className='py-20'>
                    <p className='mb-10 text-xl font-thin'>BACKPACKING TRIP</p>
                  </div>
                  <div className='py-20'>
                      <p className='mb-10 text-xl font-thin'>South East Asia</p>
                  </div>
                </div>
            </div>

            <div
                className="group relative h-[450px] w-[100vw] overflow-hidden"
            >
                <p className='gray-text text-8xl'>2023-2024</p>
                <div className='flex flex-row gap-10'>
                  <div className='py-20'>
                    <p className='mb-10 text-xl font-thin'>INTRODUCTION TO COMPUTER SCIENCE</p>
                    <p className='mb-10 text-xl font-thin'>UX DESIGN</p>
                    <p className='mb-10 text-xl font-thin'>FRONT END DEVELOPER BOOTCAMP</p>
                    <p className='text-xl font-thin'>SCRUM CERTIFICATES I </p>
                  </div>
                  <div className='py-20'>
                      <p className='mb-10 text-xl font-thin'>CS50 Harvard</p>
                      <p className='mb-10 text-xl font-thin'>Growth Tribe</p>
                      <p className='mb-10 text-xl font-thin'>Scrimba</p>
                      <p className='text-xl font-thin'>Scrum.org</p>
                  </div>
                </div>
            </div>
            <div className='flex items-center justify-center border border-red-500'>
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
  
  const cards = [
    {
      url: "/imgs/abstract/1.jpg",
      title: "Title 1",
      id: 1,
    },
    {
      url: "/imgs/abstract/2.jpg",
      title: "Title 2",
      id: 2,
    },
    {
      url: "/imgs/abstract/3.jpg",
      title: "Title 3",
      id: 3,
    },
    {
      url: "/imgs/abstract/4.jpg",
      title: "Title 4",
      id: 4,
    },
  ];