'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import Divider from './Divider'
import { motion } from 'framer-motion'
import NavLink from './NavLinks'
import { FiMail, FiPhoneCall } from 'react-icons/fi'

const BottomBar = () => {
  const pathname = usePathname()

  // Check if the current pathname is "/"
  if (pathname === '/') {
    return null // Don't render anything when pathname is "/"
  }

  const navLinks = [
    {
      label: 'home',
      path: '/',
    },
    {
      label: 'projects',
      path: '/projects',
    },
    {
      label: 'services',
      path: '/services',
    },
    {
      label: 'About_Us',
      path: '/about-us',
    },
    // {
    //   label: 'Ping_Us',
    //   path: '/ping-us',
    // },
  ]

  return (
    <main className='flex w-full flex-col p-4 items-stretch justify-between'>
      <Divider />
      <div className='p-1 justify-around w-full flex gap-2 items-center py-2'>
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
        <div className='flex gap-2'>
          <div className='p-3 text-lg cursor-pointer rounded-full hover:bg-accent/20 bg-white/20 hover:text-accent ml-auto'>
            <FiMail />
          </div>
          <div className='p-3 text-lg cursor-pointer rounded-full hover:bg-accent/20 bg-white/20 hover:text-accent'>
            <FiPhoneCall />
          </div>
        </div>
      </div>
    </main>
  )
}

export default BottomBar
