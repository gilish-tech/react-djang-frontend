import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AddToCart } from "../../utils/AddToCart";
import Alert from '@mui/material/Alert';
import Grow from '@mui/material/Grow';


export default function MediaCard({image,name,price,des,whole,show}) {
  const {add} = AddToCart()
  const [shouldShow,setShow] = useState(show)
 
  return (
    <Card sx={{ maxWidth: 345 }}>
       
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="green iguana"
      />
      
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          {des && des.substring(0,20)}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          ${price.toLocaleString()}
        </Typography>
      </CardContent>
      <Button onClick  ={()=>{add(whole,"add")
                            setShow(true)
                            setTimeout(()=>setShow(false),2000)}} variant="outlined" >Add To Cart</Button>
      <CardActions>
      

      
      <Grow in={shouldShow}  style={{ transformOrigin: '0 0 0' }}  {...(shouldShow ? { timeout: 1000 } : {})}>
         <Alert severity="success">Added to Cart</Alert>
      </Grow>
    
      </CardActions>
    </Card>
  );
}
