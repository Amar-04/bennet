"use client";

import Image from "next/image";
import { MoveDown } from "lucide-react";
import { easeInOut, motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import parse from "html-react-parser";

export default function HeroSection({
  imageLink,
  title,
  description,
  showKnowMoreButton,
}) {
  const leftContentVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const leftItemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  const rightImageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const pathname = usePathname();
  const routeKey = pathname || "";

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={routeKey}
        className="relative bg-white"
        initial="hidden"
        animate="visible"
        exit="hidden"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left-side content */}
            <motion.div className="space-y-6" variants={leftContentVariants}>
              <motion.h1
                className="text-4xl lg:text-7xl font-bold leading-tight"
                variants={leftItemVariants}
              >
                {parse(title)}
              </motion.h1>
              <motion.p
                className="text-gray-600 text-lg"
                variants={leftItemVariants}
              >
                {description}
              </motion.p>
              {showKnowMoreButton && (
                <motion.button
                  className="bg-black/90 text-white font-bold pl-4 pr-1 py-1 rounded-full flex justify-evenly border border-white items-center gap-2"
                  variants={leftItemVariants}
                >
                  <p>Know More</p>
                  <div className="rounded-full bg-[#AECA1DE5]/90 text-black px-4 py-4">
                    <MoveDown />
                  </div>
                </motion.button>
              )}
            </motion.div>

            {/* Right-side image */}
            <motion.div
              className="relative h-[300px] lg:h-[400px]"
              variants={rightImageVariants}
            >
              <Image
                src={imageLink}
                alt="image"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
