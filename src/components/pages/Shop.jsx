import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
          key={product.id}
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
            <button type="button" className="add-button">
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

