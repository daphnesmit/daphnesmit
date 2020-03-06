import { graphql } from 'gatsby'
import React from 'react'
import { IndexPageTemplateQuery } from 'types/graphql-types'

import BaseLayout from '@/components/BaseLayout'
import { IndexPageTemplate } from '@/components/templates/IndexPageTemplate'

interface IndexPageProps {
  data: IndexPageTemplateQuery
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const { frontmatter } = data.markdownRemark!

  if (!frontmatter?.title) return null

  return (
    <BaseLayout>
      <IndexPageTemplate title={frontmatter.title} image={frontmatter.image} />
    </BaseLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
