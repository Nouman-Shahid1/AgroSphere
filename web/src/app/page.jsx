'use client';

import Navbar from "../Components/Navbar/Navbar";
export default function Page() {
  return (
    <div>
      <Navbar/>
      <main>
        <h1 className="text-center mt-10 text-2xl text-green-600">Welcome to AgroSphere</h1>
        <p className="text-center text-lg mt-4">
          Explore the best agricultural solutions for your needs.
        </p>
      </main>
    </div>
  );
}
