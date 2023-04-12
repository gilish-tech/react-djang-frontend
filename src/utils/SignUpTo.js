import React from 'react'
import { Constansts } from '../constants/Constansts'
import { useNavigate } from 'react-router-dom'

export const SignUpTo = () => {
    const {signUpurl}  = Constansts()
    const navigate = useNavigate()
    function sendSignUpCredentials(username,email,pass1,pass2,setError,setLoading){
        setLoading(true)
        fetch(signUpurl, {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({"username":username,"email":email,"pass1":pass1,"pass2":pass2}   ),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json",
        // "Authorization": `Bearer ${token}`
    }
})
 
// Converting to JSON
.then(response =>{ 
   
    return response.json()})
 
// Displaying results to console
.then(data => {
    setLoading(false)
    console.log(data)
    if (data["error"] === "pnq"){
        setError("notSame")
    }else if (data["error"] === "already-exist"){
        setError("Email with this account already exist")

    }else if (data["error"] === "zero"){
        setError(undefined)
        setTimeout(()=>{navigate("/login/")},3000)
        
      
   
    }else if (data["error"] === "big error"){
        setError("An unexpected errror occured")  
    }
    
   
    })

    
.catch(error => {console.log("error",error)
  console.log("sign up error",error)
  setLoading(false)
  setError("An unexpected errror occured")})   


       
     
}
return {sendSignUpCredentials}

}
