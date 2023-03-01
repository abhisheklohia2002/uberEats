import React from 'react'
import "./navbar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import {Button }from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
export default function NavBar() {
const data_selectors  = useSelector((state)=>state)
// console.log(data_selectors.counter.length,"nav")
const nav = useNavigate();

const HandleClick = ()=>{
  nav("/")
}


const handleCart = ()=>{
  nav("/cart")
}

const HandleRedirect =(name)=>{
  name==="register"?nav("/sign"):nav("/auth")
}
  return (
    <>
    
    <div className='uber_div_logo'>
      <div className='div1' >
      <img onClick={HandleClick} className = "image_uber-logo" src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Logo-700x394.png" alt="uber Logo" />
      </div>


       <div className='main-box'>
      <div className='div3'>
    <Button onClick={()=>HandleRedirect("register")}  style = {{marginRight:"2vw"}}>
      Register
    </Button>

    <Button onClick={()=>HandleRedirect("sign")} >
    Sign in
    </Button>
      </div>
      <div className='div2'>
       <Badge onClick = {handleCart} badgeContent={data_selectors.counter.length} color="primary">
        <ShoppingCartIcon  className  = "shoppingcart" />
</Badge>

      </div>
       </div>
    </div>
    </>
  )
}
