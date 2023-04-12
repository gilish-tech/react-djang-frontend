import React from 'react'
import { useState } from 'react';
import "./mediacard2.css"
import { Typography } from '@mui/material';
import { AddToCart } from "../../utils/AddToCart";
import { SetDes } from '../../utils/SetDes';
import Grow from '@mui/material/Grow';
import Alert from '@mui/material/Alert';



export const MediaCard2 = ({image,name,price,des,whole,show}) => {
    const {add} = AddToCart()
    const [shouldShow,setShow] = useState(show)
    const {setProductItemDes} = SetDes()
  return (
    
   <>
    
{/* <body>
	<div id="wrap">
	<div id="columns" class="columns_4"> */}


    <figure  style={{ width:"100%",cursor:"pointer"}}>
    <img  onClick={()=> setProductItemDes(whole) } src={image} style={{marginLeft:"auto", marginRight:"auto",display:"block" }} height="200"/>
        <figcaption>  <h3 style={{ fontSize:"1rem"}} class="product-name">{name.substring(0, 19)}..</h3></figcaption>
        {/* <figcaption> <p class="offer-info">{name}</p></figcaption> */}

        {/* <span class="price"> ${price.toLocaleString()}</span> */}
        <p class="discount-price">${price.toLocaleString()}</p>
        <a class="button" style={{ cursor:"pointer", width:"100%",marginLeft:"0",fontSize:"0.9rem"}} onClick  ={()=>{add(whole,"add")
                            setShow(true)
                            setTimeout(()=>setShow(false),2000)}} variant="outlined">Add to Cart</a>
       <Grow sx={{display: shouldShow ? "block" : "none"}} in={shouldShow}  style={{ transformOrigin: '0 0 0' }}  {...(shouldShow ? { timeout: 1000 } : {})}>
         <Alert severity="success">Added to Cart</Alert>
      </Grow>                     
	</figure>
	
	{/* <figure>
	<img src="https://i.imgur.com/sPxEkEI.jpg" />
	<figcaption>Green and Black Flowers</figcaption>
    <span class="price">$44</span>
    <a class="button" href="#">Buy Now</a>
	</figure>
	 */}

	
{/* </div>
</div>

</body> */}
   </>
  )
}
