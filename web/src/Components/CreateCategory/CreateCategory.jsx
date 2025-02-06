"use client";
import { useState } from "react";

const CreateCategory = ({ showAddCategory, setShowAddCategory }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300 ${
        showAddCategory ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <form className="relative max-w-4xl w-[600px] bg-gradient-to-br from-green-900 via-emerald-800 to-green-700 text-white rounded-3xl shadow-2xl p-8 space-y-6 animate-fade-in">

        <button
          type="button"
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors"
          onClick={() => setShowAddCategory(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-3xl font-bold text-center text-green-300">
          Add Category
        </h2>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-green-200">
            Category Name
          </label>
          <input
            type="text"
            placeholder="Enter category name"
            className="w-full p-3 bg-white bg-opacity-10 text-white placeholder-green-200 rounded-lg border border-green-500 outline-none focus:ring-2 focus:ring-green-400 focus:bg-opacity-20 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-green-200">
            Type
          </label>
          <select className="w-full p-3 bg-white bg-opacity-10 text-white rounded-lg border border-green-500 outline-none focus:ring-2 focus:ring-green-400 focus:bg-opacity-20 transition-all">
            <option className="bg-green-800" value="">
              Select type
            </option>
            <option className="bg-green-800" value="machines">
              Machines
            </option>
            <option className="bg-green-800" value="crops">
              Crops
            </option>
            <option className="bg-green-800" value="seeds">
              Seeds
            </option>
            <option className="bg-green-800" value="pesticides">
              Pesticides
            </option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-green-200">
            Category Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="w-full p-3 bg-white bg-opacity-10 text-white rounded-lg border border-green-500 outline-none focus:ring-2 focus:ring-green-400 focus:bg-opacity-20 transition-all"
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="px-8 py-3 text-lg font-bold text-white rounded-lg bg-gradient-to-r from-green-500 to-green-700 shadow-lg hover:shadow-xl hover:from-green-600 hover:to-green-800 focus:ring-4 focus:ring-green-500 transition-all"
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
