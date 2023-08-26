import React from 'react'
import NextLink from '../NextLink'
import { ServicesI } from '@/app/services/page'
import Divider from '@/components/Divider'

const ServiceCard = ({ element }: { element: ServicesI }) => {
  return (
    // "flex-1 grid grid-cols-1 place-items-center"
    <div className=' px-4 '>
      <div className='p-[2px]  relative group  overflow-hidden cursor-pointer hover:bg-white/90 hover:text-mutedBlack transition-all'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[0px] transition-all  h-full bg-gradient-to-r  opacity-0 '></div>
        <div className='p-10  px-16 relative z-50  pointer-events-none  transition-all flex flex-col justify-between gap-2'>
          <div className='font-bold text-2xl flex items-center justify-between w-full'>
            {element.title}
          </div>
          <div>
            {element.description.substr(0, 250) + ' ... '}
            <span className=' font-bold '>Read More</span>
          </div>
        </div>
      </div>
      {/* <Divider icons={false} /> */}
    </div>
  )
}

export default ServiceCard
