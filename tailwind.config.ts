import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'md': '768px', // tablet
      'lg': '1920px', // desktop
    },
    extend: {
      fontFamily: {
        'roboto': ['var(--font-roboto)'],
      },
      colors: {
        'primary': '#5E3DB3',
        'underline-primary': '#603EBE',
        'underline-light': '#FFF',
        'dark-primary': '#090C35',
        'title': '#E7E7E7',
        'sub-title': '#C2C2C2',
        'text-dark': '#000',
        'text-light': '#000',
        'section-gray': '#F5F4F9',
        'section': '#FFF',
      },
    },
  },
  plugins: [],
}

export default config
