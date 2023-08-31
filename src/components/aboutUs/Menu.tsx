import React, { useRef, useState } from 'react'
import { AnimatePresence, cubicBezier, motion } from 'framer-motion'
import Divider from '../Divider'
import Link from 'next/link'
import { FiArrowRight, FiPlus } from 'react-icons/fi'
import NavLink from '../NavLinks'
import { useAwayClickListener } from '@/utils/useAwayClickListener'
import { twMerge } from 'tailwind-merge'

const Menu = () => {
  const [open, setOpen] = useState(false)
  const [hover, setHover] = useState(false)

  const ref = useRef(null)

  useAwayClickListener(ref, () => setOpen(false))
  return (
    <div
      className='lg:hidden h-8 w-8'
      ref={ref}
    >
      <motion.div
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={twMerge(
          `absolute z-100 w-8 h-8 border rounded-sm overflow-hidden transition-all duration-500 cursor-pointer group border-accent`
        )}
      >
        <motion.div
          className={`absolute top-1/2 left-1/2  w-full h-full rounded-sm bg-accent`}
          initial={{ width: '0%', height: '0%' }}
          animate={{
            width: hover ? '100%' : '0%',
            height: hover ? '100%' : '0%',
            translateY: '-50%',
            translateX: '-50%',
          }}
        />
        <motion.div
          className={`h-[2px] w-[40%] absolute top-1/2 left-1/2 transition-all -translate-x-1/2 ${
            hover ? 'bg-mutedBlack' : 'bg-accent'
          }`}
          initial={false}
          animate={{
            rotate: open ? -45 : 0,
            translateY: !open ? -3 : 0,
            x: '-50%',
          }}
          transition={{
            ease: cubicBezier(0.36, 0.88, 0.18, 0.87),
            type: 'tween',
            duration: 0.2,
          }}
        />
        <motion.div
          className={`h-[2px] w-[40%] absolute top-1/2 left-1/2 transition-all -translate-x-1/2 ${
            hover ? 'bg-mutedBlack' : 'bg-accent'
          }`}
          initial={false}
          animate={{
            rotate: open ? 45 : 0,
            translateY: !open ? 3 : 0,
            x: '-50%',
          }}
          transition={{
            ease: cubicBezier(0.36, 0.88, 0.18, 0.87),
            type: 'tween',
            duration: 0.2,
          }}
        />
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, top: 0, right: 0, scaleX: 0 }}
            animate={{ opacity: 1, top: 0, right: 0, scaleX: 1 }}
            exit={{ opacity: 0, top: 0, right: 0, scaleX: 0 }}
            transition={{ duration: 0.5 }}
            className='z-800 absolute text-mutedWhite flex flex-col gap-4 origin-right w-[100vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] h-[100vh] px-10 py-7 bg-mutedBlackFade'
          >
            <Divider
              orientation='vertical'
              className='absolute flex top-0 left-2 h-full py-4'
              // icons={false}
            />
            <Divider
              orientation='vertical'
              className='absolute flex top-0 right-2 h-full py-4'
              // icons={false}
            />
            {/* 
            <Divider
            orientation='vertical'
            className='absolute top-0 h-full py-8 left-[10px]'
            icons={false}
            />

            <Divider className='absolute bottom-0 left-0 w-full' /> */}
            <div className='flex flex-col justify-center items-stretch md:items-start md:justify-start gap-3 md:gap-6 font-medium text-mutedWhite h-full'>
              <Divider
                className='w-full'
                icons={false}
              />
              {['', 'Projects', 'Services', 'Contact Us'].map((link, index) => {
                return (
                  <div
                    className='w-full flex flex-col'
                    key={index}
                  >
                    <NavLink
                      onClick={() => setOpen(false)}
                      className='text-center w-full md:w-max'
                      path={link.toLowerCase().split(' ').join('-')}
                      label={link === '' ? 'Home' : link}
                    />
                    <Divider
                      className='mt-2.5 md:mt-5 w-full'
                      icons={false}
                    />
                  </div>
                )
              })}
              <NavLink
                onClick={() => setOpen(false)}
                className='text-center w-full md:w-max'
                path={'mailto:thyupsiidedown@gmail.com'}
                label={'Mail'}
              />
              <Divider
                className='w-full'
                icons={false}
              />
            </div>
            <button
              onClick={() => setOpen(!open)}
              className='flex items-center justify-center font-medium w-full bg-accent py-2 rounded-sm text-center mb-1'
            >
              <FiPlus className='rotate-45 text-xl' /> Close
            </button>
            <Divider
              className='w-full'
              icons={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Menu
