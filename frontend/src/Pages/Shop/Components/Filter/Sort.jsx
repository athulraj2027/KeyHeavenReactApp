import React from "react";

const Sort = () => {
  return (
    <div
      className="absolute left-0 top-0 bg-white z-10 w-[60%] h-screen p-5 text-gray-500 shadow-2xl 
            transform transition-all duration-300 ease-in-out translate-x-0 md:max-w-[30%]"
    >
      <ul className="">
        <li className="text-xl">Sort by : </li>
        <br />
        <li>
          <div
            className="border-t border-gray-500 p-3 flex justify-center items-center cursor-pointer"
            // onClick={() => setSubMenu((prev) => !prev)}
          >
            Ascending Order(A-Z)
          </div>
        </li>
        <li>
          <div
            className="border-t border-gray-500 p-3 flex justify-center items-center cursor-pointer"
            // onClick={() => setSubMenu((prev) => !prev)}
          >
            Descending Order (Z-A)
          </div>
        </li>
        <li>
          <div
            className="border-t border-gray-500 p-3 flex justify-center items-center cursor-pointer"
            // onClick={() => setSubMenu((prev) => !prev)}
          >
            Price (Low to High)
          </div>
        </li>
        <li>
          <div
            className="border-t border-gray-500 p-3 flex justify-center items-center cursor-pointer"
            // onClick={() => setSubMenu((prev) => !prev)}
          >
            Price ( High to Low)
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sort;
