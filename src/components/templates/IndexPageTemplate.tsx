import React from 'react'
import Hero from '../Hero'

interface IndexPageTemplateProps {
  title: string
  image: any
}

export const IndexPageTemplate: React.FC<IndexPageTemplateProps> = ({ title, image }) => {
  if (!image) return null

  return (
    <>
      <Hero />
    </>
  )
}
