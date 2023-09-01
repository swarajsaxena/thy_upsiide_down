'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import Divider from './Divider'
import { motion } from 'framer-motion'
import NavLink from './NavLinks'

const BottomBar = () => {
  const pathname = usePathname()

  // Check if the current pathname is "/"
  if (
    pathname === '/' ||
    pathname === '/about-us' ||
    pathname === '/contact-us'
  ) {
    return null // Don't render anything when pathname is "/"
  }

  const navLinks = [
    {
      label: 'home',
      path: '/',
    },
    {
      label: 'projects',
      path: 'projects',
    },
    {
      label: 'services',
      path: 'services',
    },
    {
      label: 'Ping_Us',
      path: '/contact-us',
    },
  ]

  return (
    <footer className='flex w-full flex-col items-stretch justify-between pb-4'>
      <Divider />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='px-4 lg:px-0 flex flex-col w-full text-center gap-4 items-center opacity-50 text-sm md:text-base'
      >
        2023 • Thy Upsiide Down • All Rights Reserved
      </motion.div>
      {/* <div className='p-1 justify-around w-full flex gap-2 items-center py-2'>
        {navLinks.map((link, i) => {
          const n = navLinks.length
          return (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3 * (i < Math.floor(n / 2) ? i + 1 : n - i),
              }}
              key={i}
            >
              <NavLink
                label={link.label}
                path={link.path}
              />
            </motion.div>
          )
        })}
      </div> */}
    </footer>
  )
}

export default BottomBar
