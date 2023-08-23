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
    <div className='relative flex max-w-[100vw] flex-col justify-between max-h-screen h-screen w-screen md:overflow-y-hidden overflow-x-hidden bg-mutedBlack text-mutedWhite select-none cursor-default'>
      <AnimatePresence mode='wait'>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: active ? 1 : 0,
            transformOrigin: active ? 'left' : 'right',
          }}
          transition={{ duration: 0.2 }}
          className='absolute top-0 h-full w-full bg-accent z-50'
        />
        {!active && children}
      </AnimatePresence>
    </div>
  )
}

export default TransitionWrapper
