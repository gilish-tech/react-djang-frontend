import React,{useContext} from 'react'
import { CartContext } from '../utils/Context'






export const Constansts = () => {

    const {token} = useContext(CartContext)



    
    // const globalUrl = "https://gils-sub.herokuapp.com"
    // const globalUrl = "http://localhost:8000"
    const globalUrl = "https://perfecteccom.onrender.com"
    const url = `${globalUrl}/api/`
    const addToCartUrl = `${globalUrl}/api/add-to-cart/`
    const getTheCartUrl = `${globalUrl}/api/get-cart/`
    const getTotal = `${globalUrl}/api/get-total/`
    
    const LoginUrl = `${globalUrl}/api/token/`
    const get_Description  =  `${globalUrl}/api/product-description/`
    const refreshOrChangeTheExistingToken = `${globalUrl}/api/token/refresh/`
    const signUpurl = `${globalUrl}/api/create-account/`
    const paymentUrl = `${globalUrl}/api/make-payment/`


    return {url,addToCartUrl,token,getTheCartUrl,getTotal,LoginUrl,get_Description,refreshOrChangeTheExistingToken,signUpurl, paymentUrl}
 
}
