// import original module declarations
import 'styled-components'

import { CSSProperties } from 'react'

import { Colors } from '/theme/colors'

interface ThemeGridContainer {
  maxWidth: number
  padding: number | any[]
  paddingSmall: number
}

interface ThemeGridNavBarWidth {
  tablet: number
  desktop: number
}

interface ThemeGrid {
  gutter: number | any[]
  container: ThemeGridContainer
  navBarWidth: ThemeGridNavBarWidth
}

interface FontSizeLadder {
  root: string
  body: {
    small: string
    regular: string
    medium: string
    large: string
  }
  desktop: {
    h1: string
    h2: string
    h3: string
    h4: string
    h5: string
    h6: string
  }
  mobile: {
    h1: string
    h2: string
    h3: string
    h4: string
    h5: string
    h6: string
  }
}

interface FontWeightLadder {
  ultralight: number
  light: number
  book: number
  regular: number
  medium: number
  bold: number
  extrabold: number
  black: number
}

interface SpaceLadder {
  xxxs: number
  xxs: number
  xs: number
  s: number
  m: number
  l: number
  xl: number
  xxl: number
}


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: string[]
    fontSizes: FontSizeLadder
    fontWeights: WeightLadder
    colors: Colors
    space: SpaceLadder
    fonts: {
      rubik: string
      poppins: string
      playfair: string
    }
    outline?: string
    grid: ThemeGrid
  }
}
