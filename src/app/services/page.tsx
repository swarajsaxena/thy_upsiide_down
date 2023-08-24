import Divider from '@/components/Divider'
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
    <div className='flex-1 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4'>
      {services.map((ser, index) => {
        return (
          <div className='relative flex flex-col border border-mutedWhite/10 justify-between rounded-lg overflow-hidden'>
            <div className='relative z-10 p-4 bg-black/80 h-full flex flex-col justify-start items-stretch gap-2 backdrop-blur-sm'>
              <div className='text-4xl font-bold normal-case '>{ser}</div>
              <Divider />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto aspernatur minus quod minima soluta explicabo nemo ex
                nobis hic! Provident aut possimus molestias tempore! Tempora,
                dolores maiores. Quidem ipsam expedita assumenda soluta
                voluptate quia voluptatibus doloremque dicta ad, libero, quam
                dolores nesciunt in fuga asperiores, debitis consequatur
                molestiae aspernatur tempora.
              </div>
            </div>
            <Image
              src={'/upsiidedown.png'}
              alt='upsiidedown'
              fill
              className='object-cover rotate-180 scale-110'
            />
          </div>
        )
      })}
    </div>
  )
}

export default page
