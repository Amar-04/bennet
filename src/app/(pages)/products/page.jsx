import Innovation from "@/app/components/products/Innovation";
import ProductCards from "@/app/components/products/ProductCards";
import ProductHero from "@/app/components/products/ProductHero";
import ProductHero2 from "@/app/components/products/ProductHero2";
import React from "react";

const Products = () => {
  return (
    <>
      <ProductHero />
      <ProductHero2 />
      <Innovation />
      <ProductCards />
    </>
  );
};

export default Products;
