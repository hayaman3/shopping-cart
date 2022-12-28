import React from 'react';

function Header() {
  return (
    <header>
      <nav className="nav">
        <a href="/" className="site-title">
          <h1>Color Shopping</h1>
        </a>
        <ul>
          <li>
            <a href="/" className="">
              Home
            </a>
          </li>
          <li>
            <a href="/shop" className="">
              Shop
            </a>
          </li>
          <li>
            <a href="/contact" className="">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

