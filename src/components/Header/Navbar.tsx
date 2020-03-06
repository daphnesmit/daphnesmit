
import React from 'react'
import styled from 'styled-components'
import { zIndex } from '@/utils/zIndex'

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top:0;
  z-index: ${zIndex.navbar};
`

const Navbar: React.FC = ({ children }) => <Nav>{children}</Nav>

export default Navbar
