import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center py-6 bg-green-900 text-white">
      <h2 className="text-xl font-bold">AgroSphere - Smart Farming Solutions</h2>
      <p className="mt-2">Empowering farmers with technology for a sustainable future.</p>
      <p>© 2025 AgroSphere. All rights reserved.</p>
      <p>Contact: <a href="mailto:support@agrosphere.com" className="underline">support@agrosphere.com</a></p>

      
      <div className="mt-6 flex justify-center gap-8">
        <a href="" target="_blank" rel="noopener noreferrer" 
           className="text-white text-3xl transition-transform transform hover:scale-110 hover:text-blue-500">
          <FaFacebook />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" 
           className="text-white text-3xl transition-transform transform hover:scale-110 hover:text-blue-400">
          <FaTwitter />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" 
           className="text-white text-3xl transition-transform transform hover:scale-110 hover:text-blue-600">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
