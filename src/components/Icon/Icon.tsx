import React from 'react'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import Box from '@material-ui/core/Box'
import styled, { css } from 'styled-components'

import { Conference, Phone, Speech } from './icons'

export type IconOption = keyof typeof icons

export const icons = {
  Conference,
  Phone,
  Speech,
}
interface IconOwnProps {
  icon: IconOption
  color?: string
  size?: number | any[]
  width?: number | any[]
  height?: number | any[]
  viewBox?: string
}

const IconWrapper = styled(Box)`
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  ${({ theme, color }) =>
    css`
      color: ${theme.colors[color]};
    `};
`
export type IconProps = SvgIconProps & IconOwnProps
const Icon: React.FC<IconProps> = ({
  icon,
  width,
  height,
  color = 'primary',
  size,
  viewBox = '0 0 24 24',
}) => {
  const IconComponent = icons[icon]
  const w = size ? size : width ? width : 20
  const h = size ? size : height ? height : 20
  return (
    <IconWrapper color={color} width={w} height={h}>
      <svg focusable="false" width="100%" aria-hidden="true" role="presentation" viewBox={viewBox}>
        <IconComponent />
      </svg>
    </IconWrapper>
  )
}

export default Icon
