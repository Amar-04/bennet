"use client";

import { motion } from "framer-motion";

const HomeHero = () => {
  return (
    <section className="max-w-6xl mx-auto my-10 px-4 md:px-0">
      <motion.div
        className="relative rounded-3xl bg-[#d9d9d9] border border-[#2C3D5A] h-[500px] md:h-[400px] flex items-center justify-center"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="h-[400px] md:h-[600px]">
          <img
            src="/hero.png"
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 md:space-y-12 p-4 md:p-10">
          <motion.h2
            className="text-xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Our Legacy of Care: A Journey Since 1996
          </motion.h2>

          <motion.div
            className="flex flex-col space-y-4 md:space-y-8 md:w-[40rem] text-center md:text-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>
              Since 1996, we've been dedicated to enriching the lives of our
              citizens with the power of good health.
            </p>
            <p>
              Our journey has been one of unwavering commitment to providing
              quality healthcare solutions that inspire trust and confidence.
            </p>
            <p>
              At Bennet, we're more than just a pharmaceutical company, we're a
              catalyst for positive change.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeHero;
