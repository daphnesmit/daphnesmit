import React from 'react'

import { Box } from '../Box'
import Contact from '../Contact'
import Footer from '../Footer'
import Hero from '../Hero'

interface IndexPageTemplateProps {
  title: string
  image: any
}

export const IndexPageTemplate: React.FC<IndexPageTemplateProps> = ({ title, image }) => {
  const ref = React.useRef<HTMLDivElement>(null)
  if (!image) return null

  return (
    <>
      <Hero contactRef={ref} />
      <Box ref={ref}>
        <Contact />
      </Box>
      <Footer/>
    </>
  )
}
