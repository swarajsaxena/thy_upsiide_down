'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import NextLink from '../NextLink'

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className='flex flex-col flex-1 gap-2 md:px-4 rounded-lg h-max'
    >
      <div className='mb-2 text-xl flex justify-between items-end w-full '>
        <div className='font-bold opacity-50 uppercase'>Projects</div>
        <NextLink
          path='/projects'
          label='More'
        />
      </div>
      <div className='relative grid w-full h-full grid-cols-2 gap-3'>
        {/* <div className='absolute top-0 left-0 z-20 flex items-center justify-center w-full h-full text-xl transition-all rounded-md opacity-0 font-jetBrain hover:bg-black/70 hover:backdrop-blur-sm hover:opacity-100'>
          See All Projects
        </div> */}
        <div className='grid grid-rows-2 gap-3 min-h-[200px]'>
          <div className='relative overflow-hidden rounded-md'>
            <Image
              className='object-cover transition-all saturate-0 hover:saturate-100'
              src={'/projects/bbb.webp'}
              alt=''
              fill
            />
          </div>
          <div className='relative overflow-hidden rounded-md'>
            <Image
              className='object-cover transition-all saturate-0 hover:saturate-100'
              src={'/projects/sri.webp'}
              alt=''
              fill
            />
          </div>
        </div>
        <div className='relative overflow-hidden rounded-md'>
          <Image
            className='object-cover transition-all saturate-0 hover:saturate-100'
            src={'/projects/utility.webp'}
            alt=''
            fill
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
