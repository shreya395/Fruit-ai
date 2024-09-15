// src/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-phone-container">
      <div className="about-blur-logo">
        {/* Add your blurred logo image here */}
        <img src="logo.png" alt="blurred-logo" className="blurred-logo" />
      </div>
      <div className="about-card">
        <h1>Fruit.Ai</h1>
        <p>
          Whether you're looking to discover new fruits, understand their nutritional values, 
          or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. 
          We provide personalized fruit recommendations tailored to your health needs, making it easier for you 
          to integrate the best fruits into your daily routine.
        </p>
        <button className="about-button">About</button>
      </div>
    </div>
  );
};

export default About;
