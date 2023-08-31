'use client' // Error components must be Client Components

import Link from 'next/link'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Divider from '@/components/Divider'

export const metadata = {
  title: 'Not Found',
}

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='w-full flex flex-col gap-20 md:gap-24 lg:gap-48 pb-[1vh] items-center justify-center text-left'>
      <div className='px-4 w-full lg:w-[1000px] lg:px-0 text-6xl md:text-7xl lg:text-8xl h-[80vh] flex flex-col justify-center items-start font-bold md:pb-10'>
        <div className='relative p-4'>
          <Divider className='absolute top-0 left-0 w-full' />
          <Divider
            orientation='vertical'
            className='absolute top-0 h-full py-8 left-[10px]'
            icons={false}
          />

          <Divider
            orientation='vertical'
            className='absolute top-0 right-[10px] h-full py-8'
            icons={false}
          />
          <Divider className='absolute bottom-0 left-0 w-full' />
          {"We couldn't find the page you were looking for !!"
            .split('')
            .map((str, index) => (
              <motion.span
                className='tracking-normal'
                initial={{
                  opacity: 0,
                  y: -40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: (index + 1) * 0.03,
                  },
                }}
                key={index}
              >
                {str}
              </motion.span>
            ))}
        </div>
        <Link
          className='bg-accent text-base ml-2 mt-2 px-6 py-3 rounded-md text-mutedBlack hover:bg-accent/80 font-medium transition-all'
          href='/'
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
