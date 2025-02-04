"use client";

import AdminSidebar from "@/src/Components/AdminSidebar/AdminSidebar";

export default function RootLayout({ children }) {
  return (
    <div>
      <AdminSidebar/>
      <div className="overflow-hidden rounded-lg  shadow-md lg:ml-[260px]">
        {children}
      </div>
    </div>
  );
}
