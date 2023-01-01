import React from 'react';
import topSVG from '../assets/images/TOP.svg';
import githubSVG from '../assets/images/github.svg';

function Footer() {
  return (
    <footer>
      <a href="https://www.theodinproject.com/lessons/node-path-javascript-shopping-cart">
        <img src={topSVG} alt="The Odin Project" className="svg" />
      </a>
      <a href="https://github.com/hayaman3">
        <img src={githubSVG} alt="github.com" className="svg" />
      </a>
    </footer>
  );
}

export default Footer;

