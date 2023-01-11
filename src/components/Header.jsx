import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// eslint-disable-next-line react/prop-types
function Header({ cartItemNumber }) {
  return (
    <header>
      <nav className="nav">
        <a href="/" className="site-title">
          <h1>FakeShop</h1>
        </a>
        <ul>
          <li>
            <a href="/" className="main-nav">
              Home
            </a>
          </li>
          <li>
            <a href="/shop" className="main-nav">
              Shop
            </a>
          </li>
          <li>
            <a href="/contact" className="main-nav">
              Contact
            </a>
          </li>

          <li>
            <button type="button" className="cart-button">
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
              &nbsp;{cartItemNumber}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

