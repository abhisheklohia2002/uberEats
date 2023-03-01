import React, { useEffect, useState } from 'react'
import "./showData.css"
import { useDispatch, useSelector } from 'react-redux'
import { AddUser, RemoveUser } from './Stores/Reducer'
const ShowDataHomePage = ({id,name,image,price,done,isDone}) => {
    // console.log(key)
    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);
    const [num,setnum] = useState("")
    // console.log(selector.counter)
    const handleClicke = ({id,name,image,price})=>{
        dispatch(AddUser({id,name,image,price}))
        // isDone(id)
        setnum(id)
    }

const handleClickDelete = ({id})=>{
    dispatch(RemoveUser({id}))
    // isDone("")
setnum('')
}

  return (
    <div className='grid-data' key={id}>
      <div className='flex-data' >
<img className='image-data' src={image} alt="image" />
<h4 className='name'>
  Meal- {name}
</h4>

<h4 className='price'>
  Price-  {price} <span>
    <del>
        {Math.floor(Math.random()*100)}
    </del>
  </span>
</h4>

{
   num===id ?<button onClick={()=>handleClickDelete({id})} style={{background:"red"}} className='btn'>Remove To Cart</button>:<button onClick={()=>handleClicke({id,name,image,price})} className='btn'>
        Add To Cart
    </button>
}
      </div>
    </div>
  )
}

export default ShowDataHomePage;

