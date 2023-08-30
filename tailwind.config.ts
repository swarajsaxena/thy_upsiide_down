import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mutedBlack: 'hsl(216, 20%, 7%)',
        mutedBlackFade: 'hsl(210, 4%, 40%)',
        mutedWhite: 'hsl(216, 100%, 98%)',
        accent: 'hsl(15, 100%, 60%)',
      },
      fontFamily: {
        bauziet: ['var(--font-bauziet)'],
        trap: ['var(--font-trap)'],
      },
      boxShadow: {
        inner: 'inset 0 0 10px #000',
      },
      screens: {
        '2xl': '1440px',
        '2md': '824px',
      },
      zIndex: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
        999: '999',
      },
    },
  },
  plugins: [],
}
export default config
