import React from "react";

const Values = () => {
  const coreValues = [
    {
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in every aspect of our work, ensuring transparency and honesty.",
    },
    {
      title: "Innovation",
      description:
        "We embrace creativity and forward-thinking, driving continuous improvement in our pharmaceutical solutions to meet evolving healthcare challenges.",
    },
    {
      title: "Collaboration",
      description:
        "Teamwork and partnership are at the heart of our operations, as we work together with healthcare professionals and communities to achieve shared goals.",
    },
    {
      title: "Excellence",
      description:
        "Our commitment to excellence drives us to deliver high-quality products and services that consistently exceed expectations, setting new standards in the industry.",
    },
    {
      title: "Empowerment",
      description:
        "We believe in empowering individuals—both our employees and our customers—by providing the tools and resources necessary for better health and well-being.",
    },
  ];

  return (
    <section className="px-4 md:px-16 mt-20 bg-[#DFEAA580]">
      <div className="flex flex-col space-y-8">
        <div className="md:w-9/12 mx-auto bg-black text-white flex flex-col md:flex-row items-center justify-between p-6 md:p-8 rounded-xl md:rounded-3xl -mt-10 md:-mt-20">
          <h2 className="text-xl md:text-2xl font-bold">
            We're more than just a
            <span className="text-[#AECA1DE5]"> healthcare</span> company
          </h2>
          <p className="md:text-lg md:w-1/2">
            We’re a community of dedicated professionals committed to creating a
            healthier future for everyone.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <h1 className="text-3xl md:text-5xl font-bold">
            Core <br /> Values
          </h1>
          <hr className="w-1/2 h-1 -mr-4 md:-mr-16 bg-black border-0" />
        </div>

        <p className="md:text-lg max-w-2xl">
          At Bennet, our core values guide our mission and shape our culture,
          ensuring we deliver exceptional healthcare solutions.
        </p>
      </div>

      <div className="relative py-16">
        
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <div className="md:h-[600px] md:w-[600px] mr-80  rounded-full border border-gray-300 absolute"></div>
          <div className="md:h-[600px] md:w-[600px] ml-80 rounded-full border border-gray-300 absolute"></div>
          <div className="md:h-[600px] md:w-[600px] rounded-full border border-gray-300 absolute"></div>
          <div className="md:h-[500px] md:w-[500px] rounded-full border border-gray-300 absolute"></div>
        </div>

        
        <div className="relative flex flex-col items-center">
          <div className="grid md:grid-cols-2 gap-4 md:gap-36 w-full md:max-w-4xl z-10">
            {coreValues.slice(0, 4).map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg text-center"
              >
                <h3 className="text-xl md:text-3xl font-semibold text-[#AECA1D] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Empowerment Card */}
          <div className="md:absolute w-[300px] md:w-[500px] md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-white shadow-lg rounded-lg p-6 mt-4 md:mt-0 md:p-8 z-20 text-center">
            <h3 className="text-xl md:text-3xl font-semibold text-[#AECA1D] mb-4">
              Empowerment
            </h3>
            <p className="text-gray-600">
              We believe in empowering individuals—both our employees and our
              customers—by providing the tools and resources necessary for
              better health and well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
