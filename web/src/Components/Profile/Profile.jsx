import React from "react";
import Image from "next/image";
// import ProfileImage from "../../assets/images/blank.png";

const Profile = () => {
  return (
    <div className="relative bg-gradient-to-br from-green-900 via-emerald-700 to-lime-500 shadow-xl px-6 py-8 rounded-[32px] flex flex-col md:flex-row items-center justify-between backdrop-blur-lg border border-green-400/30 overflow-hidden">
      {/* Glow Border */}
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-lime-400 via-green-500 to-emerald-500 opacity-20 blur-lg pointer-events-none"></div>

      {/* Welcome Text */}
      <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-4 md:mb-0">
        Welcome!
      </h1>

      {/* Profile Section */}
      <div className="relative z-10 flex items-center gap-4">
        {/* Profile Image */}
        <Image
          src=""
          alt="Profile"
          height={60}
          width={60}
          className="rounded-full border-4 border-lime-300 shadow-lg transition-shadow duration-300"
        />

        <div>
          {/* User Name */}
          <div className="flex items-center gap-3">
            <span className="text-base font-medium text-white">
              Username
            </span>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Profile;
