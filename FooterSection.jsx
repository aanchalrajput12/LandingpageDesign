import React from 'react';
import './FooterSection.css';

function FooterSection() {
  return (
    <div className="footer-section">
      <div className="footer-cta">
        <h2>Pellentesque suscipit fringilla libero eu.</h2>
        <button className="footer-cta-btn">Get a Demo &rarr;</button>
      </div>
      <footer className="footer-main">
        <div className="footer-col logo-col">

          <div className="footer-logo">
            <span style={{color: "#4caf4f", fontWeight: 700}}>Nexcent</span>
          </div>
          <p img src='https://raknexcent.netlify.app/assets/logo-white-6b89ba15.svg'>Copyright © 2020 Nexcent ltd.<br />All rights reserved</p>
          <div className="footer-socials">
             <img src="https://raknexcent.netlify.app/assets/instagram-98011fa7.svg" alt="instagram" />
             <img src='https://raknexcent.netlify.app/assets/dribble-37c6c258.svg' alt='dribble'/>
             <img src="https://raknexcent.netlify.app/assets/twitter-918f0713.svg" alt='twitter'/>
             <img src='https://raknexcent.netlify.app/assets/youtube-b7b22d30.svg' alt='youtube'/>
          </div>
          
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Company</div>
          <a href="#">About us</a>
          <a href="#">Blog</a>
          <a href="#">Contact us</a>
          <a href="#">Pricing</a>
          <a href="#">Testimonials</a>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Support</div>
          <a href="#">Help center</a>
          <a href="#">Terms of service</a>
          <a href="#">Legal</a>
          <a href="#">Privacy policy</a>
          <a href="#">Status</a>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Stay up to date</div>
          <form className="footer-newsletter">
            <input type="email" placeholder="Your email address" />
            <button type="submit">
              <span>&#8594;</span>
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default FooterSection;
