import React, { memo } from 'react'

const PathLineSmall = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={182}
    height={201}
    fill="none"
    {...props}
  >
    <path stroke="#936EEA" strokeWidth={3} d="M1.36 199.145 180.251 1.91" />
  </svg>
)

export default memo(PathLineSmall)
