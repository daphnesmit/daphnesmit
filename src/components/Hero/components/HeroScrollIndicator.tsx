import styled from 'styled-components'

import { Box } from '@/components/Box'
import { media } from '@/utils/media'

export const HeroScrollIndicator = styled(Box)`
  position: absolute;
  bottom: 0;
  width: auto;
  z-index: 1;
  padding-left: 15vmin;
  right: 50%;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.greenish};
  font-family: ${({ theme }) => theme.fonts.poppins};
  white-space: nowrap;
  font-size: 3vmin;
  line-height: 1;
  transform: translate3d(50%, -50%, 0) rotate(-90deg);
  transform-origin: top center;

  &::before {
    content: '';
    width: 12vmin;
    height: 1px;
    display: block;
    position: absolute;
    left: 0;
    bottom: 50%;
    transform: translate3d(0, 50%, 0);
    background-color: ${({ theme }) => theme.colors.greenish};
  }

  ${media.min('mobile')} {
    padding-left: 10vmin;
    font-size: 1.8vmin;

    &::before {
      width: 8vmin;
    }
  }
`
