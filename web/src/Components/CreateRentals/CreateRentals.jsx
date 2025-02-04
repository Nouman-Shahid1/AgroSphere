"use client";
import { FaTimes } from "react-icons/fa";

const CreateRental = ({ showAddRental, setShowAddRental }) => {
  const handleClose = () => {
    setShowAddRental(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300 ${
        showAddRental ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <form
        className="relative max-w-4xl w-[600px] bg-gradient-to-br from-green-900 via-emerald-800 to-green-700 text-white rounded-3xl shadow-2xl p-8 space-y-6 animate-fade-in"
        onSubmit={handleSubmit}
      >
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors"
          onClick={handleClose}
        >
          <FaTimes className="h-6 w-6" />
        </button>

        <h2 className="text-3xl font-bold text-center text-green-300">
          Add Rental Machine
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-green-200">
              Machine Name
            </label>
            <input
              type="text"
              name="machineName"
              placeholder="Enter machine name"
              className="w-full p-3 bg-white bg-opacity-10 text-white placeholder-green-200 rounded-lg border border-green-500 outline-none focus:ring-2 focus:ring-green-400 focus:bg-opacity-20 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-green-200">
              Rental Price
            </label>
            <input
              type="number"
              name="rentalPrice"
              placeholder="Enter price per hour/day"
              className="w-full p-3 bg-white bg-opacity-10 text-white placeholder-green-200 rounded-lg border border-green-500 outline-none focus:ring-2 focus:ring-green-400 focus:bg-opacity-20 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-green-200">
              Availability
            </label>
            <input
              type="text"
              name="availability"
              placeholder="e.g., Mon-Fri, 9 AM - 5 PM"
              className="w-full p-3 bg-white bg-opacity-10 text-white placeholder-green-200 rounded-lg border border-green-500 outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-opacity-20 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-green-200">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter rental location"
              className="w-full p-3 bg-white bg-opacity-10 text-white placeholder-green-200 rounded-lg border border-green-500 outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-opacity-20 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-green-200">
              Category
            </label>
            <select
              name="category"
              className="w-full p-3 bg-white bg-opacity-10 text-white rounded-lg border border-green-500 outline-none focus:ring-2 focus:ring-blue-400 focus:bg-opacity-20 transition-all"
            >
              <option className="bg-green-800" value="">
                Select category
              </option>
              <option className="bg-green-800" value="agriculture">
                Agriculture
              </option>
              <option className="bg-green-800" value="construction">
                Construction
              </option>
              <option className="bg-green-800" value="industrial">
                Industrial
              </option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-green-200">
              Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full p-3 bg-white bg-opacity-10 text-white placeholder-green-200 rounded-lg border border-green-500 outline-none focus:ring-2 focus:ring-pink-400 focus:bg-opacity-20 transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-green-200">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Enter machine description"
            rows="3"
            className="w-full p-3 bg-white bg-opacity-10 text-white placeholder-green-200 rounded-lg border border-green-500 outline-none focus:ring-2 focus:ring-blue-400 focus:bg-opacity-20 transition-all"
          ></textarea>
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="px-8 py-3 text-lg font-bold text-white rounded-lg bg-gradient-to-r from-green-500 to-green-700 shadow-lg hover:shadow-xl hover:from-green-600 hover:to-green-800 focus:ring-4 focus:ring-green-500 transition-all"
          >
            Add Machine
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRental;
