import React from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled"

const ContainerHeader = styled.header`
  background-color:#26c6da;
  padding: 10px;
  font-weight:bold;
  color:#fff;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: 'Slabo 27px',serif;
  text-align: center;
`

const Header = ({title}) => {
  return (
    <ContainerHeader>
      <Title>{title}</Title>
    </ContainerHeader>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
