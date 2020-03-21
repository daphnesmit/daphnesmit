import { ErrorMessage } from 'formik'
import React from 'react'

import { colors } from '@/theme/colors'

import { Box } from '../Box'
import {  Text } from '../Text'

interface FormikErrorProps {
  name: string
}

export const FormikError: React.FC<FormikErrorProps> = ({ name }) => {
  return (
    <Box mt={5}>
      <ErrorMessage
        name={name}
        render={(message: string) => {
          return (
            <Text fontSize="1.3rem" display="block" fontSize="1.3rem" color={colors.error}>
              {message}
            </Text>
          )
        }}
      />
    </Box>
  )
}
