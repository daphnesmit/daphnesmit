import styled from 'styled-components'

import { Box } from '@/components/Box'
import { media } from '@/utils/media'

export const HeroPositioner = styled(Box)`
  position: relative;
  width: 150vmin;
  margin: auto;
  height: 100vh;
  max-width: 100%;
  font-size: 1em;

  // 1024,
  ${media.min('laptop')} {
    min-width: 80vw;
    max-width: 90vw;
  }
  // 1280,
  ${media.min('desktop')} {
    min-width: 90vmin;
    max-width: 100%;
  }
  // 1440
  ${media.min('desktopPlus')} {
    min-width: 70vw;
    max-width: 70vw;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }
`
