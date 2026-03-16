import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { WHATSAPP_NUMBER } from '../data/data';
import '../styles/Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/', label: 'Home', end: true },
    { to: '/destinations', label: 'Destinations' },
    { to: '/packages', label: 'Packages' },
    { to: '/booking', label: 'Book Now' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <div className="navbar__logo" onClick={() => { navigate('/'); setMenuOpen(false); }}>
          <span className="logo-icon">✈</span>
          <span className="logo-text">Yatra<em>Go</em></span>
          <span className="logo-tag">South India Tours</span>
        </div>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''} ${label === 'Book Now' ? 'nav-link--cta' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <a
            className="nav-link nav-link--wa"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in your South India tour packages.`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <span className="wa-icon">💬</span> WhatsApp
          </a>
        </div>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
