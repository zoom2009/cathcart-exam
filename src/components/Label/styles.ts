import { tw } from '@/components/tw'

export const labelClasses = {
  base: tw(``),
  title: tw([
    `text-[50px] text-title`,
    `md:text-[90px]`,
  ]),
  'sub-title': tw([
    `text-[28px] text-sub-title`,
    `md:text-[36px]`,
  ]),
  light: tw(``),
  dark: tw(`text-white`),
}
