'use client'

import React from 'react'
import { cubicBezier, motion } from 'framer-motion'
import Divider from '@/components/Divider'
import SecondaryNavbar from '@/components/SecondaryNavbar'
import Image from 'next/image'
import Menu from '@/components/aboutUs/Menu'
import { FiArrowDown, FiChevronDown } from 'react-icons/fi'

const page = () => {
  const ease = cubicBezier(0.36, 0.88, 0.18, 0.87)
  return (
    <div className='flex flex-col items-center justify-start overflow-y-scroll scrollbar-none min-h-screen'>
      <div className='w-full lg:w-full flex flex-col pb-[1vh] items-start justify-center text-lef t'>
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
          }}
          className='w-full z-900 md:sticky md:top-0 md:left-0 h-max flex bg-mutedBlack justify-between p-4 items-center'
        >
          <div className='max-w-[250px] relative aspect-[404/59] w-full'>
            <Image
              src={'/logo/logo_long.svg'}
              alt='logo_about.svg'
              fill
            />
          </div>
          <Menu />
        </motion.div>
        <div className='flex flex-col text-3xl sm:text-5xl md:text-7xl lg:text-9xl xl:text-[148px] font-bold w-full'>
          <motion.div className='overflow-y-hidden'>
            <motion.div
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              // transition={{ delay: 0.1 }}
              transition={{ duration: 1, ease: ease }}
            >
              Let's Create
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease }}
              className='h-[1px] w-full bg-mutedWhite'
            />
          </motion.div>
          <motion.div className='overflow-y-hidden'>
            <motion.div
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              // transition={{ delay: 0.15 }}
              transition={{ duration: 1, ease: ease }}
            >
              Your Unique
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease }}
              className='h-[1px] w-full bg-mutedWhite'
            />
          </motion.div>
          <motion.div className='overflow-y-hidden text-accent  italic'>
            <motion.div
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              // transition={{ delay: 0.2 }}
              transition={{ duration: 1, ease: ease }}
            >
              Web Presence
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease }}
              className='h-[1px] w-full bg-mutedWhite'
            />
          </motion.div>
          <motion.div className='overflow-y-hidden'>
            <motion.div
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              // transition={{ delay: 0.25 }}
              transition={{ duration: 1, ease: ease }}
              className='flex justify-between'
            >
              Together.
              <img
                src={'/arrowDown.svg'}
                alt='arrowDown'
                className='h-6 sm:h-8 md:h-10 lg:h-'
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease }}
              className='h-[1px] w-full bg-mutedWhite'
            />
          </motion.div>
        </div>
        <motion.div
          className='flex flex-col justify-center items-center w-full p-8 py-28'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          // transition={{ delay: 0.1 }}
          transition={{ duration: 1, ease: ease }}
        >
          <div className='text-center text-2xl max-w-xl mb-4'>
            Let's start the conversation today and make your digital dreams a
            reality!
          </div>
          <a
            className='border-b-2 border-accent font-semibold text-xl mb-20'
            href='mailto:thyupsiidedown@gmail.com'
          >
            thyupsiidedown@gmail.com
          </a>
          <div className='flex flex-col justify-start gap-6 text-base text-mutedWhite  w-full md:max-w-lg'>
            <input
              type='text'
              placeholder='Name'
              className='h-full px-4 py-2 rounded-md outline-none bg-mutedWhite/10'
            />
            <input
              type='text'
              placeholder='Email'
              className='h-full px-4 py-2 rounded-md outline-none bg-mutedWhite/10'
            />
            <textarea
              placeholder='Your Thoughts..'
              className='h-full px-4 py-2 rounded-md outline-none bg-mutedWhite/10 min-h-[75px]'
              rows={4}
            />
            <button
              className='w-full px-4 py-4 rounded-md bg-accent hover:bg-accent/50 text-mutedBlack'
              type='submit'
            >
              Send
            </button>
          </div>
        </motion.div>
        <div className='px-4 lg:px-0 flex flex-col w-full text-center gap-4 items-center opacity-70 py-4'>
          2023 • Thy Upsiide Down • All Rights Reserved
        </div>
      </div>
    </div>
  )
}

export default page
