import React from 'react'

const Notification = () => {
  return (
    <div className='fixed bottom-30 w-[100vw] h-[10vh] border '>
      <div className='h-[.5vh]  bg-accent  '></div>
      <div className=' bg-mutedBlack h-max p-2 w-[25vh]'>
        Message Sent Successfully
      </div>
    </div>
  )
}

export default Notification
