import React from "react";
import ProductSection from "../../Components/ProductSection/ProductSection";
import Filter from "./Components/Filter/Filter";

const Shop = () => {
  return (
    <>
      <Filter />
      <div className="flex">
        <ProductSection />
      </div>
    </>
  );
};

export default Shop;
