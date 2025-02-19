"use client"
import AboutHero from "@/app/components/about/AboutHero";
import Commitment from "@/app/components/about/Commitment";
import Leaders from "@/app/components/about/Leaders";
import Values from "@/app/components/about/Values";
import Events from "@/app/components/home/Careers";
import React from "react";

const page = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-0 ">
      <AboutHero />
      <Commitment />
      <Values />
      <Leaders />
      <Events />
      </div>
    </>
  );
};

export default page;
