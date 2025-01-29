'use client';



import Navbar from "../Components/Navbar/Navbar";

export default function Page() {
  return (
    <div 
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: 'url(https://www.thpsc.com/wp-content/uploads/2022/01/AgricultureOfPak.jpg)' }}
    >
      <div className="bg-black bg-opacity-50 backdrop-blur-md h-full">
        <Navbar />
        <main className="text-center mt-10">
          <h1 className="text-8xl text-green-400 font-bold pt-11">Welcome to AgroSphere</h1>
          <p className="text-3xl mt-4 text-white pt-5">
            Explore the best agricultural solutions for your needs.
          </p>
          
        
        </main>
      </div>
    </div>
  );
}

