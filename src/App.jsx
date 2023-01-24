import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { localStorageLength } from './utils/helper';

function App() {
  const [cartItemCounter, setCartItemCounter] = useState(
    localStorageLength()
  );
  const [openCart, setOpenCart] = useState(false);
  return (
    <Router>
      <Header
        cartItemCounter={cartItemCounter}
        setOpenCart={setOpenCart}
      />
      <Main setCartItemCounter={setCartItemCounter} />
      <Footer />
      {openCart && cartItemCounter !== 0 && (
        <Cart setOpenCart={setOpenCart} />
      )}
    </Router>
  );
}

export default App;

