import { ProjectsI } from '@/app/projects/page'
import Divider from '../Divider'
import Image from 'next/image'

export default function ProjectShowcase({ project }: { project: ProjectsI }) {
  return (
    <div className='flex-1 flex px-4 gap-2 flex-col flex-grow-1'>
      <div className='font-bold opacity-50 uppercase text-xl'>ShowCase</div>
      <Divider icons={false} />
      <div className='overflow-y-scroll scrollbar-none pt-2'>
        {project.images.map((image, index) => {
          switch (image.type) {
            case 'imgOneCol':
              return (
                <OneColumnImage
                  key={index}
                  src={image.src || ['']}
                />
              )
            case 'imgTwoCol':
              return (
                <TwoColumnImage
                  key={index}
                  src={image.src || ['']}
                />
              )
          }
        })}
      </div>
    </div>
  )
}

const OneColumnImage = ({ src }: { src: string[] }) => {
  return (
    <div className='relative aspect-[16/9] w-full rounded-lg overflow-hidden mb-4'>
      <Image
        src={src[0]}
        alt={src[0]}
        fill
      />
    </div>
  )
}

const TwoColumnImage = ({ src }: { src: string[] }) => {
  return (
    <div className='mb-4 grid grid-cols-2 gap-4'>
      <div className='relative aspect-[16/9] w-full rounded-lg overflow-hidden'>
        <Image
          src={src[0]}
          alt={src[0]}
          fill
        />
      </div>
      <div className='relative aspect-[16/9] w-full rounded-lg overflow-hidden'>
        <Image
          src={src[1]}
          alt={src[1]}
          fill
        />
      </div>
    </div>
  )
}
