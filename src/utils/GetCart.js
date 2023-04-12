import React, { useContext } from 'react'
import { Constansts } from '../constants/Constansts';
import { CartContext } from './Context';
export const GetCart = () => {

    const  {getTheCartUrl} = Constansts()
    const {token} =  useContext(CartContext)
    const localhostItem = JSON.parse(localStorage.getItem("item") ? localStorage.getItem("item")  : null)


  
   function returnHost(){
    if(localhostItem){

        let num = 0
        for (let i = 0; i < localhostItem.length; i++){
            num += parseFloat(localhostItem[i]["item_total"])
        }
        
        return({"product":localhostItem,"total_amount":num})


    }else {

        return({"product":[],"total_amount":0})
    }
   
    
   }
    


    function myCart(setItems){
       

        if (token){
            fetch(getTheCartUrl, {
     
     
                // Adding headers to the request
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `GILISH-TECH ${token}`
                }
            })
             
            // Converting to JSON
            .then(response => response.json())
             
            // Displaying results to console
            .then(json => {
            if (json["code"]){
            
               window.location.reload()
            }else{
                setItems(json)
           

            }    
            })

            .catch(error=>console.log("error"))


            }else{
                
                setItems(returnHost())




            }
            
            


        }
       
return {myCart}
}
