import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PHONE_PRIMARY, PHONE_LANDLINE, EMAIL, ADDRESS, WHATSAPP_NUMBER, MAPS_URL } from '../data/data';
import '../styles/Footer.css';

function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'Tour Packages', path: '/packages' },
    { label: 'Book Now', path: '/booking' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const destinations = ['Munnar', 'Ooty', 'Kodaikanal', 'Madurai', 'Rameshwaram', 'Chettinad', 'Kerala Backwaters', 'Kanyakumari'];

  return (
    <footer className="footer">
      <div className="footer__wave" />
      <div className="footer__body">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__col footer__col--brand">
            <div className="footer__logo">✈ Yatra<em>Go</em></div>
            <p className="footer__brand-desc">
              Your trusted South India travel partner. Affordable tour packages starting from ₹999 with hotel arrangements, sightseeing and 24/7 support.
            </p>
            <div className="footer__badges">
              <span className="badge">✓ Trusted Since 2010</span>
              <span className="badge">✓ 5000+ Happy Travelers</span>
            </div>
            <a
              className="footer__wa-btn"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I want to book a South India tour package.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__list">
              {quickLinks.map(({ label, path }) => (
                <li key={path}>
                  <button className="footer__link" onClick={() => navigate(path)}>→ {label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div className="footer__col">
            <h4 className="footer__heading">Popular Destinations</h4>
            <ul className="footer__list">
              {destinations.map(d => (
                <li key={d}>
                  <button className="footer__link" onClick={() => navigate('/destinations')}>→ {d}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__heading">Contact Us</h4>
            <ul className="footer__contact-list">
              <li>
                <span className="contact-icon">📱</span>
                <div>
                  <div className="contact-label">WhatsApp / Mobile</div>
                  <a href={`tel:${PHONE_PRIMARY}`} className="contact-value">{PHONE_PRIMARY}</a>
                </div>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <div>
                  <div className="contact-label">Landline</div>
                  <a href={`tel:${PHONE_LANDLINE}`} className="contact-value">{PHONE_LANDLINE}</a>
                </div>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <div>
                  <div className="contact-label">Email</div>
                  <a href={`mailto:${EMAIL}`} className="contact-value">{EMAIL}</a>
                </div>
              </li>
              <li>
                <span className="contact-icon">📍</span>
                <div>
                  <div className="contact-label">Address</div>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="contact-value">{ADDRESS}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {year} <strong>YatraGo Travel Agency</strong> — South India Tour Packages from ₹999 | All Rights Reserved</p>
        <p className="footer__seo-text">
          Best travel agency for Munnar, Ooty, Madurai, Rameshwaram, Kodaikanal & Kerala tours | Near New Bus Stand, Ramanathapuram
        </p>
      </div>
    </footer>
  );
}

export default Footer;
