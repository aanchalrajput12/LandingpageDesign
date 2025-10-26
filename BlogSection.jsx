import React from 'react';
import './BlogSection.css';

const cards = [
  {
    img: 'https://raknexcent.netlify.app/assets/blog-1-5b03681d.png', 
    title: 'Creating Streamlined Safeguarding Processes with OneRen',
    link: '#'
  },
  {
    img: "https://raknexcent.netlify.app/assets/blog-2-ca5ab9d7.png",
    title: 'What are your safeguarding responsibilities and how can you manage them?',
    link: '#'
  },
  {
    img: 'https://raknexcent.netlify.app/assets/blog-3-3a889dba.png',
    title: 'Revamping the Membership Model with Triathlon Australia',
    link: '#'
  }
];

function BlogSection() {
  return (
    <div className="blog-section">
      <h1>Caring is the new marketing</h1>
      <p className="subtitle">
        The Nexcent Blog is the best place to read about the latest membership insights, trends and more. See who’s joining the community, read about how our community are increasing their membership income and lots more.
      </p>
      <div className="card-row">
        {cards.map((card, i) => (
          <div className="card" key={i}>
            <img src={card.img} alt="card cover" />
            <div className="card-body">
              <div className="card-title">{card.title}</div>
              <a className="card-link" href={card.link}>Readmore &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BlogSection;