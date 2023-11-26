"use client"

import React, { memo } from 'react'
import Carousel from 'nuka-carousel'
import { tw } from '@/components/tw'

const classes = {
  displayMobile: tw(`visible md:hidden w-full`),
  displayTabletAndDesktop: tw(`hidden md:flex md:flex-col w-full`),
  dotsContainer: tw(`absolute bottom-[25px] left-[calc(50%-27px)] flex flex-row w-[54px] items-center justify-between`),
  dot: tw(`w-[10px] h-[10px] rounded-full bg-dot-in-active`),
  dotActive: tw(`bg-dot-active`),
}

const renderBottomCenterControls = ({ currentSlide }: { currentSlide: number }) => {
  return (
    <div className={classes.dotsContainer}>
      <div className={tw([classes.dot, currentSlide === 0 && classes.dotActive])} />
      <div className={tw([classes.dot, currentSlide === 1 && classes.dotActive])} />
      <div className={tw([classes.dot, currentSlide === 2 && classes.dotActive])} />
    </div>
  )
}

const CarouselWrapper = (props: { children: React.ReactNode }) => {
  return (
    <>
      <div className={classes.displayTabletAndDesktop}>
        {props.children}
      </div>
      <div className={classes.displayMobile}>
        <Carousel
          defaultControlsConfig={{
            nextButtonClassName: 'hidden',
            prevButtonClassName: 'hidden',
          }}
          renderBottomCenterControls={renderBottomCenterControls}
        >
          {props.children}
        </Carousel>
      </div>
    </>
  )
}

export default memo(CarouselWrapper)
