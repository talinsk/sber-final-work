import React from 'react';
import personal from './img/personal1.png';
import './index.css';
import { Link } from 'react-router-dom';

const Personal = () => {
  return (
    <Link to="/profile" className="personal">
      <img src={personal} alt="Login" className="personal__pic"/>
    </Link>
  )
}

export default Personal;