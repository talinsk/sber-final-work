import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import './index.css';
import Search from '../Search';
import Personal from '../Personal';

const Header = (props) => {
  return (
    <header className="header">
        <div className="cntr headerInner">
            <Logo/>
            <Search {...props} />
            <nav>
                <Link to="/" className="headerNav">Главная</Link>
                <Link to="/about" className="headerNav">О проекте</Link>
            </nav>
            <Personal/>
        </div>
    </header>
  )
}

export default Header;