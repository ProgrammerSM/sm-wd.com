import { Link } from 'gatsby'
import React from 'react'

import styled from '@emotion/styled'

const HeaderWrapper = styled.div`
  background-color: ${props => props.theme.primary.colors.primary};
  margin-bottom: 1.45rem;

  div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  }
`

const Header = () => (
  <HeaderWrapper>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Hello Josh
        </Link>
      </h1>
    </div>
  </HeaderWrapper>
)

export default Header
