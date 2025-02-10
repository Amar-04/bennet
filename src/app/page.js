"use client"

import React from "react";
import ImgHero from "./components/home/ImgHero";
import AboutUs from "./components/home/AboutUs";
import Stats from "./components/home/Stats";
import Cards from "./components/home/Cards";
import Network from "./components/home/Network";
import Priorities from "./components/home/Priorities";
import Leadership from "./components/home/Leadership";
import Products from "./components/home/Products";
import Events from "./components/home/Events";
import HomeHero from "./components/home/HomeHero";
import dynamic from "next/dynamic";

const DynamicWorldMap = dynamic(()=>import('./components/worldMap'),
 {  
  ssr:false,
  }
)
const Home = () => {
  return (
    <>
    <div className="overflow-x-hidden">
      <ImgHero />
      <HomeHero />
      <AboutUs />
      <Stats />
      <Cards />
      <Network />
      <DynamicWorldMap />
      <Priorities />
      <Leadership />
      <Products />
      <Events />
      </div>
    </>
  );
};

export default Home;
