import React from "react";
import "react-inner-image-zoom/lib/styles.min.css";
import Image from "./Components/Image";
import ProductDetails from "./Components/productDetails";

const Product = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:col-span-2 gap-5 p-3 sm:p-10">
      <Image className="m-4" />
      <ProductDetails />
    </div>
  );
};

export default Product;
