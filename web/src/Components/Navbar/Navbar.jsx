import React from "react";
import { BsSearch } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        <h1 className="text-2xl uppercase font-bold">AgroSphere</h1>
        <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-sm font-semibold">
          <li className="navbarLi">HOME</li>
          <li className="navbarLi">PESTICIDES</li>
          <li className="navbarLi">SEEDS</li>
          <li className="navbarLi">FERTILIZERS</li>
          <li className="navbarLi">MACHINES</li>
          <li className="navbarLi">RENTAL MACHINES</li>
          <li className="navbarLi">ABOUT US</li>
        </ul>
        
      </div>
    </div>
  );
};

export default Navbar;
