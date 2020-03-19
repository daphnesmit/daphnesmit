import React, { FC, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import styled, { css } from 'styled-components'

type StyledImgProps = {
  objectFit?: boolean
}

type SharedImgComponentProps = StyledImgProps & {
  src?: string
  srcSet?: {
    src: string
    width: number
  }[]
  preload?: string
  alt: string
}

type ImgWrapperProps = StyledImgProps & {
  width?: string
  height?: string
}

type ImgComponentProps = SharedImgComponentProps &
  ImgWrapperProps & {
    caption?: string
  }

type ImgProps = FC<HTMLImageElement> & SharedImgComponentProps

const objectFitStyles = css`
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: none;
  max-height: none;
`
const defaultImgStyles = css`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: auto;
`

const ImgWrapper = styled.figure<ImgWrapperProps>`
  position: relative;
  margin: 0;
  width: ${props => props.width};
  height: ${props => props.height};
  overflow: hidden;
`

const StyledImg = styled.img<ImgProps>`
  ${defaultImgStyles}
  ${props => (props.objectFit ? objectFitStyles : '')};
  position: relative;
  display: block;
  opacity: 0;
  transition: opacity 300ms;
  z-index: 1;
  .image--is-loaded & {
    opacity: 1;
  }
`

const PreloadImg = styled.img<ImgProps>`
  ${defaultImgStyles}
  ${props => (props.objectFit ? objectFitStyles : '')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  transition: opacity 300ms 50ms;
  opacity: 1;
  z-index: 0;
`

const StyledCaption = styled.figcaption``

export const Img: FC<ImgComponentProps> = ({
  src,
  srcSet,
  alt,
  preload,
  caption,
  objectFit = true,
  ...props
}) => {
  const [ref, inView] = useInView({
    threshold: 0,
  })

  const imageRef = useRef() as React.MutableRefObject<HTMLImageElement>

  const [loaded, setLoaded] = useState(false)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const image = imageRef.current

    if (inView && image) {
      image.addEventListener('transitionend', transitionHandler, { once: true })

      if (!src) return swapImg()

      image.src = ''
      image.onload = () => swapImg()
      image.src = src

      if (srcSet) image.srcset = srcSet.map(item => `${item.src} ${item.width}w`).join(',')
    }
    return () => {
      if (image) {
        image.removeEventListener('transitionend', transitionHandler)
      }
    }
  }, [inView, imageRef, src, srcSet])

  const transitionHandler = ({ propertyName }: TransitionEvent) => {
    if (propertyName === 'opacity') {
      setLoaded(true)
    }
  }

  const swapImg = () => {
    setTransitioning(true)
  }

  return (
    <ImgWrapper
      {...props}
      objectFit={objectFit}
      ref={ref}
      className={transitioning ? 'image--is-loaded' : ''}>
      <StyledImg ref={imageRef} objectFit={objectFit} src={preload} alt={alt} />
      {!loaded && <PreloadImg objectFit={objectFit} src={preload} aria-hidden="true" alt={alt} />}
      {caption && <StyledCaption>{caption}</StyledCaption>}
    </ImgWrapper>
  )
}