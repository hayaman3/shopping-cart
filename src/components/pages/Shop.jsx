import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import uuid from 'react-uuid';
import productList from './utils/productData';

function Shop() {
  return (
    <div className="shop">
      {productList.map((product) => (
        <div
          className="product-card"
          style={{
            background: `url(${product.img})`,
            backgroundSize: `cover`,
          }}
          key={uuid()}
        >
          <div className="card-header">
            <div className="label">
              <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
              &nbsp;{product.availability}
            </div>
            <FontAwesomeIcon
              icon="fa-solid fa-ellipsis-vertical"
              className="card-header-detail"
            />
          </div>
          <div className="card-main">
            <div className="product-name">{product.name}</div>
            <div className="product-rating">
              <FontAwesomeIcon icon="fa-solid fa-star" />
            </div>
          </div>
          <div className="card-footer">
            <div className="product-price">$100.00</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;

// notes: @ product rating has randomizer for stars

