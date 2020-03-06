import Button from '../Button'
import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import MainMenu from './MainMenu'

const BottomNavContainer = styled(Box)`
  height: 80px;
  display: flex;
  align-items: center;
`

const Logo = styled(Box)`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  width: 20%;
`

const MenuButton = styled(Box)`
  display: flex;
  width: 20%;
  justify-content:flex-end;
`
const BottomNav: React.FC = () => (
  <Container maxWidth="lg">
    <BottomNavContainer>
      <Logo>Daphne Smit</Logo>
      {/* <MainMenu /> */}
      {/* <MenuButton>
        <Button component={Link} to="/">
          Lid worden
        </Button>
      </MenuButton> */}
    </BottomNavContainer>
  </Container>
)

export default BottomNav
