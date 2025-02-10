"use client";

import { motion } from "framer-motion";

const ImgHero = () => {
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

  const textHoverVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const accentTextHoverVariants = {
    hover: {
      scale: 1.02,
      color: "#c5e320",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
    className="relative scale-95 xl:scale-100 md:px-8 scale-105 ml-10 sm:ml-16  2xl:ml-auto flex items-center justify-center max-w-[1440px] mx-auto mt-[12px]"
      initial="hidden"
      animate="visible"
      exit="hidden"
      viewport={{ once: true }}
    >
      <div className="w-full mx-auto mt-12 px-4 2xl:ml-10 xl:ml-0 ">
       
        <div className="flex flex-col ml-8 md:flex-row items-center justify-between gap-8">
         
          {/* Left Side Content */}
          <motion.div
            className="w-full md:w-1/2 space-y-6 ml-16 sm:ml-12  md:ml-10 lg:ml-0 "
            variants={leftContentVariants}
          >
            <motion.h1
              className="text-5xl -mt-10 sm:text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.1]"
              variants={leftItemVariants}
            >
              {/* Smol Box */}
              <div>
                <img
                  src="./SmolBox.svg"
                  className="z-40 -ml-14 md:-ml-16  mt-[3rem] md:mt-10 lg:mt-14 my-6 md:my-0 lg:mb-3"
                  alt="Smol Box"
                />
              </div>

              <div className="flex flex-col mt-1 md:-mt-2 ">
                <div className="flex flex-wrap mt-2 sm:mt-0 -ml-16 items-baseline gap-x-3 ">
                  <motion.span
                    whileHover="hover"
                    variants={textHoverVariants}
                    className="inline-block cursor-default"
                  >
                    A Legacy of
                  </motion.span>
                  <motion.span
                    whileHover="hover"
                    variants={accentTextHoverVariants}
                    className="text-[#AECA1D] inline-block cursor-default"
                  >
                    Wellness.
                  </motion.span>
                </div>

                <div className="flex flex-wrap -ml-16 items-baseline gap-x-3 mt-2">
                  <motion.span
                    whileHover="hover"
                    variants={textHoverVariants}
                    className="inline-block cursor-default"
                  >
                    Together,
                  </motion.span>
                  <div className="inline-flex items-baseline gap-x-2">
                    <motion.span
                      whileHover="hover"
                      variants={textHoverVariants}
                      className="inline-block cursor-default"
                    >
                      We
                    </motion.span>
                    <motion.span
                      whileHover="hover"
                      variants={accentTextHoverVariants}
                      className="text-[#AECA1D] inline-block cursor-default"
                    >
                      Heal
                    </motion.span>
                    <span className="text-[#AECA1D]">.</span>
                  </div>
                </div>
              </div>
            </motion.h1>

            <div className="flex">
              <motion.p
                className="text-xl mx-auto -ml-20 px-4 mt-1 md:mt-0  md:-ml-20 lg:-ml-20 sm:-ml-6 -mt-8 md:text-2xl text-gray-700 cursor-default"
                variants={leftItemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                Dedicated to wellness since 1996
              </motion.p>
            </div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            className="w-full px-4 scale-90  md:w-1/2 h-[400px] md:h-[500px]"
            variants={rightImageVariants}
          >
            <div className="relative h-full rounded-[2rem] ">
              {/*  Box */}
              <div>
                <img
                  src="./Box.svg"
                  className="absolute  z-40 scale-75  ml-[10rem] mt-[15.5rem] sm:ml-32 md:mt-[16rem]  lg:mt-[22.5rem] md:ml-12"
                  alt="Smol Box"
                />
              </div>

              {/*  Medicine */}
              <div className="">
                <img
                  src="./Medicine.svg"
                  className="absolute  z-40 scale-75  ml-[4rem] -mt-[4rem] sm:ml-[14rem] 2xl:ml-[26rem]
                   md:mt-3.5 md:ml-[12rem] lg:mt-[4.5rem]  lg:ml-[22rem]"
                  alt="Smol Box"
                />
              </div>

              {/* Image */}
              <div className="">

{/*               
                <img
                  src="/Doctor.png"
                  alt="Medical consultation"
                  className="w-full h-[25rem] lg:h-[30rem] rounded-[2rem] z-40"
                /> */}

                <img
                  src="/Homepage1.png"
                  alt="Medical consultation"
                  className="w-full h-[20rem] md:mt-14 lg:mt-0 -ml-10 xl:ml-0 md:ml-0 lg:scale-[0.8] lg:h-[30rem] rounded-[2rem] z-40"
                />
{/* 
                <img
                  src="/Homepage2.png"
                  alt="Medical consultation"
                  className="w-full h-[25rem] lg:h-[30rem] rounded-[2rem] z-40"
                /> */}


              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem]" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ImgHero;
