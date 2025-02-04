"use client";
import React, { useState, useEffect } from "react";

const CreateUser = ({ showModal, setShowModal, user }) => {
  const [role, setRole] = useState(user?.role || "Buyer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      setRole(user.role || "Buyer");
    } else {
      setRole("Buyer");
      setEmail("");
      setPassword("");
    }
  }, [user]);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300 ${
        showModal ? "opacity-100 visible" : "opacity-0 invisible"
      } z-50`}
      aria-live="assertive"
    >
      <div className="relative max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 space-y-6 animate-fade-in">
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={() => setShowModal(false)}
        >
          X
        </button>

        <h2 className="text-2xl font-bold text-center">
          {user ? "Update User Role" : "Create New User"}
        </h2>

        {!user && (
          <div className="space-y-2">
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
        )}

        {!user && (
          <div className="space-y-2">
            <label className="block text-sm font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
        )}

        <div className="space-y-2">
          <label className="block text-sm font-semibold">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 bg-gray-100 rounded-lg text-black border border-gray-300 outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            <option className="bg-green-800" value="Buyer">Buyer</option>
            <option className="bg-green-800" value="Seller">Seller</option>
            <option className="bg-green-800" value="Admin">Admin</option>
          </select>
        </div>

        <div className="text-right">
          <button
            type="button"
            className="px-6 py-3 text-lg font-bold text-white rounded-lg bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-500 transition-all"
            onClick={() => setShowModal(false)}
          >
            {user ? "Update Role" : "Create User"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
