import React from 'react'
import styled from 'styled-components'
import { Box } from '../Box'

const BottomNavContainer = styled(Box)`
  height: 70px;
  display: flex;
  align-items: center;
`

const Logo = styled(Box)`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`

const BottomNav: React.FC = () => (
  // <Container maxWidth="lg">
  <BottomNavContainer>
    <Logo>Daphne Smit</Logo>
    {/* <MainMenu /> */}
    {/* <MenuButton>
        <Button component={Link} to="/">
          Lid worden
        </Button>
      </MenuButton> */}
  </BottomNavContainer>
  // </Container>
)

export default BottomNav
