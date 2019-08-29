import { Link } from 'gatsby'
import React from 'react'

import styled from '@emotion/styled'

const HeaderWrapper = styled.div`
  background-color: ${props => props.theme.primary.colors.primary};
  margin-bottom: 1.45rem;

  div {
    font-size: 60px;
  }
`

const Header = () => (
  <HeaderWrapper>
    <Link to="/">SM-WD</Link>
  </HeaderWrapper>
)

export default Header
