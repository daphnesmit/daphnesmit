import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Box } from '../Box'

const NavContainer = styled(Box)`
  height: 70px;
  display: flex;
  align-items: center;
`

const Logo = styled(Box)`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0 ${({ theme }) => theme.space.s}px;
`

const Header: React.FC = () => (
  <Navbar>
    <NavContainer>
      <Logo>Daphne Smit</Logo>
      {/* <MainMenu /> */}
      {/* <MenuButton>
        <Button component={Link} to="/">
          Lid worden
        </Button>
      </MenuButton> */}
    </NavContainer>
  </Navbar>
)

export default Header
