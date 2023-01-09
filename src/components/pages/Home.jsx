import React from 'react';
import heroImage from '../../assets/images/midjourney.png';

function Home() {
  return (
    <div className="home">
      <div className="description">
        <div className="description-smaller">Fake Online Shop</div>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <a href="/shop" className="description-shop">
          Shop
        </a>
      </div>
      <img src={heroImage} alt="gradient" className="hero-image" />
    </div>
  );
}

export default Home;

