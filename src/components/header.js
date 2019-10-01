import { Link } from 'gatsby'
import React from 'react'

import styled from '@emotion/styled'
import Container from './container'


const HeaderWrapper = styled.header`
  margin-bottom: 2rem;
  padding: .5rem 0;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: .25rem;
    border-right: 1px solid ${props => props.theme.primary.colors.primaryBlue};
    border-bottom: 1px solid ${props => props.theme.primary.colors.primaryBlue};
    border-left: 1px solid ${props => props.theme.primary.colors.primaryBlue};
    border-radius: .5rem;
  }

  .headerNav {
    padding: .5rem;
    border-right: 1px solid ${props => props.theme.primary.colors.primaryBlue};
    border-left: 1px solid ${props => props.theme.primary.colors.primaryBlue};
    border-radius: .5rem;
  }
`

const Header = () => (
  <HeaderWrapper>
    <Container>
      <div className="header">
        <Link to="/">SM-WD</Link>
        <nav className="headerNav">
          <Link to="/">SM-WD</Link>
        </nav>
      </div>
    </Container>
  </HeaderWrapper>
)

export default Header
