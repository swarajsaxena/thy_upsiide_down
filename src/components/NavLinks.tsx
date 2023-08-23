'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const NavLink = ({
  path = '',
  label = 'link',
}: {
  path?: string
  label?: string
}) => {
  const [active, setActive] = useState(false)
  const pathname = usePathname()
  return (
    <Link
      href={path}
      className={`flex text-base hover:text-accent transition-all uppercase font-jetBrain font-normal ${
        path === pathname ? 'text-accent' : ''
      }`}
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
      <FiArrowUpRight className='mt-auto mb-[0.17rem]' />
    </Link>
  )
}

export default NavLink
