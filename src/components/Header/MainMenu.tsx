// import Button from '@material-ui/core/Button'
import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  display: flex;
`

const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  display: flex;
  justify-content: center;
  align-items: center;
`

const ListItemLink = styled(props => <Link activeClassName="is--active" {...props} />)`
  color: ${({ theme }) => theme.colors.white};
  padding: 20px 15px;
  position: relative;
  white-space: nowrap;

  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: 15px;
    width: calc(100% - 30px);
    transform: scaleX(0);
    transform-origin: left center;
    height: 2px;
    transition: transform 150ms ease-in-out, opacity 150ms ease-in-out;
    transition-duration: 0.75s;
    opacity: 0;
    background-color: ${({ theme }) => theme.colors.white};
    left: 15px;
  }

  &.hover,
  &.is--active {
    &:before,
    &:after {
      transform: scaleX(1);
      opacity: 1;
    }
  }
`

const MainMenu: React.FC = () => (
  <List>
    <ListItem>
      <ListItemLink to="/">Partij programma</ListItemLink>
    </ListItem>
    <ListItem>
      <ListItemLink to="/standpunten/">Standpunten</ListItemLink>
    </ListItem>
    <ListItem>
      <ListItemLink to="/bestuur/">Bestuur</ListItemLink>
    </ListItem>
    <ListItem>
      <ListItemLink to="/lid-worden/">Lid worden</ListItemLink>
    </ListItem>
    <ListItem>
      <ListItemLink to="/herman-troost/">Herman Troost</ListItemLink>
    </ListItem>
    <ListItem>
      <ListItemLink to="/contact/">Contact</ListItemLink>
    </ListItem>
  </List>
)

export default MainMenu
