import React from 'react'
import styled from '@emotion/styled'

const ContainerWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

const Container = ({ children }) => (
  <ContainerWrapper>
    {children}
  </ContainerWrapper>
)

export default Container
