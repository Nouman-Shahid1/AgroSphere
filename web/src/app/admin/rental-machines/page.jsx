import Profile from '@/src/Components/Profile/Profile'
import RentalTable from '@/src/Components/RentalsTable/RentalsTable'
import React from 'react'


const page = () => {
  return (
    <div
    className="relative h-screen overflow-auto p-4 md:px-8 lg:px-6 xl:px-8 2xl:px-12 py-4 md:py-5 lg:py-7 xl:py-10 2xl:py-12"
  
  >
    <div className="relative z-10">
     <Profile/>
      <RentalTable/>
  </div>
  </div>
  )
}

export default page