import React from 'react'
import {createSlice} from "@reduxjs/toolkit";


const CounterSlice = createSlice({
    name:"counter",
    initialState : [],
    reducers:{
        AddUser(state,action){
// console.log(action.payload)
state.push(action.payload);

        },
        RemoveUser(state,action){
state.splice(action.payload,1)
        },
       

    }
}

)

 const PassManage = createSlice({
    name:"Passmanage",
    initialState:[],
    reducers:{
        PassManageData(state,action){
            // console.log(action.payload)
            state.push(action.payload)
        }
    }
})


const AuthNum = createSlice({
    name : "auth",
    initialState:[],
    reducers:{
        AuthRun(state,action){
            // console.log(action)
            state.push({auth:action.payload})
            // console.log(state)
        }
    }
})


const value = PassManage.reducer
const Authvalue = AuthNum.reducer;

export const {AddUser,RemoveUser} = CounterSlice.actions;
export const {PassManageData} = PassManage.actions;
export const {AuthRun}   = AuthNum.actions
export {value,Authvalue}
export default CounterSlice.reducer