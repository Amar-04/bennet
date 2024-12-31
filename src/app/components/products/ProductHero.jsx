import Link from "next/link";
import React from "react";

const ProductHero = () => {
  return (
    <section className="relative mb-10 md:py-20">
      <div className="container w-[90vw] mx-auto grid md:grid-cols-2 gap-4">
        <div>
          <h1 className="text-2xl md:text-7xl font-semibold">
            <span className="text-[#AECA1D]">Empowering </span>Health Journeys &
            Nurturing Health Through{" "}
            <span className="text-[#AECA1D]">Innovation</span>
          </h1>
          <p className="md:text-2xl my-4 md:my-8">
            Transforming lives since 1996
          </p>
          <Link
            href={"#"}
            className="bg-black pl-4 py-3 text-white text-sm md:text-base rounded-full font-bold"
          >
            Know More{" "}
            <span className="bg-[#AECA1DE5] rounded-full px-4 py-3">↓</span>
          </Link>
        </div>
        <div className="md:h-[500px] md:w-[500px] md:-mt-20">
          <img src="/productHero.png" alt="pills" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
