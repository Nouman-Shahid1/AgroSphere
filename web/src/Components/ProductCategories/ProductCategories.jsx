import React from "react";

import { FaSeedling, FaFlask, FaBug, FaTractor, FaLeaf, FaWater } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCategories = () => {
  const categories = [
    { title: "Seeds", desc: "Top-quality seeds for high-yield crops.", icon: <FaSeedling size={40} className="text-white" /> },
    { title: "Fertilizers", desc: "Organic and chemical fertilizers for soil nourishment.", icon: <FaFlask size={40} className="text-white" /> },
    { title: "Pesticides", desc: "Protect crops with safe and effective pesticides.", icon: <FaBug size={40} className="text-white" /> },
    { title: "Machinery", desc: "Advanced farming equipment and tools.", icon: <FaTractor size={40} className="text-white" /> },
    { title: "Organic Farming", desc: "Sustainable and eco-friendly farming solutions.", icon: <FaLeaf size={40} className="text-white" /> },
    { title: "Irrigation", desc: "Efficient water management solutions.", icon: <FaWater size={40} className="text-white" /> },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: null, 
    prevArrow: null,  
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="text-center py-12 px-6">
      <h1 className="text-5xl font-extrabold text-green-700 drop-shadow-md">Our Products</h1>
      <p className="mt-3  text-2xl text-black">Explore our premium agricultural products to boost your farming productivity.</p>

      <div className="relative mt-10 max-w-6xl mx-auto">
        <Slider {...settings}>
          {categories.map((item, index) => (
            <div key={index} className="p-6">
              <div className="relative p-8 w-80 h-96 mx-auto bg-gradient-to-br from-green-700 to-green-900 bg-opacity-80 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl border border-green-500 backdrop-blur-lg">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 p-4 rounded-full shadow-md">
                  {item.icon}
                </div>
                <h2 className="text-2xl font-bold mt-20 text-white">{item.title}</h2>
                <p className="mt-4 text-lg text-gray-200">{item.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductCategories;
