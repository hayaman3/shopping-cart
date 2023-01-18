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
          </div>
          <div className="name-price">
            <span className="item-name">{item.name}</span>
          </div>
          <div className="trial">
            <div className="item-quanity-remove">
              <span className="item-quantity">
                <button type="button">
                  <FontAwesomeIcon icon="fa-solid fa-minus" />
                </button>
                <span>1</span>
                <button type="button">
                  <FontAwesomeIcon icon="fa-solid fa-plus" />
                </button>
              </span>
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
            <span className="item-price">${item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItems;

