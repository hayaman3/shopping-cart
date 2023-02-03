/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  getCartData,
  quanityOfItems,
  updateQuanity,
  getTotal,
} from '../../utils/helper';

function CartItems({ setCartItemCounter, setTotal }) {
  const [cart, setCart] = useState(getCartData());

  const adjustCount = (amount, itemId, itemQuantity) => {
    if (itemQuantity === 1 && amount === -1) return;
    updateQuanity(amount, itemId);
    setTotal(getTotal());
    setCart(getCartData());
    setCartItemCounter(quanityOfItems());
  };

  return (
    <div className="cart-items">
      {cart.map((item) => (
        <div key={item.id} className="item-card">
          <div className="img-quantity">
            <img src={item.img} alt={item.name} />
            <span className="item-quantity">
              <button type="button">
                <FontAwesomeIcon
                  icon="fa-solid fa-minus"
                  onClick={() => {
                    adjustCount(-1, item.id, item.quantity);
                  }}
                />
              </button>
              <span>{item.quantity}</span>
              <button type="button">
                <FontAwesomeIcon
                  icon="fa-solid fa-plus"
                  onClick={() => {
                    adjustCount(+1, item.id, item.quantity);
                  }}
                />
              </button>
            </span>
          </div>
          <div className="remove-name-price">
            <button
              type="button"
              onClick={() => {
                // setOpenCart(false);
              }}
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

