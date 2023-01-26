import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

// eslint-disable-next-line react/prop-types
function Main({ setCartItemCounter }) {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop setCartItemCounter={setCartItemCounter} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default Main;

