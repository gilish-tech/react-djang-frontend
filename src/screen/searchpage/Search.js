import React,{useEffect,useState,useContext} from 'react'
import { useParams } from 'react-router-dom'
import { SearchStyles } from './SearchStyles'
import {GetData} from "../../utils/GetData"
import { Box,Container } from '@mui/system'
import CircularProgress from '@mui/material/CircularProgress';
import { SearchStyles2 } from './SearchStyles2'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';





export const Search = (props) => {
   let params = useParams()
   const {add} = GetData()
   const [value,setValue] = useState(params.id)
   const [items , setItem] = useState([])
   const [loading, setLoading] = useState(false)
   const [pageNum,setPageNum] = useState()
   const [currentPage,setCurrentPage] = useState(1)
   const [bt,setbts] = useState([])
   const buttons = [];
   useEffect(()=>{
    setCurrentPage(1)
  },[params.id])
  
   const solveButtons  = (num)=>{
    const buttons = []
    console.log("srol",num)
    
    
    if (num > 1){
      if  (num < 11){

        for (let i = 1; i <= num; i++) {
          buttons.push(<Button onClick={()=>{add({"name":params.id,"num":i},setItem,setLoading,setPageNum)
          setCurrentPage(i)
        }} sx={{borderColor:"#f0c14b", color:currentPage === i  ? "#111" :"#f0c14b",backgroundColor:currentPage === i  ? "#f0c14b" : "#fff" }}>{i}</Button>);
      }

      }else{

        
        for (let i = 1; i < 11; i++) {
          buttons.push(<Button onClick={()=>{
            setCurrentPage(i)
            
            add({"name":params.id,"num":i},setItem,setLoading,setPageNum)}} sx={{borderColor:"#f0c14b", color:currentPage === i  ? "#111" :"#f0c14b",backgroundColor:currentPage === i  ? "#f0c14b" : "#fff" }}>{i}</Button>);
      }

      }

    

    }
    setbts(buttons)
    
   }
   
   useEffect(()=>{
    solveButtons(pageNum)
   },[currentPage,pageNum])
  
    
   useEffect(()=>{
    add({"name":params.id},setItem,setLoading,setPageNum)
    
  },[params.id])
  return (
    <>
    <Container>
      <br/>
      {/* <SearchStyles2/> */}
     
      
      
      {loading ? items.map((item)=>{
      
        return <Box > <SearchStyles item={item}/> </Box>
      }):
      
      <Box sx={{ display: 'flex', justifyContent:"center",alignItems:"center" }}>
      <CircularProgress />
    </Box>

      }
       {!loading || items.length === 0 && <h1>No result </h1> }
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"right",
        // '& > *': {
        //   m: 1,
        // },
      }}
    >
      
     
      </Box>
      
    </Container> 

    {pageNum && loading &&
        <Container>
        <Box sx={{ float:"right"}}>
        
         <br/>
         <br/>

         <ButtonGroup sx={{backgroundColor:"#111",borderColor:"#f0c14b"}} size="small"  variant="outlined" aria-label="outlined button group" >
          

         {bt}

          
     
  
        </ButtonGroup>
        <br/>
        <br/>
        
        { pageNum > 1 && <strong><p   style={{ textAlign:"right",fontSize:"15px"}} class="offer-info"> page {currentPage} of {pageNum >= 11 ? 10 :  pageNum}</p> </strong>}
        <br/>
        <br/>
        
        </Box>
        </Container>
      }

    </>
  )
}
