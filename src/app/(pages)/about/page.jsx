import AboutHero from "@/app/components/about/AboutHero";
import Commitment from "@/app/components/about/Commitment";
import Leaders from "@/app/components/about/Leaders";
import Leaders2 from "@/app/components/about/Leaders2";
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
      <Leaders2 />
      <Events />
      </div>
    </>
  );
};

export default page;
