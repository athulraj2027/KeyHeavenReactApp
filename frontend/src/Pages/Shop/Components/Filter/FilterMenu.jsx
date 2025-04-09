import React, { useState } from "react";

const FilterMenu = () => {
  const [subMenu, setSubMenu] = useState(null);
  return (
    <div
      className="absolute right-0 top-0 z-10 bg-white w-[60%] h-screen p-5 text-gray-500 shadow-2xl 
            transform transition-all duration-300 ease-in-out translate-x-0 md:max-w-[30%]"
    >
      <ul className="">
        <li className="text-xl">Filter by : </li>
        <br />
        <li>
          <div
            className="border-t border-gray-500 p-3 flex justify-center items-center cursor-pointer"
            onClick={() => setSubMenu((prev) => !prev)}
          >
            Brand
          </div>
        </li>
        <li>
          <div
            className="border-t border-gray-500 p-3 flex justify-center items-center cursor-pointer"
            onClick={() => setSubMenu((prev) => !prev)}
          >
            Colour
          </div>
        </li>
        <li>
          <div
            className="border-t border-gray-500 p-3 flex justify-center items-center cursor-pointer"
            onClick={() => setSubMenu((prev) => !prev)}
          >
            Category
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FilterMenu;
