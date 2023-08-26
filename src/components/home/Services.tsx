'use client'

import React from 'react'
import Divider from '../Divider'
import { motion } from 'framer-motion'
import { FiChevronRight } from 'react-icons/fi'
import Link from 'next/link'
import NextLink from '../NextLink'

const Services = () => {
  const services = [
    'BUSINESS WEBSITE',
    'BLOG/NEWS WEBSITE',
    'E-COMMERCE WEBSITE',
    'Digital Wedding Gallery',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className='relative flex flex-col justify-between flex-1 gap-2 md:px-4 overflow-hidden '
    >
      <div className='mb-2 text-xl flex justify-between items-end w-full '>
        <div className='font-bold opacity-50 uppercase'>Our Services</div>
        <NextLink
          path='/services'
          label='more'
        />
      </div>
      <span className='absolute bottom-0 h-20 w-full right-0 text-sm text-mutedWhite bg-gradient-to-t from-mutedBlack to-transparent to px-2 py-[0.25rem] flex items-center gap-2 z-10' />
      <div className='flex flex-col justify-between flex-1 gap-2 overflow-y-scroll text-xl font-bold font-jetBrain scrollbar-none'>
        {services.map((ser, index) => (
          <React.Fragment key={index}>
            <div className='flex gap-2 items-center uppercase'>
              <FiChevronRight className='text-accent' />
              <span>{ser}</span>
            </div>
            {index < services.length - 1 && <Divider icons={false} />}
          </React.Fragment>
        ))}
        <div className='h-10'></div>
      </div>
    </motion.div>
  )
}

export default Services
