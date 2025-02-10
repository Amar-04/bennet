"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ProductHero = () => {
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
      className="relative mb-10 md:py-10 mt-24 md:mt-12 max-w-[1440px] mx-auto px-0 md:ml-10 lg:ml-0"
      initial="hidden"
      animate="visible"
      exit="hidden"
      viewport={{ once: true }}
    >
      <div className="container md:ml-2 lg:ml-10  mx-auto px-0  grid md:grid-cols-2 gap-4">
        <motion.div className="space-y-4" variants={leftContentVariants}>
          
          <motion.h1
            className="text-2xl md:text-7xl font-semibold"
            variants={leftItemVariants}
          >

          <div className="lg:mt-6">

            <div className="text-[#AECA1D] md:z-40  flex" >Empowerin
            <p className=" text-[#AECA1D] md:text-black  lg:text-[#AECA1D] lg:ml-0 md:absolute lg:static md:ml-[23.2rem]" >g</p>
            </div> 

              <div className="flex  ">
           
            <div className="flex xl:flex-col xl:absolute lg:-mt-[4.2rem] lg:ml-[27rem] " >Hea
             <p className="lg:-mt-[4.4rem] text-black lg:ml-[8.5rem] "> lth</p>
              </div>

            <div className=" flex xl:static lg:mt-0 lg:ml-0 md:absolute md:-mt-[0rem] md:ml-[14.5rem]"> Jour
             <p className="lg:text-black md:text-white md:ml-[0rem] md:mt-[0rem] ">neys &</p> 
             </div>
             </div>

            Nurturing Health Through{" "}
            <span className="text-[#AECA1D] lg:absolute  lg:ml-7">Innovation</span>
          </div>

          </motion.h1>


          <motion.p
            className="md:text-2xl my-4 md:my-8"
            variants={leftItemVariants}
          >
            Transforming lives since 1996
          </motion.p>

          <div>
            <Link
              href="#"
              className="bg-black pl-4 py-3 text-white text-sm md:text-base rounded-full font-bold"
            >
              Know More{" "}
              <span className="bg-[#AECA1DE5] rounded-full px-4 py-3">↓</span>
            </Link>
          </div>

        </motion.div>

        <motion.div
          className="lg:h-[440px] lg:w-[540px] md:w-[440px] 2xl:w-[640px]"
          variants={rightImageVariants}
        >
          {/* <img src="/productHero.png" alt="pills" className="w-full h-full" /> */}

          <img src="/Products1.png" alt="pills" className="w-full h-full" />

          {/* <img src="/producs2.png" alt="pills" className="w-full h-full" /> */}


        </motion.div>
      </div>

    </motion.section>
  );
};

export default ProductHero;
