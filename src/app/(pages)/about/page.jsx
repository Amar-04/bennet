import AboutHero from "@/app/components/about/AboutHero";
import AboutHero2 from "@/app/components/about/AboutHero2";
import Commitment from "@/app/components/about/Commitment";
import Leaders from "@/app/components/about/Leaders";
import Values from "@/app/components/about/Values";
import Events from "@/app/components/home/Events";
import React from "react";

const page = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-0 ">
      <AboutHero />
      <AboutHero2 />
      <Values />
      <Commitment />
      <Leaders />
      <Events />
      </div>
    </>
  );
};

export default page;
