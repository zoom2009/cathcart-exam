import { tw } from '@/components/tw'

export const classes = {
  container: tw(`flex flex-col w-full pt-[100px]`),
  sectionRight: {
    container: tw(`flex flex-col w-full py-[60px]`),
    textContainer: tw(`w-[717px] mr-[195px] ml-auto`),
  },
  sectionLeft: {
    title: tw(`mb-[20px] mt-[100px]`),
    container: tw(`flex flex-col w-full py-[60px]`),
    textContainer: tw(`w-[717px]`),
  },
}
