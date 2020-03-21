import { Form, Formik } from 'formik'
import React from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'

import { media } from '@/utils/media'
import { SubmitHandler } from '@/utils/types'

import { Button } from '../Button'
import { Column } from '../Column'
import { Contain } from '../Contain'
import { Flex } from '../Flex'
import { FormikInput } from '../Formik/FormikInput'
import { FormikTextArea } from '../Formik/FormikTextArea'
import { Heading } from '../Heading'
import { Row } from '../Row'
import { Space } from '../Space'
import { Subtitle } from '../Subtitle'
import { Text } from '../Text'

interface ContactContainerProps {
  background?: string
}

interface ContactFormValues {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

const ContactContainer = styled.section<ContactContainerProps>`
  background-color: ${({ theme }) => theme.colors.offWhite};
  position: relative;
  overflow: hidden;
  padding: ${({ theme }) => theme.space.s}px 0px;

  ${media.min('mobile')} {
    padding: ${({ theme }) => theme.space.m}px 0px;
  }

  ${media.min('tablet')} {
    padding: ${({ theme }) => theme.space.l}px 0px;
  }
`

const ContactText = styled.p`
  color: #494949;
  text-align: center;
`
const ContactTitle = styled(Heading)`
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`

const ContactLink = styled.a`
  color: #494949;
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
`

type EncodedData = ContactFormValues & { 'form-name': string }
function encode(data: EncodedData) {
  return Object.keys(data)
    .map((key: string) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key as string]))
    .join('&')
}

const Contact: React.FC = () => {
  const [submitSuccess, setSubmitSuccess] = React.useState(false)
  const [submitError, setSubmitError] = React.useState(false)

  const handleSubmit: SubmitHandler<ContactFormValues> = values => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() => {
        setSubmitSuccess(true)
        setSubmitError(false)
      })
      .catch(() => {
        setSubmitSuccess(false)
        setSubmitError(true)
      })
  }
  return (
    <ContactContainer>
      <Contain>
        <Row>
          <Column col={[12, 12, 12, 6]} inset={[0, 0, 0, 3]}>
            <Flex flexDirection="column" alignItems="center">
              <Subtitle mb="xs">Nice to meet you</Subtitle>
              <ContactTitle as="h3">Get in touch with me</ContactTitle>
              <ContactText>
                Check out my CV on{' '}
                <ContactLink href="https://www.linkedin.com/in/daphnesmit/" target="_blank">
                  LinkedIn
                </ContactLink>{' '}
                and my{' '}
                <ContactLink href="https://github.com/daphnesmit" target="_blank">
                  Github
                </ContactLink>{' '}
                (only open source stuff) if you want to see more of my work.<br/>
                Let&apos;s create some epic shit!
              </ContactText>
            </Flex>
          </Column>
        </Row>
        <Space mt={['xs', 's', 'm']}>
          <Row>
            <Column col={[12, 12, 12, 7]} inset={[0, 0, 0, 2.5]}>
              {submitSuccess && (
                <Text center as="p" color="success">
                  <span role="img" aria-label="rocket emoji">🚀</span> Thank you for your message! I will get back to you as soon as possible.
                </Text>
              )}
              {submitError && (
                <Text center as="p" color="error">
                   <span role="img" aria-label="alarm emoji">🚨</span> We couldn&apos;t send the form. You can also send me a direct email to:
                  <a href="mailto:daphnesmit1986@gmail.com">daphnesmit1986@gmail.com</a>
                </Text>
              )}
              {!submitError && !submitSuccess && (
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                  }}
                  validationSchema={Yup.object({
                    name: Yup.string().required('This field is required'),
                    email: Yup.string()
                      .email()
                      .required('This field is required'),
                    phone: Yup.string(),
                    subject: Yup.string(),
                    message: Yup.string().required('This field is required'),
                  })}
                  onSubmit={handleSubmit}>
                  {({ isSubmitting }) => (
                    <Form
                      action="/"
                      method="POST"
                      name="contact"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field">
                      {/* You still need to add the hidden input with the form name to your JSX form */}
                      <input type="hidden" name="form-name" value="contact" />
                      <Row>
                        <Column col={[12, 6]}>
                          <FormikInput label="Name" name="name" placeholder="" />
                        </Column>
                        <Column col={[12, 6]}>
                          <FormikInput type="email" label="Email" name="email" placeholder="" />
                        </Column>
                      </Row>
                      <Row>
                        <Column col={[12, 6]}>
                          <FormikInput label="Phone" name="phone" placeholder="" />
                        </Column>
                        <Column col={[12, 6]}>
                          <FormikInput label="Subject" name="subject" placeholder="" />
                        </Column>
                      </Row>
                      <Row>
                        <Column col={[12, 6]}>
                          <FormikTextArea rows={5} label="Message" name="message" placeholder="" />
                        </Column>
                      </Row>
                      <Button mt={['xs']} loading={isSubmitting} disabled={isSubmitting} variant="primary" type="submit">
                        Send message
                      </Button>
                    </Form>
                  )}
                </Formik>
              )}
            </Column>
          </Row>
        </Space>
      </Contain>
    </ContactContainer>
  )
}

export default Contact
