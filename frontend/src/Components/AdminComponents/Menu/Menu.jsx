import React, { useState } from "react";
import { Icons } from "../../../assets/adminIcons";
import { Link } from "react-router-dom";

const Menu = () => {
  const options = [
    { name: "Dashboard", icon: Icons.barChart },
    { name: "Products", icon: Icons.box },
    { name: "Categories", icon: Icons.category },
    { name: "Users", icon: Icons.users },
    { name: "Coupons", icon: Icons.coupon },
    { name: "Offers", icon: Icons.offer },
    { name: "Orders", icon: Icons.orders },
    { name: "Logout", icon: Icons.logout },
  ];

  const [page, setPage] = useState(0);
  return (
    <div className="absolute bg-blue-500 h-[100%]  ">
      <ul>
        {options.map((item, index) => (
          <Link to={`${item.name.toLowerCase()}`}>
            <li
              className={`py-3 px-10 hover:bg-white hover:text-blue-500  text-md transition-all duration-300 transform hover:scale-105 ${
                page === index
                  ? " bg-white text-blue-500"
                  : "bg-blue-500 text-white"
              }`}
              key={index}
              onClick={() => setPage(index)}
            >
              <span className="text-md">{item.icon}</span>
              <h1 className="hidden sm:block">{item.name}</h1>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
