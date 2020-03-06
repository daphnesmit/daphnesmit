import { createGlobalStyle } from 'styled-components'

import { html } from './document'
import { general } from './general'
import { heading } from './heading'
import { normalizer } from './normalizer'

export const GlobalStyle = createGlobalStyle`
    ${normalizer}
    ${html}
    ${heading}
    ${general}
`
