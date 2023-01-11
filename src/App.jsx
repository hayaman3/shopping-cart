import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  // const [count, setCount] = useState(0);
  const [cartItemNumber, setCartItemNumber] = useState(3);
  return (
    <Router>
      <Header cartItemNumber={cartItemNumber} />
      <Main setCartItemNumber={setCartItemNumber} />
      <Footer />
    </Router>
  );
}

export default App;

