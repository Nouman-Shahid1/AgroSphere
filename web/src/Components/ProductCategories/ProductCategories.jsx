

import React from "react";

const ProductCategories = () => {
  const categories = [
    { 
      title: "Seeds", 
      desc: "Top-quality seeds for high-yield crops",
      icon: "🌱"
    },
    { 
      title: "Fertilizers", 
      desc: "Organic and chemical soil nourishment",
      icon: "🌿"
    },
    { 
      title: "Pesticides", 
      desc: "Safe crop protection solutions",
      icon: "🛡️"
    },
    { 
      title: "Machinery", 
      desc: "Advanced farming equipment",
      icon: "🚜"
    },
    
  ];

  return (
    <section className="py-14 bg-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-green-700 mb-3">
            Product Categories
          </h2>
          <div className="relative inline-block">
            <p className="text-4xl font-semibold text-black mb-4">
              Farming Essentials
            </p>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-300 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-8">
          {categories.map((item, index) => (
            <div 
              key={index}
              className="relative p-8 bg-white rounded-2xl border-2 border-green-100 
                      hover:border-green-300 transition-all duration-300 
                      hover:bg-gradient-to-b from-green-50/30 to-white
                      shadow-xl hover:shadow-2xl transform hover:-translate-y-2
                      flex flex-col justify-center h-72 group"
            >
              <div className="mb-4">
                <div className="w-16 h-16 mb-6 rounded-full bg-green-100 flex items-center justify-center text-3xl transition-colors duration-300 group-hover:bg-green-200">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold text-green-800 mb-4 relative pb-3">
                  {item.title}
                  <div className="absolute bottom-0 left-0 w-12 h-1 bg-green-400 rounded-full"></div>
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
              
              {/* Hover line effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;