import styled from 'styled-components'

import { media } from '@/utils/media'

export const HeroRole = styled.span`
  line-height: 1.46;
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  font-size: 26px;
  font-size: 7.6vmin;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.tertiary};

  ${media.min('mobile')} {
    font-size: 5vmin;
  }

  ${media.min('tablet')} {
    font-size: 4vmin;
  }
`
