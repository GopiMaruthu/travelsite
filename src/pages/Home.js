import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PackageCard from '../components/PackageCard';
import { destinations, packages, testimonials, WHATSAPP_NUMBER } from '../data/data';
import '../styles/Home.css';

function StarRating({ n }) {
  return <span className="stars">{'★'.repeat(n)}{'☆'.repeat(5 - n)}</span>;
}

function Home() {
  const navigate = useNavigate();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const featuredPackages = packages.slice(0, 3);

  const whyUs = [
    { icon: '💰', title: 'Packages from ₹999', desc: 'Genuine budget packages with no hidden charges. Transparent pricing always.' },
    { icon: '🏨', title: 'Hotel Arrangements', desc: 'Comfortable stays arranged at all destinations — from budget to premium.' },
    { icon: '🚌', title: 'AC Transport', desc: 'Well-maintained AC vehicles for all sightseeing and intercity transfers.' },
    { icon: '📞', title: '24/7 Support', desc: 'WhatsApp & phone support throughout your journey. We\'re always reachable.' },
    { icon: '🧭', title: 'Expert Local Guides', desc: 'Friendly, experienced guides who know every hidden gem of South India.' },
    { icon: '✅', title: 'Trusted Agency', desc: 'Serving 5000+ happy travelers since 2010 across Tamil Nadu and Kerala.' },
  ];

  return (
    <div className="home-page">

      {/* ─── HERO ─── */}
      <section className="hero" aria-label="South India tour packages starting from ₹999">
        <div className="hero__overlay" />
        <div className="hero__content">
          <div className="hero__pill">🎉 Special Offer — Limited Time</div>
          <h1 className="hero__title">
            Tour Packages<br />
            <em>Starting From <span className="hero__price">₹999</span></em>
          </h1>
          <p className="hero__subtitle">
            Explore the breathtaking beauty of South India with affordable tour packages.
            We arrange travel, sightseeing, and comfortable hotel stays at Munnar, Ooty,
            Kodaikanal, Madurai, Rameshwaram and more.
          </p>
          <div className="hero__tags">
            <span>🌿 Munnar</span><span>🛕 Madurai</span><span>🚂 Ooty</span>
            <span>🌸 Kodaikanal</span><span>🌊 Rameshwaram</span><span>🛶 Kerala</span>
          </div>
          <div className="hero__actions">
            <button className="btn-hero-primary" onClick={() => navigate('/booking')}>
              📋 Book Now
            </button>
            <a
              className="btn-hero-wa"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I want to know about South India tour packages starting from ₹999.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
          <div className="hero__trust">
            <span>⭐ 5000+ Happy Travelers</span>
            <span>✓ Hotel Included</span>
            <span>✓ AC Transport</span>
          </div>
        </div>
        <div className="hero__scroll-hint">↓ Scroll to explore</div>
      </section>

      {/* ─── POPULAR DESTINATIONS ─── */}
      <section className="section" id="destinations" aria-label="Popular South India destinations">
        <div className="container">
          <div className="section-header">
            <span className="section-label">🗺️ Where Would You Like To Go?</span>
            <h2 className="section-title">Popular South India Destinations</h2>
            <p className="section-sub">
              From misty hill stations to sacred temples and golden beaches — discover the diverse wonders of South India with our guided tour packages.
            </p>
          </div>
          <div className="dest-grid">
            {destinations.map((d, i) => (
              <div key={d.id} className="dest-card" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="dest-card__img" style={{ background: d.bgGradient }}>
                  <span className="dest-card__emoji">{d.emoji}</span>
                  <div className="dest-card__overlay">
                    <button
                      className="dest-card__cta"
                      onClick={() => navigate('/booking')}
                    >Book This Trip</button>
                  </div>
                </div>
                <div className="dest-card__body">
                  <div className="dest-card__top">
                    <h3 className="dest-card__name">{d.name}</h3>
                    <span className="dest-card__state">{d.state}</span>
                  </div>
                  <p className="dest-card__tagline">{d.tagline}</p>
                  <p className="dest-card__desc">{d.desc}</p>
                  <div className="dest-card__meta">
                    <span>🗓 Best: {d.bestTime}</span>
                    {d.altitude !== 'Sea level' && <span>⛰ {d.altitude}</span>}
                  </div>
                  <div className="dest-card__highlights">
                    {d.highlights.slice(0, 3).map(h => <span key={h} className="dest-highlight">{h}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <button className="btn-outline-primary" onClick={() => navigate('/destinations')}>
              View All Destinations →
            </button>
          </div>
        </div>
      </section>

      {/* ─── TOUR PACKAGES ─── */}
      <section className="section section--alt" id="packages" aria-label="Affordable South India tour packages">
        <div className="container">
          <div className="section-header">
            <span className="section-label">🧳 Carefully Crafted For You</span>
            <h2 className="section-title">Popular Tour Packages</h2>
            <p className="section-sub">
              Budget-friendly, experience-rich tour packages for families, couples and solo travelers. All packages include hotel stay, sightseeing and transport.
            </p>
          </div>
          <div className="packages-grid">
            {featuredPackages.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
          <div className="section-cta">
            <button className="btn-outline-primary" onClick={() => navigate('/packages')}>
              See All 6 Packages →
            </button>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="section why-section" aria-label="Why choose YatraGo travel agency">
        <div className="container">
          <div className="section-header">
            <span className="section-label">🌟 What Makes Us Different</span>
            <h2 className="section-title">Why Thousands Choose YatraGo</h2>
            <p className="section-sub">We're not just a travel agency — we're your South India travel companion.</p>
          </div>
          <div className="why-grid">
            {whyUs.map(({ icon, title, desc }) => (
              <div key={title} className="why-card">
                <div className="why-card__icon">{icon}</div>
                <h3 className="why-card__title">{title}</h3>
                <p className="why-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOTEL ARRANGEMENTS ─── */}
      <section className="hotel-section" aria-label="Hotel arrangements for South India tours">
        <div className="container">
          <div className="hotel-section__inner">
            <div className="hotel-section__text">
              <span className="section-label" style={{ color: '#c8a96e' }}>🏨 Comfortable Stays Included</span>
              <h2 className="hotel-section__title">We Arrange Your Hotels Too</h2>
              <p className="hotel-section__desc">
                Worried about finding a good hotel? Leave it to us! We also arrange <strong>comfortable hotels and local stays</strong> for our customers at <strong>affordable prices</strong> in all destinations including Munnar, Ooty, Kodaikanal, Madurai and Rameshwaram.
              </p>
              <ul className="hotel-section__list">
                <li>✓ Budget to premium hotel options</li>
                <li>✓ Clean, verified accommodations</li>
                <li>✓ Breakfast included in most packages</li>
                <li>✓ Local homestays & resorts available</li>
                <li>✓ Houseboat stays for Kerala tours</li>
              </ul>
              <button className="btn-accent" onClick={() => navigate('/booking')}>
                Check Hotel + Tour Package
              </button>
            </div>
            <div className="hotel-section__destinations">
              {['🌿 Munnar', '🚂 Ooty', '🌸 Kodaikanal', '🛕 Madurai', '🌊 Rameshwaram', '🛶 Kerala', '🏛️ Chettinad', '🌅 Kanyakumari'].map(d => (
                <span key={d} className="hotel-dest-chip">{d}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section" id="reviews" aria-label="Customer reviews and testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-label">💬 Real Stories, Real Happiness</span>
            <h2 className="section-title">What Our Travelers Say</h2>
            <p className="section-sub">Over 5000 happy travelers have trusted YatraGo for their South India adventure.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`testimonial-card ${activeTestimonial === i ? 'testimonial-card--active' : ''}`}
                onClick={() => setActiveTestimonial(i)}
              >
                <div className="testimonial-card__top">
                  <span className="testimonial-card__avatar">{t.emoji}</span>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__location">📍 {t.location}</div>
                  </div>
                </div>
                <StarRating n={t.rating} />
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__tour">✈ {t.tour}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section className="gallery-section" aria-label="South India travel photo gallery">
        <div className="container">
          <div className="section-header">
            <span className="section-label">📸 Visual Journey</span>
            <h2 className="section-title">Destinations at a Glance</h2>
          </div>
          <div className="gallery-grid">
            {destinations.map(d => (
              <div key={d.id} className="gallery-item" style={{ background: d.bgGradient }}>
                <span className="gallery-item__emoji">{d.emoji}</span>
                <div className="gallery-item__label">{d.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT STRIP ─── */}
      <section className="contact-strip" aria-label="Contact YatraGo travel agency">
        <div className="container">
          <div className="contact-strip__inner">
            <div className="contact-strip__text">
              <h2>Ready to Plan Your South India Trip?</h2>
              <p>Call us, WhatsApp us or fill the booking form. We'll get back within 1 hour!</p>
            </div>
            <div className="contact-strip__actions">
              <a href="tel:8682836227" className="strip-btn strip-btn--call">📞 Call 8682836227</a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I want to book a South India tour.`}
                target="_blank"
                rel="noopener noreferrer"
                className="strip-btn strip-btn--wa"
              >💬 WhatsApp Us</a>
              <button className="strip-btn strip-btn--book" onClick={() => navigate('/booking')}>
                📋 Online Booking
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAP ─── */}
      <section className="map-section" id="location" aria-label="Find YatraGo travel office location">
        <div className="container">
          <div className="section-header">
            <span className="section-label">📍 Find Us Here</span>
            <h2 className="section-title">Visit Our Office</h2>
            <p className="section-sub">Near New Bus Stand, Ramanathapuram – 623501, Tamil Nadu</p>
          </div>
          <div className="map-wrapper">
            <iframe
              title="YatraGo Office Location - Near New Bus Stand, Ramanathapuram"
              src="https://maps.google.com/maps?q=9.3625156,78.8342977&z=17&output=embed"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-card">
              <div className="map-card__icon">🏢</div>
              <h3>YatraGo Travel Agency</h3>
              <p>Near New Bus Stand<br />Ramanathapuram – 623501</p>
              <a className="map-card__link" href="https://www.google.com/maps/search/Ramanthapuram+new+bus+stand+/@9.3625156,78.8342977,17.11z" target="_blank" rel="noopener noreferrer">
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
