import { Box } from '../Box'
import React, { FC, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

import { Label, TextArea, TextAreaProps } from '../Form'

export type FieldTextAreaProps = TextAreaProps & {
  label?: string
  name: string
}

const TextAreaWrapper = styled(Box)`
  position: relative;
`

export const FieldTextArea: FC<FieldTextAreaProps> = ({ label, ...props }) => {
  const theme = useContext(ThemeContext)
  return (
    <TextAreaWrapper>
      {label && (
        <Label htmlFor={props.name} color={props.color || theme.colors.grey}>
          {label}
        </Label>
      )}
      <TextArea {...props} id={props.name} />
    </TextAreaWrapper>
  )
}
