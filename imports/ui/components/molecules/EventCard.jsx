// React
import React from 'react'
import styled from 'styled-components'

// Moment
import moment from "moment";

const StyledCard = styled.div`
  padding: 8px 16px;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  margin-bottom: 4px;
  transition: border 0.3s;

  &:hover {
    border: 1px solid #27E200;
  }
`
const StyledTitle = styled.h3`
  font-size: 1.1rem;
`

export const EventCard = ({ title, date, description, onSelect }) => (
  <StyledCard onSelect={onSelect}>
    <StyledTitle>{title}</StyledTitle>
    <p>{moment(date).format('L')}</p>
  </StyledCard>
)
