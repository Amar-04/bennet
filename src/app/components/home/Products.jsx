import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <section className="px-4 md:px-16 py-10">
      <h2 className="text-3xl md:text-6xl font-bold text-transparent  bg-white text-stroke-black md:mb-20">
        OUR PRODUCTS
      </h2>

      <div className="grid md:grid-cols-2 gap-4 my-10">
        <div className="h-[300px] md:-ml-16">
          <img src="/pills.png" alt="" className="h-full" />
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl font-bold">
            Nurturing Health Through Innovation
          </h2>
          <p className="text-xl md:text-2xl">
            At Bennet Pharmaceuticals, we are dedicated to delivering
            high-quality, innovative pharmaceutical solutions across various
            therapeutic areas. 
          </p>
          <p className="text-xl md:text-2xl">
            Our broad product portfolio meets the diverse needs of healthcare
            professionals and patients alike, ensuring accessibility and
            reliability in every product we offer. 
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 bg-black text-white rounded-xl p-4 gap-8 md:gap-0 md:p-10">
        <h2 className="text-xl md:text-2xl font-bold">Our Ethical Division</h2>

        <p className="md:text-lg md:w-1/2">
          Discover how our innovative solutions are making a difference in lives
          across India.
        </p>
      </div>

      <div className="flex space-x-2 items-center justify-center text-white text-xl font-bold mt-20">
        <Link href={"#"} className="p-2 rounded-full bg-[#83961D] shadow-lg">
          Know More
        </Link>
        <Link href={"#"} className="rounded-full px-3 py-2 bg-black">
          →
        </Link>
      </div>
    </section>
  );
};

export default Products;
