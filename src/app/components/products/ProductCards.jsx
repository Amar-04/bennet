"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronDown } from "react-icons/fa";

const ProductCards = () => {
  const productData = [
    { name: "ACIO INSTA", dosage: "20 mg", categories: ["GP", "Surgeon"] },
    { name: "ACIO", dosage: "20 mg", categories: ["GP", "Orthopedic", "Dentist", "Surgeon"] },
    { name: "ACIO P DSR", dosage: "20 mg", categories: ["GP", "Surgeon"] },
    { name: "ACYNET", dosage: "20 mg", categories: ["GP", "Gynecologist", "Surgeon"] },
    { name: "AMOLIN CV", dosage: "20 mg", categories: ["GP", "Dentist", "Surgeon"] },
    { name: "AZIDEP", dosage: "20 mg", categories: ["GP", "Dentist", "Surgeon"] },
    { name: "AZIDEP CX", dosage: "20 mg", categories: ["GP", "Surgeon"] },
    { name: "BENOCEF", dosage: "20 mg", categories: ["GP", "Paediatrician", "Surgeon", "Dentist"] },
    { name: "BE NOLIV", dosage: "20 mg", categories: ["GP"] },
    { name: "BENOLIV LS", dosage: "20 mg", categories: ["GP"] },
    { name: "CALY - ZM", dosage: "20 mg", categories: ["GP", "Orthopedic"] },
    { name: "CEFAKING", dosage: "20 mg", categories: ["GP", "Surgeon", "Orthopedic"] },
    { name: "CETAFEN", dosage: "20 mg", categories: ["GP", "Orthopedic", "Paediatrician"] },
    { name: "CIDO", dosage: "20 mg", categories: ["GP"] },
    { name: "CLID", dosage: "20 mg", categories: ["GP", "Orthopedic", "Surgeon", "Dentist"] },
    { name: "DU POLEX", dosage: "20 mg", categories: ["GP", "Surgeon"] },
    { name: "DUPOX DT", dosage: "20 mg", categories: ["GP", "Orthopedic", "Surgeon", "Dentist"] },
    { name: "ETHINORM", dosage: "20 mg", categories: ["GP"] },
    { name: "GRANIREX", dosage: "20 mg", categories: ["GP", "Gynecologist", "Paediatrician", "Surgeon"] },
    { name: "HYNORAX", dosage: "20 mg", categories: ["GP", "Gynecologist", "Orthopedic", "Paediatrician", "Dentist", "Dermatologist"] },
    { name: "HUSKITOL", dosage: "20 mg", categories: ["GP"] },
    { name: "IROZEE", dosage: "20 mg", categories: ["GP", "Gynecologist"] },
    { name: "ISCO PLUS", dosage: "20 mg", categories: ["GP", "Paediatrician"] },
    { name: "LECY", dosage: "20 mg", categories: ["GP", "Paediatrician"] },
    { name: "LECY M", dosage: "20 mg", categories: ["GP", "Paediatrician"] },
    { name: "LYNET", dosage: "20 mg", categories: ["GP", "Gynecologist", "Orthopedic"] },
    { name: "MEKLIN", dosage: "20 mg", categories: ["GP", "Dentist"] },
    { name: "MOSIBA", dosage: "20 mg", categories: ["GP", "Orthopedic", "Gynecologist", "Paediatrician", "Dentist", "Oncology", "Dermatologist"] },
    { name: "NAB DT", dosage: "20 mg", categories: ["GP", "Gynecologist", "Dentist"] },
    { name: "NEUBA SL", dosage: "20 mg", categories: ["GP", "Ophthalmologist"] },
    { name: "NEUBA", dosage: "20 mg", categories: ["GP", "Gynecologist", "Paediatrician", "Oncology"] },
    { name: "NIC ET", dosage: "20 mg", categories: ["GP"] },
    { name: "NICET ACTIV TOTAL", dosage: "20 mg", categories: ["GP"] },
    { name: "PARAKEF", dosage: "20 mg", categories: ["GP"] },
    { name: "PRIB", dosage: "20 mg", categories: ["GP", "Paediatrician"] },
    { name: "QINET", dosage: "20 mg", categories: ["GP", "Paediatrician"] },
    { name: "RABIO DSR", dosage: "20 mg", categories: ["GP", "Orthopedic", "Surgeon"] },
    { name: "RADIC", dosage: "20 mg", categories: ["GP", "Orthopedic", "Surgeon"] },
    { name: "RIO-Z", dosage: "20 mg", categories: ["GP", "Gynecologist"] },
    { name: "SOLEXYL", dosage: "20 mg", categories: ["GP", "Surgeon", "Dentist"] },
    { name: "SERIP GROUP", dosage: "20 mg", categories: ["GP", "Surgeon", "Ophthalmologist"] },
    { name: "SUCRO", dosage: "20 mg", categories: ["GP", "Orthopedic", "Surgeon"] },
    { name: "TELSCAN", dosage: "20 mg", categories: ["GP"] },
    { name: "TERZO", dosage: "20 mg", categories: ["GP", "Surgeon", "Dentist", "Ophthalmologist"] },
    { name: "TERZO SP", dosage: "20 mg", categories: ["GP", "Dentist", "Ophthalmologist"] },
    { name: "TRAMOT PLUS", dosage: "20 mg", categories: ["Orthopedic", "Surgeon", "Dentist"] },
    { name: "URINET", dosage: "20 mg", categories: ["GP", "Orthopedic", "Gynecologist", "Oncology"] },
    { name: "VOMICLOSE", dosage: "20 mg", categories: ["GP", "Oncology", "Paediatrician"] },
    { name: "LULONA", dosage: "20 mg", categories: ["GP", "Dermatologist"] },
    { name: "NEE DT", dosage: "20 mg", categories: ["GP", "Dermatologist"] },
    { name: "ACTOFERRIN FE", dosage: "20 mg", categories: ["Gynecologist"] },
    { name: "TIXY KID", dosage: "20 mg", categories: ["GP", "Orthopedic", "Paediatrician"] },
    { name: "TIXY-P", dosage: "20 mg", categories: ["GP", "Orthopedic", "Paediatrician"] },
    { name: "TREXANET MF", dosage: "20 mg", categories: ["Gynecologist", "Orthopedic"] },
    { name: "BENOCIP-Z", dosage: "20 mg", categories: ["GP"] },
    { name: "CLINOPAK", dosage: "20 mg", categories: ["GP"] },
    { name: "NICET ACTIVE", dosage: "20 mg", categories: ["GP"] },
    { name: "SERIP GR", dosage: "20 mg", categories: ["GP"] },
    { name: "TOX", dosage: "20 mg", categories: ["GP"] },
  ];

  const [activeSection, setActiveSection] = useState(null); // Tracks the currently expanded section
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Tracks if the screen size is below lg

  // Detect screen size and update state
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024); // lg breakpoint is typically 1024px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Add event listener for resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  // Close expanded content when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const cards = document.querySelectorAll(".card-container");
      const isClickInsideCard = Array.from(cards).some((card) =>
        card.contains(event.target)
      );

      if (!isClickInsideCard) {
        setActiveSection(null); // Close expanded content
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index); // Toggle active section
  };

  const sections = [
    { title: "General Practitioner/Physician", category: "GP" },
    { title: "Gynecologist", category: "Gynecologist" },
    { title: "Paediatrician", category: "Paediatrician" },
    { title: "Surgeon", category: "Surgeon" },
    { title: "Orthopedic Surgeon", category: "Orthopedic" },
    { title: "Dentist", category: "Dentist" },
    { title: "Ophthalmologist", category: "Ophthalmologist" },
    { title: "Oncology", category: "Oncology" },
    { title: "Dermatologist", category: "Dermatologist" },
  ];

  return (
    <section className="my-8 mb-12 px-4 md:px-8 max-w-[1440px] mx-auto">
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
        {sections.slice(0, 3).map((section, sectionIndex) => {
          return (
            <div
              key={sectionIndex}
              className="bg-[#ECECECB2] rounded-xl p-4 cursor-pointer card-container"
              onClick={() => toggleSection(sectionIndex)}
            >
              <div className="flex items-center justify-between">
                <p className="font-bold">{section.title}</p>
                <motion.button
                  className="bg-[#AECA1DE5] rounded-full px-3 py-2 flex items-center justify-center"
                  animate={{ rotate: activeSection === sectionIndex ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  aria-label={`Toggle ${section.title} products`}
                >
                  {activeSection === sectionIndex ? (
                    <FaChevronLeft size={16} />
                  ) : (
                    <FaChevronDown size={16} />
                  )}
                </motion.button>
              </div>

              {/* Expanded Content for Small Screens */}
              {isSmallScreen && activeSection === sectionIndex && (
                <motion.div
                  className="col-span-full bg-[#F9F9F9] rounded-xl p-4 mt-4 overflow-hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="overflow-x-auto scrollbar-hide"
                    style={{ minWidth: "max-content" }}
                  >
                    <div className="grid grid-cols-5 gap-4">
                      {productData
                        .filter((product) =>
                          product.categories.includes(section.category)
                        )
                        .map((card, index) => (
                          <motion.div
                            key={index}
                            className="min-w-[200px] bg-[#AECA1DE5] px-6 py-4 rounded-lg text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                          >
                            <p className="font-bold">
                              {card.name}{" "}
                              <span className="text-[#929FAE]">
                                {card.dosage}
                              </span>
                            </p>
                          </motion.div>
                        ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* Expanded Content for Large Screens (Row 1) */}
      {!isSmallScreen && activeSection !== null && activeSection < 3 && (
        <motion.div
          className="col-span-full bg-[#F9F9F9] rounded-xl p-4 mt-4 overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="overflow-x-auto scrollbar-hide"
            style={{ minWidth: "max-content" }}
          >
            <div className="grid grid-cols-5 gap-4">
              {productData
                .filter((product) =>
                  product.categories.includes(sections[activeSection].category)
                )
                .map((card, index) => (
                  <motion.div
                    key={index}
                    className="min-w-[200px] bg-[#AECA1DE5] px-6 py-4 rounded-lg text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <p className="font-bold">
                      {card.name}{" "}
                      <span className="text-[#929FAE]">{card.dosage}</span>
                    </p>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
        {sections.slice(3, 6).map((section, sectionIndex) => {
          return (
            <div
              key={sectionIndex + 3}
              className="bg-[#ECECECB2] rounded-xl p-4 cursor-pointer card-container"
              onClick={() => toggleSection(sectionIndex + 3)}
            >
              <div className="flex items-center justify-between">
                <p className="font-bold">{section.title}</p>
                <motion.button
                  className="bg-[#AECA1DE5] rounded-full px-3 py-2 flex items-center justify-center"
                  animate={{
                    rotate: activeSection === sectionIndex + 3 ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  aria-label={`Toggle ${section.title} products`}
                >
                  {activeSection === sectionIndex + 3 ? (
                    <FaChevronLeft size={16} />
                  ) : (
                    <FaChevronDown size={16} />
                  )}
                </motion.button>
              </div>

              {/* Expanded Content for Small Screens */}
              {isSmallScreen && activeSection === sectionIndex + 3 && (
                <motion.div
                  className="col-span-full bg-[#F9F9F9] rounded-xl p-4 mt-4 overflow-hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="overflow-x-auto scrollbar-hide"
                    style={{ minWidth: "max-content" }}
                  >
                    <div className="grid grid-cols-5 gap-4">
                      {productData
                        .filter((product) =>
                          product.categories.includes(section.category)
                        )
                        .map((card, index) => (
                          <motion.div
                            key={index}
                            className="min-w-[200px] bg-[#AECA1DE5] px-6 py-4 rounded-lg text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                          >
                            <p className="font-bold">
                              {card.name}{" "}
                              <span className="text-[#929FAE]">
                                {card.dosage}
                              </span>
                            </p>
                          </motion.div>
                        ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* Expanded Content for Large Screens (Row 2) */}
      {!isSmallScreen &&
        activeSection !== null &&
        activeSection >= 3 &&
        activeSection < 6 && (
          <motion.div
            className="col-span-full bg-[#F9F9F9] rounded-xl p-4 mt-4 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="overflow-x-auto scrollbar-hide"
              style={{ minWidth: "max-content" }}
            >
              <div className="grid grid-cols-5 gap-4">
                {productData
                  .filter((product) =>
                    product.categories.includes(
                      sections[activeSection].category
                    )
                  )
                  .map((card, index) => (
                    <motion.div
                      key={index}
                      className="min-w-[200px] bg-[#AECA1DE5] px-6 py-4 rounded-lg text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                      <p className="font-bold">
                        {card.name}{" "}
                        <span className="text-[#929FAE]">{card.dosage}</span>
                      </p>
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.div>
        )}

      {/* Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
        {sections.slice(6, 9).map((section, sectionIndex) => {
          return (
            <div
              key={sectionIndex + 6}
              className="bg-[#ECECECB2] rounded-xl p-4 cursor-pointer card-container"
              onClick={() => toggleSection(sectionIndex + 6)}
            >
              <div className="flex items-center justify-between">
                <p className="font-bold">{section.title}</p>
                <motion.button
                  className="bg-[#AECA1DE5] rounded-full px-3 py-2 flex items-center justify-center"
                  animate={{
                    rotate: activeSection === sectionIndex + 6 ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  aria-label={`Toggle ${section.title} products`}
                >
                  {activeSection === sectionIndex + 6 ? (
                    <FaChevronLeft size={16} />
                  ) : (
                    <FaChevronDown size={16} />
                  )}
                </motion.button>
              </div>

              {/* Expanded Content for Small Screens */}
              {isSmallScreen && activeSection === sectionIndex + 6 && (
                <motion.div
                  className="col-span-full bg-[#F9F9F9] rounded-xl p-4 mt-4 overflow-hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="overflow-x-auto scrollbar-hide"
                    style={{ minWidth: "max-content" }}
                  >
                    <div className="grid grid-cols-5 gap-4">
                      {productData
                        .filter((product) =>
                          product.categories.includes(section.category)
                        )
                        .map((card, index) => (
                          <motion.div
                            key={index}
                            className="min-w-[200px] bg-[#AECA1DE5] px-6 py-4 rounded-lg text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                          >
                            <p className="font-bold">
                              {card.name}{" "}
                              <span className="text-[#929FAE]">
                                {card.dosage}
                              </span>
                            </p>
                          </motion.div>
                        ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* Expanded Content for Large Screens (Row 3) */}
      {!isSmallScreen && activeSection !== null && activeSection >= 6 && (
        <motion.div
          className="col-span-full bg-[#F9F9F9] rounded-xl p-4 mt-4 overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="overflow-x-auto scrollbar-hide"
            style={{ minWidth: "max-content" }}
          >
            <div className="grid grid-cols-5 gap-4">
              {productData
                .filter((product) =>
                  product.categories.includes(sections[activeSection].category)
                )
                .map((card, index) => (
                  <motion.div
                    key={index}
                    className="min-w-[200px] bg-[#AECA1DE5] px-6 py-4 rounded-lg text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <p className="font-bold">
                      {card.name}{" "}
                      <span className="text-[#929FAE]">{card.dosage}</span>
                    </p>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Hide Scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
        }

        .scrollbar-hide {
          -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
          scrollbar-width: none; /* Hide scrollbar for Firefox */
        }
      `}</style>
    </section>
  );
};

export default ProductCards;