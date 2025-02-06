"use client";
import React, { useState } from "react";
import { CiSearch, CiEdit } from "react-icons/ci";
import { FaTrash, FaEye, FaEyeSlash, FaPlusCircle } from "react-icons/fa";
import CreateUser from "../CreateUser/CreateUser";
import DeleteModal from "../DeleteProduct/DeleteProduct";


const UserTable = () => {
  // Sample local users data
  const initialUsers = [
    { ID: 1, Email: "john@example.com", Username: "JohnDoe", Role: "Admin", Password: "password123" },
    { ID: 2, Email: "jane@example.com", Username: "JaneDoe", Role: "User", Password: "securepass" },
    { ID: 3, Email: "mike@example.com", Username: "MikeSmith", Role: "Editor", Password: "mikepass" },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // 'create' or 'update'
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const filteredUsers = users.filter((user) =>
    user.Username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddUser = () => {
    setModalType("create");
    setSelectedUser(null);
    setShowModal(true);
  };

  const handleEditUser = (user) => {
    setModalType("update");
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleDeleteUser = (ID) => {
    setUserIdToDelete(ID);
    setShowDeleteModal(true);
  };

  return (
    <div className="p-6 z-50">
      <div className="mb-6 flex flex-col lg:flex-row items-center justify-between px-6 py-8 bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white   text-white rounded-3xl shadow-lg">
        <div>
          <h3 className="text-3xl font-bold">User List</h3>
          <p className="text-sm">Manage all your users here.</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <button
            className="py-2 px-4 bg-white text-green-600 rounded-lg shadow-md hover:bg-green-100 transition duration-150 flex items-center space-x-2"
            onClick={handleAddUser}
          >
            <FaPlusCircle />
            <span>Add User</span>
          </button>

          {/* Search Input */}
          <div className="flex items-center mt-3 md:mt-0">
            <input
              type="text"
              placeholder="Search User"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[200px] md:w-[250px] px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-lg">
              <CiSearch size={22} />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-3xl">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white  text-gray-600">
              <th className="py-3 px-4 text-center">ID</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Username</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Password</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={user.ID || index} className="border-b hover:bg-green-50">
                  <td className="py-4 px-4 text-center">{user.ID}</td>
                  <td className="py-4 px-4 font-medium text-gray-700">{user.Email}</td>
                  <td className="py-4 px-4 font-medium text-gray-700">{user.Username}</td>
                  <td className="py-4 px-4 font-medium text-gray-700">{user.Role}</td>
                  <td className="py-4 px-4 font-medium text-gray-700">
                    <div className="flex items-center">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={user.Password || ""}
                        className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                        readOnly
                      />
                      <button
                        onClick={() => setShowPassword((prevState) => !prevState)}
                        className="ml-2 text-gray-600 hover:text-gray-800"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex justify-center gap-3">
                      <button
                        className="p-2 rounded-full bg-green-300 text-white hover:bg-blue-300 transition duration-150"
                        onClick={() => handleEditUser(user)}
                      >
                        <CiEdit size={20} />
                      </button>
                      <button
                        className="p-2 rounded-full bg-red-200 text-red-600 hover:bg-red-300 transition duration-150"
                        onClick={() => handleDeleteUser(user.ID)}
                      >
                        <FaTrash size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {showModal && (
          <CreateUser
            showModal={showModal}
            setShowModal={setShowModal}
            modalType={modalType}
            user={selectedUser}
          />
        )}
        {showDeleteModal && (
         <DeleteModal
         showDeleteModal={showDeleteModal}
         setShowDeleteModal={setShowDeleteModal}
         />
        )}
      </div>
    </div>
  );
};

export default UserTable;
