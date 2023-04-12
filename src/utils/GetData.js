import React from 'react'
import {Constansts} from "../constants/Constansts"


export const GetData = (item) => {

    const {url}  = Constansts()

    //uchussui
    function add(item,setStuff,setLoading,setPageNum){
        setLoading(false)
        fetch(url, {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify(item),
     
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
    
    setStuff(data["message"]['products'])
    setPageNum(parseInt(data["message"]["pages"]))
    setLoading(true)})
    // console.log(data)
.catch(error=>{
    console.log("big error")
    setLoading(true)
    

})    

  
}

    return {add}
}

