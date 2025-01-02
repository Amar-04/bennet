"use client";

import { motion } from "framer-motion";

const Priorities = () => {
  return (
    <section className="px-4 md:px-8 py-10">
      <div className="container flex flex-col space-y-4">
        <motion.h2
          className="text-2xl md:text-5xl font-bold leading-relaxed"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Your Health, Our <span className="text-[#2C3D5A]">Priority!</span>
          <br />
          Building <span className="text-[#2C3D5A]">Healthier </span>
          Communities.
        </motion.h2>

        <motion.p
          className="md:text-xl"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          Transforming Lives since 1996
        </motion.p>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          <motion.div
            className="h-[300px]"
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/priorityImg.png"
              alt=""
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2 my-auto"
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl leading-relaxed">
              At Bennet, we’re more than just a healthcare company—we’re a
              community of dedicated professionals committed to creating a
              healthier future for everyone.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Priorities;
