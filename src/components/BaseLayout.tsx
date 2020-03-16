import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

// import Footer from '@/components/Footer'
import Header from './Header'
import Seo from './Seo'
import { HeadFontFace } from './HeadFontFace'
import { GlobalStyle } from '../theme/GlobalStyle'
import { theme } from '../theme/theme'
import { useCornify } from 'use-cornify'

interface BaseLayoutProps {
  title?: string
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ title, children }) => {
  useCornify({ addMagicalWords: false })
  console.log(title)
  return (
    <ThemeProvider theme={theme}>
      <Seo title={title} />
      <HeadFontFace />
      <GlobalStyle />
      <Header />
      <div>{children}</div>
      {/* <Footer /> */}
    </ThemeProvider>
  )
}

export default BaseLayout
