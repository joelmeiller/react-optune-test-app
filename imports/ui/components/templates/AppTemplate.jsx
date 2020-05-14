// React
import React from 'react'
import styled from 'styled-components'

// Components
import { AppTitle } from '../atoms/AppTitle'

const ContainerApp = styled.div`
  padding: 32px 48px;
`

export const AppTemplate = ({ title, children }) => (
  <ContainerApp>
    <AppTitle>{title}</AppTitle>

    {children}
  </ContainerApp>
)
