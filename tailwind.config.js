/** @type {import('tailwindcss').Config} */

import withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#090E34',
      dark: '#0a0a0a',
      primary: '#0bd1d1',
      violet: '#fe05e1',
      purple: '#3b0764',
      yellow: '#FBB040',
      border: '#222f43',
      'body-color': 'rgba(7, 136, 255,.1)'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        circularlight: 'repeating-radial-gradient(rgb(38, 177, 241, 0.4) 1px, #090E34 5px, #090E34 100px)'
      },
      boxShadow: {
        shadow: '#0bd1d1 0px 4px 15px 0px',
        shadow_2: '#0bd1d1 0px 5px 15px;'
      }
    },
    fontFamily: {
      // sans: ['Space Grotesk']
    }
  },
  plugins: []
})
