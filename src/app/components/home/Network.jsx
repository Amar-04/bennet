"use client";

import { motion } from "framer-motion";

const Network = () => {
  return (
    <section className="px-4 md:px-16 py-8">
      <div className="container mx-auto flex flex-col space-y-8">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-transparent bg-white text-stroke-black"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Our Manufacturing <br /> Network
        </motion.h2>

        <motion.h2
          className="text-3xl md:text-5xl font-bold"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Experience the <span className="text-[#AECA1D]"> BENNET </span> <br />
          difference in every product.
        </motion.h2>
      </div>
    </section>
  );
};

export default Network;
