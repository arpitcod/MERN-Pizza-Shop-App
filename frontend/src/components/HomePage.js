import React from "react";
// import AllPizza from "./PizzaData";
import PizzaInfo from "./PizzaInfo";
// import { useDispatch } from "react-redux";
import usePizzaData from "./Pizza_Data";
import { useSelector } from "react-redux";

const HomePage = () => {

  usePizzaData();
  
  const { loading , pizzas} = useSelector((state) => state.pizza);
  
  

  return (
    <>
      <div className=" container border border-2 border-danger ">
        <div className="row row-cols-4 border border-2 border-dark ">
          {
              loading ? (<h1>Loading...</h1>)
              : (
                    pizzas?.map((pizza,index) => (
                    <div className="col border border-2 border-success  ">
                      <PizzaInfo pizza={pizza} index={index} />
                    </div>
                  ))

              )
        }
        </div>
        </div>
    </>
  );
};

export default HomePage;
