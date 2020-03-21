import styled from 'styled-components'

interface HeroContainerProps {
  background?: string
}

export const HeroContainer = styled.section<HeroContainerProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  height: 100vh;
  overflow: hidden;
`
