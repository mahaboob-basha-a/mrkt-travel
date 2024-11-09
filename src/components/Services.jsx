import React from 'react'
import ServiceCard from './ServiceCard'
import { servicesData } from '../assets/cardsData'

function Services() {
  return (
    <section id='service' className='flex flex-col justify-center items-center pt-8'>
        <h1 className='text-2xl text-center font-semibold'>Services</h1>
        <div className='flex flex-wrap justify-center items-center'>
            {servicesData.map(item=>{
                const {id,title,description,icon} = item
                return (
                    <ServiceCard key={id} title={title} description={description} Icon={icon} />
                )
            })}
        </div>
    </section>
  )
}

export default Services