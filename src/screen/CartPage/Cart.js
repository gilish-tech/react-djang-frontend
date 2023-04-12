import React,{useState,useEffect,useContext} from 'react'
import { CartStyle } from './CartStyle'

import { CartStlyle3 } from './CartStlyle3'
import { Container } from 'react-bootstrap'
import { Box } from '@mui/system'
import { GetCart } from '../../utils/GetCart'
import { CartContext } from '../../utils/Context'
import { HandleToken } from '../../utils/HandleToken'


export const Cart = () => {
   const {updateToken} = HandleToken()
    const {myCart} = GetCart()
    const [items,setItems ] = useState({"product":[],"total_amount":0})
    const {token} = useContext(CartContext)
    useEffect(()=>{myCart(setItems)
      updateToken()
    },[])
  
  return (
    <Box sx={{ display:"flex", justifyContent:"center",paddingTop:10}}>
      
        


        
       
       {items["product"] ?
        <CartStlyle3 items={items["product"]} total={items["total_amount"]} /> : updateToken()  }




    </Box>
   
  )
}
