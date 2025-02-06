import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-green-100 text-green-700 py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg mb-6">
          Stay updated with the latest trends in agriculture & technology.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-1/3 p-3 rounded-lg text-gray-900"
          />
          <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold transition duration-300 hover:bg-gray-200">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
