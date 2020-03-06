import CMS from 'netlify-cms-app'

import IndexPagePreview, { IndexPagePreviewProps } from './previews/IndexPagePreview'
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'
// import RecentPostPreview, { RecentPostPreviewProps } from './previews/RecentPostPreview'

// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate<IndexPagePreviewProps>('index', IndexPagePreview)
