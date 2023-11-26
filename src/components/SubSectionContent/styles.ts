import { tw } from '@/components/tw'

export const classes = {
  container: tw(`flex flex-col`),
  titleContainer: tw(`flex flex-row items-center`),
  noContainer: tw([
    `flex flex-col items-center justify-center mr-[10px] w-[17.746px]`,
    `md:w-[22px]`,
  ]),
  no: {
    base: tw([
      `text-[14px] tracking-[1.5px] text-center w-[17.746px]`,
      `md:w-auto md:text-[18px]`
    ]),
    light: tw(``),
    dark: tw(``),
    'primary-dark': tw(`text-text-dark-primary`),
  },
  noUnderLine: tw(`h-[4px] md:h-[5px] w-full rounded-[2.5px] mt-[1px] md:mt-[4px]`),
  noUnderLineStyle: {
    light: tw(`bg-underline-primary`),
    dark: tw(`bg-white`),
    'primary-dark': tw(`bg-white`),
  },
  space: tw([
    `h-[10px]`,
    `md:h-[20px]`,
  ]),
  desc: {
    base: tw([
      `text-[15px] !leading-[18px]`,
      `md:text-[18px] md:leading-[28px]`,
      `min-[1300px]:text-[19px]`,
      `lg:text-[20px]`,
    ]),
    light: tw(`text-black`),
    dark: tw(`text-white`),
    'primary-dark': tw(`text-white`),
  },
}
