import React from "react";

const AboutUs = () => {
  return (
    <section className="mt-16 px-4 md:px-16">
      <h2 className="text-3xl md:text-6xl font-bold text-transparent bg-white text-stroke-black">
        ABOUT US
      </h2>
      <div className="grid md:grid-cols-2">
        <div>
          <h1 className="text-2xl md:text-6xl font-bold leading-relaxed">
            Transforming <span className="text-[#2C3D5A]"> Healthcare </span>for
            a Brighter tomorrow
          </h1>
        </div>
        <div className="flex flex-col space-y-4 text-xl">
          <p>
            We're passionate about empowering caregivers, ensuring that vital
            care reaches every corner of India, and making a lasting impact on
            the well-being of our people.
          </p>

          <p>
            From our manufacturing facilities to our extensive distribution
            network, we're committed to delivering excellence in
            pharmaceuticals. 
          </p>

          <p>
            We believe in the transformative power of healthcare and are
            determined to create a brighter, healthier future for all.
          </p>

          <p className="font-bold">
            Join us on this journey as we strive to build a stronger, healthier
            India together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
