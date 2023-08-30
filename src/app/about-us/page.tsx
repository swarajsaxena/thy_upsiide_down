'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsRight,
} from 'react-icons/fi'
import Divider from '@/components/Divider'
import { process } from '@/components/projects/TrustTheProcess'
import Menu from '@/components/aboutUs/Menu'
import { twMerge } from 'tailwind-merge'
import { projects } from '@/data/projects'
import { services } from '@/data/services'
import SecondaryNavbar from '@/components/SecondaryNavbar'

const page = () => {
  const [activeindex, setActiveIndex] = useState(0)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='flex flex-col items-center justify-start overflow-y-scroll scrollbar-none'>
      <div className='w-full lg:w-[1000px] flex flex-col gap-20 md:gap-24 lg:gap-48 pb-[1vh] items-center justify-center text-left'>
        <SecondaryNavbar></SecondaryNavbar>
        <Landing></Landing>
        <LandingImage></LandingImage>
        <Services></Services>
        <Process width={width}></Process>
        <Reviews
          projects={projects}
          activeindex={activeindex}
          setActiveIndex={setActiveIndex}
        ></Reviews>
        <Contact></Contact>
        <div className='px-4 lg:px-0 flex flex-col w-full text-center gap-4 items-center opacity-70 py-4'>
          2023 • Thy Upsiide Down • All Rights Reserved
        </div>
      </div>
    </div>
  )
}

export default page

function Landing() {
  return (
    <div className='px-4 lg:px-0 text-6xl md:text-7xl lg:text-8xl h-[80vh] md:h-[100vh] flex flex-col justify-end items-start font-bold md:pb-10'>
      <div className=''>
        {'We Integrate Strategy, Creativity And Experience To Build Brands.'
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
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          delay: 65 * 0.03,
          repeat: Infinity,
          duration: 2,
        }}
        className='text-base font-thin'
      >
        Scroll Down
      </motion.span>
    </div>
  )
}

function LandingImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: 0.3,
      }}
      className='relative w-full z-50 aspect-[10/6] -mx-4' // style={{ maxWidth: 'min(100%, 70vw)' }}
    >
      <Image
        src={'/upsiidedown.png'}
        alt='upsiidedown.png'
        fill
        className='object-cover z-50'
      />
    </motion.div>
  )
}

