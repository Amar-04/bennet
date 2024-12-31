
import Events from "@/app/components/life-at-bennet/Events";
import HeroSection from "@/app/components/HeroSection";
import ImageGallery from "@/app/components/life-at-bennet/ImageGallery";
import Testimonial from "@/app/components/life-at-bennet/Testimonial";


export default function LifeAtBennet() {
  
  
  const workplaceImages = [
    {
      src: "/life-at-bennet.png",
      alt: "Team collaboration",
      caption: "Collaborative workspace fostering innovation",
    },
    {
      src: "/life-at-bennet.png",
      alt: "Professional development",
      caption: "Continuous learning and growth opportunities",
    },
    {
      src: "/life-at-bennet.png",
      alt: "Team building",
      caption: "Building strong team relationships",
    },
    {
      src: "/life-at-bennet.png",
      alt: "Work culture",
      caption: "Promoting a positive work environment",
    },
  ];

  const events = [
    { title: "2023", description: "Annual Day Celebration" },
    { title: "2024", description: "Team Building Activities" },
    { title: "2022", description: "Cultural Events" },
    { title: "2021", description: "Sports Tournament" },
  ];

  return (
    <div className="min-h-screen flex flex-col mx-auto">
      <HeroSection
        imageLink="/life-at-bennet.png"
        title='Together We <span className="text-[#9DC41A]">Thrive</span>,
                <br />
                Together We <span className="text-[#9DC41A]">Succeed</span>'
        description="Empowering Growth, Celebrating Success"
        showKnowMoreButton={false}
      />
      {/* Life At Bennet Banner */}
      <section>
        <div className="container w-[100%] mx-auto px-4 py-6 flex justify-center align-middle bg-[#d6e48d] lg:rounded-2xl">
          <div className="w-[100%] flex flex-col lg:flex-row justify-center items-centerlg:gap-5 ">
            <h2 className="text-4xl text-center align-middle lg:text-6xl font-bold mb-4 lg:w-1/3">
              Life At Bennet
            </h2>
            <p className=" text-lg lg:text-2xl lg:w-2/3 ">
              Since its inception, Bennet Pharmaceuticals has been more than
              just a pharmaceutical company - it's been a beacon of hope for
              millions. Through innovation, dedication, and a passion for
              excellence,
            </p>
          </div>
        </div>
      </section>
      {/* Image Gallery */}
      <section>
        <div className="container w-[100%] mx-auto px-4 py-12 text-3xl font-bold">
          <h2>
            We're committed to fostering an environment where you can thrive,
            grow, and reach your full potential.
          </h2>
        </div>
        <ImageGallery />
      </section>
      <div className="container mx-auto">
        <Events />
      </div>
      <Testimonial />
    </div>
  );
}
