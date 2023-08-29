import React, { useState } from 'react'
import { AnimatePresence, cubicBezier, motion } from 'framer-motion'
import Divider from '../Divider'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import NavLink from '../NavLinks'

const Menu = () => {
  const [open, setOpen] = useState(false)
  const [hover, setHover] = useState(false)
  return (
    <div className='relative h-12'>
      <motion.div
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`absolute z-900 w-12 h-12 border rounded-full overflow-hidden transition-all duration-500 cursor-pointer group ${
          open ? 'top-3 md:top-6 right-3 md:right-6' : 'top-0 right-0'
        } border-accent`}
      >
        <motion.div
          className={`absolute top-1/2 left-1/2  w-full h-full rounded-full bg-accent`}
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
            initial={{ opacity: 0, top: 0, right: 0, scale: 0 }}
            animate={{ opacity: 1, top: 0, right: 0, scale: 1 }}
            exit={{ opacity: 0, top: 0, right: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className='z-800 absolute rounded-3xl text-mutedWhite origin-top-right w-max p-5 md:p-10 bg-mutedBlackFade'
          >
            <div className='flex flex-col gap-3 md:gap-6 mr-12 text-xl font-medium text-mutedWhite'>
              {['', 'Projects', 'Services', 'Contact Us'].map((link, index) => {
                return (
                  <div
                    className='min-w-[150px] md:min-w-[350px]'
                    key={index}
                  >
                    {/* <Link
                        href={link.toLowerCase().split(' ').join('-')}
                        className='min-w-[350px] py-2 flex items-center gap-1 group'
                      >
                        {link}{' '}
                        <FiArrowRight className='-rotate-45 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
                      </Link> */}

                    {/* {console.log(link.toLowerCase().split(' ').join('-'))} */}
                    <NavLink
                      className='w-max'
                      path={link.toLowerCase().split(' ').join('-')}
                      label={link === '' ? 'Home' : link}
                    />

                    {index < 3 && (
                      <Divider
                        className='mt-2.5 md:mt-5'
                        icons={false}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Menu
