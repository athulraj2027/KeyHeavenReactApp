import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ title, price, image, onClick }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link to="/product">
      <div
        className="rounded-sm w-full shadow-xl overflow-hidden relative flex flex-col"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          className="w-full sm:h-80 object-cover rounded-t-sm"
          src="https://goal90.shop/cdn/shop/files/Templatecopy3.jpg?v=1723406197"
          alt="Product image"
        />
        <div className="flex flex-col items-center p-3">
          <h1 className="text-md sm:text-xl text-gray-500">productName</h1>
          <h2 className="text-sm sm:text-md text-red-500">$45.00</h2>
        </div>
        {hover ? (
          <div className="absolute inset-0 bg-black opacity-50 flex justify-center items-center"></div>
        ) : null}
      </div>
    </Link>
  );
};

export default ProductCard;
