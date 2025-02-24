import Innovation from "@/app/components/products/Innovation";
import ProductCards from "@/app/components/products/ProductCards";
import ProductHero from "@/app/components/products/ProductHero";
import ProductHero2 from "@/app/components/products/ProductHero2";
import { getProductPage } from "@/sanity/lib/queries";

import React from "react";

const Products = async () => {
  const productData = await getProductPage();

  return (
    <>
      <ProductHero data={productData.herosection} />
      <ProductHero2 data={productData.secondherosection} />
      <ProductCards data={productData.productsection} />
      <Innovation />
    </>
  );
};

export default Products;
