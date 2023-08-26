import React from 'react'
import NextLink from '../NextLink'
import { ServicesI } from '@/app/services/page'

const ServiceCard = ({ element }: { element: ServicesI }) => {
  return (
    // "flex-1 grid grid-cols-1 place-items-center"
    <div className=' px-4 '>
      <div className='p-[2px]  relative group rounded-[50px] overflow-hidden cursor-pointer'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[0px] transition-all group-hover:w-full h-full bg-gradient-to-r from-accent/50 via-accent/10 to-accent/50 opacity-0 group-hover:opacity-70'></div>
        <div className='p-12 border border-white/5 px-16 relative z-50 bg-mutedBlack pointer-events-none rounded-[3rem] transition-all flex flex-col justify-start gap-2'>
          <div className='font-bold text-2xl flex items-center justify-between w-full'>
            {element.title}
            <NextLink
              label='View More'
              path=''
            />
          </div>
          <div>{element.description}</div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
