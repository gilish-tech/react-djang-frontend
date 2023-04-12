import React from 'react'
import {Constansts} from "../constants/Constansts"


export const FullDescription = () => {

    const {get_Description}  = Constansts()

    //uchussui
    function description(url,setDetails){
        
        fetch(get_Description, {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({"url":url}),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json",
        // "Authorization": `Bearer ${token}`
    }
})
 
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(data => {
    
    setDetails(data)  })


.catch(error=>setDetails(null))
  
}

    return {description}
}

