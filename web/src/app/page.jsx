"use client";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Features from "../Components/Features/Features";
import ProductCategories from "../Components/ProductCategories/ProductCategories";
import Testimonials from "../Components/Testimonials/Testimonials";
import Newsletter from "../Components/NewsLetter/NewsLetter";

export default function Page() {
  return (
    <div className="bg-gray-50">
      
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://www.thpsc.com/wp-content/uploads/2022/01/AgricultureOfPak.jpg"
            alt="Farmland"
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        </div>
        
        <div className="relative z-10">
          <Navbar />
          
          <div className="container mx-auto px-4 pt-32 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
              Cultivating the Future with
              <span className="text-green-400 block mt-2">AgroSphere</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Revolutionizing agriculture through smart technology and sustainable practices
            </p>
            
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/30">
              Explore Solutions →
            </button>
          </div>
        </div>
      </div>

      
      <Features />

     

     
      <div className="bg-gradient-to-b from-white to-gray-50 py-20">
        <ProductCategories />
      </div>

      <Testimonials/>

      <Newsletter/>

      <Footer />
    </div>
  );
}