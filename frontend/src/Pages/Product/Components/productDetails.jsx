import React from "react";
import { Link } from "react-router-dom";
const ProductDetails = () => {
  return (
    <div className="grid-cols-1 md:col-span-2 p-4">
      <h1 className="text-2xl">ProductName</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis iste
        animi doloremque non quidem error quibusdam numquam, perspiciatis ea eos
        libero reprehenderit expedita. Autem rerum aut alias repudiandae tenetur
        ad.
      </p>
      <h1 className="text-red-500 text-2xl">$50.00</h1>
      <div>Colour selection</div>
      <button>-</button>
      <p>1</p>
      <button>+</button>
      <br />
      <div className="flex flex-col sm:flex-row gap-3">
        <Link to="/cart">
          <button className="bg-gray-400 px-5 py-1 text-white text-md rounded-md">
            Add to cart
          </button>
        </Link>
        <Link to="/wishlist">
          <button className="bg-red-400 px-5 py-1 text-white text-md rounded-md">
            Add to Wishlist
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
