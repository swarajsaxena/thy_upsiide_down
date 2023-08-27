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
    // {
    //   title: 'Specializing in SaaS Success',
    //   points: [
    //     {
    //       title: '🚀expertise',
    //       desc: 'Our track record speaks for itself. Countless successful SaaS projects underline our ability to turn concepts into thriving software services.',
    //     },
    //     {
    //       title: '🎯 tailored Excellence',
    //       desc: 'Your SaaS is unique, and so is our approach. We custom-tailor strategies to align with your goals, ensuring your product outshines the fierce competition.',
    //     },
    //     {
    //       title: '🌐 scale And Security',
    //       desc: "Growing user base? No problem. Our expert developers fuse scalability with ironclad security, guaranteeing a SaaS that's both expansive and safe.",
    //     },
    //     {
    //       title: '🔮 constant Innovation',
    //       desc: "The SaaS realm evolves rapidly, and we're always one step ahead. By embracing cutting-edge tech and features, we ensure your SaaS remains a trailblazer.",
    //     },
    //   ],
    // },
  ]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className='flex-1 md:flex-[0.5] hidden xl:flex flex-col md:px-4 gap-2'
    >
      <div className='font-bold opacity-50 uppercase text-xl'>
        Trust The Process
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
              {service.description && (
                <p className='opacity-80'>{service.description}</p>
              )}
              <div className='flex flex-col gap-2'>
                {/* {service.points &&
                  service.points.map((key, index) => (
                    <div>
                      <div className='capitalize'>{key.title}</div>
                      <div>{key.desc}</div>
                    </div>
                  ))} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default TrustTheProcess
