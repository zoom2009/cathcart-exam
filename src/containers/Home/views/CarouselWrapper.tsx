"use client"

import React, { memo, useCallback } from 'react'
import Carousel from 'nuka-carousel'
import { tw } from '@/components/tw'

const classes = {
  displayMobile: tw(`visible md:hidden w-full`),
  displayTabletAndDesktop: tw(`hidden md:flex md:flex-col w-full`),
  dotsContainer: tw(`absolute bottom-[25px] left-[calc(50%-27px)] flex flex-row min-w-[54px] items-center justify-between`),
  dot: tw(`w-[10px] h-[10px] rounded-full bg-dot-in-active`),
  dotActive: tw(`bg-dot-active`),
}

interface ICarouselWrapperProps {
  length: number
  children: React.ReactNode
}

const CarouselWrapper = (props: ICarouselWrapperProps) => {
  const { children, length } = props

  const renderBottomCenterControls = useCallback(({ currentSlide }: { currentSlide: number }) => {
    return (
      <div className={classes.dotsContainer}>
        {[...Array(length)].map((d, index) => (
          <div
            key={`${index}`}
            className={tw([classes.dot, currentSlide === index && classes.dotActive])}
          />
        ))}
      </div>
    )
  }, [children, length])

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
