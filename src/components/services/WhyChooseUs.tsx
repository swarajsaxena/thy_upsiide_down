import React from 'react'
import { motion } from 'framer-motion'
import Divider from '../Divider'
const WhyChooseUs = () => {
  const services = [
    {
      title: 'Experience and Expertise',
      description:
        "With years of experience in web development, we've honed our skills to deliver outstanding results for diverse industries.",
    },
    {
      title: 'Client-Centric Approach',
      description:
        'We listen to your ideas, goals, and concerns to create a website that truly represents your business and meets your objectives.',
    },
    {
      title: 'On-Time Delivery',
      description:
        'We understand the importance of timelines. Our team is committed to delivering your project promptly without compromising on quality.',
    },
    {
      title: 'Continuous Support:',
      description:
        "Our service doesn't end with the website launch. We provide ongoing support and maintenance to ensure your website remains up-to-date and secure.",
    },
    {
      title: 'Affordable Pricing',
      description:
        'We offer competitive pricing packages that cater to businesses of all sizes.',
    },
  ]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className='hidden xl:flex flex-[0.35] flex-col px-4 gap-2'
    >
      <div className='font-bold opacity-50 uppercase text-xl'>
        Why Choose Us
      </div>
      <Divider icons={false} />
      <div className='flex flex-col gap-4 mt-2'>
        {services.map((service, index) => (
          <div
            key={index}
            className='flex gap-2'
          >
            <span className='text-xl text-accent'>{index + 1}</span>
            <div className='flex flex-col gap-1'>
              <h2 className='font-bold uppercase text-xl'>{service.title}</h2>
              <p className='opacity-80'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default WhyChooseUs
