import React, { memo } from 'react'
import Image from 'next/image'
import human2Pic from '@/assets/images/human2.png'

const Human2 = () => {
  return (
    <Image
      src={human2Pic}
      alt="human2"
      style={{ flexShrink: 0 }}
      className="absolute z-30 w-[991px] h-[815px] right-[125px] bottom-[59px]"
    />
  )
}

export default memo(Human2)
