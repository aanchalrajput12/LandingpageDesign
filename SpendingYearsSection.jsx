import React from 'react';
import './SpendingYearsSection.css';

function SpendingYearsSection() {
  return (
    <div className="spending-years-section">
      <div className="spending-years-illustration">
       
        <img
          src="https://raknexcent.netlify.app/assets/unlock-2489143b.svg" 
          alt="People and chart"
        />
      </div>
      <div className="spending-years-content">
        <h2>The unseen of spending three years at Pixelgrade</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
          Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. 
          Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. 
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. 
          Donec elementum pulvinar odio.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  );
}

export default SpendingYearsSection;
