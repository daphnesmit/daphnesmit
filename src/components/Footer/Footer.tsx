import React from 'react'
import styled from 'styled-components'

import { Box } from '../Box'
import { Contain } from '../Contain'
import { Flex } from '../Flex'
import { Hyperlink } from '../Hyperlink'
import { Icon } from '../Icon'
import { Text } from '../Text'

const FooterContainer = styled(Box)`
  padding: 40px 0;  
  width:100%
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.subtitle};
  background-color: ${({ theme }) => theme.colors.white};
`

const Footer: React.FC = () => (
  <FooterContainer>
    <Contain>
      <Flex alignItems="center">
        <a href="https://www.npmjs.com/~daphnesmit" rel="noopener noreferrer" target="_blank">
          <Icon icon="Npm" size={60} color="secondary" />
        </a>
        <Box pl="m">
          <Text as="p" mb="0" lineHeight="1.2" fontSize="body.small">
            I am the proud creator of the{' '}
            <Hyperlink color="subtitle" href="https://www.npmjs.com/package/use-cornify">
              useCornify
            </Hyperlink>{' '}
            React hook and my recently created{' '}
            <Hyperlink color="subtitle" href="https://www.npmjs.com/package/essential-ts-utils">
              Essential Typescript Utils
            </Hyperlink>
            . <br />
            I made a pkg to walk a React tree and await promises - which will hopefully be solved by Suspense - called{' '}
            <Hyperlink color="subtitle" href="https://github.com/daphnesmit/with-next-promise-tree-walker">
            with-next-promise-tree-walker
            </Hyperlink>{' '} 
            . <br/>
            Big fan of{' '}
            <Hyperlink color="subtitle" href="https://github.com/daphnesmit">
              open source
            </Hyperlink>{' '}
          </Text>
        </Box>
      </Flex>
    </Contain>
  </FooterContainer>
)

export default Footer
