import axios from 'axios';
import {useDispatch} from 'react-redux';
import { loading, setLoading, setPizzas } from '../reedux/pizzaSlice';
import { useEffect } from 'react';



export const usePizzaData  = () =>{
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchPizzaData = async () => {
            // dispatch(setLoading(true));  //before fetching true loading
            try {
                dispatch(setLoading(true));  //before fetching true loading
                await axios.get('http://localhost:2024/api/pizza/get-all-pizza')
                .then(response =>{
                dispatch(setPizzas(response.data.getAllPizza));
                console.log(response);

            }).catch(err =>{
                console.log(err)
            })
          } catch (error) {
            dispatch(setLoading(false)); // after fetching false loading 
            console.log(error);
          }
        };
    
        fetchPizzaData();
      }, [dispatch]);
    };

    export default usePizzaData;