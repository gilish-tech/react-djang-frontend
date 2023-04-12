import React, { useContext } from 'react'
import { CartContext } from './Context'
import { Logout } from './Logout'
import { Constansts } from '../constants/Constansts'

import jwt_decode from "jwt-decode";

export const HandleToken = () => {
    const {token,setToken} = useContext(CartContext)
    const accessTokenExpDate =   localStorage.getItem("accessExp") 
    const refreshTokenExpDate = localStorage.getItem("refreshExp") 
    const refreshToken  =  token && JSON.parse(localStorage.getItem('tokens'))["refresh"]
    
    const {refreshOrChangeTheExistingToken} = Constansts()
    const {logout} = Logout()


    function checkExpires(tokenDate){
       

        const date = new Date()
        date.setDate(date.getDate() - 2)

        if (date.getTime() > (tokenDate  * 1000)){
            return true
        }






        
    }

    


    function updateToken(){
        if (token){

            if (checkExpires(accessTokenExpDate)){

                updateRefreshToken()
    
                
    
            }
        }
       
    }
//let fetch
    function fetchToken(){
        

        fetch(refreshOrChangeTheExistingToken, {
     
            // Adding method type
            method: "POST",
             
            // Adding body or contents to send
            body: JSON.stringify({"refresh":refreshToken}),
             
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

            console.log(data)
            
            data["access"]  && localStorage.setItem('tokens', JSON.stringify(data)) 
            localStorage.setItem("name",   jwt_decode(data["access"])["name"]  )
            localStorage.setItem("accessExp",   jwt_decode(data["access"])["exp"]  )
            localStorage.setItem("refreshExp",   jwt_decode(data["refresh"])["exp"]  )
            data["access"] && setToken(data["access"])
        
            window.location.reload()
            })
        
            
        .catch(error => {console.log("error",error)
         
          })   
        
        
    }


    function updateRefreshToken(){
        if (checkExpires(refreshTokenExpDate)){
            logout()
            
        }else{

            fetchToken()
           

        }
    }

     
    return {updateToken}

  
}



 
