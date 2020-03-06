import { css } from 'styled-components'

import { media } from '../utils/media'

export const heading = css`
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 20px;
  }
  h1 {
    font-family: ${({ theme }) => theme.fonts.playfair};
    font-weight: ${({ theme }) => theme.fontWeights.extrabold};
    font-size: ${({ theme }) => theme.fontSizes.mobile.h1};

    ${media.min('mobile')} {
      font-size: ${({ theme }) => theme.fontSizes.desktop.h1};
    }
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.playfair};
    font-weight: ${({ theme }) => theme.fontWeights.extrabold};
    font-size: ${({ theme }) => theme.fontSizes.mobile.h2};

    ${media.min('mobile')} {
      font-size: ${({ theme }) => theme.fontSizes.desktop.h2};
    }
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.playfair};
    font-weight: ${({ theme }) => theme.fontWeights.extrabold};
    font-size: ${({ theme }) => theme.fontSizes.mobile.h3};

    ${media.min('mobile')} {
      font-size: ${({ theme }) => theme.fontSizes.desktop.h3};
    }
  }

  h4 {
    font-family: ${({ theme }) => theme.fonts.playfair};
    font-weight: ${({ theme }) => theme.fontWeights.extrabold};
    font-size: ${({ theme }) => theme.fontSizes.mobile.h4};

    ${media.min('mobile')} {
      font-size: ${({ theme }) => theme.fontSizes.desktop.h4};
    }
  }

  h5 {
    font-family: ${({ theme }) => theme.fonts.playfair};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.mobile.h5};

    ${media.min('mobile')} {
      font-size: ${({ theme }) => theme.fontSizes.desktop.h5};
    }
  }

  h6 {
    font-family: ${({ theme }) => theme.fonts.playfair};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.mobile.h6};

    ${media.min('mobile')} {
      font-size: ${({ theme }) => theme.fontSizes.desktop.h6};
    }
  }
`
