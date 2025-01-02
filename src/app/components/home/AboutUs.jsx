"use client";

import { motion } from "framer-motion";

const AboutUs = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="mt-16 px-4 md:px-16">
      <motion.h2
        className="text-3xl md:text-6xl font-bold text-transparent bg-white text-stroke-black"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        ABOUT US
      </motion.h2>

      <div className="grid md:grid-cols-2">
        <div>
          <motion.h1
            className="text-2xl md:text-6xl font-bold leading-relaxed"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Transforming <span className="text-[#2C3D5A]"> Healthcare </span>for
            a Brighter tomorrow
          </motion.h1>
        </div>

        <div className="flex flex-col space-y-4 text-xl">
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
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
          >
            We believe in the transformative power of healthcare and are
            determined to create a brighter, healthier future for all.
          </motion.p>

          <motion.p
            className="font-bold"
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
