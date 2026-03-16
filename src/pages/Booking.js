import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { packages, WHATSAPP_NUMBER, EMAIL } from '../data/data';
import '../styles/Booking.css';

const emptyForm = {
  name: '',
  phone: '',
  email: '',
  destination: packages[0].name,
  date: '',
  people: '2',
  packageSelected: packages[0].name,
  message: '',
};

function Booking() {
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef] = useState('YG-' + Math.random().toString(36).slice(2, 8).toUpperCase());

  const today = new Date().toISOString().split('T')[0];

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    setErrors(p => ({ ...p, [name]: '' }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required.';
    if (!form.phone.trim()) e.phone = 'Phone number is required.';
    else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit phone number.';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.date) e.date = 'Please select a travel date.';
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    // In production: send to backend / EmailJS / Formspree
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const waMsg = encodeURIComponent(
    `📋 *New Booking Request*\n\n👤 Name: ${form.name}\n📱 Phone: ${form.phone}\n✉️ Email: ${form.email || 'N/A'}\n📍 Destination: ${form.destination}\n📅 Travel Date: ${form.date}\n👥 People: ${form.people}\n🧳 Package: ${form.packageSelected}\n💬 Message: ${form.message || 'None'}\n\n📌 Booking Ref: ${bookingRef}`
  );

  if (submitted) {
    return (
      <div className="booking-page">
        <div className="page-hero"><h1>Booking Received!</h1><p>We'll confirm your tour within 1 hour</p></div>
        <div className="booking-wrap">
          <div className="booking-card">
            <div className="confirm-box">
              <div className="confirm-icon">🎉</div>
              <h2>Thank You, {form.name}!</h2>
              <p>Your booking request for <strong>{form.destination}</strong> has been received. Our team will call you on <strong>{form.phone}</strong> within 1 hour to confirm.</p>
              <div className="confirm-details">
                {[
                  ['Booking Reference', bookingRef],
                  ['Destination', form.destination],
                  ['Package', form.packageSelected],
                  ['Travel Date', form.date],
                  ['Number of People', `${form.people} Person(s)`],
                  ['Contact Phone', form.phone],
                ].map(([k, v]) => (
                  <div key={k} className="confirm-row">
                    <span className="confirm-key">{k}</span>
                    <span className="confirm-val">{v}</span>
                  </div>
                ))}
              </div>
              <div className="confirm-note">
                📧 A confirmation will also be sent to admin at <strong>{EMAIL}</strong>
              </div>
              <div className="confirm-actions">
                <a
                  className="btn-wa-confirm"
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 Also Send on WhatsApp
                </a>
                <button className="btn-outline-confirm" onClick={() => { setForm(emptyForm); setSubmitted(false); }}>
                  New Booking
                </button>
                <button className="btn-outline-confirm" onClick={() => navigate('/')}>
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <div className="page-hero">
        <h1>Book Your South India Tour</h1>
        <p>Fill in the form below — we'll call you within 1 hour to confirm your package!</p>
      </div>

      <div className="booking-wrap">
        <div className="booking-layout">
          <div className="booking-card">
            <div className="booking-card__header">
              <span className="section-label">📋 Reservation Form</span>
              <h2>Tell Us About Your Trip</h2>
              <p className="booking-card__note">All fields marked * are required. We'll confirm via phone within 1 hour.</p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input name="name" placeholder="Eg: Rajesh Kumar" value={form.name} onChange={handleChange} />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label>Phone Number (WhatsApp) *</label>
                  <input name="phone" type="tel" placeholder="Eg: 9876543210" value={form.phone} onChange={handleChange} />
                  {errors.phone && <span className="form-error">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label>Email Address (Optional)</label>
                  <input name="email" type="email" placeholder="Eg: rajesh@gmail.com" value={form.email} onChange={handleChange} />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label>Destination *</label>
                  <select name="destination" value={form.destination} onChange={handleChange}>
                    <option value="Munnar">🌿 Munnar, Kerala</option>
                    <option value="Ooty">🚂 Ooty, Tamil Nadu</option>
                    <option value="Kodaikanal">🌸 Kodaikanal, Tamil Nadu</option>
                    <option value="Madurai">🛕 Madurai, Tamil Nadu</option>
                    <option value="Rameshwaram">🌊 Rameshwaram, Tamil Nadu</option>
                    <option value="Chettinad">🏛️ Chettinad, Tamil Nadu</option>
                    <option value="Kerala Backwaters">🛶 Kerala Backwaters</option>
                    <option value="Kanyakumari">🌅 Kanyakumari, Tamil Nadu</option>
                    <option value="Custom">🗺️ Custom / Multiple</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Travel Date *</label>
                  <input name="date" type="date" min={today} value={form.date} onChange={handleChange} />
                  {errors.date && <span className="form-error">{errors.date}</span>}
                </div>

                <div className="form-group">
                  <label>Number of People *</label>
                  <select name="people" value={form.people} onChange={handleChange}>
                    {[1,2,3,4,5,6,7,8,9,10,15,20].map(n => (
                      <option key={n} value={n}>{n} Person{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group form-group--full">
                  <label>Package Selected</label>
                  <select name="packageSelected" value={form.packageSelected} onChange={handleChange}>
                    {packages.map(p => (
                      <option key={p.id} value={p.name}>{p.name} – {p.price} ({p.duration})</option>
                    ))}
                    <option value="Custom Package">Custom / Not sure yet</option>
                  </select>
                </div>

                <div className="form-group form-group--full">
                  <label>Additional Message / Special Requests</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="E.g. Need vegetarian food, travelling with elderly parents, looking for budget hotel..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" className="btn-submit">
                ✅ Submit Booking Request
              </button>
              <p className="form-footer-note">
                Or book directly via WhatsApp:
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"> 💬 8682836227</a>
              </p>
            </form>
          </div>

          {/* Side info */}
          <div className="booking-sidebar">
            <div className="sidebar-card">
              <h3>📞 Quick Contact</h3>
              <a className="sidebar-phone" href="tel:8682836227">📱 8682836227</a>
              <a className="sidebar-phone" href="tel:9940792094">📞 9940792094</a>
              <a
                className="sidebar-wa"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank" rel="noopener noreferrer"
              >💬 WhatsApp Now</a>
            </div>
            <div className="sidebar-card">
              <h3>✅ What's Included</h3>
              <ul className="sidebar-list">
                <li>🏨 Hotel / Resort Stay</li>
                <li>🚌 AC Transport</li>
                <li>🧭 Expert Local Guide</li>
                <li>🌄 All Sightseeing</li>
                <li>🍳 Breakfast (most packages)</li>
                <li>🎟️ Entry Tickets</li>
              </ul>
            </div>
            <div className="sidebar-card sidebar-card--note">
              <h3>💡 Note</h3>
              <p>Once you submit, our team will call you within <strong>1 hour</strong> during business hours (9 AM – 7 PM) to confirm the package and collect payment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
