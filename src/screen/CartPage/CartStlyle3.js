import React,{useState,useEffect} from 'react'
import "./Cart3.css"
import AddIcon from '@mui/icons-material/Add';
import { Stack } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/system';
import { AddToCart } from '../../utils/AddToCart';
import { useContext } from 'react';
import { CartContext } from '../../utils/Context';
import {Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

export const CartStlyle3 = ({items,total}) => {
  const location = useLocation();
  

  const navigate = useNavigate()
  const {add_cartpage_part} = AddToCart()
  const [itemUpdate, setItemUpdate] = useState([])
  const [itTotal, setItTotal] = useState(0)
  const {setNum,setTotalPrice,num} = useContext(CartContext)
  const [showButton,setShowButton] = useState(true)
  useEffect(()=>{
    setItemUpdate(items)
    setItTotal(total)}
    ,[items])

  useEffect(()=>{
    setTotalPrice(itTotal)
  },[itTotal])  



  useEffect(()=>{
    if(location.pathname === "/cart/" || location.pathname === "/cart" ){
      setShowButton(true)

    }
    else{
      setShowButton(false)

    }

    if(num <= 0){
      setShowButton(false)

    }
  },[])


  useEffect(()=>{
  
    if(num <= 0){
      setShowButton(false)

    }
  },[num])


 
  return (
    <div id="page">
      <table id="cart">
        <thead>
          <tr>
            <th class="first">Photo</th>
            <th class="second">Qty</th>
            <th class="third">Product</th>
            <th class="fourth">Line Total</th>
            <th class="fifth">&nbsp;</th>
          </tr>
        </thead>
        <tbody>


          {itemUpdate.map((item)=>{
            return(
              <tr class="productitm">
            
              <td><img src={item.img} style={{ maxHeight:"50px"}} class="thumb"  /></td>
              
              <td >

              <Stack  direction="row" sx={{ justifyContent:"center",alignItems:"center"}}>

              <AddIcon sx={{ cursor:"pointer" }} onClick={()=>add_cartpage_part(item,"add",setItemUpdate, setItTotal,setNum)}/>
                  <Box>
                  <input type="number"   value={item.quantity}  min="0" max="99" class="qtyinput"  />
                  </Box>
                  <RemoveIcon sx={{ cursor:"pointer" }} onClick={()=>add_cartpage_part(item,"sub",setItemUpdate, setItTotal,setNum)} />
                  </Stack>    
                
                </td>
           
          
              <td>{item.name.substring(0,20)}</td>
              <td>${item.item_total}</td>
              <td><span class="remove"  onClick={()=>add_cartpage_part(item,"del",setItemUpdate, setItTotal,setNum)}><img src="https://mpng.subpng.com/20180413/fxw/kisspng-rubbish-bins-waste-paper-baskets-tin-can-recycli-trash-can-5ad08fab804597.1909382715236177075254.jpg" alt="X"/></span></td>
              {/* <td><span class="remove"  onClick={()=>add_cartpage_part(item,"del",setItemUpdate, setItTotal,setNum)}><img src="https://i.imgur.com/h1ldGRr.png" alt="X"/></span></td> */}
            </tr>
          

            )
          })}

          
     
          {/* <tr class="productitm">
            
            <td><img src="https://i.imgur.com/8goC6r6.png" class="thumb"  /></td>
            <td><input type="number" value="1" min="0" max="99" class="qtyinput"  /></td>
            <td>Design Bundle Package</td>
            <td>$79.00</td>
            <td><span class="remove"><img src="https://i.imgur.com/h1ldGRr.png" alt="X"/></span></td>
          </tr> */}
        
   
          <tr class="extracosts">
            <td class="light">Shipping &amp; Tax</td>
            <td colspan="2" class="light"></td>
            <td>$0.00</td>
            <td>&nbsp;</td>
          </tr>
          <tr class="totalprice">
            <td class="light">Total:</td>
            <td colspan="2">&nbsp;</td>
            <td colspan="2"><span class="thick">${itTotal}.00</span></td>
          </tr>
          
          
         
        </tbody>
      </table>
    
      {showButton  &&  <Button  type="submit" sx={{ margin:"20px 0px 20px" ,background:"#f0c14b",width:"100%",borderColor:"#a88734",color:"#111;" ,"&:hover":{background:"#f0c14b"}}} variant="contained"
      onClick={()=>{
        
        
        navigate("/checkout/")
      }}>
        
  Proceed to Checkout
</Button>}

    </div>

  )
}
