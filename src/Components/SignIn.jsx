import React, { useState } from 'react'
// import {FcGoogle} from "react-icons/fc"
import {AiOutlineGoogle,AiFillApple,AiFillFacebook} from "react-icons/ai"
import EmailIcon from '@mui/icons-material/Email';
import NavBar from './NavBar'
import "./SignIn.css"
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { PassManageData } from './Stores/Reducer';
// import { PassManage } from './Stores/Reducer';
import { TextField } from '@mui/material';
const SignIn = () => {
const [data,setdata] = useState({
  email:"",
  password:""
})
const nav  = useNavigate()
const dispatch = useDispatch();
const selector = useSelector((state)=>state);
// console.log(selector.Passmanage[0],"sel")
var name , value;

const HandleChange = (e)=>{
name  = e.target.name;
value = e.target.value;

setdata({...data,[name]:value});
// console.log(data)
}


const HandleCheck   = (e)=>{
  e.preventDefault();
  if(data.email!="" || data.password != ""){
    dispatch(PassManageData({data}))
nav("/auth")
  }
  else {
    alert("Please Check again")
  }
}

  return (
    <>
    <NavBar/>
    <div className='sign_div_login'>
    
      <div className='div_one'>What's your phone number or email?</div>
      <div>
        <input onChange={HandleChange} value = {data.email}  className='input-slots' type="email" placeholder='Enter Your Email ' name="email" id="" />
        <br />
        <input onChange={HandleChange} value = {data.password} className='input-slots' type="password" placeholder='Enter Your Password' name="password" id="" />

     
      </div>
      <div className='continue'>
       <div onClick={HandleCheck} className='center-continue'> Continue</div>
      </div>
      <div className='or'>
        
        or


      </div>

      <div className='continue-googel'>
      <div className='center-continue'>
      
      <span>
      <AiOutlineGoogle className='googleicon'/></span> <span className='span-google'> Continue with Google</span>
      </div>

     </div>
     <div className='continue-apple'>
      <div className='center-continue'>
      
      <span>
      <AiFillApple className='googleicon'/></span> <span className='span-google'> Continue with apple</span>
      </div>

     </div>



     <div className='continue-facebook'>
      <div className='center-continue'>
      
      <span>
      <AiFillFacebook className='googleicon'/></span> <span className='span-google'> Continue with facebook</span>
      </div>

     </div>



     <div className='continue-brif'>
     By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.
     </div>

    </div>
    </>
  )
}

export default SignIn
