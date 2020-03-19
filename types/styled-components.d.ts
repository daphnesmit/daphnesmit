// import original module declarations
import 'styled-components'

import { CSSProperties } from 'react'

import { CustomTheme } from '@/theme/theme'


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
  export interface DefaultTheme extends CustomTheme {}
}
