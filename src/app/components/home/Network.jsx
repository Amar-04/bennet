"use client";

import { motion } from "framer-motion";

const Network = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const lineVariant = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section className="container mx-auto mt-20 px-4">
      <div className="flex items-center gap-8">
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-outline uppercase whitespace-nowrap"
          style={{
            WebkitTextStroke: "1px black",
            WebkitTextFillColor: "white",
          }}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.2 }}
        >
          OUR MANUFACTURING
          <br />
          NETWORK
        </motion.h2>
        <motion.div
          className="h-[2px] bg-[#AECA1D] flex-grow"
          initial="hidden"
          whileInView="visible"
          variants={lineVariant}
          viewport={{ once: true, amount: 0.2 }}
        />
      </div>

      <motion.h2
        className="text-4xl md:text-6xl lg:text-7xl font-bold mt-12 leading-tight"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Experience the <span className="text-[#AECA1D]">BENNET</span> difference
        in every product.
      </motion.h2>
    </section>
  );
};

export default Network;
