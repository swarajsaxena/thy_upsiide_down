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
        mutedBlack: 'hsl(216, 20%, 5%)',
        mutedWhite: 'hsl(55, 100%, 98%)',
        accent: '#00ff6a',
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
