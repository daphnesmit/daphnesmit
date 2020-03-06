import { css } from 'styled-components'

export const html = css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: ${({ theme }) => theme.fontSizes.root};
  }

  body {
    background-color: ${({ theme }) => theme.colors.offWhite};
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: ${({ theme }) => theme.fontSizes.body.regular};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.8;
    min-width: 320px;
  }
`
