"use client";

import Image from "next/image";

export default function Events() {
  return (
    <div className="relative bg-[#DFEAA580]/50 p-8">
      {/* Header Section */}
      <div className="max-w-8xl mb-16 lg:flex gap-20 mx-auto">
        <h1 className="text-6xl font-bold mb-4">Events</h1>
        <p className="text-[#525354] text-2xl">
          Join our wonderful teams and be part of a community where your growth
          is our priority! Explore the latest achievements, milestones, and
          breakthroughs at Bennet Pharmaceuticals.
        </p>
      </div>

      {/* Orbital Timeline Container */}
      <div className="relative w-full max-w-3xl mx-auto aspect-square mb-20">
        {/* Center Image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-square rounded-full overflow-hidden shadow-lg z-10">
          <Image
            src="/events-center-img.png"
            alt="Colorful pharmaceutical pills"
            fill
            className="object-cover"
          />
        </div>

        {/* SVG Orbits */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
          {/* Outer Orbit */}
          <ellipse
            cx="200"
            cy="200"
            rx="180"
            ry="180"
            fill="none"
            stroke="black"
            strokeWidth="1"
            className="opacity-30"
          />
          {/* Inner Orbit */}
          <ellipse
            cx="200"
            cy="200"
            rx="120"
            ry="120"
            fill="none"
            stroke="black"
            strokeWidth="1"
            className="opacity-30"
          />
        </svg>

        {/* Timeline Nodes */}
        <div className="absolute inset-0">
          {/* Top Node - Bennet Pharmaceuticals */}
          <div className="absolute top-[5%] min-[425px]:top-[13%] md:top-[13%] left-[17%] min-[425px]:left-[17%] md:left-[17%] -translate-x-1/2">
            <div className="bg-white rounded-full shadow-lg w-[60px] md:w-[140px] h-[60px] md:h-[140px] flex flex-col items-center justify-center text-center p-8 md:p-4 border-4 border-[#AECA1D66]/40">
              <span className="text-[#AECA1D] text-xs md:text-lg font-bold">
                2019
              </span>
              <p className="text-[6px] md:text-xs mt-1">
                Bennet Pharmaceuticals established
              </p>
            </div>
          </div>

          {/* Right Node - Blockbuster Drug */}
          <div className="absolute top-[36%] min-[425px]:top-[40%] md:top-[40%] right-[6%] min-[425px]:right-[13%] md:right-[13%]">
            <div className="bg-white rounded-full shadow-lg w-[60px] md:w-[120px] h-[60px] md:h-[120px] flex flex-col items-center justify-center text-center p-8 md:p-4 border-4 border-[#AECA1D66]/40">
              <span className="text-black font-semibold text-xs md:text-lg">
                2019
              </span>
              <p className="text-[6px] md:text-xs mt-1">
                Launch of first blockbuster drug
              </p>
            </div>
          </div>

          {/* Bottom Node - International Partnership */}
          <div className="absolute bottom-[-3%] min-[425px]:bottom-[2%] md:bottom-[2%] right-[10%] min-[425px]:right-[20%] md:right-[20%]">
            <div className="bg-white rounded-full shadow-lg w-[60px] md:w-[120px] h-[60px] md:h-[120px] flex flex-col items-center justify-center text-center p-8 md:p-4 border-4 border-[#AECA1D66]/40">
              <span className="text-black font-semibold text-xs md:text-lg">
                2019
              </span>
              <p className="text-[6px] md:text-xs mt-1">
                First international partnership
              </p>
            </div>
          </div>

          {/* Left Node - Expansion */}
          <div className="absolute bottom-[1%] min-[425px]:bottom-[7%] md:bottom-[7%] left-[10%] min-[425px]:left-[15%] md:left-[15%]">
            <div className="bg-white rounded-full shadow-lg md:w-[120px] w-[90px] md:h-[120px] h-[90px] flex flex-col items-center justify-center text-center p-7 md:p-20 border-4 border-[#AECA1D66]/40">
              <span className="text-[#AECA1D] text-lg md:text-2xl font-bold">
                2019
              </span>
              <p className="text-[8px] md:text-xs mt-1">
                Expansion into 50+ countries
              </p>
            </div>
          </div>

          {/* Orbit Dots */}
          <div className="absolute left-[33%] top-[23%] w-3 md:w-6 h-3 md:h-6 rounded-full bg-[#AECA1D]" />
          <div className="absolute right-[7.5%] top-[30%] w-3 md:w-6 h-3 md:h-6 rounded-full bg-[#1a4175]" />
          <div className="absolute right-[40%] bottom-[19.5%] w-3 md:w-6 h-3 md:h-6 rounded-full bg-[#AECA1D]" />
          <div className="absolute left-[5.5%] top-[35%] w-3 md:w-6 h-3 md:h-6 rounded-full bg-[#1a4175]" />
        </div>
      </div>

      {/* Bottom Right Images */}
      <div className="absolute bottom-[-80px] right-8 flex gap-5">
        <div className="w-32 h-24 md:w-48 md:h-32 rounded-lg overflow-hidden shadow-lg relative">
          <Image
            src="/events-bottom-img1.png"
            alt="Medical pill strip"
            className="object-contain"
            layout="fill"
          />
        </div>
        <div className="w-32 h-24 md:w-48 md:h-32 rounded-lg overflow-hidden shadow-lg relative">
          <Image
            src="/events-bottom-img2.png"
            alt="Stethoscope on documents"
            className="object-contain"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
