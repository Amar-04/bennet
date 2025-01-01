import Link from "next/link";
import React from "react";

const Events = () => {
  return (
    <section className="relative px-4 md:px-16 py-10">
      <div className="absolute top-1/4 -left-3.5 md:-top-1/4 md:left-1/4 w-[300px] h-[400px] md:w-[800px] md:h-[800px] bg-[url('/events.png')] bg-contain bg-no-repeat"></div>
      <div className="z-10">
        <h2 className="text-6xl font-bold text-transparent  bg-white text-stroke-black mb-10">
          Events
        </h2>
        <div className="md:w-9/12 mx-auto rounded-3xl bg-[#AECA1D80] flex flex-col md:flex-row p-4 md:p-20">
          <h2 className="text-xl md:text-2xl font-bold md:w-1/2">
            Join our wonderful teams and be part of a community where your
            growth is our priority!
          </h2>

          <div className="md:w-1/2 ">
            <p className="text-xl mb-4">
              Explore the latest achievements, milestones, and breakthroughs at
              Bennet Pharmaceuticals.
            </p>
            <Link
              href={"#"}
              className="rounded-full p-2 bg-black text-white md:text-lg font-bold"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
