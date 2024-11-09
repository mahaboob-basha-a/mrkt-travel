import React from 'react'
import Card from './Card'
import { discoverData } from '../assets/cardsData'

function Discover() {
  return (
    <section id='discover' className='flex flex-col justify-center items-center pt-8'>
        <h1 className='text-2xl text-center font-semibold'>Discover</h1>
        {/* cards  */}
        <div className='flex flex-wrap justify-center pt-2'>
          { discoverData.map(item=>{
            const {id, banner, name} = item
            return <Card key={id} banner={banner} name={name} />
          }) }
        </div>
    </section>
  )
}

export default Discover