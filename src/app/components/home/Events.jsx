"use client";

import Link from "next/link";

import { motion } from "framer-motion";

const Events = () => {
  return (
    <section className="relative px-4 md:px-8 py-10">
      <motion.div
        className="absolute top-1/4 -left-3.5 md:-top-1/4 md:left-1/4 w-[300px] h-[400px] md:w-[800px] md:h-[800px] bg-[url('/events.png')] bg-contain bg-no-repeat"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      ></motion.div>

      <div className="z-10">
        <motion.h2
          className="text-6xl font-bold text-transparent bg-white text-stroke-black mb-10"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Events
        </motion.h2>

        <motion.div
          className="md:w-9/12 mx-auto rounded-3xl bg-[#AECA1D80] flex flex-col md:flex-row p-4 md:p-20"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-xl md:text-2xl font-bold md:w-1/2"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Join our wonderful teams and be part of a community where your
            growth is our priority!
          </motion.h2>

          <motion.div
            className="md:w-1/2"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-xl mb-4"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              Explore the latest achievements, milestones, and breakthroughs at
              Bennet Pharmaceuticals.
            </motion.p>
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href={"#"}
                className="rounded-full p-2 bg-black text-white md:text-lg font-bold"
              >
                Explore More
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
