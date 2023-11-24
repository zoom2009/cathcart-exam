import React, { memo } from 'react'
import Image from 'next/image'
import human1Pic from '@/assets/images/human1.png'

const Human1 = () => {
  return (
    <Image
      src={human1Pic}
      alt="human1"
      style={{ flexShrink: 0 }}
      className="absolute z-30 w-[678px] h-[950px] left-[175px] top-[50px]"
    />
  )
}

export default memo(Human1)
