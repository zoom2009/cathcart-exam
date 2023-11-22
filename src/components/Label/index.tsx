import React, { memo } from 'react'
import { tw } from '@/components/tw'
import { ILabelProps } from './interface'
import { labelClasses } from './styles'

const Label = (props: ILabelProps) => {
  const {
    children,
    variant = 'base',
    mode = 'light',
  } = props

  return (
    <div
      className={tw([
        labelClasses.base,
        labelClasses[variant],
        labelClasses[mode]],
      )}
    >
      {children}
    </div>
  )
}

export default memo(Label)
