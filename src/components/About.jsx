import '../App.css'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";


function About() {

    return (
      <div>
        <HorizontalScrollCarousel />
      </div>
    );
  };
  
  const HorizontalScrollCarousel = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);
    
  
    return (
      <section ref={targetRef} className="relative h-[200vh] border border-red-500 container mx-auto">
        
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden border border-yellow-400">
            {/* https://www.framer.com/motion/use-scroll/ */}
            <p className='absolute mx-auto z-20 max-w-4xl text-2xl '>Bridging business insights with front-end expertise, I aspire to excel as a Product Owner, transforming complex ideas into valuable digital solutions.</p>
          <motion.div style={{ x }} className="flex gap-4 relative z-1 -right-80">
            <div className='group flex h-[450px] w-[1150px] justify-center items-center overflow-hidden border border-blue-500'>
                <h2 className='background-text relative gray-text'>ABOUT ME</h2>
            </div>
          </motion.div>


        </div>

    </section>
    );
  };
  
  
  export default About;
  
  const cards = [
    {
      url: "/imgs/abstract/1.jpg",
      title: "ABOUT ME",
      id: 1,
    },
    {
      url: "/imgs/abstract/2.jpg",
      title: "Title 2",
      id: 2,
    },
  ];