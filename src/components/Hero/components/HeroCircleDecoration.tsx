import styled from 'styled-components'

import { Box } from '@/components/Box'
import { media } from '@/utils/media'

export const HeroCircleDecoration1 = styled(Box)`
  position: absolute;
  bottom: 50vmin;
  left: 5vmin;

  ${media.min('mobile')} {
    top: 18vmin;
    left: 43vmin;
  }
`

export const HeroCircleDecoration2 = styled(Box)`
  position: absolute;
  top: 10vmin;
  right: 5vmin;
  border-color: ${({ theme }) => theme.colors.tertiary};
  border-style: solid;
  border-width: 2px;
  border-radius: 100%;
  width: 3.8vmin;
  height: 3.8vmin;
  display: none;

  ${media.min('mobile')} {
    display: block;
  }
`

export const HeroCircleDecoration3 = styled(Box)`
  position: absolute;
  top: 45vmin;
  left: 40vmin;
  border-color: #87a892;
  border-style: solid;
  border-width: 2px;
  border-radius: 100%;
  width: 9.5vmin;
  height: 9.5vmin;

  ${media.min('mobile')} {
    top: 30vmin;
    left: -34vmin;
  }
`

export const HeroCircleDecoration4 = styled(Box)`
  position: absolute;
  top: 75vmin;
  left: -5vmin;
  border-color: ${({ theme }) => theme.colors.tertiary};
  border-style: solid;
  border-width: 2px;
  border-radius: 100%;
  width: 6vmin;
  height: 6vmin;
  display: none;
  
  ${media.min('mobile')} {
    display: block;
  }
`
