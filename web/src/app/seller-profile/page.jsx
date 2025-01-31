import Profile from '@/src/Components/Profile/Profile'
import SellerProfileCard from '@/src/Components/SellerProfileCard/SellerProfileCard'
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
              url: "/seller-profile/",
            }}
          />
           <SellerProfileCard
            details={{
              name: "PESTICIDES",
              url: "/seller-profile/",
            }}
          />
           <SellerProfileCard
            details={{
              name: "SEEDS",
              url: "/seller-profile/",
            }}
          />
           <SellerProfileCard
            details={{
              name: "FERTILIZERS",
              url: "/seller-profile/",
            }}
          />
          <SellerProfileCard
            details={{
              name: "MACHINES",
              url: "/seller-profile/",
            }}
          />
          <SellerProfileCard
            details={{
              name: "RENTAL MACHINES",
              url: "/seller-profile/",
            }}
          />
          <SellerProfileCard
            details={{
              name: "Settings",
              url: "/seller-profile/",
            }}
          />
          </div>
          </div>
    </div>
    </>
  )
}

export default page