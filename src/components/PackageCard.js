import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WHATSAPP_NUMBER } from '../data/data';
import '../styles/PackageCard.css';

function PackageCard({ pkg }) {
  const navigate = useNavigate();
  const { name, destination, emoji, duration, price, originalPrice, badge, badgeColor, highlights, includes, desc } = pkg;

  const waMsg = encodeURIComponent(`Hi! I'm interested in the "${name}" package. Duration: ${duration}. Price: ${price}. Please share details.`);

  return (
    <div className="pkg-card">
      {badge && (
        <div className="pkg-card__badge" style={{ background: badgeColor }}>
          {badge}
        </div>
      )}
      <div className="pkg-card__header">
        <div className="pkg-card__emoji">{emoji}</div>
        <div className="pkg-card__title-block">
          <h3 className="pkg-card__name">{name}</h3>
          <span className="pkg-card__dest">📍 {destination}</span>
        </div>
      </div>

      <div className="pkg-card__duration">🕐 {duration}</div>
      <p className="pkg-card__desc">{desc}</p>

      <div className="pkg-card__highlights">
        <div className="pkg-card__highlights-title">Highlights:</div>
        <ul>
          {highlights.map(h => <li key={h}>✓ {h}</li>)}
        </ul>
      </div>

      <div className="pkg-card__includes">
        {includes.map(inc => (
          <span key={inc} className="include-chip">{inc}</span>
        ))}
      </div>

      <div className="pkg-card__footer">
        <div className="pkg-card__price-block">
          <span className="pkg-card__original">{originalPrice}</span>
          <span className="pkg-card__price">{price}</span>
          <span className="pkg-card__per">per person</span>
        </div>
        <div className="pkg-card__actions">
          <button className="pkg-btn pkg-btn--outline" onClick={() => navigate('/packages')}>
            View Details
          </button>
          <a
            className="pkg-btn pkg-btn--wa"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
