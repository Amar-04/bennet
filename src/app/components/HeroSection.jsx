"use client";

import Image from "next/image";
import { MoveDown } from "lucide-react";
import parse from "html-react-parser";

export default function HeroSection({
  imageLink,
  title,
  description,
  showKnowMoreButton,
}) {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
              {parse(title)}
            </h1>
            <p className="text-gray-600 text-lg">{description}</p>
            {showKnowMoreButton && (
              <button className="bg-black/90 text-white font-bold pl-4 pr-1 py-1 rounded-full flex justify-evenly border border-white items-center gap-2">
                <p>Know More</p>
                <div className="rounded-full bg-[#AECA1DE5]/90 text-black px-4 py-4">
                  <MoveDown />
                </div>
              </button>
            )}
          </div>
          <div className="relative h-[300px] lg:h-[400px]">
            <Image
              src={imageLink}
              alt="image"
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
