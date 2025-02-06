'use client'
import React, { useState } from "react";
import OrderCard from "@/src/Components/OrderCard/OrderCard";
import Profile from "@/src/Components/Profile/Profile";  {/* Corrected the import path */}

const Orders = () => {
  const [activeTab, setActiveTab] = useState("All");

  const orders = [
    { name: "Organic Wheat", status: "Shipped", date: "2024-12-01", total: 199.99 },
    { name: "Fresh Apples", status: "Processing", date: "2024-12-02", total: 49.99 },
    { name: "Green Tea Leaves", status: "Delivered", date: "2024-11-30", total: 299.99 },
    { name: "Brown Rice", status: "Processing", date: "2024-12-03", total: 89.99 },
    { name: "Organic Honey", status: "Shipped", date: "2024-11-28", total: 119.99 },
    { name: "Almond Oil", status: "Delivered", date: "2024-11-27", total: 199.49 },
  ];

  const filteredOrders = orders.filter((order) => {
    if (activeTab === "All") return true;
    if (activeTab === "Pending") return order.status === "Processing";
    if (activeTab === "Completed") return order.status === "Delivered";
    return false;
  });

  return (
    <div
      className="relative h-screen overflow-auto bg-green-600 p-4 px-4 md:px-8 lg:px-6 xl:px-8 2xl:px-12 py-4 md:py-5 lg:py-7 xl:py-10 2xl:py-12"
   
    >

      <div className="relative z-10">
        <Profile />  

        <div className="bg-white rounded-lg shadow-lg p-4 mt-6">
          <div className="flex justify-between border-b">
            {["All", "Pending", "Completed"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-lg font-semibold px-4 py-2 border-b-2 transition ${
                  activeTab === tab
                    ? "border-green-600 text-green-800"
                    : "border-transparent text-gray-600 hover:text-green-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order, index) => (
              <OrderCard
                key={index}
                name={order.name}
                status={order.status}
                date={order.date}
                total={order.total}
              />
            ))
          ) : (
            <div className="text-center text-white mt-8 col-span-full">
              <p>No orders available for {activeTab.toLowerCase()}.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
