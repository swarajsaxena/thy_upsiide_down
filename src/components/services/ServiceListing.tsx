import React from 'react'
import { motion } from 'framer-motion'
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
            <ServiceCard
              element={elem}
              key={index}
            />
            {index === services.length - 1 ? <></> : <Divider icons={false} />}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default ServiceListing
