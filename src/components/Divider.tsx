import React from 'react'
import { FiPlus } from 'react-icons/fi'

const Divider = ({
  orientation = 'horizontal',
  icons = true,
}: {
  orientation?: 'vertical' | 'horizontal'
  icons?: boolean
}) => {
  return (
    <div
      className={`text-mutedWhite/50 text-base items-center flex gap-2 justify-between ${
        orientation === 'horizontal' ? 'flex-row' : 'flex-col'
      }`}
    >
      {icons && <FiPlus />}
      <div
        className={`bg-mutedWhite/50 ${
          orientation === 'horizontal' ? 'w-full h-[1px]' : 'w-[1px] h-full'
        }`}
      />
      {icons && <FiPlus />}
    </div>
  )
}

export default Divider
