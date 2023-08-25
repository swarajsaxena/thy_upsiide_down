'use client'

import Divider from '@/components/Divider'
import MainWrapper from '@/components/MainWrapper'
import React, { useState } from 'react'
import ProjectList from '@/components/projects/ProjectList'
import ProjectShowcase from '@/components/projects/ProjectShowcase'
import TrustTheProcess from '@/components/projects/TrustTheProcess'

export interface ProjectsI {
  title: string
  companyName: string
  customerName: string
  review: string
  id: string
  images: image[]
}

export interface image {
  type: 'imgOneCol' | 'imgTwoCol'
  src?: string[]
}

const page = () => {
  const projects: ProjectsI[] = [
    {
      title: 'Web design and development',
      companyName: 'Bewitched By Bhavyaa',
      customerName: 'Bhavyaa Kumar',
      review:
        'Could it have gotten any better? I mean so many hours of brainstorming and clashes you finally made this beautiful website🌻. Thank you so much! I love the colors. I love the illustrations that you have added. So APT! Gonna bring in more tasks for you, haha. You are on my list now!✅',
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
      review:
        'Revolutionized our online experience! The energy-saving solutions are now beautifully showcased on the revamped website. The new look and feel are not only visually appealing but also user-friendly, making it easier for users to explore the new products. A seamless blend of design and functionality!',
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
      review:
        'Absolutely thrilled with the end result! Our collaborative effort has yielded a stunning website for the orphan portal. The captivating colors and exquisite illustrations are spot on. Kudos to the team for their dedication and creativity. Looking forward to entrusting more projects. A definite asset on our list!',
      id: 'sri',
      images: [
        { type: 'imgOneCol', src: ['/projects/bbb/bbb_4.png'] },
        { type: 'imgOneCol', src: ['/projects/bbb/bbb_5.png'] },
      ],
    },
  ]

  const [activeProject, setActivePorject] = useState<ProjectsI>(projects[0])

  return (
    <div className='mx-4 mb-0 flex-grow flex overflow-y-hidden'>
      <TrustTheProcess />
      <Divider
        icons={false}
        orientation='vertical'
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
