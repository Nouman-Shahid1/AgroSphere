"use client";
import React, { useState } from "react";
import { CiSearch, CiEdit } from "react-icons/ci";
import { FaTrash, FaPlusCircle } from "react-icons/fa";
import CreateProduct from "../CreateProduct/CreateProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

const ProductTable = ({ name }) => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddProduct = () => setShowAddProduct(true);
  const handleDelete = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  // 10 dummy product data
  const products = [
    { id: 1, icon: "/blank.png", title: "Product 1", description: "Description of Product 1", category: "Category A" },
    { id: 2, icon: "/blank.png", title: "Product 2", description: "Description of Product 2", category: "Category B" },
    { id: 3, icon: "/blank.png", title: "Product 3", description: "Description of Product 3", category: "Category C" },
    { id: 4, icon: "/blank.png", title: "Product 4", description: "Description of Product 4", category: "Category D" },
    { id: 5, icon: "/blank.png", title: "Product 5", description: "Description of Product 5", category: "Category E" },
    { id: 6, icon: "/blank.png", title: "Product 6", description: "Description of Product 6", category: "Category F" },
    { id: 7, icon: "/blank.png", title: "Product 7", description: "Description of Product 7", category: "Category G" },
    { id: 8, icon: "/blank.png", title: "Product 8", description: "Description of Product 8", category: "Category H" },
    { id: 9, icon: "/blank.png", title: "Product 9", description: "Description of Product 9", category: "Category I" },
    { id: 10, icon: "/blank.png", title: "Product 10", description: "Description of Product 10", category: "Category J" },
  ];

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="mb-8 flex flex-col lg:flex-row items-center justify-between px-8 py-10 bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
        <div>
          <h3 className="text-4xl font-bold">{name} List</h3>
          <p className="text-sm mt-2 opacity-90">Manage all your {name} here.</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mt-6 md:mt-0">
          <button
            className="py-3 px-6 bg-white text-teal-700 rounded-xl shadow-lg hover:bg-teal-50 hover:text-teal-800 transition duration-300 flex items-center space-x-3"
            onClick={handleAddProduct}
            aria-label="Add new product"
          >
            <FaPlusCircle className="text-xl" />
            <span className="font-medium">Add New Product</span>
          </button>

          {/* Search Input */}
          <div className="flex items-center mt-6 md:mt-0">
            <input
              type="text"
              placeholder={`Search ${name}`}
              className="w-[200px] md:w-[300px] px-5 py-3 text-black border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-r-xl transition duration-300"
              aria-label="Search products"
            >
              <CiSearch size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-gradient-to-r from-green-700 via-green-800 to-green-900 shadow-2xl rounded-3xl overflow-hidden">
        <table className="min-w-full text-sm">
          {/* Header */}
          <thead className="bg-gradient-to-r from-green-700 to-green-800 text-white">
            <tr>
              <th className="py-5 px-8 text-center font-semibold">Icon</th>
              <th className="py-5 px-8 text-left font-semibold">Title</th>
              <th className="py-5 px-8 text-left font-semibold">Description</th>
              <th className="py-5 px-8 text-left font-semibold">Category</th>
              <th className="py-5 px-8 text-center font-semibold">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {filteredProducts && filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <tr
                  key={product.id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-teal-50 transition duration-300`}
                >
                  {/* Icon */}
                  <td className="py-5 px-8 text-center">
                    <img
                      src={product.icon || "/blank.png"}
                      alt="icon"
                      className="w-12 h-12 mx-auto rounded-full shadow-md"
                    />
                  </td>

                  {/* Title */}
                  <td className="py-5 px-8 font-medium text-gray-900">
                    {product.title}
                  </td>

                  {/* Description */}
                  <td className="py-5 px-8 text-gray-700">
                    {product.description}
                  </td>

                  {/* Category */}
                  <td className="py-5 px-8 text-gray-700">{product.category}</td>

                  {/* Actions */}
                  <td className="py-5 px-8 text-center">
                    <div className="flex justify-center items-center gap-6">
                      {/* Edit Button */}
                      <button
                        className="bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-teal-600 hover:shadow-xl transition duration-300"
                        onClick={handleAddProduct}
                        aria-label="Edit product"
                      >
                        <CiEdit size={18} />
                      </button>

                      {/* Delete Button */}
                      <button
                        className="bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 hover:shadow-xl transition duration-300"
                        onClick={() => handleDelete(product)}
                        aria-label="Delete product"
                      >
                        <FaTrash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-5 px-8 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      <CreateProduct
        showAddProduct={showAddProduct}
        setShowAddProduct={setShowAddProduct}
      />
      <DeleteProduct
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        product={selectedProduct}
      />
    </div>
  );
};

export default ProductTable;
