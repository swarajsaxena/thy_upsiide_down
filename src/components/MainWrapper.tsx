import React from 'react'

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return <main className='flex flex-col h-screen'>{children}</main>
}

export default MainWrapper
