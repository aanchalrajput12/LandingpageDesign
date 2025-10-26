import React from 'react';
import './CommunitiesSection.css';

function CommunitiesSection() {
  // Replace with actual SVGs or images for icons
  const cards = [
    {
      icon: '👥', 
      title: 'Membership Organisations',
      text: 'Our membership management software provides full automation of membership renewals and payments.'
    },
    {
      icon: '🏢', 
      title: 'National Associations',
      text: 'Our membership management software provides full automation of membership renewals and payments.'
    },
    {
      icon: '🚴‍♂️', 
      title: 'Clubs And Groups',
      text: 'Our membership management software provides full automation of membership renewals and payments.'
    }
  ];

  return (
    <div className="communities-section">
      {cards.map((card, idx) => (
        <div className="community-card" key={idx}>
          <div className="card-icon">{card.icon}</div>
          <h3 className="card-title">{card.title}</h3>
          <p className="card-text">{card.text}</p>
        </div>
      ))}
    </div>
  );
}

export default CommunitiesSection;
