import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header>
      <div className='container flex items-center justify-between'>
        <div className='logo'>
          <Image
            src="/logo1.png"
            width={243}
            height={73}
            alt="Logo"
          />
        </div>
      </div>
    </header>
  )
}

export default Header