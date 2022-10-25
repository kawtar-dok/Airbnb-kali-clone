import React from 'react'
import Image from 'next/image'


function MediumCard({img, title}) {
  return (
    <div className='cursor-pointer hover:scale-105 transition 
    transform duration-300 ease-out'>
      <div className='relative h-72 w-72 md:h-80 md:w-80'>
       <Image
        src={img}
        layout='fill'
        className='rounded-xl'
       />
      </div>
        <h3 className='text-xl mt-3 md:text-2xl tracking-[1px]'>
           {title}
        </h3>
    </div>
  )
}

export default MediumCard
