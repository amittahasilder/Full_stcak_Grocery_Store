import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Search from './Search'

const Header = () => {
  return (
    <header>
      <div className='container flex items-center justify-between'>
        <div className='logo'>
            <Link href={"/"}>
            <Image
            src="/logo1.png"
            width={233}
            height={63}
            alt="Logo"
          />
            </Link>
          
        </div>
       
       <Search/>

      </div>
    </header>
  )
}

export default Header