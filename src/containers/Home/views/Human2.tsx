import React, { memo } from 'react'
import Image from 'next/image'
import human2Pic from '@/assets/images/human2.png'
import Plus from '@/assets/icons/Plus'
import { tw } from '@/components/tw'
import PlusOutline from '@/assets/icons/PlusOutline'
import PathLine from '@/assets/icons/PathLine'

const classes = {
  wrapper: tw(`absolute z-10 w-[991px] h-[815px] right-[125px] bottom-[59px]`),
  container: tw(`relative w-full h-full`),
  image: tw(`absolute top-0 left-0 right-0 bottom-0 z-30 w-full h-full shrink-0`),
  plus1: tw(`absolute top-[131px] left-[294px]`),
  plus2: tw(`absolute top-[148px] left-[316px]`),
  plus3: tw(`absolute top-[401px] right-[202px]`),
  pathLine1: tw(`absolute bottom-[53.04px] z-10 left-[185.13px]`),
  pathLine2: tw(`absolute top-[81px] z-10 right-[64.48px]`),
}

const Human2 = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Image src={human2Pic} alt="human2" className={classes.image} />
        <Plus className={classes.plus1} />
        <PlusOutline className={classes.plus2} />
        <Plus className={classes.plus3} />
        <PathLine className={classes.pathLine1} />
        <PathLine className={classes.pathLine2} />
      </div>
    </div>
  )
}

export default memo(Human2)
