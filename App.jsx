import React from 'react';
import './App.css';
import ClientsSection from './ClientsSection.jsx';
import CommunitiesSection from './CommunitiesSection.jsx';
import SpendingYearsSection from './SpendingYearsSection.jsx';
import BusinessStatsSection from './BusinessStatsSection.jsx';
import FooterDesignSection from './FooterDesignSection.jsx';
import TestimonialSection from './TestimonialSection.jsx';
import BlogSection from './BlogSection.jsx';
import FooterSection from './FooterSection.jsx';
function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <img src="https://raknexcent.netlify.app/assets/logo-5ef0cf82.svg" alt="logo" />
        <div className="logo">Nexcent</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Service</li>
          <li>Feature</li>
          <li>Product</li>
          <li>Testimonial</li>
          <li>FAQ</li>
        </ul>
        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign up</button>
        </div>
      </nav>
      <div className="main-section">
        <div className="main-content">
          <h1>
            Lessons and insights<br />
            <span className="eight-years">from 8 years</span>
          </h1>
          <p className="subtitle">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="register-btn">Register</button>
        </div>
      <img src="https://raknexcent.netlify.app/assets/hero-a24db6d9.svg" alt="image" />
        </div>
      </div>
  );
}

export default App;
