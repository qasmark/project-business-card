import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/about">О нас</Link></li>
        <li><Link to="/contacts">Контакты</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;