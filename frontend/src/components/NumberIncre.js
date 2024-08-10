import React, { useState } from 'react'

const NumberIncre = () => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrease = () => {
        if (quantity < 10) {
            
            setQuantity(quantity + 1);
        }
    };
  
    const handleDecrease = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    return (
        <div className="d-flex align-items-center mt-3">
        <button
          className="btn btn-outline-secondary quantity-left-minus"
          onClick={handleDecrease}
        >
          -
        </button>
        <input
          type="text"
          className="form-control text-center mx-2"
          id="quantity"
          value={quantity}
          readOnly
          style={{ width: "60px" }}
        />
        <button
          className="btn btn-outline-secondary quantity-right-plus"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
    );
}

export default NumberIncre