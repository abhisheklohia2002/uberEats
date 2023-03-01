import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Route, useNavigate } from 'react-router';

const Privateroutes = ({children}) => {
    var auth=false;
    const nav = useNavigate();
    const selector = useSelector((state)=>state)
console.log(selector.validAuth.length,"prvate")
// var value = selector.validAuth[0].value.value;
if(selector.validAuth.length > 0)
{
  var auth = true

}
else{
  var auth = false
}
  return (
   <>
{ auth? children: useEffect(()=>{
  nav("/sign")
},[]) }
   
   </>
  )
}

export default Privateroutes
