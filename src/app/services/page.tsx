import Divider from '@/components/Divider'
import NextLink from '@/components/NextLink'
import Image from 'next/image'
import React from 'react'

const page = () => {
  const services = [
    'Business Website',
    'Blog/News Website',
    'E-Commerse Website',
    'Digital Wedding Gallery',
    'E-Commerse Website',
    'Blog/News Website',
  ]
  return (
    <div className='flex-1 grid grid-cols-1 place-items-center px-4 '>
      <div className='p-[2px] max-w-[50%] relative group rounded-full overflow-hidden cursor-pointer'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[0px] transition-all group-hover:w-full h-full bg-gradient-to-r from-accent/50 via-accent/10 to-accent/50 opacity-0 group-hover:opacity-70'></div>
        <div className='p-12 px-16 relative z-50 bg-mutedBlack pointer-events-none rounded-full transition-all flex flex-col justify-start gap-2'>
          <div className='font-bold text-2xl flex items-center justify-between w-full'>
            Services
            <NextLink
              label='View More'
              path=''
            />
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            explicabo ea, natus facilis dolorem harum! Quisquam illum voluptatem
            praesentium mollitia ad provident corrupti sequi inventore alias
            optio at, obcaecati quia, nesciunt, animi autem culpa commodi
            voluptates. Aut quas assumenda in deserunt corporis, harum autem,
            illum culpa esse hic nam sequi!
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
