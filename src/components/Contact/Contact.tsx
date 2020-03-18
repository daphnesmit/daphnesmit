import React from 'react'
import styled from 'styled-components'
import { Column } from '../Column'
import { Contain } from '../Contain'
import { Row } from '../Row'
import { Flex } from '../Flex'

interface ContactContainerProps {
  background?: string
}

const ContactContainer = styled.section<ContactContainerProps>`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  height: 100vh;
  overflow: hidden;
`

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <Contain>
        <Row>
          <Column col={[12, 12, 12, 6]} inset={[0, 0, 0, 2]}>
            <Flex justifyContent="center">
              <p>Let’s talk</p>
              <h3>Get in touch with me</h3>
            </Flex>
          </Column>
        </Row>
      </Contain>
    </ContactContainer>
  )
}

export default Contact
