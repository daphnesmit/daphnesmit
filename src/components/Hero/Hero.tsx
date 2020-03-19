import { Icon } from '../Icon'
import { Img } from '../Img'
import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Box } from '../Box'
import { Column } from '../Column'
import { Contain } from '../Contain'
import { Flex } from '../Flex'
import { Heading } from '../Heading'
import { media } from '@/utils/media'
import { Row } from '../Row'

interface HeroContainerProps {
  background?: string
}

const HeroContainer = styled.section<HeroContainerProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  height: 100vh;
  overflow: hidden;
`

const HeroName = styled(Heading)`
  font-size: 3.5vmin;
  line-height: 1.47;
  color: ${({ theme }) => theme.colors.greenish};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  ${media.min('mobile')} {
    font-size: 2.9vmin;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }

  ${media.min('tablet')} {
    font-size: 2.2vmin;
  }
`

const HeroTitle = styled(Heading)`
  font-size: 8vmin;
  line-height: 1.16;
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.playfair};
  display: block;

  ${media.min('mobile')} {
    font-size: 6vmin;
  }

  ${media.min('tablet')} {
    font-size: 5.2vmin;
  }
`

const HeroRole = styled.span`
  line-height: 1.46;
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  font-size: 26px;
  font-size: 7.6vmin;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.tertiary};

  ${media.min('mobile')} {
    font-size: 5vmin;
  }

  ${media.min('tablet')} {
    font-size: 4vmin;
  }
`

const HeroTextBox = styled(Box)`
  position: relative;
  top: 50vmin;
  z-index: 3;

  ${media.min('mobile')} {
    top: 45vmin;
  }

  ${media.min('tablet')} {
    top: 34vmin;
  }
`

const HeroCircleBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  height: 150vmin;
  width: 150vmin;
  transform: translate3d(-50%, 0, 0);
  position: absolute;
  right: -120vmin;
  bottom: -20vmin;

  ${media.min('mobile')} {
    height: 120vmin;
    width: 120vmin;
    right: -72vmin;
    bottom: -19vmin;
  }

  ${media.min('laptop')} {
    height: 97vmin;
    width: 97vmin;
    right: -56vmin;
    bottom: -17vmin;
  }
`

const HeroImgMe = styled(Box)`
  position: absolute;
  width: 80vmin;
  bottom: -5vmin;
  transform: translate3d(-50%, 0, 0);
  right: -65vmin;
  z-index: 2;

  ${media.min('mobile')} {
    width: 49vmin;
    bottom: -4vmin;
    right: -17vmin;
  }

  ${media.min('laptop')} {
    width: 48vmin;
    bottom: -4vmin;
    right: -3vmin;
  }
`

const HeroPositioner = styled(Box)`
  position: relative;
  width: 150vmin;
  margin: auto;
  height: 100vh;
  max-width: 100%;

  ${media.min('laptop')} {
    min-width: 80vw;
    max-width: 90vw;
  }

  ${media.min('desktop')} {
    min-width: 960px;
    max-width: 100%;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }

  ${`@media (min-width: 1300px)`} {
    min-width: 850px;
    width: 150vmin;
    max-width: 100%;
  }

  ${`@media (min-width: 1440px)`} {
    max-width: 100%;
  }

  ${`@media (min-width: 1600px)`} {
    min-width: 1200px;
    width: 150vmin;
    max-width: 70vw;
  }
`

const animatedZigZag = keyframes`
  to {
    stroke-dashoffset: -2922;
  }
`

const ZigZag = styled.polygon`
  stroke-dasharray: 1882;
  stroke-dashoffset: -1882;
  animation: ${animatedZigZag} 1s ease-out 1s forwards;
`

const HeroImgDecoration1 = styled(Box)`
  width: 28vmin;
  position: absolute;
  top: 28vmin;
  left: -2vmin;
  transform: rotate(-180deg);
  transform-origin: center center;

  ${media.min('mobile')} {
    width: 20vmin;
    left: -5vmin;
  }

  ${media.min('tablet')} {
    width: 16vmin;
    top: 25vmin;
    right: 66vmin;
    left: auto;
  }
`

const HeroImgDecoration2 = styled(Box)`
  width: 40vmin;
  position: absolute;
  bottom: 25vmin;
  right: 30vmin;

  ${media.min('mobile')} {
    width: 30vmin;
    bottom: 15vmin;
    right: 45vmin;
  }

  ${media.min('tablet')} {
    width: 15vmin;
    top: 60vmin;
    right: 50vmin;
  }
`

const HeroCircleDecoration1 = styled(Box)`
  position: absolute;
  bottom: 50vmin;
  left: 5vmin;

  ${media.min('mobile')} {
    top: 18vmin;
    left: 43vmin;
  }
`

const HeroCircleDecoration2 = styled(Box)`
  position: absolute;
  top: 10vmin;
  right: 5vmin;
  border-color: ${({ theme }) => theme.colors.tertiary};
  border-style: solid;
  border-width: 2px;
  border-radius: 100%;
  width: 3.8vmin;
  height: 3.8vmin;
  display: none;

  ${media.min('mobile')} {
    display: block;
  }
`

const HeroCircleDecoration3 = styled(Box)`
  position: absolute;
  top: 45vmin;
  left: 40vmin;
  border-color: #87a892;
  border-style: solid;
  border-width: 2px;
  border-radius: 100%;
  width: 9.5vmin;
  height: 9.5vmin;

  ${media.min('mobile')} {
    top: 30vmin;
    left: -34vmin;
  }
`

