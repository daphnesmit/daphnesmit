import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { Link } from 'gatsby'
import Img from '../Img'
import { useBackgroundImage } from '@/utils/hooks/useBackgroundImage'

interface HeroContainerProps {
  background?: string
}

const HeroContainer = styled.section<HeroContainerProps>`
  padding-top: 220px;
  padding-bottom: 320px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  height: 100vh;
  overflow: hidden;
`

const HeroName = styled.h1`
  min-width: 304px;
  max-width: 304px;
  font-size: 15px;
  line-height: 22px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.greenish};
  font-family: ${({ theme }) => theme.fonts.poppins};
`

const HeroTitle = styled.h2`
  font-size: 38px;
  line-height: 44px;
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.playfair};
  width: 360px;
  display: block;
`

const HeroRole = styled.span`
  line-height: 38px;
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  font-size: 26px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.tertiary};
`

const HeroCircleBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  height: 670px;
  width: 670px;
  position: absolute;
  right: 5vw;
  top: 150px;
`

const HeroMe = styled(Img)`
  width: 400px;
  position: absolute;
  right: 5vw;
  margin-right: 150px;
  top: 0;
`

const Hero: React.FC = () => {
  const { source, loaded } = useBackgroundImage('/img/trans-me-shadow.png')
  return (
    <HeroContainer>
      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={10} md={9}>
            <HeroName>
              Daphne Smit
              <br />
              Frontend Developer
            </HeroName>
            <HeroTitle>
              ― Hey there! I’m an independent <HeroRole>&nbsp;freelancer</HeroRole> from Amsterdan
            </HeroTitle>
            <HeroCircleBackground />
            <HeroMe src={source} alt="Daphne Smit Profiel Foto" />
          </Grid>
        </Grid>
      </Container>
    </HeroContainer>
  )
}

export default Hero
