'use client';
import { useState } from "react";
import { Menu, X, ShoppingCart, Leaf, Wrench, Tractor, List, Users } from "lucide-react";
import Link from "next/link";

export default function AdminSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Pesticides", icon: ShoppingCart },
    { name: "Seeds", icon: Leaf },
    { name: "Machines", icon: Wrench },
    { name: "Rental Machines", icon: Tractor },
    { name: "Categories", icon: List },
    { name: "Users", icon: Users },
  ];

  return (
    <div className="fixed flex min-h-screen bg-green-900 z-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gradient-to-r from-green-700 via-green-800 to-green-900 shadow-2xl transform ${
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
          <Link href="/admin">
            <p className="text-2xl text-white font-extrabold text-center py-8">Dashboard</p>
          </Link>
          <ul className="space-y-4">
            {menuItems.map(({ name, icon: Icon }) => (
              <li key={name}>
                <Link
                  href={`/admin/${name.toLocaleLowerCase().replace(/\s+/g, '-')}`}
                  className="flex gap-4 items-center px-6 py-3 text-white hover:bg-green-600 hover:text-white font-bold rounded-md transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                  <div>{name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="p-4 bg-green-800 w-full z-50 fixed top-0 left-0 lg:hidden">
        <button onClick={() => setSidebarOpen(true)}>
          {!sidebarOpen ? <Menu className="w-6 h-6 text-green-900" /> : null}
        </button>
      </div>
    </div>
  );
}