const HeroCircleDecoration4 = styled(Box)`
  position: absolute;
  top: 75vmin;
  left: -5vmin;
  border-color: ${({ theme }) => theme.colors.tertiary};
  border-style: solid;
  border-width: 2px;
  border-radius: 100%;
  width: 6vmin;
  height: 6vmin;
  display: none;
  ${media.min('mobile')} {
    display: block;
  }
`

const HeroScrollIndicator = styled(Box)`
  position: absolute;
  bottom: 0;
  width: auto;
  z-index: 1;
  padding-left: 15vmin;
  right: 50%;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.greenish};
  font-family: ${({ theme }) => theme.fonts.poppins};
  white-space: nowrap;
  font-size: 3vmin;
  line-height: 1;
  transform: translate3d(50%, -50%, 0) rotate(-90deg);
  transform-origin: top center;

  &::before {
    content: '';
    width: 12vmin;
    height: 1px;
    display: block;
    position: absolute;
    left: 0;
    bottom: 50%;
    transform: translate3d(0, 50%, 0);
    background-color: ${({ theme }) => theme.colors.greenish};
  }


  ${media.min('mobile')} {
    padding-left: 10vmin;
    font-size: 1.8vmin;

    &::before {
      width: 8vmin;
    }
  }
}
`

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
const Circle = styled.circle<CircleProps>`
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

const HeroIcons = styled(Flex)`
  margin-top: 4rem;
  > a ~ a {
    margin-left: 2vmin;
  }
`
const HeroIconLink = styled.a`
  &:focus,
  &:hover {
    svg path {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
`

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <Contain>
        <Row>
          <Column col={[12, 12, 12, 12, 10]} inset={[0, 0, 0, 0, 1]}>
            <Box position="relative">
              <HeroPositioner position="relative">
                <HeroTextBox>
                  <HeroName as="h2">
                    Daphne Smit | <a href="tel:0031630805551">06 30 80 55 51</a>
                    <br />
                    Freelance Frontend Developer
                  </HeroName>
                  <HeroTitle as="h1">
                    ― Hey there! I’m a
                    <br />
                    Frontend <HeroRole>&nbsp;Developer</HeroRole>
                    <br /> from Amsterdam
                  </HeroTitle>
                  <HeroIcons>
                    <HeroIconLink target="_blank" href="https://github.com/daphnesmit">
                      <Icon icon="Github" size="2.5vmin" color="#282828" />
                    </HeroIconLink>
                    <HeroIconLink target="_blank" href="https://www.linkedin.com/in/daphnesmit/">
                      <Icon icon="LinkedinFull" size="2.5vmin" color="#282828" />
                    </HeroIconLink>
                    <HeroIconLink target="_blank" href="https://www.facebook.com/daphnesmit1986">
                      <Icon icon="Facebook" size="2.5vmin" color="#282828" />
                    </HeroIconLink>
                    <HeroIconLink target="_blank" href="https://twitter.com/daphnesmit">
                      <Icon icon="Twitter" size="2.5vmin" color="#282828" />
                    </HeroIconLink>
                    <HeroIconLink target="_blank" href="https://www.instagram.com/daphnesmit">
                      <Icon icon="Instagram" size="2.5vmin" color="#282828" />
                    </HeroIconLink>
                  </HeroIcons>
                </HeroTextBox>
                <HeroCircleBackground />
                <HeroImgMe>
                  <Img
                    src="/img/trans-me-shadow_630.png"
                    srcSet={[
                      {
                        src: '/img/trans-me-shadow_450.png',
                        width: 450,
                      },
                      {
                        src: '/img/trans-me-shadow_630.png',
                        width: 630,
                      },
                      {
                        src: '/img/trans-me-shadow_810.png',
                        width: 810,
                      },
                      {
                        src: '/img/trans-me-shadow_1080.png',
                        width: 1080,
                      },
                    ]}
                    preload="/img/trans-me-shadow-preload.png"
                    alt="Profiel Foto Daphne Smit"
                  />
                </HeroImgMe>
                <HeroImgDecoration1 aria-label="Zig Zag Decorational ornament">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    x="0"
                    y="0"
                    viewBox="0 0 960 560"
                    enableBackground="new 0 0 960 560">
                    <ZigZag
                      fill="none"
                      stroke="#d6a485"
                      strokeWidth="64"
                      strokeMiterlimit="40"
                      points="902 245.5 762.5 141.5 623.01 245.5 483.51 141.5 344.01 245.5 204.5 141.5 65 245.5 "
                    />
                  </svg>
                </HeroImgDecoration1>
                <HeroImgDecoration2>
                  <Img src="/img/hero-decor-02.png" alt="" />
                </HeroImgDecoration2>
                <HeroCircleDecoration1>
                  <svg width="30" height="30">
                    <Circle
                      stroke="#87a892"
                      cx="175"
                      cy="15"
                      r={10}
                      transform="rotate(-90, 95, 95)"
                    />
                  </svg>
                </HeroCircleDecoration1>
                <HeroCircleDecoration2 />
                <HeroCircleDecoration3 />
                <HeroCircleDecoration4 />
                <HeroScrollIndicator>Scroll</HeroScrollIndicator>
              </HeroPositioner>
            </Box>
          </Column>
        </Row>
      </Contain>
    </HeroContainer>
  )
}

export default Hero
