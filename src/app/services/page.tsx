'use client'
import Divider from '@/components/Divider'
import ServiceListing from '@/components/services/ServiceListing'
import WhyChooseUs from '@/components/services/WhyChooseUs'
import { ServicesI, services } from '@/data/services'
import React, { useState } from 'react'

const page = () => {
  const [activeService, setActiveService] = useState<ServicesI>(services[0])
  return (
    <>
      {/* <div className='py-5 w-[100vw] px-10 flex flex-col justify-center'>
        <Divider icons={false} />
        <InfiniteCarasoul />
        <Divider icons={false} />
      </div> */}
      <div className='mx-4 mb-0 flex-grow flex overflow-y-hidden '>
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
      </div>
    </>
  )
}

export default page
