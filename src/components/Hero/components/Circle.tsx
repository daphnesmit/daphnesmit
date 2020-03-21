import styled, { css, keyframes } from 'styled-components'

function calculateCircumference(radius: number) {
  return 2 * Math.PI * radius
}

const percentageFill = (radius: number) => keyframes`
    0% {
      stroke-dashoffset: ${calculateCircumference(radius)};
    }
    
    20% {
      stroke-dashoffset: 0;
    }
    
    100% {
      stroke-dashoffset: 0;
    }
  `

interface CircleProps {
  r: number
}
// stroke-dasharray: Π * radius * 2
export const Circle = styled.circle<CircleProps>`
  fill: transparent;
  stroke-width: 2;
  stroke-dasharray: ${({ r }) => calculateCircumference(r)};
  transition: stroke-dashoffset 1s;
  -webkit-animation-play-state: running;
  /* firefox bug fix - won't rotate at 90deg angles */
  -moz-transform: rotate(-89deg) translateX(-190px);

  stroke-dashoffset: 0;
  ${({ r }) =>
    css`
      animation: ${percentageFill(r)} 5s ease-out 5s infinite alternate-reverse both;
    `};
`
