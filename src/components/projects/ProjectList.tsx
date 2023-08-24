import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Divider from '@/components/Divider'

export default function ProjectList({
  id,
  projects,
  setActivePorject,
}: {
  projects: any[]
  setActivePorject: (arg0: any) => void
  id: any
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className='flex-[0.5] flex px-4 gap-2 flex-col'
    >
      <div className='font-bold opacity-50 uppercase text-xl'>Projects</div>
      <Divider icons={false} />
      <div className='flex flex-col gap-4 pt-2'>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.2 }}
              className='flex gap-2 relative group cursor-pointer'
              onClick={() => setActivePorject(project)}
            >
              <div className='text-xl text-accent'>{index + 1}</div>
              <div
                className='flex flex-col'
                key={index}
              >
                {project.id === id && (
                  <motion.div
                    layoutId='bubble'
                    transition={{
                      type: 'spring',
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                    className='w-2 h-2 rounded-full bg-accent absolute top-1/2 right-2 -translate-y-1/2'
                  />
                )}
                <div
                  className={`font-bold uppercase text-xl group-hover:text-accent transition-all`}
                >
                  {project.companyName}{' '}
                </div>
                <div className='font-medium uppercase text-base opacity-50'>
                  {project.title}
                </div>
                <span className='text-xs font-jetBrain'>
                  {project.customerName}
                </span>
              </div>
            </motion.div>
            {index + 1 < projects.length && <Divider icons={false} />}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  )
}
