import React,{useContext} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { CartContext } from './Context';



export const MoveToSearch = () => {
  const navigate = useNavigate();
  const {setShow} = useContext(CartContext)

 
  
  function move(text){

    navigate(`search/${text}`);
    setShow(false)


  

   

  }

  return {move}
  
 

  


 
}
