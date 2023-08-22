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
        mutedBlack: 'hsl(216, 20%, 10%)',
        mutedWhite: 'hsl(55, 100%, 98%)',
      },
      fontFamily: {
        jetBrain: ['var(--font-jetbrains)'],
      },
    },
  },
  plugins: [],
}
export default config
