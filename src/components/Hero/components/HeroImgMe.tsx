import styled from 'styled-components'

import { Box } from '@/components/Box'
import { media } from '@/utils/media'

export const HeroImgMe = styled(Box)`
  position: absolute;
  width: 80vmin;
  bottom: -5vmin;
  transform: translate3d(-50%, 0, 0);
  right: -65vmin;
  z-index: 2;

  ${media.min('mobile')} {
    width: 49vmin;
    bottom: -4vmin;
    right: -17vmin;
  }

  ${media.min('laptop')} {
    width: 48vmin;
    bottom: -4vmin;
    right: -3vmin;
  }
`
