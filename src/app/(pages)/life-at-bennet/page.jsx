"use client";
import HeroSection from "@/app/components/HeroSection";
import ImageGallery from "@/app/components/life-at-bennet/ImageGallery";
import { motion } from "framer-motion";
import Testimonial from "@/app/components/life-at-bennet/Testimonial";

export default function LifeAtBennet() {
  const text =
    "We're committed to fostering an environment where you can thrive, grow, and reach your full potential.".split(
      " "
    );
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  return (
    <div className="min-h-screen flex flex-col mx-auto ">
      
      <HeroSection
        imageLink="/life-at-bennet.png"

        title='Empowering <span className="text-[#9DC41A]">Growth</span>,
                <br />
                Celebrating <span className="text-[#9DC41A]">Success</span>'
                
        description="Together We Thrive, Together We Succeed"
        showKnowMoreButton={false}
      />

      {/* Life At Bennet Banner */}
      {/* <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
      >
        <div className="container my-5 px-4 mt-8  py-6 flex items-center justify-center align-middle bg-[#d6e48d] lg:rounded-2xl">
          <div className="w-full flex flex-col lg:flex-row justify-center items-centerlg:gap-5 ">
            <h2 className="text-4xl text-center align-middle  mt-4 md:-ml-[2rem] lg:text-5xl font-bold mb-4 lg:w-1/3">
              Life At Bennet
            </h2>
            <p className=" text-md lg:text-xl lg:w-2/3 md:ml-12 mt-1">
              Since its inception, Bennet Pharmaceuticals has been more than
              just a pharmaceutical company - it's been a beacon of hope for
              millions. Through innovation, dedication, and a passion for
              excellence.
            </p>
          </div>
        </div>
      </motion.section> */}

      {/* Image Gallery */}
      <section>
        <div className="container w-[100%] mx-auto px-4 py-12 text-3xl md:text-4xl font-bold">
          <h2 className="flex flex-wrap gap-2">
            {text.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>
        <ImageGallery />
      </section>

      <Testimonial />
    </div>
  );
}
