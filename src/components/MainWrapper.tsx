import React from 'react'

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return <main className='flex flex-1 flex-col'>{children}</main>
}

export default MainWrapper
