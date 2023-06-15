import { configureStore } from "@reduxjs/toolkit";
import moviesReducer, { moviesFetch } from "./moviesSlice";


export const store=configureStore({
    reducer:{
        movies:moviesReducer
    }
})
store.dispatch(moviesFetch())