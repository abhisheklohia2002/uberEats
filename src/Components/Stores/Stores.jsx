import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import AuthNum from "../AuthNum";
import counterReducer, { Authvalue, value } from "./Reducer"

export const Stores = configureStore({
    reducer:{
        counter:counterReducer,
        Passmanage:value
        ,
        validAuth:Authvalue
    }
})