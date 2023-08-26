'use client'

import React, { Dispatch, SetStateAction, useRef } from 'react'
import Divider from '../Divider'
import { AnimatePresence, cubicBezier, motion } from 'framer-motion'
import NextLink from '../NextLink'
import { FiChevronLeft, FiPlus } from 'react-icons/fi'
import { useAwayClickListener } from '@/utils/useAwayClickListener'

const Form = ({
  formActive,
  setFormActive,
}: {
  formActive: boolean
  setFormActive: Dispatch<SetStateAction<boolean>>
}) => {
  const ref = useRef(null)
  useAwayClickListener(ref, () => setFormActive(false))
  return (
    <AnimatePresence mode='wait'>
      {
        <div
          className={`absolute z-40 right-0 top-0 w-full h-full duration-1000 ${
            formActive ? 'bg-black/50' : 'bg-transparent pointer-events-none'
          }`}
        >
          <motion.div
            ref={ref}
            initial={{ x: '100%' }}
            animate={{ x: formActive ? 0 : '100%' }}
            transition={{
              type: 'tween',
              ease: cubicBezier(0.36, 0.88, 0.36, 0.88),
              duration: 1,
            }}
            className='absolute z-50 right-0 top-0 pointer-events-auto flex flex-col items-stretch flex-1 gap-4 h-full max-w-max w-full bg-mutedBlack border-l border-mutedWhite/20 overflow-x-hidden overflow-y-auto scrollbar-none'
          >
            <div className='flex flex-col gap-2 justify-start items-stretch  md:w-[500px] p-4'>
              <div className='text-xl -ml-1.5 gap-2 items-center font-bold text-accent uppercase flex justify-start'>
                <button
                  onClick={() => setFormActive(false)}
                  className='p-1'
                >
                  <FiChevronLeft />
                </button>
                Ping Us
              </div>
              <Divider />
              <div className='font-light text-lg'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam laboriosam incidunt explicabo ipsam corporis iste dicta
                sit, voluptatum mollitia eum doloremque laborum alias deleniti
                sint, debitis ratione quae animi recusandae?
              </div>
            </div>
            <div className='flex flex-col justify-start gap-6 pb-10 text-base text-mutedWhite p-4 font-jetBrain min-w-[100%]'>
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
        </div>
      }
    </AnimatePresence>
  )
}

export default Form
