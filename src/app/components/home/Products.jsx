"use client";

import Link from "next/link";

import { motion } from "framer-motion";

const Products = () => {
  return (
    <section className="px-4 md:px-8 py-10">
      <motion.h2
        className="text-3xl md:text-6xl font-bold text-transparent bg-white text-stroke-black md:mb-20"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        OUR PRODUCTS
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-4 my-10"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="h-[300px] md:-ml-16"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/pills.png" alt="" className="h-full" />
        </motion.div>
        <motion.div
          className="flex flex-col space-y-4"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-bold"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Nurturing Health Through Innovation
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            At Bennet Pharmaceuticals, we are dedicated to delivering
            high-quality, innovative pharmaceutical solutions across various
            therapeutic areas.
          </motion.p>
          <motion.p
            className="text-xl md:text-2xl"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Our broad product portfolio meets the diverse needs of healthcare
            professionals and patients alike, ensuring accessibility and
            reliability in every product we offer.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 bg-black text-white rounded-xl p-4 gap-8 md:gap-0 md:p-10"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-xl md:text-2xl font-bold"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Our Ethical Division
        </motion.h2>

        <motion.p
          className="md:text-lg md:w-1/2"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Discover how our innovative solutions are making a difference in lives
          across India.
        </motion.p>
      </motion.div>

      <motion.div
        className="flex space-x-2 items-center justify-center text-white text-xl font-bold mt-20"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <Link href={"#"} className="p-2 rounded-full bg-[#83961D] shadow-lg">
            Know More
          </Link>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <Link href={"#"} className="rounded-full px-3 py-2 bg-black">
            →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Products;
