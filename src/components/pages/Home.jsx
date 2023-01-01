import React from 'react';
import heroImage from '../../assets/images/hero.png';

function Home() {
  return (
    <div className="home">
      <div className="description">
        <div className="description-smaller">Fake Online Shop</div>
        Lorem ipsum dolor sit amet, consectetur
      </div>
      <img src={heroImage} alt="gradient" className="hero-image" />
    </div>
  );
}

export default Home;

