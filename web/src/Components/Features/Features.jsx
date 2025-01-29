import React from "react";
const Features = () => {
    return (
      <section className="text-center py-10 text-white">
        <h2 className="text-5xl font-bold">Why Choose AgroSphere?</h2>
        <div className="mt-8 flex justify-center gap-10">
          <div className="p-6 bg-green-600 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">Sustainable Farming</h3>
            <p>Implement eco-friendly agricultural techniques for a better future.</p>
          </div>
          <div className="p-6 bg-green-600 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">High-Quality Products</h3>
            <p>Access premium seeds, fertilizers, and pesticides for optimal yield.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  