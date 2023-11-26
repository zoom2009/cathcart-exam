import React, { memo } from 'react'

const PathLineSmall2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={93}
    fill="none"
    {...props}
  >
    <path stroke="#936EEA" strokeWidth={3} d="M1.89 91.16 78.583 1.322" />
  </svg>
)

export default memo(PathLineSmall2)
