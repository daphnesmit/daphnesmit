import { FastField, FastFieldProps } from 'formik'
import React from 'react'

import { FieldInput, FieldInputProps } from '../FieldForm/FieldInput'
import { FormikError } from './FormikError'
import { Box } from '../Box'

type FormikInput = FieldInputProps & {
  name: string
}

export const FormikInput: React.FC<FormikInput> = ({ name, ...props }) => {
  return (
    <Box mb="xs">
      <FastField name={name}>
        {({ field, form, meta }: FastFieldProps) => {
          return (
            <FieldInput
              {...props}
              {...field}
              hasError={Boolean(meta.touched && meta.error)}
              onClear={() => {
                form.setFieldValue(name, '')
                field.onBlur(undefined)
              }}
            />
          )
        }}
      </FastField>
      <FormikError name={name} />
    </Box>
  )
}
