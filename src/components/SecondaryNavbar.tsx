import { motion } from 'framer-motion'
import Image from 'next/image'
import Menu from './aboutUs/Menu'

const SecondaryNavbar = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: 0.3,
      }}
      className='w-full z-900 md:sticky md:top-0 md:left-0 h-max flex bg-mutedBlack justify-between p-4 items-center md:items-start'
    >
      <div className='hidden md:block max-w-[250px] relative aspect-[316/101] w-full'>
        <Image
          src={'/logo/logo_full.svg'}
          alt='logo_about.svg'
          fill
        />
      </div>
      <div className='md:hidden max-w-[250px] relative aspect-[404/59] w-full'>
        <Image
          src={'/logo/logo_long.svg'}
          alt='logo_about.svg'
          fill
        />
      </div>
      <Menu />
    </motion.div>
  )
}

export default SecondaryNavbar
