"use client";

import { motion } from "framer-motion";

const Stats = () => {
  return (
    <section className="px-4 md:px-16 py-16 my-10 flex flex-col">
      <motion.div
        className="relative container mx-auto rounded-3xl md:w-9/12 bg-[#AECA1D66] border border-black flex flex-col md:flex-row items-center justify-between space-y-4 text-center py-8 md:p-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -top-20 md:right-1/4 z-10 rounded-full bg-black text-white p-6 md:px-9 md:py-8 text-center"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75 }}
        >
          <h2 className="md:text-xl">100+</h2>
          <p className="text-sm">
            Sku and <br /> products
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold">500+</h2>
          <p className="font-bold">
            Passionate <br /> Representative
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold">10000+</h2>
          <p className="font-bold">
            Distributors <br /> Network
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold">15500+</h2>
          <p className="font-bold">
            Retail <br /> Outlets
          </p>
        </motion.div>

        <motion.div
          className="absolute -bottom-24 md:-bottom-20 md:left-1/4 z-10 rounded-full bg-black text-white px-6 py-8 md:px-8 md:py-9 text-center text-sm md:text-base"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75 }}
        >
          <h2 className="md:text-xl">150+</h2>
          <p>
            States <br /> distributed
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Stats;
