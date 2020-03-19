import React from 'react'
import Hero from '../Hero'
import Contact from '../Contact'

interface IndexPageTemplateProps {
  title: string
  image: any
}

export const IndexPageTemplate: React.FC<IndexPageTemplateProps> = ({ title, image }) => {
  if (!image) return null

  return (
    <>
      <Hero />
      <Contact />
    </>
  )
}
