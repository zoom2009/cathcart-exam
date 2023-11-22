import React from 'react'
import PageContainer from '@/components/PageContainer'
import { classes } from './styles'
import Label from '@/components/Label'
import SubSectionContent from '@/components/SubSectionContent'
import { tw } from '@/components/tw'
import { wording } from './constants'

const Home = () => {
  return (
     <PageContainer>
        <div className={classes.container}>
          <div className={tw([classes.section.textContainer, 'mb-[10px]'])}>
            <Label variant="title">{wording.title}</Label>
          </div>
          <div className={classes.section.container}>
            <div className={classes.section.textContainer}>
              <SubSectionContent
                no={wording.section1.no}
                title={wording.section1.title}
                desc={wording.section1.desc}
              />
            </div>
          </div>
          <div className={tw([classes.section.container, 'bg-section-gray'])}>
            <div className={classes.section.textContainer}>
              <SubSectionContent
                no={wording.section2.no}
                title={wording.section2.title}
                desc={wording.section2.desc}
              />
            </div>
          </div>
          <div className={tw([classes.section.container, 'bg-primary'])}>
            <div className={classes.section.textContainer}>
              <SubSectionContent
                no={wording.section3.no}
                title={wording.section3.title}
                desc={wording.section3.desc}
                mode="dark"
              />
            </div>
          </div>
        </div>
     </PageContainer>
  )
}

export default Home
