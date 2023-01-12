import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { localStorageLength } from './utils/helper';

function App() {
  const [cartItemCounter, setCartItemCounter] = useState(
    localStorageLength()
  );
  return (
    <Router>
      <Header cartItemCounter={cartItemCounter} />
      <Main setCartItemCounter={setCartItemCounter} />
      <Footer />
    </Router>
  );
}

export default App;

