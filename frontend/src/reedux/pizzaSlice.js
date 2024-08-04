import {createSlice} from '@reduxjs/toolkit'


export const pizzaSlice = createSlice({
    name:"pizza",
    initialState:{
        pizzas :null,
        loading:false
    },


    reducers:{

        // setPizzas(state){
        //     state.loading=false;
        // },
        setLoading(state,action){
            state.loading = action.payload;
        },
        setPizzas(state,action) {
            
            state.pizzas = action.payload;
            state.loading = false;
        },
    }
})

console.log(pizzaSlice);


export const {setPizzas ,setLoading} = pizzaSlice.actions;
export default pizzaSlice.reducer;
export const pizzas = (state) => state.pizza.pizzas;
export const loading = (state) => state.pizza.loading;