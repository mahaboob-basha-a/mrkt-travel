import React from 'react'

function Footer() {
  return (
    <footer id='about' className='bg-[#cecece] p-8 mt-4 flex flex-col md:flex-row md:justify-between items-center'>
        <div>
            <h1 className='text-2xl font-semibold'>Brisphere</h1>
            <p>Spituk, Ladakh,</p>
            <p>India, 194101</p>
            <p>+91 - 7764997033</p>
            <p>amit.jha6700@gmail.com</p>
            <button className='px-4 py-2 rounded-md bg-[#206d99] text-white my-2'>Location</button>
        </div>
        <div>
            <p className='text-lg'>Terms and conditions</p>
            <p className='text-lg'>Privacy policy</p>
            <p className='text-lg'>Refunds</p>
        </div>
    </footer>
  )
}

export default Footer