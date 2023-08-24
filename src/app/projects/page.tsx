import MainWrapper from '@/components/MainWrapper'
import React from 'react'

export interface ProjectsI {
  title: string
  companyName: string
  customerName: string
  id: string
  contents: Content[]
}

export interface Content {
  type: 'img-one-col' | 'img-two-col' | 'text' | 'review'
  review?: string
  stars?: number
  src?: string[]
  text?: string
}

const page = () => {
  const projects: ProjectsI[] = [
    {
      title: 'Web design and dev',
      companyName: 'thyupsiidedown',
      customerName: 'swaraj',
      id: 'ourOW',
      contents: [
        { type: 'review', review: 'owuegWRPGHwrpgh', stars: 5 },
        { type: 'img-one-col', src: ['aoeuhqoeughqou'] },
        { type: 'img-two-col', src: ['oeuwboqeug', 'oqeugboqug'] },
        { type: 'text', text: 'owuegWRPGHwrpgh' },
        { type: 'img-one-col', src: ['aoeuhqoeughqou'] },
        { type: 'text', text: 'owuegWRPGHwrpgh' },
        { type: 'text', text: 'owuegWRPGHwrpgh' },
        { type: 'img-two-col', src: ['oeuwboqeug', 'oqeugboqug'] },
      ],
    },
  ]

  return (
    <MainWrapper>
      <div className='flex flex-col justify-center items-start gap-2 font-bold font-jetBrain m-4 mb-0 rounded-lg h-full'>
        {projects.map((project) => {
          return project.contents.map((content, index) => {
            switch (content.type) {
              case 'img-one-col':
                return <OneColumnImage src={content.src} />
                break
              case 'img-two-col':
                return <TwoColumnImage src={content.src} />
                break
              case 'review':
                return (
                  <Review
                    review={content.review}
                    stars={content.stars}
                  />
                )
                break
              case 'text':
                return <Text text={content.text} />
                break

              default:
                break
            }
          })
        })}
      </div>
    </MainWrapper>
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

const OneColumnImage = ({ src }: { src: string[] | undefined }) => {
  return <div>One Column Image</div>
}

const TwoColumnImage = ({ src }: { src: string[] | undefined }) => {
  return <div>Two Column Image</div>
}

export default page
