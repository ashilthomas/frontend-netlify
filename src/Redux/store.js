import { configureStore } from "@reduxjs/toolkit";
import userAuth from "./userAuth";

const store = configureStore({
    reducer:{
      auth:userAuth
    }
})

export default store