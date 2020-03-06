import React from 'react'

import { IndexPageTemplate } from '@/components/templates/IndexPageTemplate'

export interface IndexPagePreviewProps {
  entry: {
    getIn: (props: any) => any
  }
}

const IndexPagePreview: React.FC<IndexPagePreviewProps> = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return <IndexPageTemplate image={data.image} title={data.title} />
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
