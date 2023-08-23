'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const MiddleImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className='relative rounded-xl flex flex-col items-stretch flex-1 gap-4 md:px-4 overflow-hidden'
    >
      <Image
        src={'/upsiidedown.png'}
        alt='upsiidedown'
        fill
      />
    </motion.div>
  )
}

export default MiddleImage
