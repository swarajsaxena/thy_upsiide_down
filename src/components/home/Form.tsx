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
    className='relative flex flex-col items-stretch flex-1 gap-2 md:px-4 overflow-hidden'
  >
    <div className='mb-2 text-xl flex justify-between items-end w-full '>
      <div className='font-bold opacity-50 uppercase'>Ping Us</div>
      <NextLink
        path='/contact-us'
        label='enquiry'
      />
    </div>
    <span className='absolute bottom-0 h-20 w-full right-0 text-sm text-mutedWhite bg-gradient-to-t from-mutedBlack to-transparent to px-2 py-[0.25rem] flex items-center gap-2 z-10' />
    <Divider />
    <div className='flex flex-col justify-between flex-1 gap-6 pb-10 overflow-y-scroll scrollbar-none'>
      <input
        type='text'
        placeholder='Name'
        className='h-full p-4 rounded-md outline-none bg-mutedWhite'
      />

      <input
        type='text'
        placeholder='Number'
        className='h-full p-4 rounded-md outline-none bg-mutedWhite'
      />

      <input
        type='text'
        placeholder='Email'
        className='h-full p-4 rounded-md outline-none bg-mutedWhite'
      />

      <input
        type='text'
        placeholder='Company Name'
        className='h-full p-4 rounded-md outline-none bg-mutedWhite'
      />
      <textarea
        placeholder='Your Thoughts..'
        className='h-full p-4 rounded-md outline-none bg-mutedWhite'
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
