'use client'

import React from 'react'
import Divider from '../Divider'
import { motion } from 'framer-motion'
import NextLink from '../NextLink'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className='relative flex flex-col items-stretch flex-[1.2] gap-2 md:px-4 overflow-hidden '
    >
      <div className='text-xl flex justify-between items-end w-full gap-2'>
        <div className='font-bold opacity-50 uppercase'>About Us</div>
        <NextLink
          path='/about-us'
          label='Read More'
          className='ml-auto'
        />
        <NextLink
          path='/contact-us'
          label='Ping Us'
        />
      </div>
      <Divider icons={false} />
      <span className='absolute hidden md:flex bottom-0 h-20 w-full right-0 text-sm text-mutedWhite bg-gradient-to-t from-mutedBlack to-transparent to px-2 py-[0.25rem]  items-center gap-2 z-10' />
      <div className='relative flex flex-col flex-grow gap-6 md:pb-10 h-max overflow-y-scroll text-xl font-light scrollbar-none'>
        <p className='italic text-white'>
          At <span className='font-normal text-accent'>Thy Upsiide Down</span>,
          we don't just design and develop websites; we craft immersive digital
          experiences that turn the online world on its head. With a passion for
          innovation and an unwavering commitment to excellence, we are your
          partners in reshaping the digital landscape.
        </p>
        <div className='w-full  hidden md:block'>
          <div className='mb-2 font-bold uppercase text-accent '>
            Our Story:
          </div>
          <p className='italic text-white'>
            Born from a collective love for design, technology, and all things
            unconventional, Thy Upsiide Down emerged as a beacon of creativity
            in the vast realm of web design and development. Our journey began
            with a simple idea – to flip the script on traditional web solutions
            and bring a fresh perspective to every project we undertake.
          </p>
        </div>
        {/* <div className='w-full  hidden md:block'>
          <div className='mb-2 font-bold uppercase text-accent '>
            What We Do:
          </div>
          <p className='italic text-white'>
            As a dynamic web design and development agency, we specialize in
            transforming your ideas into captivating online realities. Our
            expert team combines cutting-edge technology with artistic flair to
            create websites that not only engage your audience but also leave a
            lasting impression. From sleek and minimalist designs to bold and
            vibrant interfaces, we have the versatility to cater to a wide range
            of tastes and industries.
          </p>
        </div>
        <div className='w-full  hidden md:block'>
          <div className='mb-2 font-bold uppercase text-accent '>
            Why Choose Us:
          </div>
          <div className='flex flex-wrap gap-2'>
            <span>Innovative Vision,</span>
            <span>User-Centric,</span> Approach
            <span>Collaborative Partnership,</span>
            <span>Tech Mastery,</span>
            <span>Dedication to,</span> Excellence
            <span>Endless Possibilities</span>
          </div>
        </div> */}
      </div>
    </motion.div>
  )
}

export default About
