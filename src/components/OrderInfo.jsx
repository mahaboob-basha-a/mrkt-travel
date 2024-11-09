import React from 'react'
import Booking from './Booking'
import { useSelector } from 'react-redux'
import { checkIcon } from '../assets/image'

function OrderInfo() {
  const userData = useSelector(store => store.travelerInfo.userData)
  const {name,adult,child,mobile,email} = userData
  return (
    <section className='bg-[#f4f4f4] w-[90vw] ml-[4vw] p-8 relative md:pb-20 mb-36'>
      <div className='flex flex-col justify-between items-center gap-6 sm:flex-row'>
        {/* left */}
        <div className='flex flex-col items-center justify-center m-2'>
          <h1 className='text-2xl font-semibold'>{name}</h1>
          <p>{mobile}</p>
          <p>Spituk, Ladakh,</p>
          <p>{email}</p>
          <p>{adult} Adults and {child} Children</p>
        </div>
        {/* right */}
        <div className='flex items-center justify-center gap-4 m-2'>
          <img src={checkIcon} width={50} alt="" />
          <div>
          <h1 className='text-2xl font-semibold'>Order Complete</h1>
          <p>have questions?</p>
          <p className='text-blue-400'>contact us</p>
          </div>
        </div>
      </div>
      <Booking text='₹ 12,430' handler={'/orderinfo'} counter={false} />
    </section>
  )
}

export default OrderInfo