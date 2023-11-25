import { tw } from '@/components/tw'

export const classes = {
  container: tw(`flex flex-col`),
  titleContainer: tw(`flex flex-row items-center`),
  noContainer: tw(`flex flex-col items-center justify-center w-[22px] mr-[10px]`),
  no: {
    base: tw(`text-[18px] tracking-[1.5px] text-center`),
    light: tw(``),
    dark: tw(``),
    'primary-dark': tw(`text-text-dark-primary`),
  },
  noUnderLine: tw(`h-[5px] w-full rounded-[2.5px] mt-[4px]`),
  noUnderLineStyle: {
    light: tw(`bg-underline-primary`),
    dark: tw(`bg-white`),
    'primary-dark': tw(`bg-white`),
  },
  space: tw(`h-[20px]`),
  desc: {
    base: tw([
      `leading-[28px]`,
      `md:text-[18px]`,
      `min-[1300px]:text-[19px]`,
      `lg:text-[20px]`,
    ]),
    light: tw(`text-black`),
    dark: tw(`text-white`),
    'primary-dark': tw(`text-white`),
  },
}
