import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { Link } from 'gatsby'
import Img from '../Img'
import { media } from '@/utils/media'
import { useBackgroundImage } from '@/utils/hooks/useBackgroundImage'
import { Box } from '../Box'
import { Heading } from '../Heading'

interface HeroContainerProps {
  background?: string
}

const HeroContainer = styled.section<HeroContainerProps>`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  height: 100vh;
  overflow: hidden;
`

const HeroName = styled(Heading)`
  width: 304px;
  font-size: 3.5vmin;
  line-height: 1.47;
  color: ${({ theme }) => theme.colors.greenish};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  ${media.min('mobile')} {
    font-size: 2.2vmin;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
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
    font-size: 5.2vmin;
    width: 360px;
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
    font-size: 3.8vmin;
  }
`

const HeroTextBox = styled(Box)`
  position: relative;
  top: 50vmin;
  z-index: 3;

  ${media.min('mobile')} {
    top: 33vmin;
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
    height: 96vmin;
    width: 96vmin;
    right: -56vmin;
    top: 20vmin;
  }
`

const HeroImgBox = styled(Box)`
  position: absolute;
  width: 80vmin;
  bottom: -5vmin;
  transform: translate3d(-50%, 0, 0);
  right: -65vmin;
  z-index: 2;

  ${media.min('mobile')} {
    width: 48vmin;
    top: 7vmin;
    right: -3vmin;
  }
`

const HeroPositioner = styled(Box)`
  position: relative;
  width: 100%;
  max-width: 150vmin;
  margin: auto;
  height: 100vh;
`

const HeroImgDecor1 = styled(Box)`
  width: 28vmin;
  position: absolute;
  top: 32vmin;
  left: 0;

  ${media.min('mobile')} {
    width: 13vmin;
    top: 30vmin;
    right: 66vmin;
  }
`

const HeroImgDecor2 = styled(Box)`
  width: 40vmin;
  position: absolute;
  bottom: 25vmin;
  right: 30vmin;

  ${media.min('mobile')} {
    width: 15vmin;
    top: 60vmin;
    right: 52vmin;
  }
`

const HeroDecorCircle1 = styled(Box)`
  position: absolute;
  bottom: 50vmin;
  left: 5vmin;
  border-color: #87a892;
  border-style: solid;
  border-width: 2px;
  border-radius: 100%;
  width: 10vmin;
  height: 10vmin;

  ${media.min('mobile')} {
    top: 18vmin;
    left: 43vmin;
    width: 3vmin;
    height: 3vmin;
  }
`

const HeroDecorCircle2 = styled(Box)`
  position: absolute;
  top: 10vmin;
  right: 5vmin;
  border-color: #d6a485;
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

const HeroDecorCircle3 = styled(Box)`
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

const HeroDecorCircle4 = styled(Box)`
  position: absolute;
  top: 75vmin;
  left: -5vmin;
  border-color: #d6a485;
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

const HeroScroll = styled(Box)`
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
    padding-left:6vmin;
    top: 94vmin;
    font-size: 1.8vmin;

    &::before {
      width: 5vmin;
    }
  }
}
`

const Hero: React.FC = () => {
  // const { source, loaded } = useBackgroundImage('/img/trans-me-shadow.png')
  return (
    <HeroContainer>
      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={10}>
            <HeroPositioner position="relative">
              <HeroTextBox>
                <HeroName as="h2">
                  Daphne Smit
                  <br />
                  Frontend Developer
                </HeroName>
                <HeroTitle as="h1">
                  ― Hey there! I’m an
                  <br />
                  independent <HeroRole>&nbsp;freelancer</HeroRole>
                  <br /> from Amsterdam
                </HeroTitle>
              </HeroTextBox>
              <HeroCircleBackground />
              <HeroImgBox>
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
              </HeroImgBox>
              <HeroImgDecor1>
                <Img src="/img/hero-decor-01.png" alt="" />
              </HeroImgDecor1>
              <HeroImgDecor2>
                <Img src="/img/hero-decor-02.png" alt="" />
              </HeroImgDecor2>
              <HeroDecorCircle1 />
              <HeroDecorCircle2 />
              <HeroDecorCircle3 />
              <HeroDecorCircle4 />
              <HeroScroll>Scroll</HeroScroll>
            </HeroPositioner>
          </Grid>
        </Grid>
      </Container>
    </HeroContainer>
  )
}

export default Hero
