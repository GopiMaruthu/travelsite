import React from 'react';
import PackageCard from '../components/PackageCard';
import { packages, WHATSAPP_NUMBER } from '../data/data';
import '../styles/Packages.css';

function Packages() {
  return (
    <div className="packages-page">
      <div className="page-hero">
        <h1>South India Tour Packages</h1>
        <p>6 carefully designed packages — from ₹999 day trips to 4-day grand tours. Hotel stays and transport included.</p>
        <div className="hero-tags">
          <span>✓ Hotel Included</span>
          <span>✓ AC Transport</span>
          <span>✓ Sightseeing</span>
          <span>✓ No Hidden Charges</span>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="all-packages-grid">
            {packages.map(pkg => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
        </div>
      </div>

      <div className="packages-cta">
        <div className="container">
          <div className="packages-cta__inner">
            <h2>Need a Custom Package?</h2>
            <p>We can create a personalized tour package for your group, family or special occasion. Contact us and we'll plan it for you!</p>
            <a
              className="btn-wa-large"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I need a custom South India tour package. Please help me plan it.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Chat on WhatsApp for Custom Package
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
