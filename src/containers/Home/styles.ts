import { tw } from '@/components/tw'

export const classes = {
  container: tw([
    `flex flex-col w-full`,
    `md:pt-[50px]`,
    `lg:pt-[100px]`,
  ]),
  space1: tw([
    `md:h-[15px]`,
    `lg:h-[10px]`,
  ]),
  sectionRight: {
    container: tw([
      `flex flex-col w-full`,
      `md:py-[30px]`,
      `lg:py-[60px]`,
    ]),
    textContainer: tw([
      `ml-auto`,
      `md:w-[447px] md:mr-[30px]`,
      `lg:w-[717px] lg:mr-[195px]`,
    ]),
  },
  sectionLeft: {
    title: tw([
      `mb-[20px]`,
      `md:mt-[50px]`,
      `lg:mt-[100px]`,
    ]),
    container: tw([
      `flex flex-col w-full`,
      `md:py-[30px]`,
      `lg:py-[60px]`,
    ]),
    textContainer: tw([
      `md:ml-[30px] md:w-[447px]`,
      `lg:w-[717px]`,
    ]),
  },
}
