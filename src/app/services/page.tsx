'use client'
import Divider from '@/components/Divider'
import ServiceListing from '@/components/services/ServiceListing'
import WhyChooseUs from '@/components/services/WhyChooseUs'
import { ServicesI, services } from '@/data/services'
import { motion } from 'framer-motion'

import React, { useState } from 'react'

const page = () => {
  const [activeService, setActiveService] = useState<ServicesI>(services[0])

  return (
    <motion.div className='mx-4 mb-0 md:flex-grow flex md:overflow-y-hidden overflow-scroll scrollbar-none flex-col-reverse md:flex-row'>
      <WhyChooseUs />
      <Divider
        icons={false}
        orientation='vertical'
      />
      <ServiceListing
        services={services}
        activeService={activeService}
        setActiveService={setActiveService}
      />
    </motion.div>
  )
}

export default page
