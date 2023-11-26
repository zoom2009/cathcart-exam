"use client"

import React, { memo } from 'react'
import Carousel from 'nuka-carousel'

const CarouselWrapper = (props: { children: React.ReactNode }) => {
  return (
    <>
      <div className="hidden md:flex md:flex-col w-full">
        {props.children}
      </div>
      <div className="visible md:hidden w-full">
        <Carousel
          defaultControlsConfig={{
            nextButtonClassName: 'hidden',
            prevButtonClassName: 'hidden',
            pagingDotsClassName: 'w-[10px] h-[10px]',
            pagingDotsContainerClassName: 'w-[54px]',
          }}
        >
          {props.children}
        </Carousel>
      </div>
    </>
  )
}

export default memo(CarouselWrapper)
