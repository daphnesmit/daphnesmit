import { Box } from '../Box'
import React, { FC, TextareaHTMLAttributes, useState } from 'react'
import styled, { css } from 'styled-components'

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  color?: 'white' | 'black'
  clearable?: boolean
  hasError?: boolean
  readonly?: boolean
  onClear?: () => void
}

const StyledTextArea = styled.textarea<TextAreaProps>`
  width: 100%;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  margin: 0;
  color: ${props => props.color || 'black'};
  padding: 10px 0;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }


  ${props =>
    props.hasError &&
    css`
      color: ${props.theme.colors.error};
    `};

  ${props =>
    props.readOnly &&
    css`
      opacity: 0.3;
      user-select: none;
      cursor: not-allowed;
    `};
`

const TextAreaWrapper = styled.div<TextAreaProps & { hasFocus: boolean }>`
  color: ${props => props.color || 'black'};
  border-radius: 0px;
  margin-bottom: ${({ theme }) => theme.space.xs}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 0;
  position: relative;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  ${props =>
    props.hasFocus &&
    css`
      outline: none;
      border-color: ${({ theme }) => theme.colors.black};
    `};

  ${props =>
    props.hasError &&
    css`
      color: ${({ theme }) => theme.colors.error};
      border-color: ${({ theme }) => theme.colors.error} !important;
    `};

`

export const TextArea: FC<TextAreaProps> = ({ clearable, onClear, ...props }) => {
  const [hasFocus, setHasFocus] = useState(false)

  return (
    <TextAreaWrapper
      color={props.color}
      readOnly={props.readOnly}
      hasFocus={hasFocus}
      hasError={props.hasError}>
      <StyledTextArea
        {...props}
        onBlur={e => {
          setHasFocus(false)
          if (props.onBlur) {
            props.onBlur(e)
          }
        }}
        onFocus={e => {
          setHasFocus(true)
          if (props.onFocus) {
            props.onFocus(e)
          }
        }}
      />
      {clearable && props.value && (
        <Box position="absolute" right={0} top={24}>
          x
        </Box>
      )}
    </TextAreaWrapper>
  )
}
