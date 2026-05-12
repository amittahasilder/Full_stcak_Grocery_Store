import { Button } from '@mui/material';
import React from 'react'
import { IoSearchOutline } from "react-icons/io5";


const Search = () => {
  return (
    <div className='search bg-[#E6E6E6] w-[600px] h-[50px] rounded-md px-3'>
      <input
        type="text"
        placeholder="Search here..."
        className='w-full h-full bg-transparent outline-none'
      />
     <button className='w-8 h-8 rounded-full bg-gray-300'>
         <IoSearchOutline size={30} className='absolute top-6 right-12 z-50' />
     </button>
          
    
    </div>
  )
}

export default Search