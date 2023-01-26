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
          <div className="img-quantity">
            <img src={item.img} alt={item.name} />
            <span className="item-quantity">
              <button type="button">
                <FontAwesomeIcon icon="fa-solid fa-minus" />
              </button>
              <span>1</span>
              <button type="button">
                <FontAwesomeIcon icon="fa-solid fa-plus" />
              </button>
            </span>
          </div>
          <div className="remove-name-price">
            <button
              type="button"
              // onClick={() => {
              //   setOpenCart(false);
              // }}
              className="remove-item-button"
            >
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </button>
            <div className="name-price">
              <span className="item-name">{item.name}</span>
              <span className="item-price">${item.price}.00</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItems;

