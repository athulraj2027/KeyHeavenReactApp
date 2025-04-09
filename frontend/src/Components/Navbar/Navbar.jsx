import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="text-gray-500 h-20 p-2 sm:p-5 flex justify-between items-center  shadow-xl">
      <Link to="/" className="text-xl sm:text-2xl cursor-pointer">
        KeyHeaven
      </Link>

      <div className="flex gap-5 items-center mx-5">
        <Link to="/cart" className="text-md sm:text-xl cursor-pointer">
          Cart
        </Link>
        <Link to="/wishlist" className="text-md sm:text-xl cursor-pointer">
          Wishlist
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
