import styled from 'styled-components'

import { Flex } from '@/components/Flex'

export const HeroIcons = styled(Flex)`
  margin-top: 4rem;
  > a ~ a {
    margin-left: 2vmin;
  }
`
