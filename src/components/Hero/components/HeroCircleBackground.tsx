import styled from 'styled-components'

import { media } from '@/utils/media'

export const HeroCircleBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  height: 150vmin;
  width: 150vmin;
  transform: translate3d(-50%, 0, 0);
  position: absolute;
  right: -120vmin;
  bottom: -20vmin;

  ${media.min('mobile')} {
    height: 120vmin;
    width: 120vmin;
    right: -72vmin;
    bottom: -19vmin;
  }

  ${media.min('laptop')} {
    height: 97vmin;
    width: 97vmin;
    right: -56vmin;
    bottom: -17vmin;
  }
`
