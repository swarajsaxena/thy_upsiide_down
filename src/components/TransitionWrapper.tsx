'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const TransitionWrapper = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setActive(true)
    setTimeout(() => {
      setActive(false)
    }, 700)
  }, [pathname])

  return (
    <div className='relative flex max-w-[100vw] flex-col justify-between max-h-screen h-screen w-screen md:overflow-y-hidden overflow-x-hidden bg-mutedBlack text-mutedWhite selection:bg-accent selection:text-black cursor-default md:max-h-screen overflow-y-hidden'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={'transition'}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: active ? 1 : 0,
            transformOrigin: active ? 'left' : 'right',
            opacity: active ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className='absolute top-0 h-full w-full flex justify-center items-center font-black text-3xl text-mutedBlack bg-accent z-50'
        >
          Thy Upsiide Down
        </motion.div>
      </AnimatePresence>
      {/* {true && children} */}
      <React.Fragment key={'children'}>{!active && children}</React.Fragment>
    </div>
  )
}

export default TransitionWrapper
