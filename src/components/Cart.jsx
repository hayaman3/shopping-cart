import React from 'react';
import '../assets/cart.css';

// eslint-disable-next-line react/prop-types
function Modal({ setOpenCart }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            type="button"
            onClick={() => {
              setOpenCart(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Cart</h1>
        </div>
        <div className="body">
          <div>cart Item</div>
        </div>
        <div className="footer">
          <button
            type="button"
            onClick={() => {
              setOpenCart(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button type="button">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

