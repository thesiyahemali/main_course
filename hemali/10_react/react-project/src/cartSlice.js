import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const initialState = {
  count: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
    //    add to cart thaye tayre number count thaye tena mate aa code lakho 
         state.count= state.count+ parseInt(action.payload)
    },
    addToCartZero:(state,action)=>{
      state.count=0   // count 2 var kartu tu aetle ek var karva mate zero karva use karo
    },
    //  aa removecart add to cart karvi nya delete karva mate use karvi siye 
    removeCart:(state,action)=>{
      state.count=state.count - parseInt(action.payload)
    }
    // Add other actions like remove from cart, update cart, etc.
  },
});

export const { addToCart,addToCartZero,removeCart } = cartSlice.actions;

export default cartSlice.reducer;