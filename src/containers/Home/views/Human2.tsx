import React, { memo } from 'react'
import Image from 'next/image'
import human2Pic from '@/assets/images/human2.png'
import Plus from '@/assets/icons/Plus'
import { tw } from '@/components/tw'
import PlusOutline from '@/assets/icons/PlusOutline'
import PathLineSmall1 from '@/assets/icons/human2/PathLineSmall1'
import PathLineSmall2 from '@/assets/icons/human2/PathLineSmall2'
import PathLineMedium1 from '@/assets/icons/human2/PathLineMedium1'
import PathLine1 from '@/assets/icons/human2/PathLine1'
import PathLine2 from '@/assets/icons/human2/PathLine2'

const classes = {
  container: tw([
    `absolute z-30 w-[302px] h-[249px] bottom-[159px] ml-[calc(50%-151px)] shrink-0`,
    `md:ml-0 md:w-[691px] md:h-[568px] md:bottom-[109px] md:right-[-254px]`,
    `min-[900px]:mr-[8%]`,
    `min-[1000px]:mr-[12%]`,
    `min-[1500px]:mr-[16%]`,
    `min-[1700px]:mr-[18%]`,
    'lg:mr-0 lg:w-[991px] lg:h-[815px] lg:right-[125px] lg:bottom-[59px]',
  ]),
  image: tw(`w-full h-full top-0 left-0 absolute z-20`),
  plus1: tw([
    `absolute top-[8px] left-[71px]`,
    `md:top-[72px] md:left-[202px]`,
    `lg:top-[131px] lg:left-[294px]`,
  ]),
  plus2: tw([
    `absolute -top-[1px] left-[49px]`,
    `md:top-[89px] md:left-[224px]`,
    `lg:top-[148px] lg:left-[316px]`,
  ]),
  plus3: tw([
    `absolute top-[149px] right-[21px]`,
    `md:top-[48%] md:right-[140px]`,
    `lg:top-[401px] lg:right-[202px]`,
  ]),
  pathLine1Small: tw([
    `absolute flex left-[49px] top-[108.92px]`,
    `md:hidden`,
  ]),
  pathLine2Small: tw([
    `absolute flex right-[28.42px] top-[23.32px]`,
    `md:hidden`,
  ]),
  pathLine1Medium: tw([
    `hidden absolute left-[159px] bottom-[96.88px]`,
    `md:flex`,
    `lg:hidden`,
  ]),
  pathLine2Medium: tw([
    `hidden absolute right-[40px] top-[50px]`,
    `md:flex`,
    `lg:hidden`,
  ]),
  pathLine1: tw([
    `hidden absolute left-[185.13px] bottom-[53.04px]`,
    `lg:flex`,
  ]),
  pathLine2: tw([
    `hidden absolute right-[64.48px] top-[81px]`,
    `lg:flex`,
  ]),
}

const Human2 = () => {
  return (
  <div className={classes.container}>
      <Image src={human2Pic} alt="human2" className={classes.image} />
      <Plus className={classes.plus1} />
      <PlusOutline className={classes.plus2} />
      <Plus className={classes.plus3} />
      <PathLineSmall1 className={classes.pathLine1Small} />
      <PathLineSmall2 className={classes.pathLine2Small} />
      <PathLineMedium1 className={classes.pathLine1Medium} />
      <PathLineMedium1 className={classes.pathLine2Medium} />
      <PathLine1 className={classes.pathLine1} />
      <PathLine2 className={classes.pathLine2} />
    </div>
  )
}

export default memo(Human2)
