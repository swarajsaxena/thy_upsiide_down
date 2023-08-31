'use client'

import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Divider from './Divider'
import { motion } from 'framer-motion'
import NavLink from './NavLinks'
import { FiMail } from 'react-icons/fi'
import Menu from './aboutUs/Menu'

const NavBar = () => {
  const pathname = usePathname()
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
      label: 'Contact Us',
      path: 'contact-us',
    },
  ]

  if (pathname === '/s' || pathname === '/about-us') {
    return null
  }

  return (
    <nav className='flex flex-col justify-center '>
      <div className='flex w-full flex-row p-4 pb-2 items-center justify-between'>
        <div className='p-1 flex gap-2 items-center '>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='eye group'
          >
            <svg
              width='356'
              height='300'
              viewBox='0 0 356 300'
              className=' max-w-[30px] max-h-[30px] '
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M0 100C0 81.4138 0 72.1207 1.53718 64.3928C7.84971 32.6575 32.6575 7.84971 64.3928 1.53718C72.1207 0 81.4138 0 100 0V100V200C100 218.586 100 227.879 98.4628 235.607C92.1503 267.342 67.3425 292.15 35.6072 298.463C27.8793 300 18.5862 300 0 300V200V100Z'
                className='group-hover:fill-accent fill-white transition-all'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M228 100C228 81.4138 228 72.1207 226.463 64.3928C220.15 32.6575 195.342 7.84971 163.607 1.53718C155.879 0 146.586 0 128 0V100V200C128 218.586 128 227.879 129.537 235.607C135.85 267.342 160.658 292.15 192.393 298.463C200.121 300 209.414 300 228 300V200V100Z'
                className='group-hover:fill-accent fill-white transition-all'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M256 100C256 81.4138 256 72.1207 257.537 64.3928C263.85 32.6575 288.658 7.84971 320.393 1.53718C328.121 0 337.414 0 356 0V100V200C356 218.586 356 227.879 354.463 235.607C348.15 267.342 323.342 292.15 291.607 298.463C283.879 300 274.586 300 256 300V200V100Z'
                className='group-hover:fill-accent fill-white transition-all'
              />
            </svg>
          </motion.div>
          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            src='/logo/eye.svg'
            className='max-w-[30px] w-full eye'
            alt='logo'
          />
          <motion.img
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            src='/logo/logo_long.svg'
            className='max-h-[40px]'
            alt='logo'
          />
        </div>
        <div className='p-1 justify-end w-full flex gap-4 items-center '>
          {navLinks.map((link, i) => {
            const n = navLinks.length
            return (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  // delay: 0.3 * (i < Math.floor(n / 2) ? i + 1 : n - i),
                  delay: 0.1 * i,
                }}
                key={i}
                className='hidden lg:block'
              >
                <NavLink
                  label={link.label}
                  path={link.path}
                />
              </motion.div>
            )
          })}
          <div className='hidden lg:block p-2 cursor-pointer rounded-full hover:bg-accent/20 bg-white/20 hover:text-accent'>
            <FiMail />
          </div>
          <Menu />
        </div>
      </div>
      <Divider className='mx-2' />
    </nav>
  )
}

export default NavBar
