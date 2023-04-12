import React,{useContext} from 'react'
import { CartContext } from './Context'
import { useNavigate,Link } from 'react-router-dom';


export const SetDes = () => {

const {setDescriptionItem} = useContext(CartContext)
const navigate = useNavigate();



 
async function setProductItemDes(item){
        

        await localStorage.setItem("description",JSON.stringify(item))
       setDescriptionItem(item)
        navigate(`/description/`);

    }

    return {setProductItemDes}
}
