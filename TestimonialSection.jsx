import React from 'react';
import './TestimonialSection.css';

function TestimonialSection() {
  // Replace with actual logo URLs
  const logos = [
    'https://raknexcent.netlify.app/assets/customer-1-f2c22efc.svg', 'https://raknexcent.netlify.app/assets/customer-2-729914fa.svg', 'https://raknexcent.netlify.app/assets/customer-3-b48683a5.svg', 'https://raknexcent.netlify.app/assets/customer-4-39d140de.svg', 'https://raknexcent.netlify.app/assets/customer-5-9196b778.svg', 'https://raknexcent.netlify.app/assets/customer-6-d505c4e7.svg'
  ];

  return (
    <div className="testimonial-section">
      <div className="testimonial-image">
        
        <img src="https://raknexcent.netlify.app/assets/main-customer-8988dbf7.png" alt="Tesla" />
      </div>
      <div className="testimonial-content">
        <p className="testimonial-text">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. <br/>Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu,<br/> at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus,<br/> tellus sed augue ultricies, turpis nisi suscipit metus, eget tincidunt turpis nisi sit amet sapien. Suspendisse potenti.<br/> Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque,<br/> eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
        </p>
        <div className="testimonial-author">
          <span className="author-name">Tim Smith</span>
          <span className="author-title">British Dragon Boat Racing Association</span>
        </div>
        <div className="testimonial-footer">
          <div className="testimonial-logos">
            {logos.map((logo, idx) => (
              <img src={logo} alt={`logo${idx}`} key={idx} />
            ))}
          </div>
          <a href="#" className="customers-link">
            Meet all customers &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
