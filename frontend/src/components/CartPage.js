import React, { useState } from "react";
import { useSelector } from "react-redux";
import { setCartItems } from "../reedux/cartSlice";
import NumberIncre from "./NumberIncre";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);

  // const [cartItm ,setCartItm] = useState([]);

  const cartItem = localStorage.getItem("cartItems")
    ? setCartItems(JSON.parse(localStorage.getItem("cartItems")))
    : [];
  console.log("cartitem", cartItem);

  // const cartItem = localStorage.getItem("cartItems")

  console.log("cartitms", cartItems);
  //   console.log("cartitms", cartItems[0].prices);

  // remove cart  .....................................
  // const handleDeleteCartItem = (itmId) =>{

  //   const updateCart = cartItems.filter((item) => item._id !== itmId)
  //   localStorage.removeItem("cartItems",updateCart);
  //   // localStorage.setItem("cartItems",JSON.stringify(setCartItems([...cartItems,pizza])))
  //   // dispatch(setCartItems([...cartItems,pizza]));
  // }

  // incre and decre js ....................................................................
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
                  <p className="card-text">
                    <strong>prices: </strong> {item?.price}
                  </p>
                  <p className="card-text">
                    <strong>quantity: </strong> {item?.quantity}
                  </p>
                  <p className="card-text">
                    <strong>varients: </strong> {item?.varient}
                  </p>
                  <NumberIncre/>
                  {/* <button type="button" class="btn btn-danger" onClick={() =>handleDeleteCartItem(item._id)}>Remove Item</button> */}
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
