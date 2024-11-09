import React from 'react'
import { LuMinusCircle } from "react-icons/lu";
import { AiFillPlusCircle } from "react-icons/ai";
import { onRoomCount } from "../controller/slice.js"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Booking = (prop) => {
    const roomCount = useSelector(store => store.travelerInfo.rooms)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { text,handler, counter } = prop
    return (
    <div className='flex flex-col md:flex-row items-center justify-around bg-white rounded-lg p-4 w-[92%] md:h-28 absolute left-[4%] -bottom-32 sm:-bottom-24 lg:-bottom-14 shadow-lg'>
        {/* check in check out container */}
        <div className='flex'>
            {/* check in */}
            <div className='flex flex-col mx-6 xl:mx-14'>
                <p className='text-base text-black font-light'>CHECK-IN</p>
                <p className='text-xs font-semibold'>01 Nov 2024</p>
            </div>
            <hr className='w-[.5px] h-16 bg-gray-300' />
            {/* check out */}
            <div className='flex flex-col mx-6 xl:mx-14'>
                <p className='text-base text-black font-light'>CHECK-OUT</p>
                <p className='text-xs font-semibold'>11 Nov 2024</p>
            </div>
        </div>
        {/* rooms and booking Button */}
        <div className='flex'>
            {/* rooms quantity */}
            <div className='mx-6'>
            <p className='text-base text-black font-normal mb-1'>ROOMS</p>
            {/* room counter */}
                <div className='flex items-center'>
                    {counter && <button className='text-xl' onClick={()=> dispatch(onRoomCount('DEC'))}><LuMinusCircle /></button>}
                    <p className='px-2'>{roomCount}</p>
                    {counter && <button className='text-xl' onClick={()=> dispatch(onRoomCount('INC'))}><AiFillPlusCircle /></button>}
                </div>
            </div>
            {/* book buton */}
            <button onClick={()=> navigate(handler)} className='px-10 ml-4 py-2 rounded-md bg-[#206d99] text-white my-2 font-semibold cursor-pointer'>{text}</button>
        </div>
    </div>
  )
}

export default Booking