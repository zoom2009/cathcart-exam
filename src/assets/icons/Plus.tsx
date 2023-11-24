import React, { memo } from 'react'

const Plus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={17}
      height={17}
      x={0}
      y={0}
      fill="#000"
      maskUnits="userSpaceOnUse"
    >
      <path fill="#fff" d="M0 0h17v17H0z" />
      <path
        fillRule="evenodd"
        d="M8.5 1a.5.5 0 0 0-.5.5V8H1.5a.5.5 0 0 0 0 1H8v6.5a.5.5 0 0 0 1 0V9h6.5a.5.5 0 0 0 0-1H9V1.5a.5.5 0 0 0-.5-.5Z"
        clipRule="evenodd"
      />
    </mask>
    <path
      fill="#5C37B7"
      fillRule="evenodd"
      d="M8.5 1a.5.5 0 0 0-.5.5V8H1.5a.5.5 0 0 0 0 1H8v6.5a.5.5 0 0 0 1 0V9h6.5a.5.5 0 0 0 0-1H9V1.5a.5.5 0 0 0-.5-.5Z"
      clipRule="evenodd"
    />
    <path
      fill="#9173E6"
      d="M8 8v1h1V8H8Zm0 1h1V8H8v1Zm1 0V8H8v1h1Zm0-1H8v1h1V8Zm0-6.5a.5.5 0 0 1-.5.5V0A1.5 1.5 0 0 0 7 1.5h2ZM9 8V1.5H7V8h2ZM1.5 9H8V7H1.5v2Zm.5-.5a.5.5 0 0 1-.5.5V7A1.5 1.5 0 0 0 0 8.5h2ZM1.5 8a.5.5 0 0 1 .5.5H0A1.5 1.5 0 0 0 1.5 10V8ZM8 8H1.5v2H8V8Zm1 7.5V9H7v6.5h2Zm-.5-.5a.5.5 0 0 1 .5.5H7A1.5 1.5 0 0 0 8.5 17v-2Zm-.5.5a.5.5 0 0 1 .5-.5v2a1.5 1.5 0 0 0 1.5-1.5H8ZM8 9v6.5h2V9H8Zm7.5-1H9v2h6.5V8Zm-.5.5a.5.5 0 0 1 .5-.5v2A1.5 1.5 0 0 0 17 8.5h-2Zm.5.5a.5.5 0 0 1-.5-.5h2A1.5 1.5 0 0 0 15.5 7v2ZM9 9h6.5V7H9v2ZM8 1.5V8h2V1.5H8Zm.5.5a.5.5 0 0 1-.5-.5h2A1.5 1.5 0 0 0 8.5 0v2Z"
      mask="url(#a)"
    />
  </svg>
)

export default memo(Plus)
