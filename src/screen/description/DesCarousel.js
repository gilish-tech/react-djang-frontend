import React,{useEffect, useState} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images1 = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
  
 
];

export function DesCarousel({imgLarge,imgAlt}) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [images , setImages] = useState(images1)
  const arrangedImageAlt = imgAlt ? [{label:"altt",imgPath:imgAlt}] : null
  const arrangedImageLarge = imgLarge ? imgLarge.map((img)=>{
    return(
      {
        label: `${img}img`,
        imgPath: img
      }

    )
   
  }) : null

  useEffect(()=>{
    if(imgLarge){
      if(imgLarge.length  > 0){
        setImages(arrangedImageLarge)
      }else{
        setImages(arrangedImageAlt)
      }

    }
   

  },[imgAlt,imgLarge])

  const maxSteps = images.length;


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%", flexGrow: 1,marginBotom:"0" }}>
      <br/>
      <br/>
      <br/>
      
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          // height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        {/* <Typography>{images[activeStep].label}</Typography> */}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 390,
                  display: 'block',
                  maxWidth: "100%",
                  overflow: 'hidden',
                  marginRight: "auto",
                  marginLeft:"auto"
                  // width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
     
        steps={0}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{position:"relative"  , "bottom":"200px"}}
          >
            {/* Next */}
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft   sx={{fontSize:"100px",color:"#111"}}/>
            ) : (
              <KeyboardArrowRight  sx={{fontSize:"100px",color:"#111"}} />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}   sx={{position:"relative"  , "bottom":"200px"}}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight  sx={{fontSize:"100px" ,color:"#111" }} />
            ) : (
              <KeyboardArrowLeft  sx={{fontSize:"100px",color:"#111"}} />
            )}
            {/* Back */}
          </Button>
        }
      />
    </Box>
  );
}


