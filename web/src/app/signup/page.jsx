"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Name:", name, "Email:", email, "Password:", password);
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-green-100"
      style={{
        backgroundImage: "url('/farm-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg backdrop-blur-md bg-opacity-80">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-800">
          🌿Signup
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-green-800 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-800 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-800 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-800 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Sign Up
          </button>
          <div className="text-center mt-4">
            <p className="text-sm text-green-800">Already have an account?</p>
            <button
              onClick={() => router.push("/login")}
              className="mt-2 text-green-700 font-bold hover:underline"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
