import { AnimatePresence, cubicBezier, motion } from 'framer-motion'
import React, { useState } from 'react'
import Divider from '@/components/Divider'
import { FiPlus } from 'react-icons/fi'
import Image from 'next/image'
import { ProjectsI } from '@/data/projects'

export default function ProjectList({
  id,
  projects,
  setActivePorject,
  activeProject,
}: {
  projects: ProjectsI[]
  setActivePorject: (arg0: any) => void
  id: any
  activeProject: ProjectsI
}) {
  const [accordian, setAccordian] = useState(true)

  const changeAccordian = (id: string) => {
    if (accordian === false) setAccordian(true)

    if (id === activeProject.id) {
      setAccordian(!accordian)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className='flex-1 md:flex-[0.5] flex md:px-4 gap-2 flex-col'
    >
      <div className='font-bold opacity-50 uppercase text-xl'>Projects</div>
      <Divider icons={false} />
      <div className='flex flex-col gap-4 pt-2 md:overflow-y-scroll scrollbar-none mt-2'>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.2 }}
              className='flex flex-col gap-2 relative  cursor-pointer '
            >
              <div
                className='flex gap-2 group'
                onClick={() => {
                  changeAccordian(project.id)
                  setActivePorject(project)
                }}
              >
                <div className='text-xl text-accent'>{index + 1}</div>
                <div className='flex justify-between items-center w-full'>
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
                        className='hidden md:block w-2 h-2 rounded-full bg-accent absolute top-1/2 right-2 -translate-y-1/2'
                      />
                    )}
                    <div
                      className={`font-bold uppercase text-xl group-hover:text-accent transition-all`}
                    >
                      {project.companyName}{' '}
                    </div>
                    <div className='font-medium uppercase text-base opacity-50 hidden lg:block xl:block'>
                      {project.title}
                    </div>
                    <span className='text-xs '>{project.customerName}</span>
                  </div>
                  <div className='md:hidden relative p-1 text-accent'>
                    <div className='absolute border-accent w-2 h-2 top-0 left-0 border-l border-t' />
                    <div className='absolute border-accent w-2 h-2 top-0 right-0 border-r border-t' />
                    <div className='absolute border-accent w-2 h-2 bottom-0 left-0 border-l border-b' />
                    <div className='absolute border-accent w-2 h-2 bottom-0 right-0 border-r border-b' />
                    <FiPlus
                      className={`transition-all ${
                        project.id === activeProject.id && accordian === true
                          ? 'rotate-45'
                          : 'rotate-0'
                      }`}
                    />
                  </div>
                </div>
              </div>
              <AnimatePresence>
                <div className='md:hidden'>
                  {project.id === activeProject.id && accordian === true && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'max-content' }}
                      exit={{ height: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: cubicBezier(0.36, 0.88, 0.36, 0.88),
                      }}
                      className='md:hidden py-2 flex flex-col gap-4 h-max overflow-y-hidden'
                    >
                      <div className='relative w-full aspect-[16/9] rounded-lg overflow-hidden'>
                        <Image
                          src={activeProject?.images[0]?.src?.[0] || ''}
                          alt={activeProject?.images[0]?.src?.[0] || ''}
                          fill
                          className='object-cover'
                        />
                      </div>
                      <div className='flex flex-col gap-2'>
                        <div className='text-lg font-bold'>
                          Review: {project.customerName} ⭐⭐⭐⭐⭐
                        </div>
                        <div>{project.review}</div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </AnimatePresence>
            </motion.div>
            {index + 1 < projects.length && <Divider icons={false} />}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  )
}
