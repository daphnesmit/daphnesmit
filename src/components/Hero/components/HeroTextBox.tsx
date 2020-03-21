import styled from 'styled-components'

import { Box } from '@/components/Box'
import { media } from '@/utils/media'

export const HeroTextBox = styled(Box)`
  position: relative;
  top: 50vmin;
  z-index: 3;

  ${media.min('mobile')} {
    top: 45vmin;
  }

  ${media.min('tablet')} {
    top: 34vmin;
  }
`
