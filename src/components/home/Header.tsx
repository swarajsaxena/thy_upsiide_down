'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className='flex items-center gap-10 flex-[0.2] px-4'>
      <motion.img
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        src='/logo/eye.svg'
        alt=''
        className='w-full max-w-[10%] eye'
      />
      <motion.img
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        src='/logo/logo_full.svg'
        className='w-1/3'
        alt=''
      />
      <div className='text-[3vw] flex flex-col justify-center ml-auto text-right font-semibold'>
        <div className='overflow-hidden h-max'>
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className='font-bold h-max'
          >
            Flipping Perspectives,
          </motion.div>
        </div>
        <div className='overflow-hidden h-max'>
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3 }}
            className='font-light italic text-accent h-max '
          >
            One Vision At A Time
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Header
