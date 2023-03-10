/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartItems from './pages/CartItems';
import { getTotal } from '../utils/helper';
import '../assets/cart.css';

// eslint-disable-next-line react/prop-types
function Modal({ setOpenCart, setCartItemCounter, cartItemCounter }) {
  const [total, setTotal] = useState(() => getTotal());

  return (
    <div
      className="cart-background"
      onClick={() => {
        setOpenCart(false);
      }}
    >
      <div
        className="shopping-cart"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="shopping-cart-header">
          <h3>Shopping Cart</h3>
          <button
            type="button"
            onClick={() => {
              setOpenCart(false);
            }}
          >
            <FontAwesomeIcon icon="fa-solid fa-down-left-and-up-right-to-center" />
          </button>
        </div>

        <CartItems
          setCartItemCounter={setCartItemCounter}
          setTotal={setTotal}
        />

        <div className="footer">
          <div className="total">
            <div className="total-quantity">
              {cartItemCounter} items
            </div>
            <div className="total-price">${total}.00</div>
          </div>
          <div className="footer-buttons">
            <button
              type="button"
              onClick={() => {
                setOpenCart(false);
              }}
              id="cancel-button"
            >
              Cancel
            </button>
            <button type="button" id="checkout-button">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

