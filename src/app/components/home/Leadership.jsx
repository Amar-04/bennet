"use client";

import { motion } from "framer-motion";

const Leadership = () => {
  const cardData = [
    {
      id: 1,
      name: "Mr. J. K. Jain",
      position: "Founder & Promoter Director",
      desc: "A visionary leader who established Bennet’s foundation in the pharmaceutical industry. His innovative approach continues to guide the company's growth and success.",
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
      desc: "A financial strategist managing Bennet’s financial and legal affairs. Her expertise is crucial in steering the company's growth within the domestic pharmaceutical market.",
    },
  ];

  return (
    <section className="relative px-4 md:px-16 py-10">
      <div className="absolute top-10 md:left-16 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-[url('/hero.png')] bg-contain bg-no-repeat"></div>
      <div className="absolute top-80 md:right-16 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-[url('/hero.png')] bg-contain bg-no-repeat"></div>

      <motion.h2
        className="text-3xl md:text-6xl font-bold text-transparent bg-white text-stroke-black"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        Leadership
      </motion.h2>

      <motion.h2
        className="my-8 md:text-3xl font-bold"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Innovation Meets Compassion <br />
        Exceeding Expectations with Our “Exceptional Teams”
      </motion.h2>

      <motion.div
        className="md:max-w-[55vw] mx-auto grid md:grid-cols-2 gap-4 md:gap-14 relative z-10"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {cardData.map((card, index) => (
          <motion.div
            key={card.id}
            className="p-4 md:p-12 bg-black text-white flex flex-col space-y-4 rounded-2xl"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{
              duration: 0.6,
              delay: index * 0.3,
            }}
          >
            <h2 className="text-lg font-bold">{card.name}</h2>
            <p className="font-bold">{card.position}</p>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Leadership;
