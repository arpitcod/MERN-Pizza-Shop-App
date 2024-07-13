import React from "react";
import AllPizza from "./PizzaData";
import PizzaInfo from "./PizzaInfo";

const HomePage = () => {
  return (
    <>
      <div className=" container border border-2 border-danger ">
        <div className="row row-cols-4 border border-2 border-dark ">
          {
            AllPizza?.map((pizza) => (
            <div className="col border border-2 border-success  ">
              <PizzaInfo pizza={pizza} />
            </div>
          ))
        }
        </div>
        </div>
    </>
  );
};

export default HomePage;
