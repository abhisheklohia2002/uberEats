import React, { useEffect, useState } from 'react'
import ApiData from './Controller/ApiData'
import NavBar from './NavBar'
import SearchIcon from '@mui/icons-material/Search';
import ShowDataHomePage from './ShowDataHomePage'
import { TextField } from '@mui/material'
import {InputAdornment} from '@mui/material'
import HourglassFullTwoToneIcon from '@mui/icons-material/HourglassFullTwoTone';
const HomeScreen = () => {
const [data_store,setStore] = useState([])
const [done,isDone] = useState("")
const [load,setload]=useState(true)
const [searchInfo,setSearchInfo] = useState({valueName:''})
const RunRandom = async ()=>{
    try {
        const data_api = await ApiData()
        // console.log(data_api.categories)
        if(data_api){
          setload(false)
        }
        setStore([...data_store,...data_api.categories])
        // console.log(data_store)
    } catch (error) {
        
    }
}



const Search_data = (e)=>{
  var value = e.target.value;
  var name = e.target.name;
  setSearchInfo({...searchInfo,[name]:value})
  // console.log(searchInfo)
  var info_name = searchInfo.valueName

}


useEffect(()=>{
RunRandom()
},[])

  return (
    <div>
      <NavBar/>
     <div className='text-input'>
     <TextField value={searchInfo.valueName} onChange = {Search_data} style={{width:"20vw"}} InputProps = {{startAdornment:(
       <InputAdornment position="start">
       <SearchIcon/>
     </InputAdornment>
     )}} id="standard-basic" label="" name = "valueName" variant="standard" />
     </div>

<div style={{display:"grid",gridTemplateColumns:"100px 100px 100px 100px ",columnGap:"18vw",rowGap:"4vw"}}>

{
load? <div className='divLoad' >
  <HourglassFullTwoToneIcon style= {{height:"20vw",width:"8vw",textAlign:"center"}} />
</div> :
data_store.map((e,i)=>(
    <ShowDataHomePage id = {i} name = {e.strCategory} image = {e.strCategoryThumb
    } price = {Math.floor(Math.random()*500)} done = {done} isDone  = {isDone} />
))
}

</div>
    </div>
  )
}

export default HomeScreen
