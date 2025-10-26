import React from 'react';
import './FooterDesignSection.css';

function FooterDesignSection() {
  return (
    <div className="footer-design-section">
      <div className="footer-design-illustration">
        
        <img
          src="https://raknexcent.netlify.app/assets/unlock-2-9c364468.svg" 
          alt="Footer illustration"
        />
      </div>
      <div className="footer-design-content">
        <h2>How to design your site footer like we did</h2>
        <p>
          Donec a erat justo. Fusce egestas tristique ultricies. Nam tempor, augue nec tincidunt molestie, massa nunc varius
          ac, scelerisque erat erat a magna. Donec quis erat at libero ultricies mollis. In hac habitasse platea dictumst.
          Vivamus vehicula leo id, at porta felis facilisis finibus. In euismod augue vitae nisi rhoncus, non dictum erat rtrd portitor.
          Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisl ac, tincidunt venenatis libero. 
          Donec consectetur facilisis ipsum in gravida.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  );
}

export default FooterDesignSection;
