import { DefaultTheme } from 'styled-components'

import { colors } from './colors'
import { grid } from './grid'


export const theme: DefaultTheme = {
  breakpoints: ['30em', '52em', '64em', '80em'],
  fontSizes: {
    root: '10px',
    body: {
      small: '1.2rem',
      medium: '1.4rem',
      regular: '1.6rem',
      large: '2rem',
    },
    desktop: {
      h1: '4.8rem',
      h2: '3.2rem',
      h3: '2.8rem',
      h4: '2.3rem',
      h5: '2rem',
      h6: '1.8rem',
    },
    mobile: {
      h1: '3.2rem',
      h2: '2.6rem',
      h3: '2.3rem',
      h4: '2rem',
      h5: '2rem',
      h6: '1.8rem',
    },
  },
  fontWeights: {
    ultralight: 100,
    light: 200,
    book: 300,
    regular: 400,
    medium: 500,
    bold: 600,
    extrabold: 700,
    black: 800,
  },
  space: {
    xxxs: 4,
    xxs: 8,
    xs: 16,
    s: 24,
    m: 40,
    l: 64,
    xl: 80,
    xxl: 128,
  },
  fonts: {
    rubik: 'Rubik, Arial, sans-serif',
    poppins: 'Poppins, Arial, sans-serif',
    playfair: 'Playfair Display, times new roman, serif',
  },
  // shadows: {
  //   summary: `0 6px 35px 0 rgba(8, 35, 145, 0.1)`,
  // },
  outline: `5px auto #5E9ED6`,
  colors,
  grid,
}
