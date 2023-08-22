'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

const NextLink = ({
  path = '',
  label = 'link',
}: {
  path: string
  label: string
}) => {
  const [active, setActive] = useState(false)
  return (
    <Link
      href={path}
      className='flex text-base font-light text-accent uppercase font-jetBrain'
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className='relative'>
        {label}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: active ? '100%' : 0 }}
          className='absolute bg-accent h-[2px] bottom-0 left-0'
        />
      </div>
      <FiArrowUpRight className='mt-auto mb-[0.15rem]' />
    </Link>
  )
}

export default NextLink
