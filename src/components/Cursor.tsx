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
      mousePos.x.set(e.clientX - 24)
      mousePos.y.set(e.clientY - 24)
    }

    window.addEventListener('mousemove', mouseMov)

    return () => {
      window.removeEventListener('mousemove', mouseMov)
    }
  }, [])

  return (
    <motion.span
      transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      className={`fixed hidden md:inline top-0 left-0 z-50 rounded-full pointer-events-none transition-[height,width,border,background] duration-200 cursor-pointer w-12 h-12 bg-mutedWhite/20 ${
        hidden ? 'hidden' : 'inline'
      }`}
      style={{
        x: mousePos.x,
        y: mousePos.y,
      }}
    />
  )
}

export default Cursor
