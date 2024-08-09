import React, { useState } from "react";
import { useSelector } from "react-redux";
import { setCartItems } from "../reedux/cartSlice";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);

  // const [cartItm ,setCartItm] = useState([]);


  const cartItem = localStorage.getItem("cartItems") ? setCartItems(JSON.parse(localStorage.getItem("cartItems"))) : [];
console.log("cartitem",cartItem)

// const cartItem = localStorage.getItem("cartItems")
  
  console.log("cartitms", cartItems);
//   console.log("cartitms", cartItems[0].prices);
  return (
    <>
          <div className="card mb-3 ">
      {cartItem?.payload?.payload?.map((item, index) => (
        <>
            <div className="row g-0" key={index}>
              <div className="col-md-4">
                <img
                  src={item?.image}
                  className="img-fluid rounded-start"
                  alt="img not found"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">
                    <strong>Name:</strong> {item?.name}
                  </h3>
                  <p className="card-text">
                    
                    <strong>Description: </strong> {item?.description}
                  </p>
                  <p className="card-text">
                    <strong>Category: </strong> {item?.category}
                  </p>
                  {/* <p className="card-text" >
                    <strong>prices: </strong> {item?.prices}
                  </p> */}
                  <p className="card-text">
                    <strong>quantity: </strong> {item?.quantity[0]}
                  </p>
                  <p className="card-text">
                    <strong>varients: </strong> {item?.varients[0]}
                  </p>
                  {/* <p className="card-text">
                    <strong>Price:</strong> {item?.prices[0]}
                    {console.log("items prices",item.prices)}
                    {console.log("items prices [0]",item?.prices[0])}
                  </p> */}
                  
                </div>
              </div>
            </div>
        </>
      ))}
          </div>
    </>
  );
};

export default CartPage;
