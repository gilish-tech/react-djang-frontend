import React from 'react'
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system'
import { Typography } from '@mui/material';

export const CartStyle = () => {
  return (
    <Stack Stack direction="row" >
        <Box sx={{ flex:"5"}}>
            <img style={{width:"100", maxWidth: "100%", height: "50%",}} src = "https://ichef.bbci.co.uk/news/976/cpsprodpb/3267/production/_126630921_apple-iphone-14-iphone-14-plus-hero-220907-geo.jpg" />

        </Box>

        <Box sx={{ flex:"7"}}>
            <Typography variant="p" component="p" >
                    Bread is the sweetest mother looking like that
                    
           </Typography>;

        </Box>
        <Box sx={{ flex:"7"}}>
            <Typography variant="p" component="p" >
                    Bread is the sweetest mother looking like that
                    
           </Typography>;

        </Box>

        <Box sx={{ flex:"7"}}>
            <Typography variant="p" component="p" >
                    Bread is the sweetest mother looking like that
                    
           </Typography>;

        </Box>

        <Box sx={{ flex:"7"}}>
            <Typography variant="p" component="p" >
                    Bread is the sweetest mother looking like that
                    
           </Typography>;

        </Box>


    </Stack>
  )
}
