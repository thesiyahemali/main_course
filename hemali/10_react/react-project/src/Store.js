// store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers here if needed
  },
});