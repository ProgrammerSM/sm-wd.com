import React from 'react'
import PropTypes from 'prop-types'
// import { StaticQuery, graphql } from 'gatsby'

import { ThemeProvider } from 'emotion-theming'
import styled from '@emotion/styled'
import theme from '../assets/js/theme'

import '../assets/scss/reset.scss'
import '../assets/scss/layout.scss'

import Spinner from './spinner'
import Header from './header'
import Container from './container'
import Footer from './footer'

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-height: 100vh;
  color: ${theme.primary.colors.white};
  overflow: auto;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ContentWrapper>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </ContentWrapper>
    <Spinner />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
