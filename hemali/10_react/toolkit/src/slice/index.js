import cart from './AddTocart';
import{configureStore}from '@reduxjs/toolkit';
const store=configureStore({
    reducer:{
        addedcart:cart
    }
})
export default store
