"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Cards = () => {
  const cardsData = [
    {
      id: 1,
      title: "Ethical",
      desc: "We offer tailored solutions through our three core divisions: Ethical, Critical Care, and the Emiror Division, bringing specialized and innovative care to those who need it most.",
    },
    {
      id: 2,
      title: "Critical Care",
      desc: "We collaborate with over 500 passionate sales personnel and a network of 1,000+ distributors, ensuring consistent access to care across the country with a presence in 15+ states.",
    },
    {
      id: 3,
      title: "Emiror Division",
      desc: "With over 100,000 retail outlets nationwide, we bring superior healthcare solutions within easy reach for everyone. We believe in the transformative power of healthcare.",
    },
  ];

  return (
    <section className="px-4 md:p-16">
      <div className="container mx-auto flex flex-col space-y-8 md:text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Commitment to the Nation
        </motion.h2>

        <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          We provide high-quality healthcare solutions, at prices that are
          accessible to all. <br />
          Our team upholds the highest standards of ethical practices, with
          certifications and strict adherence to regulatory standards, ensuring
          your well-being in every interaction.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-4 md:gap-16">
          {cardsData.map((card, index) => (
            <motion.div
              key={card.id}
              className="bg-black text-white rounded-lg px-4 md:px-12 py-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold">{card.title}</h2>
              <p className="mt-4 md:text-lg">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex space-x-2 items-center justify-center text-white text-xl font-bold">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href={"#"}
              className="p-2 rounded-full bg-[#83961D] shadow-lg"
            >
              Know More
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link href={"#"} className="rounded-full px-3 py-2 bg-black">
              →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
