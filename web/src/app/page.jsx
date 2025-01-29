"use client";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Features from "../Components/Features/Features";
import ProductCategories from "../Components/ProductCategories/ProductCategories";

export default function Page() {
  return (
    <div>
      {/* Apply the background image here */}
      <div
        className="bg-cover bg-center min-h-screen"
        style={{
          backgroundImage:
            "url(https://www.thpsc.com/wp-content/uploads/2022/01/AgricultureOfPak.jpg)",
        }}
      >
        <div className="bg-black bg-opacity-50 backdrop-blur-md h-full">
          <Navbar />
          <main className="text-center mt-10">
            <h1 className="text-8xl text-green-400 font-bold pt-11">
              Welcome to AgroSphere
            </h1>
            <p className="text-3xl mt-4 text-white pt-5">
              Explore the best agricultural solutions for your needs.
            </p>
            <p className="pt-4 text-white">
              Discover innovative agricultural solutions, enhance productivity,
              and embrace sustainability with AgroSphere—your trusted partner in
              modern farming, smart technology.
            </p>
            <br />
            <button className="pt-2 px-6 py-2 bg-green-500 text-black text-sm font-semibold rounded-full shadow-md hover:bg-green-600 transition-all duration-300">
              Learn More
            </button>
          </main>
          <Features />
        </div>
      </div>

      {/* Remove the background image here for ProductCategories and Footer */}
      <div className="bg-white">
        <ProductCategories />
        <Footer />
      </div>
    </div>
  );
}