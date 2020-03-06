import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  width?: string
  height?: string
  lazyload?: boolean
  alt: string
  src: string
  srcSet?: {
    src: string
    width: number
  }[]
}

const StyledPicture = styled.picture<{ width?: string; height?: string }>`
  display: flex;
  align-items: center;
  ${({ width }) => `width: ${width || '100%'};`}
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
`

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Img: React.FC<Props> = props => {
  const { src, srcSet, alt, lazyload, width, height } = props
  if (!src && !srcSet) {
    return null
  }

  return (
    <StyledPicture width={width} height={height} {...props}>
      <source
        data-srcset={srcSet ? srcSet.map(item => `${item.src} ${item.width}w`) : null}
        srcSet={
          !lazyload && srcSet
            ? srcSet.map(item => `${item.src} ${item.width}w`).toString()
            : undefined
        }
      />
      <StyledImg
        data-sizes="auto"
        className={lazyload ? 'lazyload' : ''}
        data-src={lazyload ? src : null}
        src={
          lazyload
            ? 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
            : src
        }
        alt={alt}
      />
      <noscript>
        <StyledImg src={src} alt={alt} />
      </noscript>
    </StyledPicture>
  )
}

export default Img
