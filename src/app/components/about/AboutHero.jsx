"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const AboutHero = () => {
  const leftContentVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const leftItemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  const rightImageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (

    <motion.section
      className="relative flex items-center overflow-x-hidden mt-20"
      initial="hidden"
      animate="visible"
      exit="hidden"
      viewport={{ once: true }}
    >
      <div className="w-full container px-4 overflow-x-hidden scale-95">
        
        <div className="flex flex-col md:flex-row ">
          <motion.div
            className="w-full mt-8"
            variants={leftContentVariants}
          >

            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] lg:scale-75 lg:-ml-16"
              variants={leftItemVariants}
            >
            <div className="md:-ml-2 md:mt-2 lg:-mt-24 overflow-x-hidden">

              <div className="flex flex-col sm:flex-row md:flex-col">
                <div className="leading-tight">
                  Your <span className="text-[#AECA1D]">Health</span>,
                </div>
                <div className="leading-tight">Our Priority!</div>
              </div>

              <div className="flex md:flex-col">

              <div className="leading-tight">Building 
                    <div className="md:absolute md:-mt-[5.5rem] flex md:ml-[17.5rem] lg:-mt-[7.5rem] lg:ml-[23rem] z-50">Healt
                    <p className="md:text-black">hier</p>
                    </div>
              </div>
                     <div className="text-[#AECA1D] leading-tight -ml-4 md:ml-0">Communities</div>
              </div>

              </div>
            </motion.h1>

            
            <div className="lg:ml-8 md:ml-0 lg:-mt-[2rem] ">

              <motion.p
                className="text-xl md:text-2xl text-gray-700 ] "
                variants={leftItemVariants}
              >
                <span className=" ">  Transforming Lives Since 1996.</span>
              </motion.p>
          </div>

            <div className="lg:ml-8 md:ml-0 mt-8">
            <Link
              href="#"
              className="bg-black pl-4 py-3  text-white text-sm md:text-base rounded-full font-bold"
            >
              Know More{" "}
              <span className="bg-[#AECA1DE5] rounded-full px-4 py-3">↓</span>
            </Link>
            </div>

            {/* <motion.div
              variants={leftItemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="#"
                className="inline-flex items-center bg-black text-white rounded-full group"
              >
                <span className="px-6 py-3 font-bold">Know More</span>
                <div className="bg-[#AECA1D] rounded-full p-3 ml-1 group-hover:rotate-90 transition-transform duration-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </div>
              </Link>
            </motion.div> */}
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 "
            variants={rightImageVariants}
          >

            {/* Image */}
            <div className="relative h-full rounded-[2rem] ">
              <img
                src="/aboutHero.png"
                alt="Medical consultation"
                className="w-full h-full object-cover rounded-[2rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem]" />
            </div>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutHero;
