import React, { memo } from 'react'
import Image from 'next/image'
import human1Pic from '@/assets/images/human1.png'
import { tw } from '@/components/tw'
import Plus from '@/assets/icons/Plus'
import PlusOutline from '@/assets/icons/PlusOutline'
import PathLine from '@/assets/icons/PathLine'
import PathLineSmall from '@/assets/icons/PathLineSmall'

const classes = {
  wrapper: tw([
    `absolute z-30`,
    'w-[200px] h-[281px] top-[94px] right-1/2 transform translate-x-1/2',
    `md:transform-none md:w-[518px] md:h-[699px] md:right-[411px] md:top-[90px]`,
    `lg:w-[678px] lg:h-[950px] lg:right-[1067px] lg:top-[50px]`,
    `min-[1100px]:left-[10%]`,
  ]),
  container: tw(`relative w-full h-full`),
  image: tw([
    `w-full h-full absolute top-0 left-0 right-0 bottom-0 z-30 shrink-0`,
    `lg:object-none`,
  ]),
  plus1: tw([
    `absolute top-[20px] left-[4px]`,
    `md:flex md:right-[281.88px] md:bottom-[696px]`,
    `lg:hidden`,
  ]),
  plus2: tw([
    `absolute left-[-18px] top-[11px]`,
    `md:flex md:left-[197.63px] md:-top-[19px]`,
    `lg:hidden`,
  ]),
  pathLine1: tw([
    `absolute z-10 top-[12.91px] right-[22.75px]`,
    `md:top-[18.98px] md:right-[102.77px]`,
    `lg:hidden`,
  ]),
}

const Human1 = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Image src={human1Pic} alt="human1" className={classes.image} />
        <Plus className={classes.plus1} />
        <PlusOutline className={classes.plus2} />
        <div className="flex md:hidden">
          <PathLineSmall className={classes.pathLine1} />
        </div>
        <div className="hidden md:flex">
          <PathLine className={classes.pathLine1} />
        </div>
      </div>
    </div>
  )
}

export default memo(Human1)
