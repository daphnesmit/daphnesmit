import styled from 'styled-components'

export const HeroIconLink = styled.a`
  line-height: 1;
  &:focus,
  &:hover {
    svg path {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
`
