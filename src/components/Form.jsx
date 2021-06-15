import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled"

import { getDiffDate, calcMarca, searchPlan } from '../helpers/helper'

const Container = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
`;
const Select = styled.select`
  display: flex;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance:none;
`;
const Radio = styled.input`
  margin: 0 1rem;
`
const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color:#fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color .3s ease;
  margin-top: 2rem;

  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`
const Error = styled.p`
background-color: red;
color: #fff;
padding: 1rem;
width: 100%;
text-align: center;
`

const Form = ({setResume}) => {

  const [data,setDate] = useState({
    brand:'',
    year:'',
    plan:''
  })

  const [error, setError] = useState(false)

  const { brand, year, plan } = data

  const getContent = (e)=>(setDate({
    ...data,
    [e.target.name]:e.target.value
  }))

  const validateForm = (e) =>{
    e.preventDefault()

    if(brand.trim()==='' || year.trim()==='' || plan.trim===''){
      setError(true)
      return
    }

    setError(false)
    let result = 2000
    //Calcular la diferencia de año
    const diffe = getDiffDate(year)

    result -= ( ( diffe * 3 ) * result ) / 100
    result = calcMarca(brand) * result
    result = parseFloat( searchPlan(plan) * result ).toFixed()
    
    setResume({
      total: result,
      data
    })
    
  }


  return (
    <form
      onSubmit={validateForm}
    >
      {
        error ? 
          <Error>Todos los Campos son obligatorios</Error> 
        : ''
      }
      <Container>
        <Label htmlFor="">Marca</Label>
        <Select
          onChange={getContent} 
          name="brand"
          value={brand} 
        >
          <option value="">--- Selecionar ---</option>
          <option value="Americano">Americano</option>
          <option value="Europeo">Europeo</option>
          <option value="Asiatico">Asiatico</option>
        </Select>
      </Container>
      <Container>
        <Label htmlFor="">Año</Label>
        <Select
          onChange={getContent}  
          name="year" 
          value={year}
        >
          <option value="">--- Selecionar ---</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Container>
      <Container>
        <Label>Plan</Label>
        <Radio 
          type="radio"
          name="plan"
          value="Basic"
          onChange={getContent}  
          checked={plan === 'Basic'}
          />Basico
        <Radio 
          type="radio"
          name="plan"
          value="Completed"
          onChange={getContent} 
          //esto nos permite que poner en en check si el plan es igual
          checked={plan === 'Completed'}
          />Completed
      </Container>
      <Button type="submit">Cotizar</Button>
    </form>
  )
}


export default Form
