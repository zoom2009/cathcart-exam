import React, { memo } from 'react'

const PathLine = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={223}
    height={238}
    fill="none"
    {...props}
  >
    <path stroke="#936EEA" strokeWidth={5} d="M2.537 235.699 220.234 1.982" />
  </svg>
)

export default memo(PathLine)
