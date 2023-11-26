import React from 'react'
import PageContainer from '@/components/PageContainer'
import Label from '@/components/Label'
import SubSectionContent from '@/components/SubSectionContent'
import { tw } from '@/components/tw'
import { wording } from './constants'
import { classes } from './styles'
import Human1 from './views/Human1'
import Human2 from './views/Human2'
import CarouselWrapper from './views/CarouselWrapper'

const Home = () => {
  return (
     <PageContainer>
        <Human1 />
        <Human2 />
        {/* Section Right */}
        <div className={classes.container}>
          <div className={classes.titleContainer}>
            <div className={classes.sectionRight.textContainer}>
              <Label variant="title">{wording.titleRight}</Label>
            </div>
          </div>
          <div className={classes.space1} />
          <CarouselWrapper length={3}>
            <div className={tw([classes.sectionRight.container, 'bg-section-gray md:bg-white'])}>
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
            <div className={tw([classes.sectionRight.container, 'bg-section-gray md:bg-primary'])}>
              <div className={classes.sectionRight.textContainer}>
                <div className="hidden md:flex">
                  <SubSectionContent
                    no={wording.sectionRight3.no}
                    title={wording.sectionRight3.title}
                    desc={wording.sectionRight3.desc}
                    mode="dark"
                  />
                </div>
                <div className="flex md:hidden">
                  <SubSectionContent
                    no={wording.sectionRight3.no}
                    title={wording.sectionRight3.title}
                    desc={wording.sectionRight3.desc}
                  />
                </div>
              </div>
            </div>
          </CarouselWrapper>
          {/* Section Left */}
          <div className={tw([classes.sectionLeft.textContainer, 'md:ml-[30px]'])}>
            <div className={classes.sectionLeft.title}>
              <Label variant="title">{wording.titleLeft}</Label>
            </div>
          </div>
          <div className={classes.space2} />
          <CarouselWrapper length={3}>
            <div className={tw([classes.sectionLeft.container, 'bg-section-gray md:bg-white'])}>
              <div className={tw(classes.sectionLeft.textContainer)}>
                <SubSectionContent
                  no={wording.sectionLeft1.no}
                  title={wording.sectionLeft1.title}
                  desc={wording.sectionLeft1.desc}
                />
              </div>
            </div>
            <div className={tw([classes.sectionLeft.container, 'bg-section-gray'])}>
              <div className={tw(classes.sectionLeft.textContainer)}>
                <SubSectionContent
                  no={wording.sectionLeft2.no}
                  title={wording.sectionLeft2.title}
                  desc={wording.sectionLeft2.desc}
                />
              </div>
            </div>
            <div className={tw([classes.sectionLeft.container, 'bg-section-gray md:bg-dark-primary'])}>
              <div className={tw(classes.sectionLeft.textContainer)}>
                <div className="hidden md:flex">
                  <SubSectionContent
                    no={wording.sectionLeft3.no}
                    title={wording.sectionLeft3.title}
                    desc={wording.sectionLeft3.desc}
                    mode="primary-dark"
                  />
                </div>
                <div className="flex md:hidden">
                  <SubSectionContent
                    no={wording.sectionLeft3.no}
                    title={wording.sectionLeft3.title}
                    desc={wording.sectionLeft3.desc}
                  />
                </div>
              </div>
            </div>
          </CarouselWrapper>
        </div>
     </PageContainer>
  )
}

export default Home
