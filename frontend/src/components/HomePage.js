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
        <div className="row border border-2 border-dark ">

          {/* <div className="col-md-6 col-lg-3"> */}
          {
              loading ? (
                <div class="spinner-border text-danger text-center " role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              )
              : (
                    pizzas?.map((pizza,index) => (
                    <div className="col-md-6 col-lg-3 border border-2 border-success  ">
                      <PizzaInfo pizza={pizza} index={index} />
                    </div>
                  ))

              )
          }
        {/* </div> */}
        </div>
        </div>
    </>
  );
};

export default HomePage;
