import React from 'react'
import './Carasoul.css'
const InfiniteCarasoul = () => {
  const images = [
    'Customized Design',
    'Mobile Responsiveness',
    'User-Friendly',
    'Content Management',
    'SEO',
    'Security',
    'Analytics and Reporting',
  ]
  const imgs = images.map((img, index) => (
    <div
      className=' mx-4 md:mx-6 text-3xl '
      key={index}
    >
      {img}
    </div>
  ))
  return (
    <div className='flex flex-col items-center justify-center gap-10 py-5  '>
      <div className=' overflow-hidden logo-main relative w-[97%]  '>
        <div className='flex flex-row overflow-hidden w-max '>
          <div className='flex text-white logo-slide'>{imgs}</div>
          <div className='flex text-white logo-slide'>{imgs}</div>
          <div className='flex text-white logo-slide'>{imgs}</div>
          <div className='flex text-white logo-slide'>{imgs}</div>
          <div className='flex text-white logo-slide'>{imgs}</div>
        </div>
      </div>
    </div>
  )
}

export default InfiniteCarasoul
