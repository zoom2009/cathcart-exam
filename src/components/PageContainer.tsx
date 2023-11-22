import React, { memo } from 'react'

interface IPageContainerProps {
  children: React.ReactNode
}

const PageContainer = (props: IPageContainerProps) => {
  const { children } = props

  return (
    <div className="mx-auto max-w-maximum min-h-screen overflow-y-scroll flex flex-col">
      {children}
    </div>
  )
}

export default memo(PageContainer)
