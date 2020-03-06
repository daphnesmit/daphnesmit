import { css } from 'styled-components'

import { media } from '../utils/media'

export const general = css`
  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    margin: 0;
    margin-bottom: 16px;
    line-height: 1.25;

    ${media.min('mobile')} {
      line-height: 1.44;
    }
  }
`
