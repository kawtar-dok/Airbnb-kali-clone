import React from 'react'
import Image from 'next/image'
function Banner() {
  return (//xl:h-[50px] 2xl:h-[60px]
    <div className='relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] 
    dark:text-gray-900'>
    
      <Image
        src="https://links.papareact.com/0fm"
        layout='fill'
        objectFit='cover'
      />
      
     
      <div className='absolute top-0 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] 
    dark:text-gray-900
     
      dark:bg-gradient-radial to-black from-transparent'
      >
      {/*  dark:bg-gradient-to-t from-black via-transparent to-black*/}
      <div className='relative top-1/2 text-center '>
         <p className='text-sm sm:text-lg '>
            Not sure where to go? Perfect.
         </p>
         <button className='text-purple-500 bg-white dark:bg-gray-200/80 px-4 py-2 sm:px-10 sm:py-4 shadow-md rounded-full 
         font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150
         '>
            I'm flexible
         </button>
         </div>
      </div>
    </div>
  )
}

export default Banner
