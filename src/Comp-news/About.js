import React from 'react';
import './About.css'; 
import logo from "./Assets/logo.jpg"

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Welcome to AurBatao, your trusted source for up-to-date news and information.</p>
      <p>Our mission is to provide you with accurate and unbiased news coverage on a daily basis.</p>
      <p>Stay informed, stay connected! 📰</p>
      <img className="logoimage" src={logo} alt="logo" />
      <p><strong>AurBatao - DailyNews</strong></p>
    </div>
  );
};

export default About;
