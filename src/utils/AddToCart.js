import React,{useContext} from 'react'
import {Constansts} from "../constants/Constansts"
import { CartContext } from './Context'




function addForUnAuthenticatedUser(item,cmd){

   
    const purchasedItems = localStorage.getItem("item")
    const checkIfExist = (_item, _arrayOfItem)=>{
        
        for (let i =0 ; i < _arrayOfItem.length;i++){
            

            if (_arrayOfItem[i]["name"] === _item["name"] && _arrayOfItem[i]["des"] === _item["des"]  && _arrayOfItem[i]["link"] === _item["link"]  && _arrayOfItem[i]["price"] === _item["price"] && _arrayOfItem[i]["rating"] === _item["rating"] &&  _arrayOfItem[i]["img"] === _item["img"]) {
                
               
                return i
            }

        }

        return false

    }
    if(purchasedItems){
        
        const parsedItems = JSON.parse(purchasedItems)
        const positionOfTheItem = checkIfExist(item,parsedItems)
        

        if (checkIfExist(item,parsedItems)  || checkIfExist(item,parsedItems) === 0 ){
            if (cmd === "add"){

                
           
                parsedItems[positionOfTheItem]["quantity"]  += 1
                parsedItems[positionOfTheItem]["item_total"]   =  String(parsedItems[positionOfTheItem]["quantity"] * parseFloat(parsedItems[positionOfTheItem]["price"]))  +  ".00"
            
             
                
               
                localStorage.setItem("item",JSON.stringify(parsedItems))
    
            }if(cmd === "sub"){
                parsedItems[positionOfTheItem]["quantity"]  -= 1
                parsedItems[positionOfTheItem]["item_total"]   =  String(parsedItems[positionOfTheItem]["quantity"] * parseFloat(parsedItems[positionOfTheItem]["price"]))  +  ".00"
                if (parsedItems[positionOfTheItem]["quantity"]  <= 0 ){
                   const p =  parsedItems.splice(positionOfTheItem,1)
                   localStorage.setItem("item",JSON.stringify(p))
                }
                localStorage.setItem("item",JSON.stringify(parsedItems))

            

            }if (cmd === "del"){
               
                 parsedItems.splice(positionOfTheItem,1)
                localStorage.setItem("item",JSON.stringify(parsedItems))

            }

        }
        else{
            item["quantity"]  = 1
            item["item_total"] = String(parseFloat(item["price"] ) * item["quantity"] ) +  ".00"
           
            parsedItems.push(item)
            localStorage.setItem("item",JSON.stringify(parsedItems))

        }
        
       

    }else{

        item["quantity"] = 1 
        item["item_total"] = String(parseFloat(item["price"])) +  ".00"

     

        localStorage.setItem("item",JSON.stringify([item]))
    }

    const newitem = localStorage.getItem("item")

    const  getTotal = ()=> {
        let num = 0
        if(newitem ){
            const parsedItems = JSON.parse(newitem )
    
           

            for (let i = 0; i < parsedItems.length; i++){
                num += parseFloat(parsedItems[i]["item_total"])
                
            }

           
        }

        return num

        
    }

    function getQuantity(){
        let quantities = 0
        
        if(newitem){
            const parsedItems = JSON.parse(newitem)
    
           

            for (let i = 0; i < parsedItems.length; i++){
                quantities += parsedItems[i]["quantity"]
            }

           
        }

        return quantities

        
    }

   

    


    

    return {newitem,getTotal,getQuantity}
   

}





/**
 if(parsedItems){
    
            let num = 0

            for (let i = 0; i < parsedItems.length; i++){
                num += parseFloat(parsedItems[i]["item_total"])
            }

        }
 */












//End here
export const AddToCart = () => {


    const  {url,addToCartUrl,token,getTotal} = Constansts()
    const {setNum} = useContext(CartContext)



    function add(item,cmd){
       
        if(token){


               
                fetch(addToCartUrl, {
            
            // Adding method type
            method: "POST",
            
            // Adding body or contents to send
            body: JSON.stringify({"product":item,"cmd":cmd}),
            
            // Adding headers to the request
            headers: {
                "Content-type": "application/json",
                "Authorization": `GILISH-TECH ${token}`
            }
        })
        
        // Converting to JSON
        .then(response => response.json())
        
        // Displaying results to console
        .then(json => setNum(json["totalcart"]));

        }else{
            const {newitem,getTotal,getQuantity} = addForUnAuthenticatedUser(item,cmd)
            setNum( getQuantity)

        }
       



  
}


// Stuffs  with Juice








function add_cartpage_part(item,cmd,setItems, setItTotal,setNum){
    if (token){

        fetch(addToCartUrl, {
 
            // Adding method type
            method: "POST",
             
            // Adding body or contents to send
            body: JSON.stringify({"product":item,"cmd":cmd}),
             
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
                setNum(json["totalcart"])    
                
            setItems(json["products"])
            setItTotal(json["total"])});


    }else{
        const {newitem,getTotal,getQuantity} =  addForUnAuthenticatedUser(item,cmd)
       
        setItems(JSON.parse(newitem))
        setItTotal(getTotal())
        setNum(getQuantity())

        
    }
   




}

//NEXT CODE
function getCartTotal(){
    if (token){

        fetch(getTotal, {
 
            // Adding method type
            method: "GET",
             
            
             
            // Adding headers to the request
            headers: {
                // "Content-type": "application/json",
                "Authorization": `GILISH-TECH ${token}`
            }
            })
            
            // Converting to JSON
            .then(response => response.json())
            
            // Displaying results to console
            .then(json => setNum(json["totalcart"]))


    }else{

        let quantities = 0
        const newitem = localStorage.getItem("item")

        
        if(newitem){
            const parsedItems = JSON.parse(newitem)
    
           

            for (let i = 0; i < parsedItems.length; i++){
                quantities += parsedItems[i]["quantity"]
            }

           
        }

        return setNum(quantities)


    }





}


return {add,add_cartpage_part,getCartTotal}    

        

       


    }


   

  
//  main.js
  
// POST request using fetch()

