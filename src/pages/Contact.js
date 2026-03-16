import React, { useState } from 'react';
import { PHONE_PRIMARY, PHONE_LANDLINE, EMAIL, ADDRESS, WHATSAPP_NUMBER, MAPS_URL } from '../data/data';
import '../styles/Contact.css';

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSent(true);
  }

  const contactItems = [
    { icon: '📱', label: 'WhatsApp / Mobile', value: PHONE_PRIMARY, href: `tel:${PHONE_PRIMARY}` },
    { icon: '📞', label: 'Landline', value: PHONE_LANDLINE, href: `tel:${PHONE_LANDLINE}` },
    { icon: '✉️', label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: '📍', label: 'Address', value: ADDRESS, href: MAPS_URL, external: true },
    { icon: '🕐', label: 'Business Hours', value: 'Mon–Sat: 9:00 AM – 7:00 PM', sub: 'Sunday: 10:00 AM – 4:00 PM' },
  ];

  return (
    <div className="contact-page">
      <div className="page-hero">
        <h1>Contact YatraGo</h1>
        <p>Get in touch with our South India travel experts. We respond within 1 hour!</p>
      </div>

      <div className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Info Card */}
            <div className="contact-info-card">
              <div className="contact-info-card__header">
                <h2>YatraGo Travel Agency</h2>
                <p>Your trusted partner for affordable South India tours</p>
              </div>
              <div className="contact-items-list">
                {contactItems.map(({ icon, label, value, sub, href, external }) => (
                  <div key={label} className="contact-item">
                    <div className="contact-item__icon">{icon}</div>
                    <div className="contact-item__body">
                      <span className="contact-item__label">{label}</span>
                      {href ? (
                        <a
                          href={href}
                          className="contact-item__value"
                          target={external ? '_blank' : undefined}
                          rel={external ? 'noopener noreferrer' : undefined}
                        >{value}</a>
                      ) : (
                        <span className="contact-item__value">{value}</span>
                      )}
                      {sub && <span className="contact-item__sub">{sub}</span>}
                    </div>
                  </div>
                ))}
              </div>
              <a
                className="wa-contact-btn"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I have an inquiry about your South India tour packages.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Chat With Us on WhatsApp
              </a>
            </div>

            {/* Quick Inquiry Form */}
            <div className="contact-form-card">
              {sent ? (
                <div className="contact-form-success">
                  <div className="success-icon">✅</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you, <strong>{form.name}</strong>! We'll call you on <strong>{form.phone}</strong> shortly.</p>
                  <button onClick={() => { setSent(false); setForm({ name: '', phone: '', message: '' }); }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3>📝 Quick Inquiry</h3>
                  <p className="contact-form-sub">Have a question? Send us a quick message and we'll get back to you right away.</p>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input name="name" placeholder="Eg: Priya Sharma" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input name="phone" type="tel" placeholder="Eg: 9876543210" value={form.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Your Message</label>
                      <textarea name="message" rows={4} placeholder="Tell us about your travel plans, preferred destination, dates..." value={form.message} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn-contact-submit">Send Message →</button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Map */}
          <div className="contact-map-section">
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>📍 Find Us Here</h2>
            <div className="contact-map-wrapper">
              <iframe
                title="YatraGo Travel Agency Location - Ramanathapuram"
                src="https://maps.google.com/maps?q=9.3625156,78.8342977&z=17&output=embed"
                width="100%"
                height="380"
                style={{ border: 0, borderRadius: '14px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="contact-map-card">
                <span className="map-card-icon">📌</span>
                <h4>Our Office</h4>
                <p>Near New Bus Stand<br />Ramanathapuram – 623501<br />Tamil Nadu, India</p>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="map-directions-link">
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
