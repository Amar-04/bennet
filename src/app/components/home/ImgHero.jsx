import React from "react";

const ImgHero = () => {
  return (
    <section className="relative md:py-20">
      <div className="container w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h1 className="text-3xl md:text-8xl font-semibold">
            A Legacy of <br /> <span className="text-[#AECA1D]">Wellness.</span>
            <br />
            Together, <br /> We <span className="text-[#AECA1D]">Heal</span>.
          </h1>
          <p className="text-xl md:text-2xl">Dedicated to wellness since 1996</p>
        </div>
        <div className="md:h-[650px] md:-mt-32 -z-50">
          <img src="/heroImg.png" alt="pills" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default ImgHero;
