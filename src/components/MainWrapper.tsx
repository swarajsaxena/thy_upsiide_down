import React from 'react'

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return <main className='overflow-scroll scrollbar-none'>{children}</main>
}

export default MainWrapper
