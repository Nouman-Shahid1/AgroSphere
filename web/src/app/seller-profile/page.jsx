import Profile from '@/src/Components/Profile/Profile'
import SellerProfileCard from '@/src/Components/SellerProfileCard/SellerProfileCard'
import Services from "../../assets/images/services.png";
import Amenities from "../../assets/images/amenities.png";
import React from 'react'

const page = () => {
    const menuItems = [
        "HOME",
        "PESTICIDES",
        "SEEDS",
        "FERTILIZERS",
        "MACHINES",
        "RENTAL MACHINES",
      ];
  return (
  
    <>
    <div className='min-h-screen'>
        <div className='p-6'>
        <Profile/>
        </div>

        <div className="md:px-0 max-w-screen-2xl">
        <div className="flex flex-wrap md:w-full mt-2 md:mt-8 px-6 space-y-2">
          <SellerProfileCard
            details={{
              name: "ALL PRODUCTS",
              url: "",
            }}
          />
           <SellerProfileCard
            details={{
              name: "PESTICIDES",
              src:Amenities ,
            }}
          />
           <SellerProfileCard
            details={{
              name: "SEEDS",
              src:Amenities ,
            }}
          />
           <SellerProfileCard
            details={{
              name: "FERTILIZERS",
              src:Amenities ,
            }}
          />
          <SellerProfileCard
            details={{
              name: "MACHINES",
              src:Amenities ,
            }}
          />
          <SellerProfileCard
            details={{
              name: "RENTAL MACHINES",
              src:Amenities ,
            }}
          />
          <SellerProfileCard
            details={{
              name: "Settings",
              src:Amenities ,
            }}
          />
          </div>
          </div>
    </div>
    </>
  )
}

export default page