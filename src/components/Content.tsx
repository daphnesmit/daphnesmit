import React from 'react'

export interface ContentProps {
  content: string
}

export const HTMLContent: React.FC<ContentProps> = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
)

const Content: React.FC<ContentProps> = ({ content }) => <div>{content}</div>

export default Content
