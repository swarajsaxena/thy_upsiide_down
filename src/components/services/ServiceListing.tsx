import React, { useState } from 'react'
import { AnimatePresence, cubicBezier, motion } from 'framer-motion'
import Divider from '../Divider'
import ServiceCard from './ServiceCard'
import { ServicesI } from '@/app/services/page'
const ServiceListing = ({
  services,
  activeService,
  setActiveService,
}: {
  services: ServicesI[]
  activeService: ServicesI
  setActiveService: (arg0: any) => void
}) => {
  const [accordian, setAccordian] = useState(false)
  const [click, setclick] = useState(false)

  const changeAccordian = (title: string) => {
    if (title === activeService.title) {
      setAccordian(!accordian)
      setclick(!click)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className='flex-1 xl:flex-[0.7] flex md:px-4 gap-2 flex-col '
    >
      <div className='font-bold opacity-50 uppercase text-xl'>Services</div>
      <Divider icons={false} />
      <div className='py-5 overflow-scroll scrollbar-none'>
        {services.map((elem, index) => (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (index + 1) * 0.15 }}
          >
            <div className=' px-4 pb-6 '>
              <div
                className={`p-[2px] ${
                  elem.title === activeService.title &&
                  click &&
                  'bg-white/90 text-mutedBlack '
                } relative group  overflow-hidden cursor-pointer hover:bg-white/90 hover:text-mutedBlack transition-all`}
                onClick={() => {
                  changeAccordian(elem.title)
                  setActiveService(elem)
                }}
              >
                <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[0px] transition-all  h-full bg-gradient-to-r  opacity-0 '></div>
                <div className='p-10  px-16 relative z-50  pointer-events-none  transition-all flex flex-col justify-between gap-2'>
                  <div className='font-bold text-2xl flex items-center justify-between w-full'>
                    {elem.title}
                  </div>

                  <div>
                    {click &&
                      !(elem.title === activeService.title) &&
                      elem.description.substr(0, 250) + ' ... '}
                    {!click && elem.description.substr(0, 250) + ' ... '}
                    {!click && <span className=' font-bold '>Read More</span>}
                    {click && !(elem.title === activeService.title) && (
                      <span className=' font-bold '>Read More</span>
                    )}
                  </div>
                </div>
              </div>
              <AnimatePresence>
                <div>
                  {elem.title === activeService.title && accordian && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: '50vh' }}
                      exit={{ height: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: cubicBezier(0.36, 0.88, 0.36, 0.88),
                      }}
                      className=' pb-2 px-16 flex flex-col gap-4 overflow-y-hidden bg-white/90'
                    >
                      <div className='text-mutedBlack'>{elem.description}</div>
                    </motion.div>
                  )}
                </div>
              </AnimatePresence>
            </div>
            {index + 1 < services.length && <Divider icons={false} />}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default ServiceListing
