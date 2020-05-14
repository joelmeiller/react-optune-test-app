import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${({ type }) => (type === 'submit' ? '#27E200' : '#F5F6F8')};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.15);
  color: ${({ type }) => (type === 'submit' ? '#FFFFFF' : '#0A1C3B')};
  font-size: 1rem;
  padding: 8px 24px;
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`
