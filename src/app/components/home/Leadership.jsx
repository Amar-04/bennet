"use client";

import { motion } from "framer-motion";

const Leadership = () => {
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

  const cardData = [
    {
      id: 1,
      name: "Mr. J. K. Jain",
      position: "Founder & Promoter Director",
      desc: "A visionary leader who established Bennet's foundation in the pharmaceutical industry. His innovative approach continues to guide the company's growth and success.",
    },
    {
      id: 2,
      name: "Mr. Siddharth Jain",
      position: "Technical Director",
      desc: "A versatile expert overseeing supply chain, regulatory affairs, and quality control. His comprehensive management ensures smooth operations across all technical aspects of the business.",
    },
    {
      id: 3,
      name: "Mrs. Vrushti Jain",
      position: "Creative Director",
      desc: "An innovative thinker spearheading new product development and marketing initiatives. Her creative vision drives Bennet's expansion into cutting-edge pharmaceutical solutions.",
    },
    {
      id: 4,
      name: "Mrs. Vaishali Jain",
      position: "Director",
      desc: "A financial strategist managing Bennet's financial and legal affairs. Her expertise is crucial in steering the company's growth within the domestic pharmaceutical market.",
    },
  ];

  return (
    <section className="container mx-auto mt-20 px-4">
      {/* Header with line */}
      <div className="flex items-center gap-8 mb-12">
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
          LEADERSHIP
        </motion.h2>
        <motion.div
          className="h-[2px] bg-[#AECA1D] flex-grow"
          initial="hidden"
          whileInView="visible"
          variants={lineVariant}
          viewport={{ once: true, amount: 0.2 }}
        />
      </div>

      {/* Subheading */}
      <motion.div
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Innovation Meets Compassion
          <br />
          Exceeding Expectations with Our "Exceptional Teams"
        </h2>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute left-0 top-1/4 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute left-0 w-[600px] h-[600px] bg-[url('/hero.png')] bg-contain bg-no-repeat" />
        <div className="absolute right-0 top-1/3 w-[600px] h-[600px] bg-[url('/hero.png')] bg-contain bg-no-repeat" />
      </div>

      {/* Cards Grid */}
      <motion.div
        className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {cardData.map((card, index) => (
          <motion.div
            key={card.id}
            className="bg-black text-white p-8 md:p-10 rounded-2xl hover:scale-[1.02] transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-3">{card.name}</h2>
            <p className="text-[#AECA1D] font-bold mb-4">{card.position}</p>
            <p className="text-gray-300 leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Leadership;
