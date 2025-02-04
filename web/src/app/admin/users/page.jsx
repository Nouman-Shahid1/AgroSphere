import Profile from "@/src/Components/Profile/Profile";
import UserTable from "@/src/Components/UserTable/UserTable";
import React from "react";

const Users = () => {
  return (
    <div className="p-2 md:p-8 min-h-screen">
     <Profile/>
      <div className="z-50">
    <UserTable/>
      </div>
    </div>
  );
};

export default Users;
