import React, { memo } from 'react'
import Image from 'next/image'
import human1Pic from '@/assets/images/human1.png'
import { tw } from '@/components/tw'
import Plus from '@/assets/icons/Plus'
import PlusOutline from '@/assets/icons/PlusOutline'
import PathLine from '@/assets/icons/PathLine'

const classes = {
  wrapper: tw([
    `absolute z-30`,
    `md:w-[518px] md:h-[699px] md:right-[411px] md:top-[90px]`,
    `lg:w-[678px] lg:h-[950px] lg:left-[175px] lg:top-[50px]`,
  ]),
  container: tw(`relative w-full h-full`),
  image: tw(`absolute top-0 left-0 right-0 bottom-0 z-30 w-full h-full shrink-0`),
  plus1: tw(`md:flex lg:hidden absolute right-[281.88px] bottom-[696px]`),
  plus2: tw(`md:flex lg:hidden absolute left-[197.63px] -top-[19px]`),
  pathLine1: tw(`absolute z-10 top-[18.98px] right-[102.77px]`),
}

const Human1 = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Image src={human1Pic} alt="human1" className={classes.image} />
        <Plus className={classes.plus1} />
        <PlusOutline className={classes.plus2} />
        <PathLine className={classes.pathLine1} />
      </div>
    </div>
  )
}

export default memo(Human1)
