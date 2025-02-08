import React from "react";
import { BsSearch } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

const Navbar = ({ isDark }) => {
  return (
    <div className={`relative w-full h-28 border-b-[1px] border-gray-500 ${isDark ? "bg-transparent text-white" : "bg-white text-black"}`}>
      {/* Buttons at the top center */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-4">
        <button className="w-44 h-10 px-6 bg-gradient-to-r from-green-400 to-green-600 text-black uppercase text-sm font-semibold rounded-full shadow-lg hover:from-green-500 hover:to-green-700 transition-all duration-300">
          Become a Buyer
        </button>
        <button className="w-44 h-10 px-6 bg-gradient-to-r from-green-400 to-green-600 text-black uppercase text-sm font-semibold rounded-full shadow-lg hover:from-green-500 hover:to-green-700 transition-all duration-300">
          Become a Seller
        </button>
      </div>

      {/* Main Navbar */}
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between pt-16">
        {/* Logo */}
        <div className="text-green-600 mb-8 hover:text-green-400 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-lg">
  <h1 className="text-5xl uppercase font-bold cursor-pointer">AgroSphere</h1>
</div>


        {/* Navigation Links */}
        <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-lg font-semibold">
          <li className="navbarLi hover:text-green-400 hover:scale-105 transition-all duration-300 ease-in-out">
            <Link href="/">HOME</Link>
          </li>
          <li className="navbarLi hover:text-green-400 hover:scale-105 transition-all duration-300 ease-in-out">
            PESTICIDES
          </li>
          <li className="navbarLi hover:text-green-400 hover:scale-105 transition-all duration-300 ease-in-out">
            SEEDS
          </li>
          <li className="navbarLi hover:text-green-400 hover:scale-105 transition-all duration-300 ease-in-out">
            FERTILIZERS
          </li>
          <li className="navbarLi hover:text-green-400 hover:scale-105 transition-all duration-300 ease-in-out">
            MACHINES
          </li>
          <li className="navbarLi hover:text-green-400 hover:scale-105 transition-all duration-300 ease-in-out">
            <Link href="/about-us">ABOUT US</Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="hidden lg:inline-flex gap-8 items-center mb-4">
          <div className="relative">
            <ImCart className="text-xl" />
          </div>
          <button className="w-44 h-10 px-6 bg-gradient-to-r from-green-400 to-green-600 text-black uppercase text-sm font-semibold rounded-full shadow-lg hover:from-green-500 hover:to-green-700 transition-all duration-300">
            Login/signup
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="inline-flex lg:hidden">
          <FiMenu className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
