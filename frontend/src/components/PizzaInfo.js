import React, { useState } from "react";
// import { Link } from "react-router-dom";

const PizzaInfo = ({ pizza ,index}) => {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const [showModel, setShowModel] = useState(false);

  const handleShowModel = () => setShowModel(true);
  const handleCloseModel = () => setShowModel(false);
  // console.log(pizza)
  // console.log("index",index)

  return (
    <>
      <div
        className="card border border-2 border-danger"
        style={{ width: "18rem" }}
       
       
        
        // data-bs-toggle="modal"
        // data-bs-target="#exampleModal"
      >
        {/* <div className="pizza_img" onClick={handleShowModel} > */}
        <div className="pizza_img" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={handleShowModel} >
          <img
            src={pizza?.image}
            className="card-img-top"
            alt="img not found"
          />
        </div>
        <div className="card-body">
          <p className="card-title">{pizza?.name}</p>
          <div className="row ">
            <div className="col border border-2 border-danger">
              <h5 className="text-center">varients</h5>
              <select
                className="form-select border border-2 border-danger"
                aria-label="Small select example"
                onChange={(e) => setVarient(e.target.value)}
              >
                {pizza?.varients?.map((varient) => (
                  <option value={varient}>{varient}</option>
                ))}
              </select>
            </div>

            <div className="col border border-2 border-danger">
              <h5 className="text-center">quantity</h5>
              <select
                className="form-select border border-2 border-danger"
                aria-label="Small select example"
                onChange={(e) => setQuantity(e.target.value)}
              >
                {pizza?.quantity?.map((quantity, index) => (
                  <option value={quantity} key={index}>
                    {quantity}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="row border border-2 border-danger mt-2">
            <div className="col">
              <h5>Rs.{pizza?.prices[0][varient] * quantity}</h5>
            </div>
            <div className="col">
              <button type="button" class="btn btn-danger">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* model ........................................... */}
      {/* {showModel && ( */}
      <>
        {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
          Launch static backdrop modal
        </button>
         */}
       
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" key={index}>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
              <h5 className="modal-title">{pizza?.name}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  // onClick={handleCloseModel}
                />
              </div>
              <div class="modal-body">
                  <div className="model_pizza_info">
                      <img
                        src={pizza?.image}
                        alt="img not found"
                        className="w-100"
                      />
                    </div>
                    <h4>description :</h4>
                    <h5>{pizza?.description}</h5>
              </div>
             
            </div>
          </div>
        </div>

     
        </>
      {/* )} */}
    </>
  );
};

export default PizzaInfo;
