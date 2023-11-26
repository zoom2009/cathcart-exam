import React, { memo } from 'react'
import Image from 'next/image'
import human1Pic from '@/assets/images/human1.png'
import { tw } from '@/components/tw'
import Plus from '@/assets/icons/Plus'
import PlusOutline from '@/assets/icons/PlusOutline'
import PathLine from '@/assets/icons/human1/PathLine'
import PathLineSmall from '@/assets/icons/human1/PathLineSmall'

const classes = {
  container: tw([
    `absolute z-30 w-[200px] h-[281px] top-[94px] ml-[calc(50%-100px)] shrink-0`,
    `md:ml-0 md:w-[518px] md:h-[699px] md:-left-[161px] md:top-[90px]`,
    `min-[900px]:ml-[8%]`,
    `min-[1000px]:ml-[12%]`,
    `min-[1500px]:ml-[16%]`,
    `min-[1700px]:ml-[18%]`,
    'lg:ml-0 lg:w-[678px] lg:h-[950px] lg:left-[175px] lg:top-[50px]',
  ]),
  image: tw(`w-full h-full top-0 left-0 absolute z-20`),
  plus1: tw([
    `absolute visible top-[20px] left-[4px]`,
    `md:-top-[11px] md:left-[220.51px]`,
    `lg:hidden`,
  ]),
  plus2: tw([
    `absolute visible top-[11px] -left-[18px]`,
    `md:-top-[19px] md:left-[197.63px]`,
    `lg:hidden`,
  ]),
  pathLine: tw([
    `absolute hidden`,
    `md:flex top-[18.98px] left-[197.54px] shrink-0`,
    `lg:hidden`,
  ]),
  pathLineSmall: tw([
    `absolute flex top-[12.91px] -left-[1.64px]`,
    `md:hidden`,
  ]),
}

const Human1 = () => {
  return (
    <div className={classes.container}>
      <Plus className={classes.plus1} />
      <PlusOutline className={classes.plus2} />
      <PathLineSmall className={classes.pathLineSmall} />
      <PathLine className={classes.pathLine} />
      <Image src={human1Pic} alt="human1" className={classes.image} />
    </div>
  )
}

export default memo(Human1)
