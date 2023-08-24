'use client'

import React from 'react'
import Divider from '../Divider'
import { motion } from 'framer-motion'
import NextLink from '../NextLink'

const Form = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.7 }}
    className='flex flex-col items-stretch flex-1 gap-4 md:p-4 absolute z-50 right-0 top-0 h-full max-w-screen-sm w-full bg-mutedBlack border-l border-mutedWhite/20 overflow-hidden overflow-y-scroll scrollbar-none'
  >
    <div className='flex flex-col gap-2 justify-start items-stretch w-full '>
      <div className='text-xl font-bold text-accent uppercase'>Ping Us</div>
      <Divider />
      <div className='font-jetBrain opacity-70'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
        laboriosam incidunt explicabo ipsam corporis iste dicta sit, voluptatum
        mollitia eum doloremque laborum alias deleniti sint, debitis ratione
        quae animi recusandae?
      </div>
    </div>
    <div className='flex flex-col justify-start gap-6 pb-10 text-base text-mutedWhite font-jetBrain'>
      <input
        type='text'
        placeholder='Name'
        className='h-full px-4 py-2 rounded-md outline-none bg-mutedWhite/10'
      />

      <input
        type='text'
        placeholder='Number'
        className='h-full px-4 py-2 rounded-md outline-none bg-mutedWhite/10'
      />

      <input
        type='text'
        placeholder='Email'
        className='h-full px-4 py-2 rounded-md outline-none bg-mutedWhite/10'
      />

      <input
        type='text'
        placeholder='Company Name'
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
)

export default Form
