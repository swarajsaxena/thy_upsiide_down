'use client'

import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

const Divider = ({
  orientation = 'horizontal',
  icons = true,
  customStyles = '',
}: {
  orientation?: 'vertical' | 'horizontal'
  icons?: boolean
  customStyles?: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className={twMerge(
        'text-mutedWhite/50 text-2xl items-center flex gap-2 justify-between',
        orientation === 'horizontal' ? 'flex-row' : 'flex-col hidden md:flex',
        customStyles
      )}
    >
      {icons && <FiPlus className='text-accent' />}
      <div
        className={`bg-mutedWhite/20 ${
          orientation === 'horizontal' ? 'w-full h-[1px]' : 'w-[1px] h-full'
        }`}
      />
      {icons && <FiPlus className='text-accent' />}
    </motion.div>
  )
}

export default Divider
