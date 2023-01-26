import React from 'react';
import style from '../../Styles/navbar.module.css';
import Menu from './Menu';
import Topheader from './topheader';

const Header = () => {
  return (
    <header>
      <div className={`${style.topContent}`}>
        <Topheader></Topheader>
      </div>
      <div className={`${style.NavComponent}  `}>
        <Menu></Menu>
      </div>
    </header>
  );
};

export default Header;
