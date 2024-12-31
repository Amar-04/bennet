import Image from "next/image";
import HeroSection from "@/app/components/HeroSection";

export default function Manufacturing() {
  return (
    <main className="min-h-screen">
      <HeroSection
        imageLink="/manufacturing.png"
        title='Empowering lives and <span className="text-[#9DC41A]">affordability</span>'
        description="Where excellence meets accessibility"
        showKnowMoreButton={true}
      />
      {/* Excellence Section */}
      <section className="container mx-auto px-4 relative">
        <div className="border border-[#2C3D5A] bg-[#D9D9D980] p-6 md:p-8 lg:p-16 rounded-3xl shadow-sm mx-auto relative z-10">
          <div className="text-black">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
              Where excellence meets accessibility
            </h2>
            <p className="text-center md:px-36">
              At Bennet Pharmaceuticals, we believe in delivering high-quality
              healthcare solutions through advanced manufacturing practices.
              <br />
              <br />
              Our facilities are designed to meet the highest standards of
              excellence, ensuring precision, safety, and innovation in every
              product.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 excellence-bg z-0"></div>
      </section>

      {/* Manufacturing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="flex justify-start md:justify-center md:gap-0 lg:gap-0 items-center my-10 mb-14">
            <h2 className="w-3/5 md:w-[60%] lg:w-[50%] text-white text-4xl md:text-5xl xl:text-6xl font-bold text-stroke-black">
              State-of-the-Art Manufacturing at Baddi
            </h2>
            <div className="w-0 text-left md:w-[40%] lg:w-[50%] mt-2">
              <hr className="border-t-2 border-[#AECA1D]" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Global Standards Compliance",
                description:
                  "Our Baddi facility adheres to the highest global manufacturing standards.",
              },
              {
                title: "Uncompromising Quality Control",
                description:
                  "We maintain a rigorous quality control process throughout manufacturing.",
              },
              {
                title: "Advanced Technology",
                description:
                  "Utilizing cutting-edge technology for precise manufacturing.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black/90 text-white p-6 rounded-lg text-center"
              >
                <h3 className="text-xl lg:text-3xl font-semibold mb-3 text-[#B5CE32] ">
                  {item.title}
                </h3>
                <p className="text-gray-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Network */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="flex justify-start md:justify-center md:gap-0 lg:gap-0 items-center my-10 mb-14">
            <h2 className="w-3/5 md:w-[60%] lg:w-[55%] 2xl:w-[45%] text-white text-4xl md:text-5xl xl:text-6xl font-bold text-stroke-black">
              Our Manufacturing Network
            </h2>
            <div className="w-0 text-left md:w-[40%] lg:w-[45%] 2xl:w-[55%] mt-2">
              <hr className="border-t-2 border-[#AECA1D]" />
            </div>
          </div>
          <h3 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 lg:leading-[4.5rem] xl:leading-[5.714rem]">
            Experience the <span className="text-[#b4d335]">BENNET</span>{" "}
            difference in every product.
          </h3>
          <div className="relative w-full h-[200px] md:h-[400px] bg-gradient-to-br from-[#AECA1D]/10 to-[#2C3D5A]/10 shadow-sm flex justify-center items-center">
            <Image
              src="/manufacturing-network.png"
              alt="manufacturing network"
              layout="fill"
              objectFit="contain"
              className="align-middle"
            />
          </div>
        </div>
      </section>

      {/* Contract Manufacturing */}
      <section className="py-16 contract-manufacturing-bg">
        <div className="container mx-auto px-4 relative">
          <h2 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl lg:leading-[4.5rem] xl:leading-[5.714rem] font-bold mb-8">
            Contract <span className="text-[#2C3D5A]">Manufacturing</span>
          </h2>
          <div className="">
            <p className="text-[#525354] text-lg lg:text-2xl mb-4">
              At Bennet Quality Assurance and Quality Control are given
              paramount importance, quality assurance system harmonise and
              simply cGMP process to ensure sustainable quality.
            </p>
            <br />
            <br />
            <p className="lg:text-lg mb-4">
              At Bennet Pharmaceuticals, we specialize in contract manufacturing
              of finished formulations, including tablets, capsules, liquid
              orals, soft gels, and bi-layered and sustained-release
              preparations.
            </p>
            <br />
            <br />

            <hr className="border-t-2 border-[#AECA1D]" />

            <br />
            <br />
            <p className="lg:text-lg">
              All of our products are manufactured at a facility that adheres to
              WHO-GMP compliance, ensuring that we meet the highest
              international standards across all therapeutic segments.
            </p>
            <br />
            <br />

            <hr className="border-t-2 border-[#AECA1D]" />
            <br />
            <br />

            <p className="lg:text-lg">
              This commitment to quality enables us to consistently deliver
              excellence in healthcare solutions.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="mx-auto mt-12">
        <div className="container bg-[#D7E48E] mx-auto px-2 md:px-4 py-6 rounded-2xl">
          <div className="flex flex-col  md:gap-12 md:flex-row items-center md:justify-between">
            {/* Heading Section */}
            <div className="md:w-2/5 xl:w-[42%] w-full text-center md:text-left">
              <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-2">
                To know more about us Contact at
              </h3>
            </div>
            {/* Contact Info Section */}
            <div className="md:w-3/5 xl:w-[58%] w-full text-center md:text-left text-lg lg:text-2xl">
              <p>Email: cm@bennetpharmaceuticals.com</p>
              <p>Call: (+91) 8650107111</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exports Section */}
      <section className="my-12">
        <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl lg:leading-[4.5rem] xl:leading-[5.714rem] font-bold mb-8">
              Exports
            </h1>
            <p className="text-[#1E1E1E] text-xl">
              Our commitment to global healthcare extends beyond borders. Bennet
              Pharmaceuticals exports top-tier pharmaceutical products to Asia,
              Africa, and Latin America, contributing to global health
              advancements and ensuring accessibility worldwide.
            </p>
          </div>
          <div className="relative h-[300px]">
            <Image
              src="/map.png"
              alt="World map showing export locations"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="container mx-auto">
          <div className="bg-black text-white text-center py-6 px-4 lg:p-12 lg:px-32 lg:rounded-2xl">
            <p className="mb-4 text-xl md:text-4xl md:pb-6 font-semibold">
              We are open to{" "}
              <span className="text-[#9FB81D]">collaborative</span> association
              for all kinds of product inquiries.
            </p>
            <div className="text-sm md:text-xl">
              <p>Email: Export@bennetpharmaceuticals.com</p>
              <p>Call: (+91)9625102437</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
