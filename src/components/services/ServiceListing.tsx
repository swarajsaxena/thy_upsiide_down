import React, { useState } from 'react'
import { AnimatePresence, cubicBezier, easeInOut, motion } from 'framer-motion'
import Divider from '../Divider'
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
  const [activeElement, setActiveElement] = useState<string | null>(null)

  const changeAccordian = (title: string) => {
    if (accordian === false) setAccordian(true)
    if (title === activeService.title) {
      setclick(!click)
      setAccordian(!accordian)
    }
    if (!click) {
      // Toggle accordion state (close)
      setActiveElement(null)
    } else {
      // Open accordion and scroll to the element
      setActiveElement(title)
      const element = document.getElementById(`${title}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }
  console.log(activeElement)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className='flex-1 xl:flex-[0.7] flex md:px-4 gap-2 flex-col'
    >
      <div className='font-bold opacity-50 uppercase text-xl'>Services</div>
      <Divider icons={false} />
      <div className='py-5 flex flex-col gap-4 overflow-scroll scrollbar-none'>
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <motion.div
              id={`${service.title}`}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: 'easeInOut', delay: index * 0.5 }}
              className={`${
                service.title === activeService.title && accordian
                  ? 'bg-mutedWhite text-mutedBlack'
                  : 'hover:bg-mutedWhite/90 text-mutedWhite'
              } rounded-md  hover:text-mutedBlack transition-all p-10  cursor-pointer`}
              onClick={() => {
                changeAccordian(service.title)
                setActiveService(service)
              }}
            >
              <div className={`relative group `}>
                <div className='relative pointer-events-none  transition-all flex flex-col justify-between gap-2'>
                  <div className='font-bold text-2xl flex items-center justify-between w-full'>
                    {service.title}
                  </div>
                  <div>
                    <span
                      className={
                        service.title === activeService.title && accordian
                          ? ''
                          : 'text-ellipsis line-clamp-4 md:line-clamp-3 lg:line-clamp-2'
                      }
                    >
                      {service.description}
                      <h2 className='font-bold text-xl pt-10'>
                        Features We Provide:
                      </h2>
                      <div className='py-10 px-4'>
                        {service.features.map((features, index) => (
                          <dl
                            className='flex flex-col '
                            key={index}
                          >
                            <dt className='text-lg font-semibold'>
                              {index + 1 + ' '} {features.feature}
                            </dt>
                            <dd className='px-5 pt-2 pb-5 '>
                              {features.value}
                            </dd>
                          </dl>
                        ))}
                      </div>
                    </span>
                    {!(service.title === activeService.title && accordian) && (
                      <span className='font-bold text-accent'>Read More</span>
                    )}
                  </div>
                </div>
              </div>
              <AnimatePresence>
                {service.title === activeService.title && accordian && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'max-content' }}
                    exit={{ height: 0 }}
                    transition={{
                      duration: 0.5, // Adjust the duration as needed
                      ease: 'easeInOut', // Use a valid easing function
                    }}
                    className=' pb-2 px-16 flex flex-col gap-4 overflow-y-hidden'
                  >
                    {/* <div className='text-mutedBlack'>{elem.description}</div> */}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            {index + 1 < services.length && <Divider icons={false} />}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  )
}

export default ServiceListing
