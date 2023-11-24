import React from 'react'
import PageContainer from '@/components/PageContainer'
import Label from '@/components/Label'
import SubSectionContent from '@/components/SubSectionContent'
import { tw } from '@/components/tw'
import { wording } from './constants'
import { classes } from './styles'

const Home = () => {
  return (
     <PageContainer>
        {/* Section Right */}
        <div className={classes.container}>
          <div className={tw([classes.sectionRight.textContainer, 'mb-[10px]'])}>
            <Label variant="title">{wording.titleRight}</Label>
          </div>
          <div className={classes.sectionRight.container}>
            <div className={classes.sectionRight.textContainer}>
              <SubSectionContent
                no={wording.sectionRight1.no}
                title={wording.sectionRight1.title}
                desc={wording.sectionRight1.desc}
              />
            </div>
          </div>
          <div className={tw([classes.sectionRight.container, 'bg-section-gray'])}>
            <div className={classes.sectionRight.textContainer}>
              <SubSectionContent
                no={wording.sectionRight2.no}
                title={wording.sectionRight2.title}
                desc={wording.sectionRight2.desc}
              />
            </div>
          </div>
          <div className={tw([classes.sectionRight.container, 'bg-primary'])}>
            <div className={classes.sectionRight.textContainer}>
              <SubSectionContent
                no={wording.sectionRight3.no}
                title={wording.sectionRight3.title}
                desc={wording.sectionRight3.desc}
                mode="dark"
              />
            </div>
          </div>
          {/* Section Left */}
          <div className={tw([classes.sectionLeft.textContainer, 'ml-[321px]'])}>
            <div className={classes.sectionLeft.title}>
              <Label variant="title">{wording.titleLeft}</Label>
            </div>
          </div>
          <div className={classes.sectionLeft.container}>
            <div className={tw([classes.sectionLeft.textContainer, 'ml-[322px]'])}>
              <SubSectionContent
                no={wording.sectionLeft1.no}
                title={wording.sectionLeft1.title}
                desc={wording.sectionLeft1.desc}
              />
            </div>
          </div>
          <div className={tw([classes.sectionLeft.container, 'bg-section-gray'])}>
            <div className={tw([classes.sectionLeft.textContainer, 'ml-[322px]'])}>
              <SubSectionContent
                no={wording.sectionLeft2.no}
                title={wording.sectionLeft2.title}
                desc={wording.sectionLeft2.desc}
              />
            </div>
          </div>
          <div className={tw([classes.sectionLeft.container, 'bg-dark-primary'])}>
            <div className={tw([classes.sectionLeft.textContainer, 'ml-[323px]'])}>
              <SubSectionContent
                no={wording.sectionLeft3.no}
                title={wording.sectionLeft3.title}
                desc={wording.sectionLeft3.desc}
                mode="primary-dark"
              />
            </div>
          </div>
        </div>
     </PageContainer>
  )
}

export default Home
