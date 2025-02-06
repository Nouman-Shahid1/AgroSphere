"use client";
import Profile from "@/src/Components/Profile/Profile";
import React from "react";
import { FaHome, FaUsers, FaSeedling, FaLeaf, FaTruck, FaTools, FaInfoCircle } from "react-icons/fa";

const AdminPage = () => {
  return (
    <div className="font-sans bg-green-100 min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-4 py-8">
       
        {/* <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-green-700 mb-3"> Admin</h1>
          <p className="text-gray-600 text-lg">Manage your agricultural resources and operations</p>
        </header> */}

        <Profile/>
        <div className="grid grid-cols-1 my-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
         
          {[
            { icon: <FaHome />, title: "Home", color: "bg-gray-50" },
            { icon: <FaLeaf />, title: "Pesticides", color: "bg-yellow-100" },
            { icon: <FaSeedling />, title: "Seeds", color: "bg-blue-100" },
            { icon: <FaTruck />, title: "Machines", color: "bg-orange-100" },
            { icon: <FaTools />, title: "Rental Machines", color: "bg-purple-100" },
            { icon: <FaInfoCircle />, title: "About Us", color: "bg-pink-100" },
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.color} group p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1`}
            >
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-white rounded-xl text-2xl text-green-700 group-hover:bg-green-50 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-black">{item.title}</h3>
              </div>
              <div className="text-black">
              <p className="mt-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Manage {item.title.toLowerCase()} and related resources
              </p>
              </div>
                
            </div>
          ))}
        </div>

       
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Total Users</p>
                <p className="text-3xl font-bold mt-2">1,234</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg text-green-600">
                <FaUsers className="text-2xl" />
              </div>
            </div>
          </div>
         
        </div>

        
        
      </div>
    </div>
  );
};

export default AdminPage;