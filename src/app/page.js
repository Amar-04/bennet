import React from "react";
import ImgHero from "./components/home/ImgHero";
import Stats from "./components/home/Stats";
import Cards from "./components/home/Cards";
import Network from "./components/home/Network";
import Leadership from "./components/home/Leadership";
import Products from "./components/home/Products";
import Careers from "./components/home/Careers";
import HomeHero from "./components/home/HomeHero";
import MapWrapper from "./components/MapWrapper.jsx";
import { getHomePage } from "@/sanity/lib/queries";

const Home = async () => {
  const homeData = await getHomePage();
  return (
    <>
      <div className="overflow-x-hidden">
        <ImgHero data={homeData.herosection}/>
        <HomeHero />
        <Cards />
        <Stats />
        <Network />
        <div className="max-w-[1440px] mx-auto px-0">
          <MapWrapper />
        </div>
        <Leadership />
        <Products data={homeData.productsection} />
        <Careers />
      </div>
    </>
  );
};

export default Home;
