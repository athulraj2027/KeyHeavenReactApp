import React from "react";
import ProductCard from "./Components/ProductCard/ProductCard";

const ProductSection = () => {
  return (<>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 my-10">
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </div>
  
  </>
  );
};

export default ProductSection;
