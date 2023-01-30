import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import productList from '../../utils/productData';
import {
  saveToLocalStorage,
  localStorageLength,
} from '../../utils/helper';

// eslint-disable-next-line react/prop-types
function Shop({ setCartItemCounter }) {
  const addButton = (e) => {
    saveToLocalStorage(e);
    setCartItemCounter(localStorageLength());
  };

  return (
    <div className="shop">
      {Object.values(productList).map((product) => (
        <div
          className="product-card"
          style={{
            background: `url(${product.img})`,
            backgroundPosition: `50% 35%`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `30% auto`,
            backgroundColor: `#e8e6e6`,
            backgroundBlendMode: `multiply`,
          }}
          key={product.id}
          id={product.id}
        >
          <div className="card-header">
            <FontAwesomeIcon
              icon="fa-solid fa-ellipsis-vertical"
              className="card-header-detail"
            />
          </div>
          <div className="card-main">
            <div className="product-name">{product.name}</div>
            <div className="product-rating">
              {(() => {
                const stars = [];
                for (let i = 1; i <= 5; i += 1) {
                  if (i <= product.rating) {
                    stars.push(
                      <FontAwesomeIcon
                        icon="fa-solid fa-star"
                        key={i}
                      />
                    );
                  } else {
                    stars.push(
                      <FontAwesomeIcon
                        icon="fa-regular fa-star"
                        key={i}
                      />
                    );
                  }
                }
                return stars;
              })()}
            </div>
          </div>
          <div className="card-footer">
            <div className="product-price">${product.price}</div>
            <button
              type="button"
              className="add-button"
              onClick={addButton}
              value={product.id}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;

// notes: @ product rating has randomizer for stars

