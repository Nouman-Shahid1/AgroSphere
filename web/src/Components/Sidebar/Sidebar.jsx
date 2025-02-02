'use client';
import { useState } from "react";
import { Menu, X, Home, ShoppingCart, Leaf, Tractor, Wrench, Settings } from "lucide-react";
import Link from "next/link";

export default function SellerProfile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="fixed flex min-h-screen bg-green-900 z-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0  w-64 bg-gradient-to-r from-green-700 via-green-800 to-green-900 shadow-2xl transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out lg:relative lg:translate-x-0 rounded-r-xl`}
      >
        <p className="text-center text-3xl font-extrabold py-6 text-white shadow-md">Agro Sphere</p>
        <div className="p-4 flex justify-between items-center lg:hidden">
          <h2 className="text-xl font-bold text-white shadow-md">Seller Menu</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        <nav className="mt-6">
          <ul className="space-y-4">
            {[
              { name: "HOME", icon: <Home className="w-5 h-5" /> },
              { name: "My PRODUCTS", icon: <ShoppingCart className="w-5 h-5" /> },
              { name: "ORDERS", icon: <Leaf className="w-5 h-5" /> },
              { name: "EARNINGS", icon: <Wrench className="w-5 h-5" /> },
              { name: "ANALYTICS", icon: <Tractor className="w-5 h-5" /> },
              { name: "CHATS", icon: <Tractor className="w-5 h-5" /> },
              { name: "SETTINGS", icon: <Settings className="w-5 h-5" /> },
            ].map(({ name, icon }) => (
              <li key={name}>
                <Link
                  href="#"
                  className="flex gap-4 items-center px-6 py-3 text-white hover:bg-green-600 hover:text-white font-bold rounded-md transition-colors duration-300"
                >
                  <div className="mr-4">{icon}</div>
                  <div>{name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div  className="p-4 bg-green-800 w-full z-50 fixed top-0 left-0 lg:hidden">
      <button
       
        onClick={() => setSidebarOpen(true)}
      >
        {!sidebarOpen?
        <Menu className="w-6 h-6 text-green-900" />
    :null   }
      </button>
      </div>
    </div>
  );
}
