import React from 'react'
import { Route, Routes } from 'react-router'
// import Routes, { Route, Router } from "react-router-dom"
import AuthNum from '../AuthNum'
import HomeScreen from '../HomeScreen'
import Privateroutes from '../PrivateRoutes/Privateroutes'
import SignIn from '../SignIn'
import SubTotal from '../SubTotal'
const AllRoutes = () => {
  return (
  <>
  
  <Routes>
    <Route path = "/" element = {
    <Privateroutes>
  <HomeScreen/>
    </Privateroutes>
    }/>
  <Route path = "/sign" element = { <SignIn/>} />
<Route path = "/auth" element = {<AuthNum/>} />

<Route path =  "/cart" element = {
  <Privateroutes>
<SubTotal/>
  </Privateroutes>
} />
  </Routes>
  
  </>
  )
}

export default AllRoutes
