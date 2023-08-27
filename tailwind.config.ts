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
        mutedBlack: 'hsl(216, 18%, 16%)',
        mutedWhite: 'hsl(0, 0%, 93%)',
        mutedWhiteFade: 'hsl(34, 45%, 85%)',
        accent: 'hsl(183, 100%, 40%)',
      },
      fontFamily: {
        jetBrain: ['var(--font-jetbrains)'],
      },
      boxShadow: {
        inner: 'inset 0 0 10px #000',
      },
    },
  },
  plugins: [],
}
export default config
