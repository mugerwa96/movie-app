
import React from 'react'

const Footer = () => {
    const currentYear=new Date().getFullYear();
 
  return (
    <div className='bg-primary fixed bottom-0 w-full text-white p-2 text-center text-xs md:text-sm'>
            <p>Yo one Movie center </p>
            <small>{currentYear}</small>
            
    </div>
  )
}

export default Footer