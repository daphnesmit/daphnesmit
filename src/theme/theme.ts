import { darken } from 'polished'
import { DefaultTheme } from 'styled-components'

import * as iconComponents from '../components/Icon/icons'
import { colors } from './colors'
import { grid, ThemeGrid } from './grid'

const fontSizes = {
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
}

const space = {
  xxxs: 8,
  xxs: 10,
  xs: 20,
  s: 40,
  m: 60,
  l: 80,
  xl: 100,
  xxl: 120,
}

const fontWeights = {
  ultralight: 100,
  light: 200,
  book: 300,
  regular: 400,
  medium: 500,
  bold: 600,
  extrabold: 700,
  black: 800,
}

const buttonBase = {
  fontWeight: 'bold',
  border: '1px solid',
  borderColor: 'primary',
  padding: '0 20px',
  height: 50,
  borderRadius: 50,
}

export const buttons = {
  primary: {
    ...buttonBase,
    bg: 'primary',
    color: 'white',
    ['&:hover, &:focus']: {
      backgroundColor: darken(0.2, colors.primary),
    },
  },
  secondary: {
    ...buttonBase,
    color: 'black',
  },
  clear: {
    backgroundColor: 'transparent',
    border: 'none',
    padding: '0',
    height: 'auto',
  },
}

const fonts = {
  rubik: 'Rubik, Arial, sans-serif',
  poppins: 'Poppins, Arial, sans-serif',
  playfair: 'Playfair Display, times new roman, serif',
}

export interface CustomTheme {
  breakpoints: string[]
  fontSizes: typeof fontSizes
  fontWeights: typeof fontWeights
  colors: typeof colors
  space: typeof space
  fonts: typeof fonts
  buttons: typeof buttons
  outline?: string
  grid: ThemeGrid
}

export const theme: DefaultTheme = {
  breakpoints: ['30em', '52em', '64em', '80em', '90em'], // 480, 832, 1024, 1280, 1440
  fontSizes,
  fontWeights,
  space,
  fonts,
  outline: `5px auto #5E9ED6`,
  colors,
  grid,
  buttons,
}

export const icons = iconComponents

export type IconOption = keyof typeof icons
