import React from 'react'
import { personIcon, ratingIcon } from '../assets/image'

function Card(props) {
  const { name, banner } = props

  return (
    <div className={`border-2 m-2 rounded-md shadow-md w-[290px] ${!banner ? 'h-[280px]' : 'h-auto'} bg-white`}>
      {/* card image */}
      <img src={banner} className='w-[290px] rounded-t-md' alt="" />
      {/* text card */}
      <div className='p-4'>
        {/* card title */}
        <div className='flex items-center gap-3'>
          <img src={personIcon} className='w-10 h-10 rounded-full shadow-sm' alt="" />
          <div>
            <h1>{name}</h1>
            <img src={ratingIcon} className='w-24 h-5 object-cover' alt="" />
          </div>
        </div>
        <p> I am writing this after reflecting on my one 
            month stay with Bricabin in Ladakh. Right 
            from picking us up at the airport to dropping 
            us back there after a month, Urgan was very
            responsible and took good care of my friends 
            and me. <span className='text-blue-500'>read more</span></p>
      </div>
    </div>
  )
}

export default Card