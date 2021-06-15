import React, { useState } from 'react'
import styled from "@emotion/styled"
import Header from './components/Header'
import Form from './components/Form'
import Result from './components/Result'

const Container = styled.div`
max-width: 600px;
margin: 0 auto;
`
const FormContainer = styled.div`
background-color:#fff;
padding: 3rem;
`
const App = () => {

  const [resume, setResume] = useState({
    total: 0,
    data:{
      brand : '', 
      year: '', 
      plan: ''
    }
  })

  const { data } =resume

  return (
    <Container>
      <Header 
        title="Cotizador de Seguro"
      />
      <FormContainer>
        <Form 
          setResume = {setResume}
        />
        <Result 
          {...data}
        />
      </FormContainer>
    </Container>

  )
}

export default App

