import { Box } from '@mui/material'
import React from 'react'
import Input from '@mui/material/Input'
import TextField from '@mui/material/TextField';
import {Typography} from '@mui/material';
import {Button} from '@mui/material';
import { Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const Login1 = () => {

    const ariaLabel = { 'aria-label': 'description' };
  return (
    <Box sx={{ width:"100%",paddingTop:"50px"}}>
        

        
        <Stack sx={{ justifyContent:"center",alignItems:"center"}}>
        <Typography variant="h5" component="h2">
            Login Form
        </Typography>;


        <TextField sx={{ width:{"xs":"80%" ,"sm":"50%"},textAlign:"center"}} variant="standard" place  type="email"  id="standard-search"
                label="Email" color="success" focused />
                <br/>
        <TextField  sx={{ width:{"xs":"80%" ,"sm":"50%"} ,textAlign:"center"}} variant="standard" place  type="password"  id="standard-search"
                label="Password" color="success" focused />
                <br/>

                <Button sx={{ background:"#f0c14b",borderColor:"#a88734",color:"#111;" ,"&:hover":{background:"#f0c14b"}}} variant="contained">Sign In</Button>
                <hr/>
                <p>Don't have an  account?</p>
                <hr/>
                <Button sx={{borderColor:"#a88734",color:"#111;"}} variant="outlined">Create Your Gilish-Tech Account</Button>

            
          
        
    </Stack>

    </Box>
    
  )
}
