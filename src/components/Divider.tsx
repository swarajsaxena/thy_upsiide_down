'use client'

import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Divider = ({
  orientation = 'horizontal',
  icons = true,
}: {
  orientation?: 'vertical' | 'horizontal'
  icons?: boolean
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className={`text-mutedWhite/50 text-2xl items-center flex gap-2 justify-between  ${
        orientation === 'horizontal' ? 'flex-row' : 'flex-col'
      }`}
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
