import React from 'react'

const Search = () => {
  return (
    <div className='search bg-[#E6E6E6] w-[600px] h-[50px] rounded-md px-3'>
      <input
        type="text"
        placeholder="Search here..."
        className='w-full h-full bg-transparent outline-none'
      />
    </div>
  )
}

export default Search