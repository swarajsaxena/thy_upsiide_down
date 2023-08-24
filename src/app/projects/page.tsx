'use client'

import Divider from '@/components/Divider'
import MainWrapper from '@/components/MainWrapper'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectList from '@/components/projects/ProjectList'
import ProjectShowcase from '@/components/projects/ProjectShowcase'

export interface ProjectsI {
  title: string
  companyName: string
  customerName: string
  id: string
  images: image[]
}

export interface image {
  type: 'imgOneCol' | 'imgTwoCol'
  review?: string
  stars?: number
  src?: string[]
  text?: string
}

const page = () => {
  const projects: ProjectsI[] = [
    {
      title: 'Web design and development',
      companyName: 'Bewitched By Bhavyaa',
      customerName: 'Bhavyaa Kumar',
      id: 'bbb',
      images: [
        { type: 'imgOneCol', src: ['/projects/bbb/bbb_1.png'] },
        {
          type: 'imgTwoCol',
          src: ['/projects/bbb/bbb_2.png', '/projects/bbb/bbb_3.png'],
        },
        {
          type: 'imgTwoCol',
          src: ['/projects/bbb/bbb_4.png', '/projects/bbb/bbb_5.png'],
        },
      ],
    },
    {
      title: 'Web design and development',
      companyName: 'Utilities Save',
      customerName: 'someone',
      id: 'uti',
      images: [
        {
          type: 'imgTwoCol',
          src: ['/projects/bbb/bbb_2.png', '/projects/bbb/bbb_3.png'],
        },
      ],
    },
    {
      title: 'Web design and development',
      companyName: 'Srimitra India',
      customerName: 'Someone',
      id: 'sri',
      images: [
        { type: 'imgOneCol', src: ['/projects/bbb/bbb_4.png'] },
        { type: 'imgOneCol', src: ['/projects/bbb/bbb_5.png'] },
      ],
    },
  ]

  const [activeProject, setActivePorject] = useState<ProjectsI>(projects[0])

  return (
    <div className='mx-4 mb-0 flex-grow flex md:overflow-y-hidden'>
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
      </motion.div>
      <Divider
        icons={false}
        orientation='vertical'
      />
      <ProjectList
        projects={projects}
        id={activeProject.id}
        setActivePorject={setActivePorject}
      />
      <Divider
        icons={false}
        orientation='vertical'
      />
      <ProjectShowcase project={activeProject}></ProjectShowcase>
    </div>
  )
}

const Review = ({
  review,
  stars,
}: {
  review: string | undefined
  stars: number | undefined
}) => {
  return (
    <div>
      <div>{review}</div>
      <div>Stars: {stars}</div>
    </div>
  )
}

const Text = ({ text }: { text: string | undefined }) => {
  return <div>{text}</div>
}

export default page
