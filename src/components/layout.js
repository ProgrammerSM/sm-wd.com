import React from 'react'
import PropTypes from 'prop-types'
// import { StaticQuery, graphql } from 'gatsby'

import { ThemeProvider } from 'emotion-theming'
import theme from '../assets/theme'
import styled from '@emotion/styled'

import '../assets/reset.scss'
import '../assets/layout.scss'

import Header from './header'
import Container from './container'

const Main = styled.main`
  padding: 20px;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Header/>
    <div>
      <Container>
        <Main>{children}</Main>
      </Container>
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
