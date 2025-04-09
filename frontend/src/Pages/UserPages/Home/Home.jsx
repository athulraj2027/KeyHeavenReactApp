import React from "react";
import { Link } from "react-router-dom";
import ProductSection from "../../../Components/ProductSection/ProductSection";

const Home = () => {
  return (
    <div className="h--full w-full flex flex-col justify-center items-center">
      <ProductSection />
      <Link to="/shop">
        <button className="bg-gray-300 hover:bg-gray-500 text-black hover:text-white cursor-pointer rounded-xl w-20 h-10">
          View All
        </button>
      </Link>
    </div>
  );
};

export default Home;
