import styled from 'styled-components'

import { Heading } from '@/components/Heading'
import { media } from '@/utils/media'

export const HeroName = styled(Heading)`
  font-size: 3.5vmin;
  line-height: 1.47;
  color: ${({ theme }) => theme.colors.greenish};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  ${media.min('mobile')} {
    font-size: 2.9vmin;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }

  ${media.min('tablet')} {
    font-size: 2.2vmin;
  }
`
