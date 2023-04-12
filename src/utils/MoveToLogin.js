import React from 'react'
import { useNavigate} from 'react-router-dom';


export const MoveToLogin = () => {
  const navigate = useNavigate();

 
  
  function moveToLogin(){

    navigate(`/login/`);


  

   

  }

  return {moveToLogin}
  
 

  


 
}
