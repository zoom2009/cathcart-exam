import { tw } from '@/components/tw'

export const classes = {
  container: tw([
    `flex flex-col w-full`,
    `md:pt-[50px]`,
    `lg:pt-[100px]`,
  ]),
  space1: tw([
    `h-[251px]`,
    `md:h-[15px]`,
    `lg:h-[10px]`,
  ]),
  space2: tw([
    `h-[220px]`,
    `md:h-0`,
  ]),
  titleContainer: tw([
    `pt-[20px]`,
    `md:pt-0 md:pl-0`,
    `min-[1300px]:pr-[10%]`,
    `lg:pr-0`,
  ]),
  sectionRight: {
    container: tw([
      `flex flex-col pt-[60px] pb-[65px] min-h-[258px]`,
      `md:py-[30px] md:min-h-0`,
      `min-[1300px]:pr-[10%] min-[1300px]:py-[50px]`,
      `lg:pr-0 lg:py-[60px]`,
    ]),
    textContainer: tw([
      `w-full px-[20px]`,
      `md:ml-auto md:w-[447px] md:mr-[30px] md:px-0`,
      `min-[1300px]:w-[500px]`,
      `min-[1500px]:w-[600px]`,
      `lg:w-[717px] lg:mr-[195px]`,
    ]),
  },
  sectionLeft: {
    title: tw([
      `pt-[20px] pl-[20px]`,
      `md:mt-[50px] md:pt-0 md:pl-0`,
      `min-[1400px]:pl-[10vw]`,
      `lg:mt-[100px] lg:pl-0 lg:mb-[20px]`,
    ]),
    container: tw([
      `flex flex-col py-[60px] h-[204px] px-[20px]`,
      `md:p-[30px] md:min-h-0 md:h-auto`,
      `min-[1300px]:py-[50px]`,
      `min-[1400px]:pl-[10vw]`,
      `lg:py-[60px] lg:pl-0`,
    ]),
    textContainer: tw([
      `w-full`,
      `md:w-[447px]`,
      `min-[1500px]:w-[600px]`,
      `lg:w-[717px] lg:ml-[321px]`,
    ]),
    moreSpace: tw([
      `mt-[5px]`,
      `md:mt-0`,
    ]),
    showTabletAndDesktop: tw([
      `hidden`,
      `md:flex`,
    ]),
    showMobile: tw([
      `flex`,
      `md:hidden`,
    ]),
  },
}
