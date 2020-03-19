import { Box, BoxProps } from '../Box'
import React, { FC } from 'react'
import styled from 'styled-components'

import { IconOption, icons } from '@/theme/theme'
import { Omit } from '@/utils/types'

type IconProps = Omit<BoxProps, 'width' | 'height'> & {
  icon: IconOption
  rotate?: number
  color?: string
  size: number | string | any[]
}

const StyledIconWrapper = styled(Box)<BoxProps & { rotate?: number }>`
  transition: transform 0.2s ease-in-out;
  ${props => props.rotate && `transform: rotate(${props.rotate}deg);`};
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  min-width: 15px;
  min-height: 15px;
`

export const Icon: FC<IconProps> = ({ size, icon, ...props }) => {
  const IconComponent = icons[icon]

  return (
    <StyledIconWrapper {...props} width={size} height={size} color={props.color}>
      <IconComponent
        role="presentation"
        aria-hidden="true"
        focusable="false"
        style={{
          fill: 'currentColor',
        }}
        width="100%"
        height="100%"
      />
    </StyledIconWrapper>
  )
}
