import React from 'react'
import styled from "@emotion/styled"
import { lettersMayus } from "../helpers/helper"

const Container = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color:#fff;
  margin-top: 1rem;
`

const Result = ({ brand, year, plan }) => {

  if(brand.trim()==='' || year.trim()==='' || plan.trim==='') return null
  return (
    <Container>
      <h2>Resultado de la cotizacion</h2>
      <ul>
        <li>Marca: {lettersMayus(brand)}</li>
        <li>Year: {lettersMayus(year)}</li>
        <li>Plan: {lettersMayus(plan)}</li>
      </ul>
    </Container>
  )
}

export default Result
