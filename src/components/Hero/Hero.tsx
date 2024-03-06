import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

import { useScrollTo } from '@/utils/hooks/useScrollTo'

import { Box } from '../Box'
import { Column } from '../Column'
import { Contain } from '../Contain'
import { Icon } from '../Icon'
import { Img as Image } from '../Img'
import { Row } from '../Row'
import { Text } from '../Text'
import {
  Circle,
  HeroCircleBackground,
  HeroCircleDecoration1,
  HeroCircleDecoration2,
  HeroCircleDecoration3,
  HeroCircleDecoration4,
  HeroContainer,
  HeroIconLink,
  HeroIcons,
  HeroImgDecoration1,
  HeroImgDecoration2,
  HeroImgMe,
  HeroName,
  HeroPositioner,
  HeroRole,
  HeroScrollIndicator,
  HeroTextBox,
  HeroTitle,
  ZigZag,
} from './components'

interface HeroProps {
  contactRef: React.RefObject<HTMLDivElement>
}

const Hero: React.FC<HeroProps> = ({ contactRef }) => {
  const [scrollTo] = useScrollTo()
  const heroImage = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "trans-me-shadow_1080.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const handleScroll = () => {
    if (contactRef) {
      scrollTo({
        to: contactRef.current ? contactRef.current.offsetTop : 0,
        duration: 300,
      })
    }
  }

  return (
    <HeroContainer>
      <Contain>
        <Row>
          <Column col={[12, 12, 12, 12, 10]} inset={[0, 0, 0, 0, 1]}>
            <Box position="relative">
              <HeroPositioner position="relative">
                <HeroTextBox>
                  <HeroName as="h2">
                    Daphne Smit
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
                    <HeroIconLink target="_blank" href="/documents/daphne-smit-resume-2024-new.pdf">
                      <Text fontWeight="bold" color="#282828" lineHeight="1">
                        cv
                      </Text>
                    </HeroIconLink>
                  </HeroIcons>
                </HeroTextBox>
                <HeroCircleBackground />
                <HeroImgMe>
                  <Img
                    fadeIn={false}
                    loading="auto"
                    fluid={heroImage.file.childImageSharp.fluid}
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
                  <Image src="/img/hero-decor-02.png" alt="" />
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
                <HeroScrollIndicator onClick={handleScroll}>Scroll</HeroScrollIndicator>
              </HeroPositioner>
            </Box>
          </Column>
        </Row>
      </Contain>
    </HeroContainer>
  )
}

export default Hero
