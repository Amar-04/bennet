"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Products = () => {
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
          OUR PRODUCTS
        </motion.h2>
        <motion.div
          className="h-[2px] bg-[#AECA1D] flex-grow"
          initial="hidden"
          whileInView="visible"
          variants={lineVariant}
          viewport={{ once: true, amount: 0.2 }}
        />
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Decorative Shapes */}
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#AECA1D]/10 -z-10" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[#2C3D5A]/10 -z-10" />

            {/* Hexagon-shaped image container */}
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                <img
                  src="/pills.png"
                  alt="Medical products"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Nurturing Health Through Innovation
          </motion.h3>

          <div className="space-y-6 text-lg md:text-xl text-gray-700">
            <motion.p variants={fadeInUp} transition={{ delay: 0.2 }}>
              At Bennet Pharmaceuticals, we are dedicated to delivering
              high-quality, innovative pharmaceutical solutions across various
              therapeutic areas.
            </motion.p>

            <motion.p variants={fadeInUp} transition={{ delay: 0.3 }}>
              Our broad product portfolio meets the diverse needs of healthcare
              professionals and patients alike, ensuring accessibility and
              reliability in every product we offer.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-16 space-y-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="bg-black text-white rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center hover:scale-[1.01] transition-transform duration-300">
          <h3 className="text-2xl md:text-3xl font-bold">
            Our Ethical Division
          </h3>
          <p className="text-lg md:text-xl text-gray-300">
            Discover how our innovative solutions are making a difference in
            lives across India.
          </p>
        </div>

        {/* <div className="flex items-center justify-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="#"
              className="bg-[#83961D] text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-[#96ac22] transition-colors duration-300"
            >
              Know More
            </Link>
          </motion.div>

          <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
            <Link
              href="#"
              className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full text-xl hover:bg-gray-900 transition-colors duration-300"
            >
              →
            </Link>
          </motion.div>
        </div> */}
      </motion.div>
    </section>
  );
};

export default Products;
