import React from 'react'
import { motion } from 'framer-motion'
import Divider from '../Divider'

export const process = [
  {
    title: 'Discover',
    description:
      'We immerse ourselves in research, collecting valuable data and revealing potentials for your digital approach. Through exploration and planning, we outline your objectives and create a distinct blueprint.',
  },
  {
    title: 'Design',
    description:
      'Our team blends user-centric design with your brand identity, creating visually stunning interfaces. We develop functional solutions using the latest technologies and best practices.',
  },
  {
    title: 'Launch',
    description:
      'Rigorous testing and user feedback refinement ensure optimal functionality. We guide you through a successful launch and provide ongoing support.',
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

const TrustTheProcess = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className='flex-1 md:flex-[0.5] hidden xl:flex flex-col md:px-2 gap-2'
    >
      <div className='font-bold opacity-50 uppercase text-xl'>
        Trust The Process
      </div>
      <Divider icons={false} />
      <div className='flex flex-col gap-4 mt-2'>
        {process.map((service, index) => (
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
