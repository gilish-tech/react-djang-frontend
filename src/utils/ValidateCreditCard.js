import React,{useContext} from 'react'
import {Constansts} from "../constants/Constansts"
import { CartContext } from './Context'

export const ValidateCreditCard = () => {
    const {token,setNum} = useContext(CartContext)
    const { paymentUrl}  = Constansts()



    function confirmLocalUser(){

        localStorage.removeItem("item")
        
    }

    //uchussui
    function validate (item,setValid,nav){

        const myHeaders = token ? {"Content-type": "application/json","Authorization": `GILISH-TECH ${token}`} : {"Content-type": "application/json"}
        
        
        fetch( paymentUrl, {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify(item),
     
    // Adding headers to the request
    headers: myHeaders
})
 
// Converting to JSON
.then(response => response.json())

.then(data=>{console.log(data["valid"])
setValid(data["valid"])
setTimeout(()=>{
    if( data["valid"] == "yes"){
        nav("/")
        setNum(setNum(0))

    }
   
    if(!token){
        confirmLocalUser()
    }

},2000)


})
.catch(error=>setValid("error"))
}
return {validate}
}
