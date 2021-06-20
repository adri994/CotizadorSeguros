import React from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled"
import { TransitionGroup, CSSTransition } from "react-transition-group"

const Msg = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top:2rem;
  padding: 1rem;
  text-align: center;
`;

const DivResult = styled.div`
  text-align: center;
  padding: .5rem;
  border:1px solid #26C6DA;
  background-color: rgb(127,224,237);
  margin-top: 1rem;
`

const Total = styled.p`
  color:#00838F;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`

const Result = ({total}) => {
  return (
    (total === 0) ? 
      <Msg>Eligue marca, año y tipo de seguro</Msg> 
    : (
        <TransitionGroup
        //Compònente que quieres animar
          component='p'
          className='resultado'        
        >
          <CSSTransition
            classNames='resultado'
            //ket puede sr la info
            key={total}
            // Tiempo de que entra y que sale
            timeout={{enter:500, exit:500}}
          >
            <DivResult>
              <Total>El total es: $ {total}</Total>
            </DivResult>    
          </CSSTransition>
        </TransitionGroup>
      )
  )
}

Result.propTypes = {
  total: PropTypes.number
}

export default Result
