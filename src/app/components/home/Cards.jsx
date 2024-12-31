import Link from "next/link";
import React from "react";

const Cards = () => {
  const cardsData = [
    {
      id: 1,
      title: "Ethical",
      desc: "We offer tailored solutions through our three core divisions: Ethical, Critical Care, and the Emiror Division, bringing specialized and innovative care to those who need it most.",
    },
    {
      id: 2,
      title: "Critical Care",
      desc: "We collaborate with over 500 passionate sales personnel and a network of 1,000+ distributors, ensuring consistent access to care across the country with a presence in 15+ states.",
    },
    {
      id: 3,
      title: "Emiror Division",
      desc: "With over 100,000 retail outlets nationwide, we bring superior healthcare solutions within easy reach for everyone. We believe in the transformative power of healthcare.",
    },
  ];
  return (
    <section className="px-8 md:p-16">
      <div className="container mx-auto flex flex-col space-y-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Our Commitment to the Nation</h2>

        <p className="text-xl">
          We provide high-quality healthcare solutions, at prices that are
          accessible to all. <br />
          Our team upholds the highest standards of ethical practices, with
          certifications and strict adherence to regulatory standards, ensuring
          your well-being in every interaction.
        </p>

        <div className="grid md:grid-cols-3 gap-4 md:gap-16">
            {cardsData.map((card)=>(
                <div key={card.id} className="bg-black text-white rounded-lg px-4 md:px-12 py-4">
                    <h2 className="text-xl font-bold">{card.title}</h2>
                    <p className="mt-4 md:text-lg">{card.desc}</p>
                </div>
            ))}
        </div>

        <div className="flex space-x-2 items-center justify-center text-white text-xl font-bold">
          <Link href={"#"} className="p-2 rounded-full bg-[#83961D] shadow-lg">
            Know More
          </Link>
          <Link
            href={"#"}
            className="rounded-full px-3 py-2 bg-black"
          >
            →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cards;
