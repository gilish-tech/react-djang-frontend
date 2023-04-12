 import React,{useRef,useState} from 'react'
 import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { CartContext } from '../../../utils/Context';
import { SignUpTo } from '../../../utils/SignUpTo';
import { MoveToLogin } from '../../../utils/MoveToLogin';
import logo from "../../../images/logo.png"
import { useNavigate } from 'react-router-dom';
 
 export const Signup = () => {
    const {sendSignUpCredentials} = SignUpTo()
    const {moveToLogin} = MoveToLogin()
   
    const emailRef = React.useRef();
    const passRef = React.useRef();
    const pass2Ref = React.useRef();
    const usernameRef = React.useRef();
    const [status,setStatus] = useState(200)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const navigate = useNavigate()


    const handleSubmit  = (e)=>{
        e.preventDefault();
        const email  = emailRef.current.value
        const pass1 = passRef.current.value
        const pass2 = pass2Ref.current.value
        const username = usernameRef.current.value

        if(pass1 !== pass2){
            setError("Password don't match")
        }else{
            sendSignUpCredentials(username,email,pass1,pass2,setError,setLoading)
        }
        
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
                <h1>Sign Up</h1>

                <p>It's not long before you embark on this journey! </p>

                <form method="post" class="flex-c" onSubmit={handleSubmit}>
                <div class="input-box">
                    <span class="label">Username</span>
                    <div class=" flex-r input">
                    <input type="text" placeholder="username" name="name" ref={usernameRef} />
                    <i  style={{ fontSize:"15px"}} class="fas fa-at"></i>
                    </div>
                </div>
                <div class="input-box">
                    <span class="label">E-mail</span>
                    <div class=" flex-r input">
                    <input type="text" placeholder="name@abc.com" name="email" ref={emailRef} />
                    <i  style={{ fontSize:"15px"}} class="fas fa-at"></i>
                    </div>
                </div>

                <div class="input-box">
                    <span class="label">Password</span>
                    <div class="flex-r input">
                    <input type="password" placeholder="8+ (a, A, 1, #)" name="pass" ref={passRef} />
                    <i style={{ fontSize:"15px"}} class="fas fa-lock"></i>
                    </div>
                </div>

                <div class="input-box">
                    <span class="label">Re-enter Password</span>
                    <div class="flex-r input">
                    <input type="password" placeholder="8+ (a, A, 1, #)" name="pass2" ref={pass2Ref} />
                    <i style={{ fontSize:"15px"}} class="fas fa-lock"></i>
                    </div>
                </div>

                
                { error &&
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {error && error }— <strong>check it out!</strong>
            </Alert>}
          
               { error === undefined && <Alert severity="success">
                    <AlertTitle>Error</AlertTitle>
                    Account successfully created — <strong>check it out!</strong>
            </Alert>}
            
            { loading ?  
            <Button disabled type="submit" sx={{ margin:"20px 0px 20px" ,background:"#f0c14b",width:"100%",borderColor:"#a88734",color:"#111;" ,"&:hover":{background:"#f0c14b"}}} variant="contained">
                
            {loading && <CircularProgress sx={{ marginRight:"10px"}}  size="1rem" color="inherit" /> }     Sign In
            </Button>
        : 
        <Button  type="submit" sx={{ margin:"20px 0px 20px" ,background:"#f0c14b",width:"100%",borderColor:"#a88734",color:"#111;" ,"&:hover":{background:"#f0c14b"}}} variant="contained">
                
        {loading && <CircularProgress sx={{ marginRight:"10px"}}  size="1rem" color="inherit" /> }     Sign Up
        </Button>

        }

            
                {/* <input class="btn" type="submit" value="Create an Account" /> */}
                <span class="extra-line">
                    <span>Already have an account?</span>
                    <a onClick={()=>moveToLogin()} href="#">Sign in</a>
                </span>
                </form>

            </div>
            </div>
        </div>
        </body>
            
    
    
     </>
   )
 }
 