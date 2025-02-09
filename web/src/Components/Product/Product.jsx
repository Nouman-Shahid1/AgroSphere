"use client";

export default function Product() {
  const products = [
    {
      id: 1,
      name: "Eco-Friendly Smart Tractors",
  description: "GPS-enabled autonomous tractors for efficient and eco-friendly farming.",
  image: "",
    },
    {
        id: 2,
        name: "Sustainable Bio-Fertilizers",
        description: "Organic and eco-friendly fertilizers that enhance soil fertility and plant growth.",
        image: "",
    },
    {
      id: 3,
      name: "Soil Testing Kit",
  description: "Instant soil analysis tools to test fertility and pH levels on the go.",
  image: "",
    },
  ];

  return (
    <section className="py-16 bg-green-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-green-700 mb-8">Our Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-2xl font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
