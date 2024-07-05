import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        canela: ['var(--font-canela)', ...fontFamily.serif],
        canelaMedium: ['var(--font-canelaMedium)', ...fontFamily.serif],
        canelaThin: ['var(--font-canelaThin)', ...fontFamily.serif],
        vietnam: ['var(--font-vietnam)', ...fontFamily.mono],
      },
    },
    colors: {
      transparent: 'transparent',
      primary: '#5D4B41',
      secondary: '#937767',
      dark: '#2A221D',
      light: '#B39E92',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
  },
  plugins: [],
}
export default config
