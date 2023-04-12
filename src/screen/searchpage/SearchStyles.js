import React,{useState} from 'react'
import { Box,styled,Stack,Container } from '@mui/system'
import { Typography } from '@mui/material'
import { Addrating } from './Addrating'
import Button from '@mui/material/Button';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { AddToCart } from "../../utils/AddToCart";
import "./search.css"
import { SetDes } from '../../utils/SetDes';
import Alert from '@mui/material/Alert';
import Grow from '@mui/material/Grow';





const ContainerBox = styled("Box")({
    display:"flex"
})


export const SearchStyles = ({item}) => {
  const {add} = AddToCart()
  const { setProductItemDes } = SetDes()
  
  const [shouldShow,setShow] = useState(false)
 
  return (

   
        <>
        <Stack direction="row">
            <Box sx={{ flex:5 , height:"200px",cursor:"pointer"}}  onClick={()=> setProductItemDes(item)}>
           
              <Box     sx={{ width: "100%", height: 350, position: "relative",}} variant="woven"  >
              <img style={{

                   
                   
                    
                  
                     maxWidth: "100%", 
                     height: "50%",
                     
                     
                    display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop:"40px"
                     
                      
                      
                     
                  
                }} src ={item.img}  />


              </Box>
                   
            </Box>


            <Box sx={{ flex:6, textAlign:"center"}}>
            <p style={{backgroundColor:"#1976D2"}}  class="free-shipping">Gilish-Tech</p>
              
                    <h5  onClick={()=> setProductItemDes(item)}  className="product-name" style={{textAlign:"center",cursor:"pointer"}}>{item.name}</h5>
                   
                    <p style={{cursor:"pointer"}}  onClick={()=> setProductItemDes(item)} class="offer-info"> {item.des}</p>
                    <Box sx={{fontSize:"20px", cursor:"pointer"}}  onClick={()=> setProductItemDes(item)}>
                    <Addrating rating={item.rating}  sx={{textAlign:"center"}}/>
                    </Box>
                    
                    <p  class="discount-price product-name ">{item.price}$</p>
                    <Button sx={{ width:"100%", background:"#f0c14b",width:"100%",borderColor:"#a88734",color:"#111;" ,"&:hover":{background:"#111",color:"#f0c14b"}}} onClick  ={()=>{
                      
                      add(item,"add")
                      setShow(true)
                      setTimeout(()=>setShow(false),2000)
                    }
                    }  variant="contained" >Add To Cart</Button>

                <Grow in={shouldShow}  style={{ transformOrigin: '0 0 0' }}  {...(shouldShow ? { timeout: 1000 } : {})}>
                        <Alert severity="success">Added to Cart</Alert>
                      </Grow>
                                    

                    
            </Box>
           


        </Stack>
        
    
        <br/><br/>
        <hr/>

        </>
        

       

   

   
    
  )
}
