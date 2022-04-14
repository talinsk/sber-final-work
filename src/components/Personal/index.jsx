import React from 'react';
import personal from './img/personal1.png';
import './index.css';

const Personal = () => {
  return (
    <a href="/" className="personal">
      <img src={personal} alt="Login" className="personal__pic"/>
    </a>
  )
}

export default Personal;