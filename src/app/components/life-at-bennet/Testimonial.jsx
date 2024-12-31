"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/app/components/life-at-bennet/testimonial-data";
import Image from "next/image";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <div>
      <section className="flex flex-col justify-center items-center my-28 mx-auto">
        <div className="container mx-auto">
          {/* Title */}
          {/* <Title title="Testimonial" /> */}
          <div className="flex justify-start md:justify-center md:gap-28 lg:gap-6 2xl:gap-0 items-center p-1 my-10 mb-24">
            <h2 className="w-2/5 text-white text-4xl md:text-5xl xl:text-6xl font-bold text-stroke-black uppercase">
              Testimonials
            </h2>
            <div className="w-0 text-left md:w-2/5 lg:w-3/5 mt-2">
              <hr className="border-t-2 border-[#AECA1D]" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mx-auto testimonial-bg">
            <div className="flex flex-col justify-center items-center relative mx-auto">
              {/* Card with quotation marks */}
              <div className="flex flex-row items-center justify-center w-full md:px-4 relative">
                {/* Opening quote */}
                <div className="absolute top-0 left-5 md:left-4 text-[10rem] md:text-[20rem] text-[#AECA1D] leading-none z-10 -translate-x-1/4 -translate-y-1/4 rasa">
                  “
                </div>

                <button
                  onClick={handlePrevious}
                  className="text-[#AECA1D] hover:scale-110 transition-transform p-1 md:p-2 z-20"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-8 h-8 md:w-20 md:h-20" />
                </button>

                <div className="border-4 border-[#AECA1D] bg-black/70 rounded-[40px] w-full md:w-[65vw] 2xl:w-[50vw] h-[400px] md:h-[400px] p-8 md:p-12 flex flex-col items-center justify-center transition-all duration-500 ease-in-out relative overflow-y-auto">
                  <div className="relative w-20 h-20 mb-6 flex-shrink-0">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-grow overflow-y-auto">
                    <p className="text-white text-center text-sm md:text-xl lg:text-2xl max-w-3xl">
                      {currentTestimonial.text}
                    </p>
                  </div>
                  <p className="text-[#AECA1D] mt-6 font-medium flex-shrink-0">
                    {currentTestimonial.name}
                  </p>
                </div>

                <button
                  onClick={handleNext}
                  className="text-[#AECA1D] hover:scale-110 transition-transform p-1 md:p-2 z-20"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-8 h-8 md:w-20 md:h-20" />
                </button>

                {/* Closing quote */}
                <div className="absolute bottom-0 right-5 md:right-4 text-[10rem] md:text-[20rem] text-[#AECA1D] leading-none z-10 translate-x-1/4 translate-y-1/4 rotate-180 rasa">
                  “
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
