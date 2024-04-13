import { createSlice } from "@reduxjs/toolkit";

const cart=createSlice({
    name:'cart_name',
    initialState:0,
    reducers:{
        addTo(state,action){
            console.log(action.payload);
            return state+parseInt(action.payload);
        }
    }
});

export default cart.reducer;

export const {addTo}=cart.actions;