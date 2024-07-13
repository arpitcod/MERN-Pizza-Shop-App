import React, { useState } from "react";

const PizzaInfo = ({ pizza }) => {
    const [quantity,setQuantity] = useState(1);
    const [varient,setVarient] = useState("small");
   return (
    <>
      <div
        className="card border border-2 border-danger"
        style={{ width: "18rem" }}
      >
        <img src={pizza?.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-title">{pizza?.name}</p>
          <div className="row ">
            <div className="col border border-2 border-danger">
              <h5 className="text-center">varients</h5>
              <select
                className="form-select border border-2 border-danger"
                aria-label="Small select example"
                onChange={e => setVarient(e.target.value)}
              >
                {
                    pizza?.varients?.map(varient =>(
                        <option value={varient}>{varient}</option>

                    ))
                }
                
              </select>
            </div>

            <div className="col border border-2 border-danger">
              <h5 className="text-center">quantity</h5>
              <select
                className="form-select border border-2 border-danger"
                aria-label="Small select example"
                onChange={e=> setQuantity(e.target.value)}
              >
                {
                    pizza?.quantity?.map((quantity,index) =>(
                        <option value={quantity}key={index} >{quantity}</option>

                    ))
                }
                
              </select>
            </div>
          </div>

          <div className="row border border-2 border-danger mt-2">
              <div className="col"><h5>Rs.{pizza?.prices[0][varient] * quantity}</h5></div>
              <div className="col"><button type="button" class="btn btn-danger">Add To Cart</button></div>

          </div>
          {/* <div className="row">
                <button>Add To Cart</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PizzaInfo;
