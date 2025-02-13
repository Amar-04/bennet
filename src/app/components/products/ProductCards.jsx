"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronDown } from "react-icons/fa";

const ProductCards = () => {
  const productCards = [
    { name: "ACIO INSTA", dosage: "20 mg" },
    { name: "ACIO", dosage: "20 mg" },
    { name: "ACIO P DSR", dosage: "20 mg" },
    { name: "ACYNET", dosage: "20 mg" },
    { name: "AMOLIN CV", dosage: "20 mg" },
    { name: "AZIDEP", dosage: "20 mg" },
    { name: "ACIO INSTA", dosage: "20 mg" },
    { name: "ACIO", dosage: "20 mg" },
    { name: "ACIO P DSR", dosage: "20 mg" },
    { name: "ACYNET", dosage: "20 mg" },
    { name: "AMOLIN CV", dosage: "20 mg" },
    { name: "AZIDEP", dosage: "20 mg" },
  ];

  const containerRefs = useRef([]);
  const [showMore, setShowMore] = useState({});

  const toggleShowMore = (index) => {
    setShowMore((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const scrollbarHideStyle = {
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };

  const sections = [
    "General Practitioner/Physician",
    "Gynecologist",
    "Paediatrician",
  ];

  return (
    <section className="mt-8 px-4 md:px-8 max-w-[1440px] mx-auto px-0">
      <div className="flex flex-col space-y-4 my-10">
        {sections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="bg-[#ECECECB2] rounded-xl flex flex-col p-4"
          >
            <div className="flex items-center justify-between">
              <p className="font-bold">{section}</p>
              <motion.button
                onClick={() => toggleShowMore(sectionIndex)}
                className="bg-[#AECA1DE5] rounded-full px-3 py-2 flex items-center justify-center"
                animate={{ rotate: showMore[sectionIndex] ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {showMore[sectionIndex] ? (
                  <FaChevronLeft size={16} />
                ) : (
                  <FaChevronDown size={16} />
                )}
              </motion.button>
            </div>
            {showMore[sectionIndex] && (
              <motion.div
                ref={(el) => (containerRefs.current[sectionIndex] = el)}
                style={{ ...scrollbarHideStyle }}
                className="flex flex-wrap gap-4 mt-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-4 w-full">
                  {productCards.slice(0, 6).map((card, index) => (
                    <motion.div
                      key={index}
                      className="min-w-[250px] bg-[#AECA1DE5] px-8 py-4 rounded-lg text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1.5, delay: index * 0.15 }}
                    >
                      <p className="font-bold">
                        {card.name} <span className="text-[#929FAE]">{card.dosage}</span>
                      </p>
                    </motion.div>
                  ))}
                </div>
                <div className="flex gap-4 w-full">
                  {productCards.slice(6).map((card, index) => (
                    <motion.div
                      key={index}
                      className="min-w-[250px] bg-[#AECA1DE5] px-8 py-4 rounded-lg text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1.5, delay: index * 0.15 }}
                    >
                      <p className="font-bold">
                        {card.name} <span className="text-[#929FAE]">{card.dosage}</span>
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCards;
