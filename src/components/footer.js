import React from 'react'
// import { useTheme } from 'emotion-theming'
import styled from '@emotion/styled'

import Container from './container'

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.primary.colors.darkGrey};
  margin-top: 2rem;
`

const Footer = () => (
  <FooterWrapper>
    <Container>
      <p>footer</p>
    </Container>
  </FooterWrapper>
)

export default Footer
