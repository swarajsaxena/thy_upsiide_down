import Divider from '@/components/Divider'
import MainWrapper from '@/components/MainWrapper'
import Image from 'next/image'

export default function Home() {
  return (
    <MainWrapper>
      <div className='h-full flex flex-col gap-4 p-4'>
        <div className='flex items-end gap-20'>
          <div className='flex flex-col flex-wrap items-start'>
            <img
              src='/logo/logo_1.svg'
              alt=''
              className='h-24'
            />
            <div className='flex gap-8 w-max'>
              <img
                src='/logo/logo_2.svg'
                alt=''
                className='h-40 '
              />
              <img
                src='/logo/logo_3.svg'
                alt=''
                className='h-40'
              />
            </div>
          </div>
          <div className='text-[4vw] font-semibold '>
            <span className='font-bold italic'>Flipping Perspectives,</span>
            <span className='font-thin'>One Vision At A Time</span>
          </div>
        </div>
        <Divider />
        <div className='flex gap-4 h-full'>
          <div className='flex-1 bg-mutedWhite/10 flex items-center justify-center rounded-lg'>
            Cards
          </div>
          <Divider
            orientation='vertical'
            icons={false}
          />
          <div className='flex-1 bg-mutedWhite/10 flex items-center justify-center rounded-lg'>
            Cards
          </div>
          <Divider
            orientation='vertical'
            icons={false}
          />
          <div className='flex-1 bg-mutedWhite/10 flex items-center justify-center rounded-lg'>
            Cards
          </div>
        </div>
      </div>
    </MainWrapper>
  )
}
