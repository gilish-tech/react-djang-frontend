import React from "react";
import { Typography, Box } from "@mui/material";
import gaminglaptop from "./homestuffs/gaminglaptops.json";
import phones from "./homestuffs/phones.json";
import cars from "./homestuffs/toycars.json"
import Grid from "@mui/material/Grid";
import MediaCard from "./MediaCard";
import { MediaCard2 } from "./MediaCard2";
import ps5games from "./homestuffs/ps5games.json";


const Contents = () => {


  return (
    <body>
      <Box id="wrap" sx={{ display:{"xs":"none","sm":"block"}}} >
	<div id="columnss" >
    

    
  <h1   style={{  fontSize:"40px",fontWeight:""}}>Mobile Phones</h1>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {phones.slice(0, 8).map((item) => {
            return (
              <Grid item sm={3} xs={6}>
                <MediaCard2
                  image={item.img}
                  name={item.name}
                  price={item.price}
                  des={item.des}
                  whole = {item}
                  show = {false}
                />
              </Grid>
            );
          })}
        </Grid>
          
        <h1 style={{  fontSize:"40px",fontWeight:""}}>Laptops</h1>

        <Grid container spacing={2}>
          {gaminglaptop.slice(0, 8).map((item) => {
            return (
              <Grid item sm={3} xs={6}>
                <MediaCard2
                  image={item.img}
                  name={item.name}
                  price={item.price}
                  des={item.des}
                  whole = {item}
                />
              </Grid>
            );
          })}
        </Grid>



        <h1 style={{  fontSize:"40px",fontWeight:""}}>Games</h1>
        

        <Grid container spacing={2}>
          {ps5games.slice(0, 8).map((item) => {
            return (
              <Grid item sm={3} xs={6}>
                <MediaCard2
                  image={item.img}
                  name={item.name}
                  price={item.price}
                  des={item.des}
                  whole = {item}
                />
              </Grid>
            );
          })}
        </Grid>





        <h1 style={{  fontSize:"40px",fontWeight:""}}>Toys</h1>

        <Grid container spacing={2}>
          {cars.slice(0, 8).map((item) => {
            return (
              <Grid item sm={3} xs={6}>
                <MediaCard2
                  image={item.img}
                  name={item.name}
                  price={item.price}
                  des={item.des}
                  whole = {item}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      </div>
      </Box>



















      <Box  sx={{ display:{"xs":"block","sm":"none"}}} >
	<div id="columnss" >
    

    
  <h1   style={{  fontSize:"40px",fontWeight:""}}>Mobile Phones</h1>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {phones.slice(0, 8).map((item) => {
            return (
              <Grid item sm={3} xs={6}>
                <MediaCard2
                  image={item.img}
                  name={item.name}
                  price={item.price}
                  des={item.des}
                  whole = {item}
                  show = {false}
                />
              </Grid>
            );
          })}
        </Grid>
          
        <h1 style={{  fontSize:"40px",fontWeight:""}}>Laptops</h1>

        <Grid container spacing={2}>
          {gaminglaptop.slice(0, 8).map((item) => {
            return (
              <Grid item sm={3} xs={6}>
                <MediaCard2
                  image={item.img}
                  name={item.name}
                  price={item.price}
                  des={item.des}
                  whole = {item}
                />
              </Grid>
            );
          })}
        </Grid>



        <h1 style={{  fontSize:"40px",fontWeight:""}}>Games</h1>
        

        <Grid container spacing={2}>
          {ps5games.slice(0, 8).map((item) => {
            return (
              <Grid item sm={3} xs={6}>
                <MediaCard2
                  image={item.img}
                  name={item.name}
                  price={item.price}
                  des={item.des}
                  whole = {item}
                />
              </Grid>
            );
          })}
        </Grid>





        <h1 style={{  fontSize:"40px",fontWeight:""}}>Toys</h1>

        <Grid container spacing={2}>
          {cars.slice(0, 8).map((item) => {
            return (
              <Grid item sm={3} xs={6}>
                <MediaCard2
                  image={item.img}
                  name={item.name}
                  price={item.price}
                  des={item.des}
                  whole = {item}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      </div>
      </Box>























      
    </body>
  );
};

export default Contents;
