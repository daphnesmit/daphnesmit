import React from 'react'
import styled from 'styled-components'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Button } from '../Button'
import { Column } from '../Column'
import { Contain } from '../Contain'
import { Heading } from '../Heading'
import { Row } from '../Row'
import { Flex } from '../Flex'
import { Subtitle } from '../Subtitle'
import { FormikInput } from '../Formik/FormikInput'
import { FormikTextArea } from '../Formik/FormikTextArea'
import { SubmitHandler } from '@/utils/types'

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
  padding: ${({ theme }) => theme.space.l}px 0px;
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

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const handleSubmit: SubmitHandler<ContactFormValues> = values => {
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': 'contact', ...values }),
  })
    .then(() => console.log('Success!'))
    .catch(error => console.log(error))
}
const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <Contain>
        <Row>
          <Column col={[12, 12, 12, 6]} inset={[0, 0, 0, 3]}>
            <Flex flexDirection="column" alignItems="center">
              <Subtitle>Let’s talk</Subtitle>
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
                (only open source stuff) if you want to see more of my work.
              </ContactText>
            </Flex>
          </Column>
        </Row>
        <Row>
          <Column col={[12, 12, 12, 7]} inset={[0, 0, 0, 2.5]}>
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
              {() => (
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
                  <Button variant="primary" type="submit">
                    Send message
                  </Button>
                </Form>
              )}
            </Formik>
          </Column>
        </Row>
      </Contain>
    </ContactContainer>
  )
}

export default Contact
