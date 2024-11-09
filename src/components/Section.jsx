import React from 'react'
import { facebookLogo, Img1, instagramIcon } from '../assets/image'
import Booking from './Booking'

function Section() {
  return (
    <>
    <section className='bg-[#f7f7f7] mx-8 mb-32 sm:h-96 relative md:mb-16'>
        {/* left side */}
        <div className='flex sm:flex-row flex-col-reverse items-center justify-between'>
        <div className='p-10 sm:p-0 sm:pl-24 flex flex-col gap-6'>
            <h1 className='text-4xl md:text-6xl'>Work from <br />
            ladakh</h1>
            <p className='text-lg'>India’s first true digital tourism ecosystem</p>
            {/* social icons */}
            <div className='flex items-center gap-3'>
              <img src={facebookLogo} width={30} alt="facebook" />
              <img src={instagramIcon} width={30} alt="instagram" />
            </div>
        </div>
        {/* right side */}
            <img src={Img1} className='w-[100%] sm:w-[40%] sm:h-96' alt="" />
        </div>
        <Booking text='BOOK' handler='/orderdetails' counter={true} />
    </section>
    </>
  )
}

export default Section