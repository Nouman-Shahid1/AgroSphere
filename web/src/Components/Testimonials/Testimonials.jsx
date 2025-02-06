
import React from "react";

const testimonials = [
  {
    name: "John Doe",
    company: "Green Farms Ltd.",
    testimonial:
      "AgroSphere's technology has revolutionized the way we manage our crops. The precision farming tools have helped us increase our yield and optimize resources.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    company: "AgriTech Co.",
    testimonial:
      "The smart sensors provided by AgroSphere are a game-changer for our farm management. We can now monitor soil health in real-time and take timely actions.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Robert White",
    company: "EcoGreen Solutions",
    testimonial:
      "AgroSphere's sustainable farming solutions have helped us reduce costs and improve environmental outcomes. Highly recommend to anyone in the agricultural industry.",
    image: "https://via.placeholder.com/150",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-16"> 
      <div className="container mx-auto text-center">
        <h2 className="text-5xl md:text-5xl font-bold text-green-700 mb-8">
          What Our Clients Say
        </h2>

        
        <p className="text-xl text-black-600 mb-6">
          Discover how our innovative solutions have transformed farming.
        </p>
       
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="max-w-xs bg-green-600 shadow-lg rounded-lg p-6 transition transform hover:scale-105 hover:shadow-xl hover:bg-green-700"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-xl italic text-black-800 mb-4">"{testimonial.testimonial}"</p>
              <p className="font-bold text-black-800">{testimonial.name}</p>
              <p className="text-white">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
