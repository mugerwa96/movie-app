import React from 'react'

const Layout = ({title,children}) => {
  return (
         <main className='space-y-4 p-3'>
        <p className='font-bold text-xl md:text-3xl'>{title}</p>
        <div>
          {children}
        </div>

      </main>
 
  )
}

export default Layout