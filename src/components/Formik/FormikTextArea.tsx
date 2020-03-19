import { FastField } from 'formik'
import React, { FC } from 'react'

import { FieldTextArea, FieldTextAreaProps } from '../FieldForm/FieldTextArea'
import { FormikError } from './FormikError'

export type FormikTextAreaProps = FieldTextAreaProps & {
  name: string
}

export const FormikTextArea: FC<FormikTextAreaProps> = ({ name, ...props }) => {
  return (
    <>
      <FastField name={name}>
        {({ field, form: { touched, errors, setFieldValue } }: any) => {
          return (
            <FieldTextArea
              {...props}
              {...field}
              hasError={touched[name] && errors[name]}
              onKeyUp={e => {
                setFieldValue(name, e.currentTarget.value)
              }}
              onClear={() => {
                setFieldValue(name, '')
                field.onBlur()
              }}
            />
          )
        }}
      </FastField>
      <FormikError name={name} />
    </>
  )
}
