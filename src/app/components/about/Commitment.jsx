"use client";

import React from "react";
import { motion } from "framer-motion";

const Commitment = () => {
  return (
    <section className="relative px-4 md:px-16 py-10 bg-[url('/commitment.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative flex flex-col space-y-16 text-white">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold md:w-1/4">
            Our commitment to the nation
          </h2>
          <p className="text-xl md:w-1/2">
            We provide high-quality healthcare solutions, at prices that are
            accessible to all. <br /> Our team upholds the highest standards of
            ethical practices, with certifications and strict adherence to
            regulatory standards, ensuring your well-being in every interaction.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-[80vw] grid md:grid-cols-3 gap-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="bg-black text-white text-lg rounded-xl px-4 py-10 text-center"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              We offer tailored solutions through our three core divisions:
              Ethical, Critical Care, and the Emiror Division, bringing
              specialized and innovative care to those who need it most.
            </p>
          </motion.div>
          <motion.div
            className="bg-black text-white text-lg rounded-xl px-4 py-10 text-center"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>
              We collaborate with over 500 passionate sales personnel and a
              network of 1,000+ distributors, ensuring consistent access to care
              across the country with a presence in 15+ states.
            </p>
          </motion.div>
          <motion.div
            className="bg-black text-white text-lg rounded-xl px-4 py-10 text-center"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p>
              With over 100,000 retail outlets nationwide, we bring superior
              healthcare solutions within easy reach for everyone. We believe in
              the transformative power of healthcare
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Commitment;
