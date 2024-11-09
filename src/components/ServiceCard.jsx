import React from 'react'
import { FaWifi } from "react-icons/fa";

function ServiceCard(props) {
  const {title,description,Icon} = props
  return (
    <div className='hover:scale-[1.04] transition-all duration-700 m-3 w-[220px] h-[260px] border-2 rounded-md shadow-md p-4 flex flex-col justify-center items-center'>
        <span className='text-slate-400 text-7xl'><Icon /></span>
        <h1 className='font-semibold text-base'>{title}</h1>
        <p className='text-sm'>{description}</p>
    </div>
  )
}

export default ServiceCard