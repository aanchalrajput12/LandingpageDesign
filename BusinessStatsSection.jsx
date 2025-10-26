import React from 'react';
import './BusinessStatsSection.css';

function BusinessStatsSection() {
  return (
    <div className="business-stats-section">
      <div className="business-stats-left">
        <h2>
          Helping a local<br />
          <span className="highlight">business reinvent itself</span>
        </h2>
        <p className="business-stats-subtitle">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="business-stats-right">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-icon">👥</span>
            <div>
              <div className="stat-value">2,245,341</div>
              <div className="stat-label">Members</div>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon">🚴‍♂️</span>
            <div>
              <div className="stat-value">46,328</div>
              <div className="stat-label">Clubs</div>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon">📅</span>
            <div>
              <div className="stat-value">828,867</div>
              <div className="stat-label">Event Bookings</div>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon">💳</span>
            <div>
              <div className="stat-value">1,926,436</div>
              <div className="stat-label">Payments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessStatsSection;
