import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import './index.css';
import Search from '../Search';
import Personal from '../Personal';

const Header = () => {
  return (
    <header className="header">
        <div className="cntr headerInner">
            <Logo/>
            <Search/>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/about">О проекте</Link>
            </nav>
            <Personal/>
        </div>
    </header>
  )
}

export default Header;