import React from "react";
import Image from "next/image";
// import ProfileImage from "../../assets/images/blank.png";

const Profile = () => {
  return (
    <div className="relative bg-green-900 shadow-xl px-6 py-8 rounded-[32px] flex flex-col md:flex-row items-center justify-between backdrop-blur-lg border border-green-400/30 overflow-hidden">
     
      <div className="absolute inset-0 rounded-[32px] bg-green-900 opacity-20 blur-lg pointer-events-none"></div>

      <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-4 md:mb-0">
        Welcome!
      </h1>

      <div className="relative z-10 flex items-center gap-4">
        <Image
          src=""
          alt="Profile"
          height={60}
          width={60}
          className="rounded-full border-4 border-lime-300 shadow-lg transition-shadow duration-300"
        />

        <div>
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
