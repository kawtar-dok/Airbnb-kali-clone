import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 
    px-32 py-14 bg-gray-100 text-gray-600'>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>COMMUNITY</h5>
        <p>How Airbnb works</p>
        <p>This is not a real site</p>
        <p>its a kali's clone</p>
        <p>Hunderds of Students</p>
        <p>kali</p>
      </div>

       <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>HOST</h5>
        <p>kawtar itou</p>
        <p>Presents</p>
        <p>Kali's Airbnb Clone</p>
        <p>Hunderds of Students</p>
        <p>Join Now</p>
      </div>

       <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Say Hi Youtube</p>
        <p>Easter Eggs</p>
        <p>For the Win</p>
      </div>

      <div></div>
    </div>
  )
}

export default Footer
