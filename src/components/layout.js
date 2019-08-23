import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { ThemeProvider } from 'emotion-theming'
import theme from '../assets/theme'

import '../assets/reset.scss'
import '../assets/layout.scss'

import Header from './header'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Header/>
    <div>
      <main>{children}</main>
      <footer/>
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
