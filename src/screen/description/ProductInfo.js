import React,{useState} from 'react'
import { Box, Typography } from '@mui/material'
import { Addrating } from '../searchpage/Addrating'
import parse from 'html-react-parser'
import "./table.scss"
import { AddToCart } from "../../utils/AddToCart";
import Button from '@mui/material/Button';
import Grow from '@mui/material/Grow';
import Alert from '@mui/material/Alert';



export const ProductInfo = ({price,rating,name, fullDes,descriptionItem}) => {
  const {add} = AddToCart()
  const [shouldShow,setShow] = useState(false)
  return (
    <>

     
  

     <Box sx={{paddingTop:"20px", textAlign:"center",width:"100%" ,fontSize:"30px",background:"-webkit-linear-gradient(45deg, #FFF, #F9F9F9);",boxShadow:"0 1px 2px rgba(34, 25, 25, 0.4)", border:"2px solid #FAFAFA"}}>
     {/* <Typography  variant="h5" component="p">
             {name && name}
        </Typography> */}
        <h3 class="product-name">{name && name}</h3>

      <Box sx={{ width:"100%",backgroundColor:""}} >
      <Addrating rating={rating && rating}/>  
      </Box>  
      <br/>

      {/* <a href="#" class="add-to-cart">
            <ion-icon name="add-outline"></ion-icon> Add to cart
            </a> */}

            <Button sx={{ width:"100%", background:"#f0c14b",width:"100%",borderColor:"#a88734",color:"#111;" ,"&:hover":{background:"#111",color:"#f0c14b"}}} onClick  ={()=>{add(descriptionItem,"add")
             setShow(true)
             setTimeout(()=>setShow(false),2000)
          }}  variant="contained" >Add To Cart</Button>      

      

            <br/>

            
            <Grow sx={{display: shouldShow ? "block" : "none"}} in={shouldShow}  style={{ transformOrigin: '0 0 0' }}  {...(shouldShow ? { timeout: 1000 } : {})}>
         <Alert severity="success">Added to Cart</Alert>
      </Grow>
            
      

       
  
     {/* <Typography   variant="h4" component="h2" sx={{  color:"#343A40"}} >
            ${price && price}
           
        </Typography> */}
        <p  style={{ fontSize:"40px"}} class="discount-price">${price && price}</p>

     </Box>
     <br/>
     
     <Box sx={{paddingTop:"20px", textAlign:"center",width:"100%" ,fontSize:"20px",background:"-webkit-linear-gradient(45deg, #FFF, #F9F9F9);",boxShadow:"0 1px 2px rgba(34, 25, 25, 0.4)", border:"2px solid #FAFAFA", display:"flex",
      justifyContent:"center"}}>
      <div className="table">
      {fullDes &&  parse(fullDes)}

      </div>
     
     </Box>
       
    </>
  )
}