function Services() {
  return (
    <div className='px-4 lg:px-0 grid gap-8 md:gap-4 grid-cols-1 md:grid-cols-2 w-full'>
      <div className='flex flex-col gap-4 px-4 md:px-0'>
        <motion.div
          className='text-lg md:text-2xl font-light'
          initial={{
            opacity: 0,
            x: 20,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
          }}
        >
          Our Services
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
          className='text-3xl md:text-5xl font-semibold'
        >
          Elevate Your Digital Presence with Cutting Edge Solutions
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
        >
          <Link
            href={'/services'}
            className='px-4 py-3 border flex items-center gap-2 w-max group border-accent/50 hover:border-accent rounded-full transition-all'
          >
            <div className=' group-hover:text-accent transition-all'>
              Our Services
            </div>
            <div className='p-1 z-40 relative rounded-full overflow-hidden border border-accent/20 transition-all'>
              <FiArrowRight className='z-20 group-hover:text-mutedBlack -rotate-45 ' />
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent scale-0 group-hover:scale-100 transition-all z-10' />
            </div>
          </Link>
        </motion.div>
      </div>
      <div className='flex flex-col items-stretch gap-4 md:gap-8 text-lg md:text-2xl px-4 md:px-0'>
        {services.map((service, index) => (
          <motion.div
            className='group'
            key={index}
            initial={{
              opacity: 0,
              x: 20,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: (index + 1) * 0.1,
            }}
          >
            <div className='flex items-center'>
              <div className='md:opacity-0 group-hover:opacity-100 text-accent transition-all'>
                <FiChevronsRight />
              </div>
              <span className='translate-x-2 md:-translate-x-6 group-hover:translate-x-2 transition-all'>
                {service.title}
              </span>
            </div>
            {index < services.length - 1 && (
              <Divider
                className='mt-4 md:mt-4'
                icons={false}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function Process(props: { width: number }) {
  return (
    <div className='px-4 lg:px-0 w-full flex flex-col gap-4 items-center'>
      <motion.div
        className='flex flex-col isolate text-center'
        initial={{
          opacity: 0,
          x: 20,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.3,
        }}
      >
        <div className='text-2xl font-bold '>Our Process</div>
        <div className='px-4 md:px-0 w-full md:w-[500px] opacity-70 font-thin'>
          Our 4-step process delivers exceptional digital experiences that
          captivate your audience and drive results.
        </div>
      </motion.div>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-2 relative mt-10'>
        {process.map((service, index) => (
          <div
            className='mx-4 md:mx-0'
            key={index}
            style={{
              marginTop: props.width > 767 ? index * 500 + 'px' : '0px',
            }}
          >
            <motion.div
              className={twMerge(
                'relative md:sticky mt-16 md:top-[20vh] rounded-sm bg-mutedWhite p-6 flex flex-col gap-4 text-mutedBlack',
                `md:mt-[${index * 500 + 'px'}]`
              )}
              initial={{
                opacity: 0,
                x: 20,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: (index + 1) * 0.1,
              }}
            >
              <div className='absolute top-0 left-0 -translate-y-[90%]'>
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

              <div className='text-2xl lg:text-4xl font-bold'>
                {service.title}
              </div>
              <div className='gtext-base'>{service.description}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Reviews(props: {
  projects: any
  activeindex: number
  setActiveIndex: (arg0: {
    (prev: number): number
    (prev: number): number
  }) => void
}) {
  return (
    <div className='px-8 lg:px-0 flex flex-col w-full gap-4 items-start'>
      <div className='flex flex-col items-start md:flex-row gap-2 justify-between md:items-end text-left w-full'>
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
        >
          <div className='text-2xl font-bold '>They trust us</div>
          <div className='opacity-70  font-thin'>
            Insights from the Community: Unfiltered Opinions and Honest Reviews
          </div>
        </motion.div>
        <Link
          href={'/projects'}
          className='px-4 py-3 border flex items-center gap-2 w-max group border-accent/50 hover:border-accent rounded-full transition-all'
        >
          <div className=' group-hover:text-accent transition-all'>
            Our Projects
          </div>
          <div className='p-1 relative rounded-full overflow-hidden border border-accent/20 transition-all'>
            <FiArrowRight className='z-20 group-hover:text-mutedBlack -rotate-45 ' />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent scale-0 group-hover:scale-100 transition-all z-10' />
          </div>
        </Link>
      </div>
      <motion.div
        className='px-4 w-full bg-mutedWhite rounded-lg p-4 md:p-8 lg:p-16 flex flex-col gap-4 items-center text-mutedBlack'
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
          delay: 0.4,
        }}
      >
        <div className='text-lg md:text-xl lg:text-2xl font-semibold '>
          "{props.projects[props.activeindex].review}"
        </div>
        <div className='flex justify-between items-end w-full'>
          <div className='flex flex-col capitalize'>
            <div className='font-bold text-base md:text-lg'>
              {props.projects[props.activeindex].customerName}
            </div>
            <div className='opacity-80 text-sm md:text-base'>
              {props.projects[props.activeindex].companyName}
            </div>
          </div>
          <div className='flex gap-2 items-center font-medium'>
            <div
              onClick={() =>
                props.setActiveIndex((prev: number) =>
                  prev === 0 ? prev : prev - 1
                )
              }
              className='p-2 cursor-pointer hover:bg-mutedBlack/20 transition-all rounded-full'
            >
              <FiChevronLeft />
            </div>{' '}
            <div>
              {props.activeindex + 1} / {projects.length}
            </div>
            <div
              onClick={() =>
                props.setActiveIndex((prev: number) =>
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
  )
}

function Contact() {
  return (
    <div className='px-4 lg:px-0 flex flex-col w-full text-center gap-4 items-center'>
      <div className='font-bold text-5xl'>
        Let's Work <br /> Together
      </div>
      <a
        className='border-b-2 border-accent -mb-4 font-semibold text-xl'
        href='mailto:thyupsiidedown@gmail.com'
      >
        thyupsiidedown@gmail.com
      </a>
      <div className='opacity-40 text-sm mt-4'>or</div>
      <Link
        href={'/contact-us'}
        className='px-4 py-3 border flex items-center gap-2 w-max group border-accent/50 hover:border-accent rounded-full transition-all'
      >
        <div className=' group-hover:text-accent transition-all'>Ping Us</div>
        <div className='p-1 relative rounded-full overflow-hidden border border-accent/20 transition-all'>
          <FiArrowRight className='z-20 group-hover:text-mutedBlack -rotate-45 ' />
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent scale-0 group-hover:scale-100 transition-all z-10' />
        </div>
      </Link>
    </div>
  )
}
