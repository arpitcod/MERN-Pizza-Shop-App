import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      <div className="card mb-3 ">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={cartItems[0]?.image} className="img-fluid rounded-start" alt="img not found" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title"><strong>Name:</strong> {cartItems[0]?.name}</h3>
              <p className="card-text"> <strong>Description: </strong> {cartItems[0]?.description}</p>
              <p className="card-text"><strong>Category: </strong> {cartItems[0]?.category}</p>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default CartPage;
