import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navbar">
      <h1>AurBatao</h1>
      <ul className="nav-list">
        <li className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleTabClick('home')}>
          <Link className="Navlink" to="/">Home</Link>
        </li>
        <li className={`nav-item ${activeTab === 'about' ? 'active' : ''}`} onClick={() => handleTabClick('about')}>
          <Link className="Navlink" to="/about">About</Link> 
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
