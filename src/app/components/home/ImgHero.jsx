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

  return (
    <motion.section
      className="relative md:py-20"
      initial="hidden"
      animate="visible"
      exit="hidden"
      viewport={{ once: true }}
    >
      <div className="container w-[90vw] md:w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div className="space-y-4" variants={leftContentVariants}>
          <motion.h1
            className="text-3xl md:text-8xl font-semibold"
            variants={leftItemVariants}
          >
            A Legacy of <br /> <span className="text-[#AECA1D]">Wellness.</span>
            <br />
            Together, <br /> We <span className="text-[#AECA1D]">Heal</span>.
          </motion.h1>
          <motion.p className="text-xl md:text-2xl" variants={leftItemVariants}>
            Dedicated to wellness since 1996
          </motion.p>
        </motion.div>

        <motion.div
          className="md:h-[650px] md:-mt-32 -z-50"
          variants={rightImageVariants}
        >
          <img src="/heroImg.png" alt="pills" className="w-full h-full" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ImgHero;
