/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CartItems({ cart, setCart }) {
  // const [cartItemCounter, setCartItemCounter] = useState();
  const [quantiy, setOpenCart] = useState(false);

  console.log(setCart, quantiy, setOpenCart);
  return (
    <div className="cart-items">
      {cart.map((item) => (
        <div key={item.id} className="item-card">
          <img src={item.img} alt={item.name} />
          <span className="item-name">{item.name}</span>

          <span className="item-price">${item.price}</span>
          <button
            type="button"
            // onClick={() => {
            //   setOpenCart(false);
            // }}
            className="remove-item-button"
          >
            <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default CartItems;

