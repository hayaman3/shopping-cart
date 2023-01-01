import React from 'react';

function Header() {
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
        </ul>
      </nav>
    </header>
  );
}

export default Header;

