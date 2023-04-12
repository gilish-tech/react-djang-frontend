import React,{useState,useContext, useEffect} from 'react'
import { AppBar, Toolbar, styled, Typography, Box, TextField, InputBase, Badge,Button } from '@mui/material'
import { AddShoppingCart,Pageview } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

import { MoveToSearch } from '../utils/MoveToSearch'
import { CartContext } from '../utils/Context';
import { AddToCart } from '../utils/AddToCart';
import { Logout } from '../utils/Logout';
import { MoveToLogin } from '../utils/MoveToLogin';
import { HandleToken } from '../utils/HandleToken';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import logo from "../images/logo.png"





const StyledToolbar = styled(Toolbar)({

  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#343a40!important"

})

const MyStyle = styled(Box)({

  
  padding: "0  10px",
  // width:  {"xs" : "100%",sm:"70%"},
  display:"flex"

})

const Icons = styled(Box)({

  display:"flex"
  


})





export const Navbar = () => {
 

  const [text,setText] = useState('')
  
  const {move} = MoveToSearch()
  const {num} = useContext(CartContext)
  const {username} = useContext(CartContext)
  const {show,setShow} = useContext(CartContext)
  const {token} = useContext(CartContext)
  const {getCartTotal} = AddToCart()
  const navigate = useNavigate()
  const {logout} = Logout()
  const {moveToLogin} = MoveToLogin()
  const { updateToken } = HandleToken()
  const location = useLocation();
  const [wherereToShow, sws]= useState(["signup","pay","login","checkout"])
  



const dontNeedANavbar = ()=>{
  

  console.log(location.pathname.includes("signup"))
  console.log( wherereToShow.length)
  for (var i = 0;  i < wherereToShow.length; i++ ){
    console.log("this",wherereToShow[i])
    if (location.pathname.includes(wherereToShow[i]) ) {
      return true
    }
    
  }
  return false
}
  
useEffect(()=>{
  getCartTotal()
  updateToken() 
 

},[])


useEffect(()=>{
 
  dontNeedANavbar()
  

},[location.pathname])

  return (  
    

   !dontNeedANavbar() && <AppBar id="spec-navbar" position="sticky" sx={{ backgroundColor: "#343a40!important"}}>
    {/* <button onClick={dontNeedANavbar}>DOLO</button> */}
      <Box sx={{ display:{"xs":"flex", "sm":"none"},alignItems:"center", justifyContent:"space-between",paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px"}}>
          <Box sx={{ width:"40%"}}>
            {/* <Typography onClick={()=>navigate("/")} variant="h6" component="h3" sx={{ display: { xs: "block", sm: "none" } }}>
              Gilish-Tech

            </Typography> */}
             <img onClick={()=>navigate("/")} src={logo} style={{height:"50px",width:"50%",cursor:"pointer"}} alt="Gilish-Tech"/>
        </Box>

       

        <Icons sx={{  }}>


           <Box sx={{ display:"flex" }}>
                  
                {token && <Typography  sx={{ fontSize:{ }}}  onClick={()=>logout()}>
                    Logout
                  </Typography> }
                  
                {token ?<Typography  sx={{ fontSize:{marginLeft:"10px" }}}  >
                    { token ? username.toUpperCase(): "Login"}
                  </Typography> : <Typography sx={{ cursor:"pointer"}} onClick={()=>moveToLogin()}>
                        Login
                    </Typography>}
              
              </Box>                
           
           <Box sx={{ paddingLeft:"20px"}}>

            <Badge badgeContent={num} color="primary" >
              <AddShoppingCart sx={{ color:"#fff" }} onClick={()=>navigate("/cart")} />
            </Badge>


           </Box>

       

        </Icons>

        </Box>


      <StyledToolbar>
        
        <Box sx={{ width:"15%",display:{"xs":"none","sm" :"flex"}}}>

        {/* <Typography onClick={()=>navigate("/")} variant="h6" component="h3" sx={{ display: { xs: "none", sm: "block" } }}>
          Gilish-Tech
        </Typography> */}

        <img onClick={()=>navigate("/")} src={logo} style={{height:"90px"}} alt="Gilish-Tech"/>

        </Box>
       


         
        <MyStyle sx={{width:{"xs" : "100%",sm:"70%"}}}>
          
          <Box sx={{ backgroundColor:"#fff",width:{"sm":"80%", "xs":"100%"}  }}>
            
          <InputBase onKeyUp={(e)=>{
            if (e.key === "Enter"){
              
              if(text.trim() !=="" || !show ){
               move(text)
              }else{
                console.log("baba")
              }
            }

          }} id='search-input' placeholder='search for any Gadget' sx={{ fontSize:{"xs":"20px",sm:"20px"}, width: "100%", paddingLeft:"20px" }} value={text}

          onChange={(e)=>{setText(e.target.value)
            setShow(true)
          }}
         
          
          ></InputBase>
            
          </Box>
        
          {/* <Pageview sx={{ fontSize:"30px", backgroundColor:"gold", height:"40px"}}/> */}
          <Button disabled={text === null ||text.trim() ==="" || !show ? true : false}   sx={{ fontSize:"10px", backgroundColor:"#f0c14b", height:"40px",minWidth: '20px',maxWidth: '30px'}} onClick={
            ()=>{ move(text)
          }}
              >
          <SearchIcon sx={{color:"#111" , "&:hover":{color:"#fff" }}} />

          </Button>
        </MyStyle>



        <Icons sx={{ gap:{"xs":1,"sm":2 },width:"15%" , display:{"xs":"none","sm":"flex"}  }}>
       <Box sx={{ display:"flex", gap:1 }}>
        
       {token && <Typography variant="p" component="h1" sx={{ fontSize:{"xs": "10px" , "sm":"15px"}}}  onClick={()=>logout()}>
          Logout
        </Typography> }
        
       {token ?<Typography variant="p" component="h1" sx={{ fontSize:{"xs": "10px" , "sm":"15px"}}}  >
          { token ? username.toUpperCase(): "Login"}
        </Typography> : <Typography sx={{ cursor:"pointer"}} onClick={()=>moveToLogin()}>
               Login
          </Typography>}
        
        </Box>                
       

          <Badge badgeContent={num} color="primary">
            <AddShoppingCart sx={{ color:"#fff" , width:"80%"}} onClick={()=>navigate("/cart")} />
          </Badge>

        </Icons>


      </StyledToolbar>

      <p style={{ textAlign:"center",fontSize:"20px"}}>Django/React Ecommerce  <span > <a href = "https://api.whatsapp.com/send?phone=+2349132166076&text=Hello I need you on a Project"    style={{  color:"#f0c14b"}} target='_blank' >click To Hire Me</a></span></p> 


    </AppBar>

  )
}

