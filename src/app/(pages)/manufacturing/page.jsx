"use client";
import { useState, useEffect } from "react";
import HeroSection from "@/app/components/HeroSection";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";

const DynamicWorldMap = dynamic(() => import("../../components/worldMap"), {
  ssr: false,
});

export default function Manufacturing() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="min-h-screen">
      {/* HeroSection*/}
      <div className="px-4">
        <HeroSection
          imageLink="/Manufacturing2.png"
          title='Empowering lives and <span className="text-[#9DC41A]">affordability</span>'
          description="Where excellence meets accessibility"
          showKnowMoreButton={true}
        />
      </div>

      {/* Excellence Section */}
      <section className="container mx-auto px-4 relative mt-12">
        <motion.div
          className="border border-[#2C3D5A] bg-[#D9D9D980] p-6 md:p-8 lg:p-16 rounded-3xl shadow-sm mx-auto relative z-10"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <div className="text-black">
            <div className="relative flex justify-center items-center">
              {/* Background Molecule */}
              <div className="absolute -top-10 md:-top-14 left-1/2 transform -translate-x-1/2 scale-90 md:scale-100 z-0">
                <img
                  src="/GreenMolecule.png"
                  alt="Green Molecule"
                  className="h-60  w-72  mt-10 sm:mt-0 sm:w-48 sm:h-48 sm:mt-4  md:mt-10 lg:mt-2 md:h-60 md:w-60 xl:h-60 xl:w-60  opacity-80 mix-blend-multiply"
                />
              </div>

              {/* Title */}
              <motion.h2
                className="text-2xl md:text-4xl font-bold mb-4 text-center relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Where excellence meets accessibility
              </motion.h2>
            </div>

            <motion.div
              className="text-center md:px-36"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delayChildren: 0.3,
                staggerChildren: 0.3,
              }}
            >
              <motion.p>
                <motion.span>
                  At Bennet Pharmaceuticals, we believe in delivering
                  high-quality healthcare solutions through advanced
                  manufacturing practices.
                </motion.span>
                <br />
                <br />
                <motion.span>
                  Our facilities are designed to meet the highest standards of
                  excellence, ensuring precision, safety, and innovation in
                  every product.
                </motion.span>
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Manufacturing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Title */}
          {isLargeScreen ? (
            <motion.div
              className="flex justify-start md:justify-center md:gap-0 lg:gap-0 items-center my-10 mb-14 overflow-hidden"
              initial={{ opacity: 0, x: -70 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, ease: "easeOut" },
              }}
              viewport={{ once: true, amount: 0.9 }}
            >
              <motion.h2
                className="w-3/5 md:w-[60%] lg:w-[50%] text-white text-4xl md:text-5xl xl:text-6xl font-bold text-stroke-black"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                State-of-the-Art Manufacturing at Baddi
              </motion.h2>
              <motion.div
                className="w-0 text-left md:w-[40%] lg:w-[50%] mt-2"
                initial={{ opacity: 0, x: 70 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                <hr className="border-t-2 border-[#AECA1D]" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              className="flex justify-start md:justify-center md:gap-0 lg:gap-0 items-center my-10 mb-14"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, ease: "easeOut" },
              }}
              viewport={{ once: true, amount: 0.9 }}
            >
              <motion.h2
                className="w-3/5 md:w-[60%] lg:w-[50%] text-white text-4xl md:text-5xl xl:text-6xl font-bold text-stroke-black"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                State-of-the-Art Manufacturing at Baddi
              </motion.h2>
              <motion.div
                className="w-0 text-left md:w-[40%] lg:w-[50%] mt-2"
                initial={{ opacity: 0, x: 70 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                <hr className="border-t-2 border-[#AECA1D]" />
              </motion.div>
            </motion.div>
          )}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Global Standards Compliance",
                description:
                  "Our Baddi facility operates in line with WHO GMP, ensuring top-tier manufacturing excellence.",
              },
              {
                title: "Uncompromising Quality Control",
                description:
                  "We maintain a rigorous quality assurance system, adhering to strict regulatory guidelines for every product.",
              },
              {
                title: "Advanced Technologies",
                description:
                  "Equipped with cutting-edge machinery and precise instrumentation, we deliver healthcare solutions of exceptional Innovation.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-black/90 text-white p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
              >
                <h3 className="text-xl max-w-[16rem] mx-auto px-0 lg:text-3xl font-semibold mb-3 text-[#B5CE32]">
                  {item.title}
                </h3>
                <p className="text-gray-200">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Network */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Title */}
          {isLargeScreen ? (
            <motion.div
              className="flex justify-start md:gap-0 lg:gap-0 items-center my-10 mb-14 overflow-hidden"
              initial={{ opacity: 0, x: -70 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, ease: "easeOut" },
              }}
              viewport={{ once: true, amount: 0.9 }}
            >
              <motion.h2
                className="w-full md:w-[60%] lg:w-[55%] 2xl:w-[45%] text-start text-white text-4xl md:text-5xl xl:text-6xl font-bold text-stroke-black"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                Our Manufacturing Network
              </motion.h2>

              <motion.div
                className="w-0 text-left md:w-[40%] lg:w-[45%] 2xl:w-[55%] mt-2"
                initial={{ opacity: 0, x: 70 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                <hr className="border-t-2 border-[#AECA1D]" />
              </motion.div>
            </motion.div>
          ) : (
            // For smaller screens
            <motion.div
              className="flex justify-start md:justify-center md:gap-0 lg:gap-0 items-center my-10 mb-14"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,

                transition: { duration: 1, ease: "easeOut" },
              }}
              viewport={{ once: true, amount: 0.9 }}
            >
              <motion.h2
                className="w-full md:w-[20%] lg:w-[25%] 2xl:w-[45%] text-white text-4xl md:text-5xl xl:text-6xl font-bold text-stroke-black"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                Our Manufacturing Network
              </motion.h2>

              <div className="w-full  mt-2">
                <hr className="border-t-2 border-[#AECA1D]" />
              </div>
            </motion.div>
          )}

          <motion.h3
            className="text-2xl md:max-w-[60rem]  md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 lg:leading-[4.5rem] xl:leading-[5.714rem]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1 }}
          >
            {[
              "Experience the",
              " BENNET",
              " difference in",
              " every",
              " product.",
            ].map((text, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 * index,
                }}
                className={text === " BENNET" ? "text-[#b4d335]" : ""}
              >
                {text}
              </motion.span>
            ))}
          </motion.h3>

          {/* Map */}
          <div className="-ml-10 ">
            <DynamicWorldMap />
          </div>
        </div>
      </section>

      {/* Contract Manufacturing */}
      <motion.section
        className="py-16 "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 relative">
          <motion.h2
            className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl lg:leading-[4.5rem] xl:leading-[5.714rem] font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amout: 0.7 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Contract <span className="text-[#2C3D5A]">Manufacturing</span>
          </motion.h2>
          <div>
            <motion.p
              className="text-[#525354] text-lg lg:text-2xl mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amout: 0.7 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              At Bennet Quality Assurance and Quality Control are given
              paramount importance, quality assurance system harmonise and
              simply cGMP process to ensure sustainable quality.
            </motion.p>
            <br />
            <br />
            <motion.p
              className="lg:text-lg mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              At Bennet Pharmaceuticals, we specialize in contract manufacturing
              of finished formulations, including tablets, capsules, liquid
              orals, soft gels, and bi-layered and sustained-release
              preparations.
            </motion.p>
            <br />
            <br />

            <motion.hr
              className="border-t-2 border-[#AECA1D]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />

            <br />
            <br />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              All of our products are manufactured at a facility that adheres to
              WHO-GMP compliance, ensuring that we meet the highest
              international standards across all therapeutic segments.
            </motion.p>
            <br />
            <br />

            <motion.hr
              className="border-t-2 border-[#AECA1D]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <br />
            <br />

            <motion.p
              className="lg:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
            >
              This commitment to quality enables us to consistently deliver
              excellence in healthcare solutions.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="mx-auto mt-12 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="container bg-[#D7E48E] mx-auto px-2 md:px-4 py-6 rounded-2xl">
          <div className="flex flex-col  md:gap-12 md:flex-row items-center md:justify-between">
            <div className="md:w-2/5 xl:w-[42%] w-full text-center md:text-left">
              <h3 className="font-bold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl mb-2">
                To know more about us Contact at
              </h3>
            </div>
            <div className="md:w-3/5 xl:w-[58%] w-full text-center md:text-left text-lg lg:text-2xl">
              <p>Email: cm@bennetpharmaceuticals.com</p>
              <p>Call: (+91) 8650107111</p>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="w-full sm:px-8 md:px-12 lg:px-4 xl:px-0 ">
       
        {/* Global HealthCare 1 */}
        <div className="relative  min-h-[300px] w-full xl:max-w-[1240px] 2xl:max-w-[1440px] mx-auto px-0 my-10  ">
          {/* Content Container */}
          <div className="relative container mx-auto  py-16 grid md:grid-cols-2 gap-8 items-center  rounded-2xl bg-[#2FB344] ">
            {/* Left Column */}
            <div className="space-y-6">
              <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
                Advancing Global Healthcare
              </h1>
              <p className="text-white text-xl md:text-2xl">
                Delivering excellence across continents
              </p>
              <button className="bg-white text-[#2FB344] hover:bg-white/90 hover:text-[#2FB344] group px-4 py-2 rounded-md font-medium flex items-center">
                Discover More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right Column - Glass Card */}
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 text-white shadow-lg">
              <p className="text-lg leading-relaxed">
                Our commitment to global healthcare extends beyond borders.
                Bennet Pharmaceuticals exports top-tier pharmaceutical products
                to Asia, Africa, and Latin America, contributing to global
                health advancements and ensuring accessibility worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Global HealthCare 2 */}
        <div className="relative  min-h-[300px] w-full  lg:max-w-[1240px] 2xl:max-w-[1440px] mx-auto px-0 mb-10 ">
          <div className="container mx-auto  bg-[#d3de9a] py-20 rounded-2xl ">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div className="space-y-6">
                <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
                  Advancing
                  <br />
                  Global
                  <br />
                  Healthcare
                </h1>
                <div className="w-12 h-1 bg-white"></div>
                <p className="text-white text-xl md:text-2xl font-light">
                  Delivering excellence across continents
                </p>
              </div>

              {/* Right Column */}
              <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 text-white">
                <p className="text-lg text-black leading-relaxed">
                  Our commitment to global healthcare extends beyond borders.
                  Bennet Pharmaceuticals exports top-tier pharmaceutical
                  products to Asia, Africa, and Latin America, contributing to
                  global health advancements and ensuring accessibility
                  worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
