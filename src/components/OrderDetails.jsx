import React from 'react'
import Booking from './Booking'
import { useDispatch, useSelector } from 'react-redux'
import { onUserDataChange } from '../controller/slice'

function OrderDetails() {
  const userData = useSelector(store => store.travelerInfo.userData)
  const dispatch = useDispatch()
  const {name,adult,child,mobile,email} = userData
  const onDataChange = e =>{
    e.preventDefault()
    dispatch(onUserDataChange({name:e.target.name,value:e.target.value}))
  }
  return (
    <section className='bg-[#f4f4f4] w-[90vw] ml-[4vw] p-8 relative md:pb-20 mb-36'>
      <form className='p-6 flex flex-col flex-wrap items-center justify-center'>
        {/* top */}
        <div className='flex flex-col md:flex-row gap-2'>
          <input className='w-[280px] h-12 outline-none rounded-md px-2' placeholder='Name' type="text" value={name} onChange={onDataChange} name="name" id="" required />
          <input className='w-[280px] h-12 outline-none rounded-md px-2' type="email" placeholder='Email' value={email} onChange={onDataChange} name="email" required id="" />
        </div>
        {/* bottom */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-2'>
          <input className='w-[280px] h-12 outline-none rounded-md px-2 mt-2' type="text" placeholder='Mobile No' value={mobile} onChange={onDataChange} required name="mobile" id="" />

          {/* adult child info */}
          <div className='flex items-center justify-center gap-2 mt-2'>
            <div className='flex bg-white h-12 w-[120px] items-center justify-center gap-2 rounded-md'>
              <input type="text" value={adult} onChange={onDataChange} className='w-8 h-8 outline-none' name="adult" id="adult" />
              <label htmlFor='adult'>Adult</label>
            </div>

            <div className='flex bg-white h-12 w-[120px] rounded-md items-center justify-center'>
              <input type="text" value={child} onChange={onDataChange} className='w-8 h-8 outline-none' name="child" id="child" />
              <label htmlFor='child'>Children</label>
            </div>
          </div>
        </div>
      </form>
      <Booking text='₹ 12,430' handler={name && adult && child && mobile && email ? '/orderinfo' : '/orderdetails' } counter={true} />
    </section>
  )
}

export default OrderDetails