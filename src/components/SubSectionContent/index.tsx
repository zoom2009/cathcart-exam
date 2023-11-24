import React, { memo } from 'react'
import { ISubSectionContentProps } from './interface'
import { classes } from './styles'
import Label from '@/components/Label'
import { tw } from '../tw'

const SubSectionContent = (props: ISubSectionContentProps) => {
  const {
    no,
    title,
    desc,
    mode = 'light',
  } = props

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <div className={classes.noContainer}>
          <div className={classes.no[mode]}>{no}</div>
          <div className={tw([classes.noUnderLine, classes.noUnderLineStyle[mode]])} />
        </div>
        <Label variant="sub-title">{title}</Label>
      </div>
      <div className={classes.space} />
      <div className={tw([classes.desc, classes.descStyle[mode]])}>
        {desc}
      </div>
    </div>
  )
}

export default memo(SubSectionContent)
