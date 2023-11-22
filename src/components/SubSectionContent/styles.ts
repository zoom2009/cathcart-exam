import { tw } from '@/components/tw'

export const classes = {
  container: tw(`flex flex-col`),
  titleContainer: tw(`flex flex-row items-center`),
  noContainer: tw(`flex flex-col items-center justify-center w-[22px] mr-[10px]`),
  no: tw(`text-[18px] tracking-[1.5px] text-center`),
  noUnderLine: tw(`h-[5px] w-full rounded-[2.5px]`),
  noUnderLineStyle: {
    light: 'bg-underline-primary',
    dark: 'bg-white',
  },
  space: tw(`h-[20px]`),
  desc: tw(`text-[20px] leading-[28px]`),
  descStyle: {
    light: tw(`text-black`),
    dark: tw(`text-white`),
  },
}
