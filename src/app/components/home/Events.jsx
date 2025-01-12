"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Events = () => {
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
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        {/* Header with line */}
        <div className="flex items-center gap-8 mb-16">
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
            EVENTS
          </motion.h2>
          <motion.div
            className="h-[2px] bg-[#AECA1D] flex-grow"
            initial="hidden"
            whileInView="visible"
            variants={lineVariant}
            viewport={{ once: true, amount: 0.2 }}
          />
        </div>

        {/* Main Content Card */}
        <div className="relative">
          {/* Background Image */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none">
            <motion.div
              className="w-full h-full bg-[url('/events.png')] bg-contain bg-no-repeat bg-right"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>

          <motion.div
            className="relative rounded-[2rem] bg-[#AECA1D]/40 p-8 md:p-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div className="md:w-1/2" variants={fadeInUp}>
                <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                  Join our wonderful teams and be part of a community where your
                  growth is our priority!
                </h2>
              </motion.div>

              <motion.div className="md:w-1/2 space-y-8" variants={fadeInUp}>
                <p className="text-lg md:text-xl text-gray-700">
                  Explore the latest achievements, milestones, and breakthroughs
                  at Bennet Pharmaceuticals.
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href="#"
                    className="inline-block bg-black text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-900 transition-colors duration-300"
                  >
                    Explore More
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-[#AECA1D]/20 -z-10" />
            <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-[#AECA1D]/20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Events;
