import React,{useContext} from 'react'
import { Constansts } from '../constants/Constansts'
import jwt_decode from "jwt-decode";
import { CartContext } from './Context';


export const LoginTo = () => {
    
    const {LoginUrl,token}  = Constansts()
    const {setToken} = useContext(CartContext)
     

    //uchussui
    function sendLoginCredentials(username,password,setStatus,setLoading){
        setLoading(true)
        fetch(LoginUrl, {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({"username":username,"password":password}),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json",
        // "Authorization": `Bearer ${token}`
    }
})
 
// Converting to JSON
.then(response =>{ 
    setStatus(response.status)
    return response.json()})
 
// Displaying results to console
.then(data => {
    setLoading(false)
    data["access"]  && localStorage.setItem('tokens', JSON.stringify(data)) 
    localStorage.setItem("name",   jwt_decode(data["access"])["name"]  )
    data["access"]  && setToken(data)  
    localStorage.setItem("accessExp",   jwt_decode(data["access"])["exp"]  )
    localStorage.setItem("refreshExp",   jwt_decode(data["refresh"])["exp"]  )

    window.location.reload()
    })

    
.catch(error => {console.log("error",error)
  console.log("this is the error",error)
  setLoading(false)
  setStatus("600")})   


       
     
}
return {sendLoginCredentials}


}
