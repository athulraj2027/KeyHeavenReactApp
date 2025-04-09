import React from "react";
import CartItemCard from "./CartItemCard";
import Pricing from "./Pricing";

const Cart = () => {
  return (
    <div className="grid-cols-1 sm:grid-cols-4">
      <div className="m-3 sm:m-20 gap-3 flex flex-col sm:cols-span-3">
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
      </div>
      <Pricing />
    </div>
  );
};

export default Cart;
