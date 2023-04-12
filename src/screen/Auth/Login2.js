import React,{useEffect,useState,useRef,useContext} from 'react'
import { LoginTo } from '../../utils/LoginTo'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { CartContext } from '../../utils/Context';
import logo from "../../images/logo.png"
import { useNavigate } from 'react-router-dom';
export const Login2 = () => {
  const navigate = useNavigate();
  const {sendLoginCredentials} = LoginTo()
  const {token} = useContext(CartContext)
  console.log(token)
  
  
  const [status,setStatus] = useState(200)
  const [loading,setLoading] = useState(false)
  const emailRef = React.useRef();
  const passRef = React.useRef();
  console.log("aaa",status)
  function handleSubmit(e) {
    e.preventDefault();
    console.log(emailRef.current.value)
    console.log(passRef.current.value)
    sendLoginCredentials(emailRef.current.value,passRef.current.value,setStatus,setLoading)
  }
  return (
   
    
    <>
    
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous" />

<body>
  <div class=" flex-r container">
    <div class="flex-r login-wrapper">
      <div class="login-text">
        <div class="logo">
         
          <img src={logo}  onClick={()=>navigate("/")} style={{ height:"60px",maxWidth:"40%"}}/>
        </div>
        
        <h1>Sign In</h1>
        <p>It's not long before you embark on this journey! </p>

        <form method="post" class="flex-c" onSubmit={handleSubmit}>
          <div class="input-box">
            <span class="label">E-mail</span>
            <div class=" flex-r input">
              <input type="email" placeholder="name@abc.com" name="email" ref={emailRef} required />
              <i  style={{ fontSize:"15px"}} class="fas fa-at"></i>
            </div>
          </div>

          <div class="input-box">
            <span class="label">Password</span>
            <div class="flex-r input">
              <input type="password" placeholder="8+ (a, A, 1, #)" name="pass" ref={passRef} required />
              <i style={{ fontSize:"15px"}} class="fas fa-lock"></i>
            </div>
          </div>

         
          { status && status !==  200 &&
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {status === "600" ? 'An error occured' :'Invalid Email or Password'}— <strong>check it out!</strong>
      </Alert>}
      
      { loading ?  
      <Button disabled type="submit" sx={{ margin:"20px 0px 20px" ,background:"#f0c14b",width:"100%",borderColor:"#a88734",color:"#111;" ,"&:hover":{background:"#f0c14b"}}} variant="contained">
        
      {loading && <CircularProgress sx={{ marginRight:"10px"}}  size="1rem" color="inherit" /> }     Sign In
      </Button>
: 
<Button  type="submit" sx={{ margin:"20px 0px 20px" ,background:"#f0c14b",width:"100%",borderColor:"#a88734",color:"#111;" ,"&:hover":{background:"#f0c14b"}}} variant="contained">
        
{loading && <CircularProgress sx={{ marginRight:"10px"}}  size="1rem" color="inherit" /> }     Sign In
</Button>

}

    
          {/* <input class="btn" type="submit" value="Create an Account" /> */}
          <span class="extra-line">
            <span>Don't have an account?</span>
            <a href="#"  onClick={()=>navigate("/signup")}>Sign Up</a>
          </span>
        </form>

      </div>
    </div>
  </div>
</body>
    
    
    </>
  )
}
