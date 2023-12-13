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
      <section ref={targetRef} className="relative h-[300vh] border border-red-500 container mx-auto">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            {/* https://www.framer.com/motion/use-scroll/ */}
            {/* <motion.div
                className="progress-bar z-2"
                style={{ scaleX: scrollYProgress }}
            /> */}
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
          <motion.div
                className="absolute top-10 progress-bar z-2"
                style={{ scaleX: scrollYProgress }}
            />
        </div>
      </section>
    );
  };
  
  const Card = ({ card }) => {
    return (
      <div
        key={card.id}
        className="group relative h-[450px] w-[90vw] overflow-hidden bg-neutral-200 border border-black"
      >
        <div
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
            {card.title}
          </p>
        </div>
      </div>
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