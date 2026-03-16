import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../data/data';
import '../styles/WhatsAppButton.css';

function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in your South India tour packages starting from ₹999. Please share more details.`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`wa-float ${hovered ? 'wa-float--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Chat on WhatsApp"
    >
      <span className="wa-float__tooltip">Chat With Us on WhatsApp</span>
      <div className="wa-float__btn">
        <svg viewBox="0 0 32 32" width="28" height="28" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.27 2 2 8.27 2 16c0 2.43.66 4.7 1.8 6.67L2 30l7.53-1.77A13.93 13.93 0 0016 30c7.73 0 14-6.27 14-14S23.73 2 16 2zm7.13 19.5c-.3.85-1.76 1.63-2.42 1.73-.62.1-1.4.14-2.26-.14a20.7 20.7 0 01-2.05-.76c-3.6-1.56-5.95-5.2-6.13-5.44-.18-.24-1.46-1.94-1.46-3.7 0-1.77.93-2.64 1.26-3 .33-.35.72-.44.96-.44.24 0 .48.01.69.01.22.01.52-.08.81.62.3.72 1.02 2.49 1.11 2.67.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.38-.16.74.21.36.93 1.53 2 2.48 1.37 1.22 2.53 1.6 2.89 1.78.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.21 1.72z"/>
        </svg>
      </div>
    </a>
  );
}

export default WhatsAppButton;
