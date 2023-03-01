import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from './NavBar'
import "./SignIn.css"
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { AuthRun } from './Stores/Reducer'
import { Alert } from '@mui/material'
const AuthNum = () => {
  const [info,setinfo] = useState({
    email:"",
    password:""
  })
  const nav  = useNavigate()
  const dispatch = useDispatch()
  const selector = useSelector((state)=>state);
  console.log(selector.validAuth.length,"sel")
  
  var name , value;

  const HandleChange   = (e)=>{
    name  = e.target.name;
    value = e.target.value;
    
    setinfo({...info,[name]:value});
  }

  const HandleSubmit = (e)=>{
    e.preventDefault();
  if(selector.Passmanage[0].data.email === info.email && selector.Passmanage[0].data.password === info.password){
    dispatch(AuthRun({data_info:true}))
    nav('/')
  }
  else {
    <Alert severity="warning">This is a warning alert — check it out!</Alert>
  }
  }
  return (
    <div>
        <NavBar/>
        <div className='input-phone'>
        <input onChange={HandleChange} value = {info.email} className='input-slots' type="email" placeholder='Enter Your email' name="email" id="" />

        <br />
        <input  onChange={HandleChange} value = {info.password} className='input-slots' type="password" placeholder='Enter Your password' name="password" id="" />
      <br/>
     <button onClick={HandleSubmit} className='input-button' type = "submit">
      Submit
     </button>
      </div>
    </div>
  )
}

export default AuthNum
