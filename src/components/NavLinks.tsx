'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

const NavLink = ({
  path = '',
  label = 'link',
  className = '',
}: {
  path?: string
  label?: string
  className?: string
}) => {
  const [active, setActive] = useState(false)
  const pathname = usePathname()
  return (
    <Link
      href={'/' + path}
      className={twMerge(
        `flex text-base hover:text-accent transition-all pointer-events-auto uppercase font-medium`,
        path === pathname ? 'text-accent' : '',
        className
        // 'border'
      )}
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
      <FiArrowUpRight
        className={`mt-auto mb-[0.17rem] transition-all ${
          active ? 'translate-x-[2px] -translate-y-[2px]' : ''
        }`}
      />
    </Link>
  )
}

export default NavLink
