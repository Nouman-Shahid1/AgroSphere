import React from "react";
import Link from "next/link";

import { BsSearch } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import Link from "next/link"; 


const Navbar = () => {
  return (
    <div className="w-full  h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-green-300 lg:bg-transparent">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        <div className="text-green-400">
          <h1 className="text-4xl uppercase font-bold">AgroSphere</h1>
        </div>
        <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-base font-semibold"> {/* Text size increased */}
          <li className="navbarLi">HOME</li>
          <li className="navbarLi">PESTICIDES</li>
          <li className="navbarLi">SEEDS</li>
          <li className="navbarLi">FERTILIZERS</li>
          <li className="navbarLi">MACHINES</li>
          <li className="navbarLi">RENTAL MACHINES</li>
          <li className="navbarLi">ABOUT US</li>
        </ul>
        <div className="hidden lg:inline-flex gap-8 items-center">
          <div className="relative">
            <ImCart className="text-xl" />
          </div>
          <button className="w-44 h-10 px-6 bg-gradient-to-r from-green-400 to-green-600 text-black uppercase text-sm font-semibold rounded-full shadow-lg hover:from-green-500 hover:to-green-700 transition-all duration-300">
            Become a Buyer
          </button>
          <button className="w-44 h-10 px-6 bg-gradient-to-r from-green-400 to-green-600 text-black uppercase text-sm font-semibold rounded-full shadow-lg hover:from-green-500 hover:to-green-700 transition-all duration-300">
            Become a Seller
          </button>
        </div>
        <div className="inline-flex lg:hidden">
          <FiMenu className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

