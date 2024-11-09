import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  return (
    <>
        <header className='flex items-center justify-between py-6 px-4 sm:py-10 sm:px-14'>
            <h1 onClick={()=> navigate('/')} className='cursor-pointer font-semibold text-2xl'>Brisphere</h1>
            <div className='flex sm:gap-8 gap-4'>
                <a href='#discover' className='hover:text-blue-500 font-normal text-slate-600 cursor-pointer'>Discover</a>
                <a href='#service' className='hover:text-blue-500 font-normal text-slate-600 cursor-pointer'>Services</a>
                <a href='#about' className='hover:text-blue-500 font-normal text-slate-600 cursor-pointer'>About Us</a>
            </div>
        </header>
    </>
  )
}

export default Header