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
  titleContainer: tw([
    `pt-[20px] pl-[20px]`,
    `md:pt-0 md:pl-0`,
    `min-[1300px]:pr-[10%]`,
    `lg:pr-0`,
  ]),
  sectionRight: {
    container: tw([
      `flex flex-col py-[60px]`,
      `min-[1300px]:pr-[10%] min-[1300px]:py-[50px]`,
      `md:py-[30px]`,
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
      `mb-[20px]`,
      `md:mt-[50px]`,
      `min-[1400px]:pl-[10vw]`,
      `lg:mt-[100px] lg:pl-0`,
    ]),
    container: tw([
      `flex flex-col w-full`,
      `md:py-[30px]`,
      `min-[1300px]:py-[50px]`,
      `min-[1400px]:pl-[10vw]`,
      `lg:py-[60px] lg:pl-0`,
    ]),
    textContainer: tw([
      `md:ml-[30px] md:w-[447px]`,
      `min-[1500px]:w-[600px]`,
      `lg:w-[717px]`,
    ]),
  },
}
