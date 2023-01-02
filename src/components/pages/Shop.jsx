import React from 'react';
import productImage from '../../assets/products/product1.png';

function Shop() {
  return (
    <div className="shop">
      <div className="product-card">
        <img src={productImage} alt="product" className="contain" />
        <div className="card-header">
          <div className="label">available</div>
          <div className="label">:action emoji</div>
        </div>
        <div className="card-main">
          <div className="product-name">Product Name</div>
          <div className="product-rating">&#9734</div>
        </div>
        <div className="card-footer">
          <div className="product-price">$$100</div>
        </div>
      </div>
      <div className="product-card">
        <div className="card-header">
          <div className="label">available</div>
          <div className="label">:action emoji</div>
        </div>
        <div className="card-main">
          <div className="product-name">Product Name</div>
          <div className="product-rating">&#9734</div>
        </div>
        <div className="card-footer">
          <div className="product-price">$$100</div>
        </div>
      </div>
      <div className="product-card">
        <div className="card-header">
          <div className="label">available</div>
          <div className="label">:action emoji</div>
        </div>
        <div className="card-main">
          <div className="product-name">Product Name</div>
          <div className="product-rating">&#9734</div>
        </div>

        <div className="card-footer">
          <div className="product-price">$$100</div>
        </div>
      </div>
    </div>
  );
}

export default Shop;

// notes: @ product rating has randomizer for stars

