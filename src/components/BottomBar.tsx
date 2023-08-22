'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

const BottomBar = () => {
  const pathname = usePathname()

  // Check if the current pathname is "/"
  if (pathname === '/') {
    return null // Don't render anything when pathname is "/"
  }

  return (
    <main className='flex flex-col items-center justify-between'>
      Bottom bar
    </main>
  )
}

export default BottomBar
