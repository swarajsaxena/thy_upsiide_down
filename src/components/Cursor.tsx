'use client'

import React, { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

const Cursor = () => {
  const [hidden, setHidden] = useState(true)
  const spring = {
    stiffness: 200,
    damping: 10,
    mass: 0.1,
  }
  const mousePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  }

  useEffect(() => {
    const mouseMov = (e: MouseEvent) => {
      setHidden(false)
      mousePos.x.set(e.clientX - 12)
      mousePos.y.set(e.clientY - 12)
    }

    window.addEventListener('mousemove', mouseMov)

    return () => {
      window.removeEventListener('mousemove', mouseMov)
    }
  }, [])

  return (
    <motion.span
      transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      className={`fixed border border-mutedWhite/40 hidden md:inline top-0 left-0 z-999 rounded-full pointer-events-none transition-[height,width,border,background] duration-200 cursor-pointer w-6 h-6 bg-mutedWhite/80`}
      style={{
        x: mousePos.x,
        y: mousePos.y,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: hidden ? 0 : 1 }}
    />
  )
}

export default Cursor
