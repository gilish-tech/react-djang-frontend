import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import Card from './Card'
import { ValidateCreditCard } from '../../utils/ValidateCreditCard'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useNavigate} from 'react-router-dom';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from './cardUtils'


import "./checkout.css"
export const Payments = () => {
  const navigate = useNavigate();
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
  const {validate} = ValidateCreditCard()
  const [valid,setValid] = useState(null)

const onSubmit = values => {
  // await sleep(300)
  validate(values,setValid,navigate)

  
}
  return (
    <Styles>
    
    <Form
      onSubmit={onSubmit}
      render={({
        handleSubmit,
        form,
        submitting,
        pristine,
        values,
        active
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Card
               color="red"
              number={values.number || ''}
              name={values.name || ''}
              expiry={values.expiry || ''}
              cvc={values.cvc || ''}
              focused={active}
            />
            <div>
              <Field
                name="number"
                component="input"
                type="text"
                pattern="[\d| ]{16,22}"
                placeholder="Card Number"
                format={formatCreditCardNumber}
              />
            </div>
            <div>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <Field
                name="expiry"
                component="input"
                type="text"
                pattern="\d\d/\d\d"
                placeholder="Valid Thru"
                format={formatExpirationDate}
              />
              <span style={{ width:"120px"}}>
              <Field
                name="cvc"
                component="input"
                type="text"
                pattern="\d{3,4}"
                placeholder="CVC"
                format={formatCVC}
                
              />
              </span>
            </div>
            {valid === "yes" && <Alert severity="success">
            <AlertTitle>Payment Sucessful</AlertTitle>
                Your order has been placed <strong>thank you!</strong>
          </Alert>}


          {valid === "no" && <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Credit card verification failed  — <strong>please check your information and try again</strong>
          </Alert>}

        {valid === "error" && <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Error Validating Your Credit card  <strong>please Try again later</strong>
        </Alert>}
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Submit
              </button>
             
            </div>
            {/* <h2>Values</h2>
            <pre>{JSON.stringify(values, 0, 2)}</pre> */}
           <span class="extra-line">
            <span>Only Our Credit SandBox Credit Card Can work!! </span>
           
          </span>
          <br/>
          <br/>
        
      
      


          <span class="extra-line">
            
            <Link to = {{pathname:"/sandbox-cards/"}}  target='_blank' >Click To View/use Our SandBox Credit card</Link>
          </span>
          </form>
          
        )
      }}
    />
  </Styles>
  )
}
