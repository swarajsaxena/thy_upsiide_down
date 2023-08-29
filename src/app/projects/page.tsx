'use client'

import Divider from '@/components/Divider'
import MainWrapper from '@/components/MainWrapper'
import React, { useState } from 'react'
import ProjectList from '@/components/projects/ProjectList'
import ProjectShowcase from '@/components/projects/ProjectShowcase'
import TrustTheProcess from '@/components/projects/TrustTheProcess'
import { ProjectsI, projects } from '@/data/projects'

const page = () => {
  const [activeProject, setActivePorject] = useState<ProjectsI>(projects[0])

  return (
    <div className='mx-4 mb-0 flex-grow flex gap-4 overflow-y-hidden'>
      <TrustTheProcess />
      <Divider
        icons={false}
        orientation='vertical'
        className='hidden md:hidden xl:flex'
      />
      <ProjectList
        projects={projects}
        activeProject={activeProject}
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
