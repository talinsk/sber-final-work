import React from 'react';
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
            <Personal/>
        </div>
    </header>
  )
}

export default Header;