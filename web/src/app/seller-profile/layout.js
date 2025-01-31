"use client";
import Sidebar from "../../Components/Sidebar/Sidebar";

export default function RootLayout({ children }) {
  return (
    <div>
      <Sidebar  />
      <div className="overflow-hidden rounded-lg  shadow-md lg:ml-[260px]">
        {children}
      </div>
    </div>
  );
}
