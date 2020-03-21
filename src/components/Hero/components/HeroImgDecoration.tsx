import styled, { keyframes } from 'styled-components'

import { Box } from '@/components/Box'
import { media } from '@/utils/media'

const animatedZigZag = keyframes`
to {
  stroke-dashoffset: -2922;
}
`

export const ZigZag = styled.polygon`
  stroke-dasharray: 1882;
  stroke-dashoffset: -1882;
  animation: ${animatedZigZag} 1s ease-out 1s forwards;
`

export const HeroImgDecoration1 = styled(Box)`
  width: 28vmin;
  position: absolute;
  top: 28vmin;
  left: -2vmin;
  transform: rotate(-180deg);
  transform-origin: center center;

  ${media.min('mobile')} {
    width: 20vmin;
    left: -5vmin;
  }

  ${media.min('tablet')} {
    width: 16vmin;
    top: 25vmin;
    right: 66vmin;
    left: auto;
  }
`

export const HeroImgDecoration2 = styled(Box)`
  width: 40vmin;
  position: absolute;
  bottom: 25vmin;
  right: 30vmin;

  ${media.min('mobile')} {
    width: 30vmin;
    bottom: 15vmin;
    right: 45vmin;
  }

  ${media.min('tablet')} {
    width: 15vmin;
    top: 60vmin;
    right: 50vmin;
  }
`
