"use client";
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Organic Fertilizer",
    price: "$15",
    image: "/about.png",
  },
  { id: 2, name: "Hybrid Seeds", price: "$10", image: "/images/seeds.jpg" },
  { id: 3, name: "Irrigation Pump", price: "$120", image: "/images/pump.jpg" },
  {
    id: 4,
    name: "Tractor Attachments",
    price: "$250",
    image: "/images/tractor.jpg",
  },
];

const ProductPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>

      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-3 border border-gray-300 rounded-lg mb-6"
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
              <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No products found
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
