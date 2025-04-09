import React, { useState } from "react";
import FilterMenu from "./FilterMenu";
import Sort from "./Sort";

const Filter = () => {
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false);
  return (
    <div className="w-full h-15 bg-gray-300 flex justify-around items-center ">
      <div
        className="bg-gray-400 w-[50%] h-[80%]  flex justify-around items-center"
        onClick={() => {
          setMenu((prev) => !prev);
          setFilter((prev) => !prev);
        }}
        onBlur={() => {
          setMenu(false);
          setFilter(false);
        }}
      >
        <p>Filter</p>
      </div>
      <div
        className="bg-gray-400 w-[50%] h-[80%]  flex justify-around items-center"
        onClick={() => {
          setMenu((prev) => !prev);
          setSort((prev) => !prev);
        }}
        onBlur={() => {
          setMenu(false);
          setSort(false);
        }}
      >
        <p>Sort</p>
      </div>
      {menu && filter ? (
        <FilterMenu />
      ) : (
        <div
          className="absolute right-0 top-0 bg-white w-[60%] h-screen p-5 text-gray-500 shadow-2xl 
                  transform transition-all duration-300 ease-in-out translate-x-full"
        ></div>
      )}

      {menu && sort ? <Sort /> : null}
      <div className=""></div>
    </div>
  );
};

export default Filter;
