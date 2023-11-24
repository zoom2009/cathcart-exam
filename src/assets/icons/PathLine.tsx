import React, { memo } from 'react'

const PathLine = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={268}
    height={309}
    fill="none"
    {...props}
  >
    <path stroke="#936EEA" strokeWidth={6} d="M3.133 306.957 265.648 2.84" />
  </svg>
)

export default memo(PathLine)
