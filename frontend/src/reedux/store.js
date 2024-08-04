import { configureStore } from '@reduxjs/toolkit';
import pizzaSlice from './pizzaSlice';
import cartSlice from './cartSlice';



const store = configureStore({
    reducer:{
        pizza:pizzaSlice,
        cart:cartSlice
    }
})

export default store;