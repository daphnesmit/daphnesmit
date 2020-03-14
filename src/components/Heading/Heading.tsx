import { Heading as SPHeading, HeadingProps as SPHeadingProps } from './StyledHeading'
import styled, { css } from 'styled-components'

import { media } from '@/utils/media'

export const headingStyles = {
  h1: css`
    font-family: ${({ theme }) => theme.fonts.playfair};
    font-weight: ${({ theme }) => theme.fontWeights.extrabold};
    font-size: ${({ theme }) => theme.fontSizes.mobile.h1};

    ${media.min('mobile')} {
      font-size: ${({ theme }) => theme.fontSizes.desktop.h1};
    }
  `,
  h2: css`
    font-family: ${({ theme }) => theme.fonts.playfair};
    font-weight: ${({ theme }) => theme.fontWeights.extrabold};
    font-size: ${({ theme }) => theme.fontSizes.mobile.h2};

    ${media.min('mobile')} {
      font-size: ${({ theme }) => theme.fontSizes.desktop.h2};
    }
  `,
  h3: css`
    font-family: ${({ theme }) => theme.fonts.playfair};
    font-weight: ${({ theme }) => theme.fontWeights.extrabold};
    font-size: ${({ theme }) => theme.fontSizes.mobile.h3};

    ${media.min('mobile')} {
      font-size: ${({ theme }) => theme.fontSizes.desktop.h3};
    }
  `,
  h4: css`
    font-family: ${({ theme }) => theme.fonts.playfair};
    font-weight: ${({ theme }) => theme.fontWeights.extrabold};
    font-size: ${({ theme }) => theme.fontSizes.mobile.h4};

    ${media.min('mobile')} {
      font-size: ${({ theme }) => theme.fontSizes.desktop.h4};
    }
  `,
  h5: css`
    font-family: ${({ theme }) => theme.fonts.playfair};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.mobile.h5};

    ${media.min('mobile')} {
      font-size: ${({ theme }) => theme.fontSizes.desktop.h5};
    }
  `,
  h6: css`
    font-family: ${({ theme }) => theme.fonts.playfair};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-size: ${({ theme }) => theme.fontSizes.mobile.h6};

    ${media.min('mobile')} {
      font-size: ${({ theme }) => theme.fontSizes.desktop.h6};
    }
  `,
}

export interface HeadingProps {
  hyphens?: boolean
  styleAs?: SPHeadingProps['as']
}

export const Heading = styled(SPHeading)<HeadingProps>`

  ${props => props.as === 'h1' && headingStyles.h1}
  ${props => props.as === 'h2' && headingStyles.h2}
  ${props => props.as === 'h3' && headingStyles.h3}
  ${props => props.as === 'h4' && headingStyles.h4}
  ${props => props.as === 'h5' && headingStyles.h5}
  ${props => props.as === 'h6' && headingStyles.h6}
  
  ${props => props.styleAs === 'h1' && headingStyles.h1}
  ${props => props.styleAs === 'h2' && headingStyles.h2}
  ${props => props.styleAs === 'h3' && headingStyles.h3}
  ${props => props.styleAs === 'h4' && headingStyles.h4}
  ${props => props.styleAs === 'h5' && headingStyles.h5}
  ${props => props.styleAs === 'h6' && headingStyles.h6}
  ${props => props.hyphens && `hyphens:auto;`}

`
export const MediumHeading = styled(Heading)`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.2;
`
