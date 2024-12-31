import React from "react";
import ImgHero from "./components/home/ImgHero";
import HeroSection from "./components/home/HomeHero";
import AboutUs from "./components/home/AboutUs";
import Stats from "./components/home/Stats";
import Cards from "./components/home/Cards";
import Network from "./components/home/Network";
import Map from "./components/home/Map";
import Priorities from "./components/home/Priorities";
import Leadership from "./components/home/Leadership";
import Products from "./components/home/Products";
import Events from "./components/home/Events";

const Home = () => {
  return (
    <>
      <ImgHero />
      <HeroSection />
      <AboutUs />
      <Stats />
      <Cards />
      <Network />
      <Map />
      <Priorities />
      <Leadership />
      <Products />
      <Events />
    </>
  );
};

export default Home;
