import React from 'react';
import './ClientsSection.css';

function ClientsSection() {
  
  const logos = [
    'https://raknexcent.netlify.app/assets/client-1-b481f140.svg', 'https://raknexcent.netlify.app/assets/client-2-135478fa.svg', 'https://raknexcent.netlify.app/assets/client-3-f5a5e9b0.svg', 'https://raknexcent.netlify.app/assets/client-4-59d5bffa.svg', 'https://raknexcent.netlify.app/assets/client-5-66092fae.svg', 'https://raknexcent.netlify.app/assets/client-6-0033f9e5.svg',
  ];

  return (
    <div className="clients-section">
      <h2 className="clients-title">Our Clients</h2>
      <p className="clients-subtitle">
        We have been working with some Fortune 500+ clients.
      </p>
      <div className="clients-logos">
        {logos.map((logo, idx) => (
          <img src={logo} alt={`client-logo-${idx}`} key={idx} className="client-logo" />
        ))}
      </div>
      <div className="community-section">
        <h2>Manage your entire community<br />in a single system</h2>
        <p className="community-subtitle">Who is Nexcent suitable for?</p>
      </div>
    </div>
  );
}

export default ClientsSection;
