import React, { memo } from 'react'

interface IPageContainerProps {
  children: React.ReactNode
}

const PageContainer = (props: IPageContainerProps) => {
  const { children } = props

  return (
    <div className="mx-auto w-screen overflow-y-scroll flex flex-col relative overflow-x-hidden">
      {children}
    </div>
  )
}

export default memo(PageContainer)
