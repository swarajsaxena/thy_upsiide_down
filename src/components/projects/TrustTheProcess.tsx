import React from 'react'
import { motion } from 'framer-motion'
import Divider from '../Divider'

const TrustTheProcess = () => {
  const services = [
    {
      title: 'Discover',
      description:
        'Uncover project goals and requirements through thorough research and discussions.',
    },
    {
      title: 'Design',
      description:
        'Create captivating visuals and user-centric blueprints for the project.',
    },
    {
      title: 'Develop',
      description:
        'Transform designs into functional digital products using cutting-edge technology.',
    },
    {
      title: 'Improve',
      description:
        'Continuously enhance the product based on user feedback and changing needs.',
    },
  ]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className='hidden xl:flex flex-[0.5] flex-col px-4 gap-2'
    >
      <div className='font-bold opacity-50 uppercase text-xl'>
        Trust The Process
      </div>
      <Divider icons={false} />
      <div className='flex flex-col gap-4'>
        {services.map((service, index) => (
          <div
            key={index}
            className='flex gap-1'
          >
            <span className='text-accent text-xl rounded-full'>
              {index + 1}.
            </span>
            <div className='flex flex-col gap-1'>
              <h2 className='text-xl font-bold'>{service.title}</h2>
              <p className='opacity-80'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default TrustTheProcess
