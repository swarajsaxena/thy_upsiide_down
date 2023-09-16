import Divider from '../Divider'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronsDown, FiPlus, FiPlusCircle, FiZoomIn } from 'react-icons/fi'
import { useRef, useState } from 'react'
import { useAwayClickListener } from '@/utils/useAwayClickListener'
import { twMerge } from 'tailwind-merge'
import { ProjectsI } from '@/data/projects'

function PhotoViewer({
  activePhoto,
  activeViewer,
  setactiveViewer,
  className = '',
}: {
  activePhoto: string | null
  activeViewer: boolean
  setactiveViewer: (val: boolean) => void
  className?: string
}) {
  const ref = useRef(null)
  const handleAwayClick = () => {
    setactiveViewer(false)
  }
  useAwayClickListener(ref, handleAwayClick)

  return (
    <AnimatePresence>
      {activeViewer && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className={twMerge(
            'w-full h-full bg-mutedBlack/80 absolute top-0 right-0 z-50 flex items-center justify-center',
            className
          )}
        >
          <div className='relative aspect-[16/9] w-[60%]'>
            <div
              style={{ textOrientation: 'mixed', writingMode: 'vertical-rl' }}
              className='absolute -top-12 right-0 rotate-180'
            >
              <div
                className='p-2 text-mutedBlack bg-mutedWhite rounded-full'
                onClick={() => setactiveViewer(false)}
              >
                <FiPlus className='rotate-45 text-xl' />
              </div>
            </div>
            <div
              ref={ref}
              className='relative aspect-[16/9] w-[100%] rounded-xl overflow-hidden'
            >
              <Image
                src={activePhoto ? activePhoto : ''}
                alt={activePhoto ? activePhoto : ''}
                fill
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function ProjectShowcase({ project }: { project: ProjectsI }) {
  const [activePhoto, setactivePhoto] = useState<string | null>(null)
  const [activeViewer, setactiveViewer] = useState<boolean>(false)

  const toggleState = (src: any) => {
    setactivePhoto(src)
    setactiveViewer(true)
  }
  const target = useRef<HTMLDivElement>(null)

  const imageArray = (images: any[]) => {
    return project.type === 'case_study' ? images.slice(1) : images
  }

  return (
    <div className='flex-1 hidden md:flex md:px-2 gap-2 flex-col flex-grow-1'>
      <PhotoViewer
        activePhoto={activePhoto}
        activeViewer={activeViewer}
        setactiveViewer={setactiveViewer}
        className='hidden md:flex'
      />
      <div className='flex justify-between'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='font-bold flex gap-2 w-full justify-between uppercase text-xl'
        >
          <span className='opacity-50'>ShowCase:</span>
          <span className='mr-auto'> {project.companyName}</span>
        </motion.div>
      </div>
      <Divider icons={false} />
      <div className='overflow-y-scroll scrollbar-none pt-2 pb-4'>
        {project.type === 'case_study' && (
          <OneColumnImage
            src={project?.images[0]?.src || ['']}
            toggleState={toggleState}
          />
        )}
        {project.type === 'case_study' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            key={project.id}
            ref={target}
            className='flex flex-col gap-2 mb-4'
          >
            <div className='text-lg font-bold'>Info:</div>
            <div>{project.description}</div>
          </motion.div>
        )}
        {imageArray(project.images).map((image, index) => {
          switch (image.type) {
            case 'imgOneCol':
              return (
                <OneColumnImage
                  key={index}
                  src={image.src || ['']}
                  toggleState={toggleState}
                />
              )
            case 'imgTwoCol':
              return (
                <TwoColumnImage
                  toggleState={toggleState}
                  key={index}
                  src={image.src || ['']}
                />
              )
          }
        })}
        {project.type === 'project' && (
          <div
            ref={target}
            className='flex flex-col gap-2'
          >
            <div className='text-lg font-bold'>
              Review: {project.customerName} ⭐⭐⭐⭐⭐
            </div>
            <span className='font-semibold pt-2'>
              Website :{' '}
              <a
                className='font-medium hover:text-accent'
                href={project.website}
                target='_blank'
              >
                {project.website}
              </a>
            </span>
            <div>{project.review}</div>
          </div>
        )}
      </div>
    </div>
  )
}

const OneColumnImage = ({
  src,
  toggleState,
}: {
  src: string[]
  toggleState: (src: string) => void
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className='relative aspect-[16/9] group cursor-pointer w-full rounded-lg overflow-hidden mb-4 bg-mutedBlackFade'
      onClick={() => toggleState(src[0])}
      key={src[0]}
    >
      <ZoomButton />
      <Image
        src={src[0]}
        alt={src[0]}
        fill
        className='hover:scale-105 transition-all'
      />
    </motion.div>
  )
}

const ZoomButton = () => (
  <div className='hidden md:block absolute right-4 group-hover:-rotate-45 transition-all bottom-4 text-xl z-10 p-1 text-accent'>
    <div className='absolute border-accent rounded-[2px] w-2 h-2 top-0 left-0 border-l border-t' />
    <div className='absolute border-accent rounded-[2px] w-2 h-2 top-0 right-0 border-r border-t' />
    <div className='absolute border-accent rounded-[2px] w-2 h-2 bottom-0 left-0 border-l border-b' />
    <div className='absolute border-accent rounded-[2px] w-2 h-2 bottom-0 right-0 border-r border-b' />
    <FiPlus className='group-hover:rotate-45 transition-all' />
  </div>
)

const TwoColumnImage = ({
  src,
  toggleState,
}: {
  src: string[]
  toggleState: (src: string) => void
}) => {
  return (
    <div className='mb-4 grid grid-cols-2 gap-4'>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        onClick={() => toggleState(src[0])}
        key={src[0]}
        className='relative aspect-[16/9] cursor-pointer w-full rounded-lg overflow-hidden bg-mutedBlackFade'
      >
        <ZoomButton />
        <Image
          src={src[0]}
          alt={src[0]}
          fill
          className='hover:scale-105 transition-all'
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        onClick={() => toggleState(src[1])}
        className='relative aspect-[16/9] cursor-pointer w-full rounded-lg overflow-hidden bg-mutedBlackFade'
        key={src[1]}
      >
        <ZoomButton />
        <Image
          src={src[1]}
          alt={src[1]}
          fill
          className='hover:scale-105 transition-all'
        />
      </motion.div>
    </div>
  )
}
