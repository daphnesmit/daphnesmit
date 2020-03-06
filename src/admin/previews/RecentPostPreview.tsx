import React from 'react'

import { RecentPostTemplate } from '@/components/templates/RecentPostTemplate'

export interface RecentPostPreviewProps {
  entry: {
    getIn: (props: any) => any
  }
  widgetFor: (props: any) => any
}

const RecentPostPreview: React.FC<RecentPostPreviewProps> = ({ entry, widgetFor }) => {
  return <RecentPostTemplate content={widgetFor('body')} title={entry.getIn(['data', 'title'])} />
}

export default RecentPostPreview
