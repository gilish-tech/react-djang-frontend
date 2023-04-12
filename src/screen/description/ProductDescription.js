import React, { useState,useContext,useEffect } from 'react'
import { Box, Container } from '@mui/material'
import {DesCarousel} from "./DesCarousel"
import { Comments } from './Comments'
import { ProductInfo } from './ProductInfo'
import { CartContext } from '../../utils/Context'
import { FullDescription } from '../../utils/FullDescription'
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export const ProductDescription = () => {
  const [details,setDetails] = useState()
  const {descriptionItem} = useContext(CartContext)
  const {description} = FullDescription()

  useEffect(()=>{
    
    description(descriptionItem.link,setDetails)
  },[])
  console.log("ss",details)
  return (
    
    <Container>
      {

        details ?
        <>
       <DesCarousel imgLarge={details.all_large_images} imgAlt={details.alt_image}/>
       <br/>
       <br/>
       <br/>
       <br/>
       
       <ProductInfo descriptionItem={descriptionItem} name={details.name} price={details.price} rating={details.rating} fullDes={details.full_des}/>
       <br/>
       <Box sx={{ display:"flex",width:"100%",background:"yellow"}}>

       <br/>


       
          <Comments all_reviews={details.all_reviews} />
        
       

        
       </Box>
       </>
       :
       
        details === null ? 
       
        <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        There is a problem loading The description  — <strong>try refreshing the page</strong>
      </Alert>
       :
       <Box sx={{ display: 'flex', justifyContent:"center",alignItems:"center" }}>
       <CircularProgress />
     </Box>

       

      }
       
      
       
       
    </Container>   
    
  )
}
