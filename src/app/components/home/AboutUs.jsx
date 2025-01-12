"use client";

import { motion } from "framer-motion";

const AboutUs = () => {
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
          ABOUT US
        </motion.h2>
        <motion.div
          className="h-[2px] bg-[#AECA1D] flex-grow"
          initial="hidden"
          whileInView="visible"
          variants={lineVariant}
          viewport={{ once: true, amount: 0.2 }}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Transforming{" "}
            <span className="text-[#2C3D5A] block mt-2">Healthcare</span>{" "}
            <span className="block mt-2">for a Brighter</span>{" "}
            <span className="block mt-2">tomorrow</span>
          </motion.h1>
        </div>

        <div className="flex flex-col space-y-6 md:space-y-8 text-lg md:text-xl">
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-gray-700"
          >
            We're passionate about empowering caregivers, ensuring that vital
            care reaches every corner of India, and making a lasting impact on
            the well-being of our people.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ delay: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-gray-700"
          >
            From our manufacturing facilities to our extensive distribution
            network, we're committed to delivering excellence in
            pharmaceuticals.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ delay: 0.9 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-gray-700"
          >
            We believe in the transformative power of healthcare and are
            determined to create a brighter, healthier future for all.
          </motion.p>

          <motion.p
            className="font-semibold text-gray-900"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ delay: 1.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Join us on this journey as we strive to build a stronger, healthier
            India together.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
