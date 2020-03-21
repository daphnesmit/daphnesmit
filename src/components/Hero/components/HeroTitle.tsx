import styled from 'styled-components'

import { Heading } from '@/components/Heading'
import { media } from '@/utils/media'

export const HeroTitle = styled(Heading)`
  font-size: 8vmin;
  line-height: 1.16;
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.playfair};
  display: block;

  ${media.min('mobile')} {
    font-size: 6vmin;
  }

  ${media.min('tablet')} {
    font-size: 5.2vmin;
  }
`
