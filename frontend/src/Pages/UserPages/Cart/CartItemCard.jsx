import React from "react";
import { Link } from "react-router-dom";

const CartItemCard = ({ image, name, quantity, subtotal, color }) => {
  return (
    <div className="flex justify-around items-center w-[100%] sm:w-[80%]">
      <Link to="/product">
        <img
          src="https://goal90.shop/cdn/shop/files/Templatecopy3.jpg?v=1723406197"
          alt=""
          className="h-30"
        />
      </Link>
      <p className="hidden sm:block">ProductName</p>
      <p>Red</p>
      <p>3</p>
      <p>$43</p>
      <button className="bg-red-500 text-white py-2 px-3 rounded-md cursor-pointer">
        Remove
      </button>
    </div>
  );
};

export default CartItemCard;
