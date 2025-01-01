import React from "react";

const Priorities = () => {
  return (
    <section className="px-4 md:px-16 py-10">
      <div className="container flex flex-col space-y-4">
        <h2 className="text-2xl md:text-5xl font-bold leading-relaxed">
          Your Health, Our <span className="text-[#2C3D5A]">Priority!</span>
          <br />
          Building <span className="text-[#2C3D5A]">Healthier </span>
          Communities.
        </h2>

        <p className="md:text-xl">Transforming Lives since 1996</p>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          <div className="h-[300px]">
            <img src="/priorityImg.png" alt="" className="w-full h-full object-cover rounded-3xl" />
          </div>

          <div className="md:w-1/2 my-auto">
            <p className="text-xl leading-relaxed">
              At Bennet, we’re more than just a healthcare company—we’re a
              community of dedicated professionals committed to creating a
              healthier future for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Priorities;
