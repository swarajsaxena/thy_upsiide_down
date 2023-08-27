'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Divider from '@/components/Divider'
import { process } from '@/components/projects/TrustTheProcess'
import { projects } from '../projects/page'
import Menu from '@/components/aboutUs/Menu'
import { services } from '../services/page'

const page = () => {
  const [activeindex, setActiveIndex] = useState(0)
  return (
    <div className='flex flex-col items-center justify-start overflow-y-scroll scrollbar-none'>
      <div
        className='w-full flex flex-col gap-20 pb-[20vh] items-center justify-center text-left'
        style={{ maxWidth: 'min(100%, 60vw)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className='w-full fixed top-4 left-0 h-max flex justify-between px-4 items-start'
        >
          <div className='max-w-[250px] relative aspect-[316/101] w-full'>
            <Image
              src={'/logo/logo_full.svg'}
              alt='logo_about.svg'
              fill
            />
          </div>
          <Menu />
        </motion.div>
        <div className='text-8xl h-[100vh] flex justify-end items-end font-semibold pb-10'>
          <div className=''>
            {'We Integrate Strategy, Creativity And Experience To Build Brands.'
              .split('')
              .map((str, index) => (
                <motion.span
                  className='tracking-normal'
                  initial={{ opacity: 0, y: -40 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: (index + 1) * 0.03 },
                  }}
                  key={index}
                >
                  {str}
                </motion.span>
              ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ delay: 65 * 0.03, repeat: Infinity, duration: 2 }}
              className='text-base font-thin'
            >
              Scroll Down
            </motion.span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className='relative w-full aspect-[10/6]'
          style={{ maxWidth: 'min(100%, 70vw)' }}
        >
          <Image
            src={'/upsiidedown.png'}
            alt='upsiidedown.png'
            fill
            className='object-cover'
          />
        </motion.div>
        <div className='grid grid-cols-2 w-full mt-24'>
          <div className='flex flex-col gap-4'>
            <div className='text-5xl font-semibold'>
              Elevate Your Digital Presence with Cutting Edge Solutions
            </div>
            <Link
              href={'/services'}
              className='px-4 py-3 border flex items-center gap-2 w-max group border-accent/50 hover:border-accent rounded-full transition-all'
            >
              <div className='font-jetBrain group-hover:text-accent transition-all'>
                Our Services
              </div>
              <div className='p-1 z-40 relative rounded-full overflow-hidden border border-accent/20 transition-all'>
                <FiArrowRight className='z-50 group-hover:text-mutedBlack -rotate-45 ' />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent scale-0 group-hover:scale-100 transition-all z-40' />
              </div>
            </Link>
          </div>
          <div className='flex flex-col items-stretch gap-8 text-2xl'>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 1) * 0.1 }}
              >
                <div>{service.title}</div>
                {index < services.length - 1 && (
                  <Divider
                    className='mt-8'
                    icons={false}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
        <div className='w-full flex flex-col gap-4 items-center mt-24'>
          <motion.div
            className='flex flex-col isolate text-center'
            initial={{ opacity: 0, x: 20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className='text-2xl font-bold '>Our Process</div>
            <div className='w-[500px] opacity-70  font-thin'>
              Our 4-step process delivers exceptional digital experiences that
              captivate your audience and drive results.
            </div>
          </motion.div>
          <div className='w-full grid grid-cols-3 gap-2 relative mt-10'>
            {process.map((service, index) => (
              <div
                className=''
                style={{}}
              >
                <motion.div
                  className='sticky top-[20vh] bg-mutedWhite p-6 flex flex-col gap-4 text-mutedBlack'
                  style={{ marginTop: index * 500 + 'px' }}
                  initial={{ opacity: 0, x: 20, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 1) * 0.1 }}
                >
                  <div className='absolute top-0 left-0 -translate-y-[90%] border-mutedBlack'>
                    <svg
                      className='max-w-[90px] aspect-[1/.34] w-full'
                      viewBox='0 0 33 11'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0 0V11H33L22 0H11H0Z'
                        fill='hsl(216, 100%, 98%)'
                      />
                    </svg>
                  </div>

                  <div className='text-4xl font-bold'>{service.title}</div>
                  <div className='text-base'>{service.description}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col w-full gap-4 items-start mt-48'>
          <div className='flex justify-between items-end text-left w-full'>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className='text-2xl font-bold '>They trust us</div>
              <div className='opacity-70  font-thin'>
                Insights from the Community: Unfiltered Opinions and Honest
                Reviews
              </div>
            </motion.div>
            <Link
              href={'/projects'}
              className='px-4 py-3 border flex items-center gap-2 w-max group border-accent/50 hover:border-accent rounded-full transition-all'
            >
              <div className='font-jetBrain group-hover:text-accent transition-all'>
                Our Projects
              </div>
              <div className='p-1 z-40 relative rounded-full overflow-hidden border border-accent/20 transition-all'>
                <FiArrowRight className='z-50 group-hover:text-mutedBlack -rotate-45 ' />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent scale-0 group-hover:scale-100 transition-all z-40' />
              </div>
            </Link>
          </div>
          <motion.div
            className='w-full bg-mutedWhite rounded-lg p-16 flex flex-col gap-4 items-center text-mutedBlack'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className='text-2xl font-semibold font-jetBrain'>
              "{projects[activeindex].review}"
            </div>
            <div className='flex justify-between items-end w-full'>
              <div className='flex flex-col capitalize'>
                <div className='font-bold text-lg'>
                  {projects[activeindex].customerName}
                </div>
                <div className='opacity-80'>
                  {projects[activeindex].companyName}
                </div>
              </div>
              <div className='flex gap-2 items-center font-medium'>
                <div
                  onClick={() =>
                    setActiveIndex((prev) => (prev === 0 ? prev : prev - 1))
                  }
                  className='p-2 cursor-pointer hover:bg-mutedBlack/20 transition-all rounded-full'
                >
                  <FiChevronLeft />
                </div>{' '}
                <div>
                  {activeindex + 1} / {projects.length}
                </div>
                <div
                  onClick={() =>
                    setActiveIndex((prev) =>
                      prev === projects.length - 1 ? prev : prev + 1
                    )
                  }
                  className='p-2 cursor-pointer hover:bg-mutedBlack/20 transition-all rounded-full'
                >
                  <FiChevronRight />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className='flex flex-col w-full text-center gap-4 items-center mt-48'>
          <div className='font-bold text-5xl'>
            Let's Work <br /> Together
          </div>
          <a
            className='border-b-2 border-accent -mb-4 font-semibold text-xl'
            href='mailto:thyupsiidedown@gmail.com'
          >
            thyupsiidedown@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default page
