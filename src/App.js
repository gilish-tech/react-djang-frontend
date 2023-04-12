
// import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Navbar } from "./components/navbar"
import {Homepage} from "./screen/Homepage/Homepage"
import {Search} from "./screen/searchpage/Search"
import { Cart } from "./screen/CartPage/Cart";
import { CartContext } from "./utils/Context";
import { useState } from "react";
import { Login } from "./screen/Auth/Login";
import {ProductDescription} from "./screen/description/ProductDescription"
// import { Footer } from "./components/footer";

import { ProtectedRoute } from "./ProtectedRoute";
import { Checkoutpage } from "./screen/checkout/Checkoutpage";
import { Signup } from "./screen/Auth/signup/Signup";
import Cards from "./screen/cards/Cards";
import { Payments } from "./screen/checkout/Payments";
import { Four } from "./screen/Four";




//touch here 1

function App() {
  const [totalPrice, setTotalPrice] = useState(0)
  const [num,setNum] = useState(0)
  const [show,setShow] = useState(true)
  const [token,setToken] = useState(localStorage.getItem("tokens") ? JSON.parse(localStorage.getItem("tokens"))["access"] : null )
  const [username,setUsername] = useState(localStorage.getItem("name") ? localStorage.getItem("name") : null)
  const  [localhostItem,setLocalhostItem] = useState(localStorage.getItem("item") ? JSON.parse(localStorage.getItem("item")) : [])
  const [descriptionItem, setDescriptionItem] = useState(localStorage.getItem("description") ? JSON.parse(localStorage.getItem("description")) :
  
    {
      "name": "MSI GF63 Thin Core i5 11th Gen - (8 GB/512 GB SSD/Windo...",
      "rating": "no",
      "price": 688,
      "des": "15.6 inch, Black, 1.86 kg",
      "img": "https://rukminim1.flixcart.com/image/612/612/l2qhjm80/computer/l/t/g/gf63-thin-11uc-867in-gaming-laptop-msi-original-imageyk5hzuthuyf.jpeg?q=70",
      "link": "/msi-gf63-thin-core-i5-11th-gen-8-gb-512-gb-ssd-windows-11-home-4-graphics-nvidia-geforce-gtx-1650-max-q-11sc-1046in-gaming-laptop/p/itm4b5beacb857d7?pid=COMGGZ23ZZPQYFJA&lid=LSTCOMGGZ23ZZPQYFJAWNHHWX&marketplace=FLIPKART&q=gaming+laptops&store=4rr%2Ftz1&srno=s_1_12&otracker=search&fm=organic&iid=e093201a-ab08-47d9-b4c4-debd451a72a2.COMGGZ23ZZPQYFJA.SEARCH&ppt=None&ppn=None&ssid=aok4vr9mj40000001663025981171&qH=a5acd8458468e203"
  },
  ) 
  const value = {num,setNum,token,setToken,username,setUsername,localhostItem,descriptionItem,setDescriptionItem,show,setShow,setTotalPrice,totalPrice}
  
  
 



  return (
    <div className="App">
     <CartContext.Provider value={value}>

   

      <BrowserRouter>
      <Navbar />
      <Routes>
        
          <Route path="/" element={<Homepage />} exact/>
          <Route path ="/cart/" element={<Cart/>} exact/>
          <Route path ="/search/:id" element={<Search/>} exact/>
          <Route path ="/description" element={<ProductDescription/>} exact/>
          <Route path ="/checkout/" element={<Checkoutpage/>} exact/>
          <Route path ="/signup" element={<Signup/>} exact/>
          <Route path ="/pay/" element={<Payments/>} exact/>
          <Route path ="/sandbox-cards/" element={<Cards/>} exact/>
          <Route path ="/login/" element={
          <ProtectedRoute>
                   <Login/>

          </ProtectedRoute>
         
          
          
          
          } exact/>


        
       
        {/* <Route path ="/search/:id" children={props=> <Search{...props}/>} /> */}

        <Route path ="*" element={<Four/>} exact/>
      </Routes>
      {/* <Footer/> */}
      <hr/>
      <p style={{ marginBottom:"0", textAlign:"center",fontSize:"20px", color:"#f0c14b"}}>By<span > <a href = "https://api.whatsapp.com/send?phone=+2349132166076&text=Hello I need you on a Project"    style={{  color:"#111"}} target='_blank' >Giberto Diamond (CEO of Gilish-Tech)</a></span></p> 
    </BrowserRouter>
    </CartContext.Provider>
    
      
    </div>
  );
}

export default App;
