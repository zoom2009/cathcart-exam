import React, { memo } from 'react'

const PathLineSmall1 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={110}
    height={127}
    fill="none"
    {...props}
  >
    <path stroke="#936EEA" strokeWidth={3} d="M2 125.117 108.346 1.918" />
  </svg>
)

export default memo(PathLineSmall1)
