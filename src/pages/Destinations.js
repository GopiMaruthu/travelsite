import React from 'react';
import { useNavigate } from 'react-router-dom';
import { destinations, WHATSAPP_NUMBER } from '../data/data';
import '../styles/Destinations.css';

function Destinations() {
  const navigate = useNavigate();

  return (
    <div className="destinations-page">
      <div className="page-hero">
        <h1>South India Destinations</h1>
        <p>8 stunning destinations — temple towns, hill stations, backwaters and beaches. All with affordable packages from ₹999.</p>
      </div>

      <div className="section">
        <div className="container">
          <div className="full-dest-grid">
            {destinations.map(d => (
              <div key={d.id} className="full-dest-card">
                <div className="full-dest-card__img" style={{ background: d.bgGradient }}>
                  <span className="full-dest-card__emoji">{d.emoji}</span>
                  <span className="full-dest-card__state-tag">{d.state}</span>
                </div>
                <div className="full-dest-card__body">
                  <h2 className="full-dest-card__name">{d.name}</h2>
                  <p className="full-dest-card__tagline">{d.tagline}</p>
                  <p className="full-dest-card__desc">{d.desc}</p>

                  <div className="full-dest-card__meta">
                    <div className="meta-item">
                      <span className="meta-label">Best Time</span>
                      <span className="meta-value">🗓 {d.bestTime}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Altitude</span>
                      <span className="meta-value">⛰ {d.altitude}</span>
                    </div>
                  </div>

                  <div className="full-dest-card__highlights">
                    <div className="highlights-label">Top Attractions:</div>
                    <div className="highlights-list">
                      {d.highlights.map(h => <span key={h} className="highlight-tag">✓ {h}</span>)}
                    </div>
                  </div>

                  <div className="full-dest-card__actions">
                    <button className="btn-primary-sm" onClick={() => navigate('/booking')}>
                      Book Tour Package
                    </button>
                    <a
                      className="btn-wa-sm"
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in visiting ${d.name}. Please share package details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      💬 Ask on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
