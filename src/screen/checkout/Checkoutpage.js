import React,{useContext, useEffect} from 'react'
import { Payments } from './Payments'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {Cart} from "../CartPage/Cart"
import {Box} from "@mui/material"
import {Container} from '@mui/material';
import { CartContext } from '../../utils/Context';
import MuiPhoneNumber from 'material-ui-phone-number';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Checkoutpage = () => {
  const {totalPrice,username,num} = useContext(CartContext)
  const [showPayment , setShowPayment] = useState(false)
  const navigate = useNavigate()
  useEffect(()=>{
    num <= 0 && navigate("/")
  },[])
  const handleSubmit = (e)=>{
    e.preventDefault()
 
    setShowPayment(true)
  }
  return (
     num > 0 ? <> 
     <Container>

        
      
      { !showPayment && <Stack  spacing={2} sx={{ width:"100%",flexDirection:{"xs":"column","sm":"row" },gap:2 }}>  
       
      

              <Box sx={{flex:1}}>
                  <Cart/>
              </Box>

             


              <Box sx={{ display:"flex", justifyContent:"center",paddingTop:10,flex:1}}>
                
       
       <div id="page" style={{ textAlign:"center",position:"relative"}}>
        <div style={{ textAlign:"center",position:"relative",top:"50%","transform": "translate(0, -50%)"}}>


    
       <h1>Checkout Page</h1>  
       <hr/>
           
           
          

          <form style={{ flex:"100%",margin:"0",maxWidth:"100%"}} onSubmit={handleSubmit}>


         
                  
              <TextField
                required
                id="standard-required"
                defaultValue={username ? username : ""}
                placeholder='Full name'
                sx={{ width:"80%",paddingLeft:"20px",marginTop:"30px"}}
                variant="standard"
              />



              <TextField
                required
                id="standard-required"
                placeholder='Email'
                type="email"
                sx={{ width:"80%",paddingLeft:"20px",marginTop:"30px"}}
                variant="standard"
              />


                <TextField
                required
                id="standard-required"
                placeholder='Address'
                sx={{ width:"80%",paddingLeft:"20px",marginTop:"30px"}}
                variant="standard"
              />





              
              
        


        
         <MuiPhoneNumber require defaultCountry={'us'}    InputProps={{ inputProps: { min: 9, max: 12  } }}    sx={{ width:"80%",paddingLeft:"20px",marginTop:"30px"}} />


         <Button  type="submit" sx={{fontSize:"10px", margin:"20px 0px 20px" ,marginTop:"40px",background:"#f0c14b",width:"100%",borderColor:"#a88734",color:"#111;" ,"&:hover":{background:"#f0c14b"}}} variant="contained"
          >
               Proceed to Payment
          </Button>
          </form>

         </div>


        
               
               
                    
                   
                 
                </div>
              </Box>      
              


        

             
             
          
         
      </Stack> }
     
          
    
      </Container>
       { showPayment && <Payments/> }
      
    </>: navigate("/")
  )
}
