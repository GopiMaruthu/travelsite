import React, { useState, useRef, useEffect } from 'react';
import { WHATSAPP_NUMBER } from '../data/data';
import '../styles/LiveChat.css';

const botReplies = {
  default: "Thanks for reaching out! 😊 Our travel experts are available Mon–Sat 9AM–7PM. For instant help, chat on WhatsApp or call 8682836227.",
  munnar: "🌿 Munnar Tour Package starts from ₹2,999 (2 Days/1 Night) including hotel stay, tea garden visit, Mattupetty Dam & Echo Point. Want to book?",
  ooty: "🚂 Ooty & Kodaikanal package starts from ₹4,999 (3 Days/2 Nights) including toy train, botanical garden, Kodai lake and hotel stays!",
  madurai: "🛕 Madurai & Rameshwaram package starts from ₹3,499 (2 Days/1 Night) with Meenakshi Temple, Pamban Bridge & Dhanushkodi Beach.",
  price: "💰 Our tour packages start from just ₹999! We have day trips, 2-day and multi-day packages for Munnar, Ooty, Madurai, Rameshwaram & more.",
  hotel: "🏨 Yes! We arrange comfortable hotels and local stays at all destinations — Munnar, Ooty, Madurai, Rameshwaram, Kodaikanal and more at affordable prices.",
  book: "📝 To book a tour, visit our Booking page or WhatsApp us at 8682836227. We'll confirm your package within 1 hour!",
  contact: "📞 Call/WhatsApp: 8682836227 | Landline: 9940792094 | Email: hello@yatrago.in | Address: Near New Bus Stand, Ramanathapuram – 623501",
};

function getReply(msg) {
  const m = msg.toLowerCase();
  if (m.includes('munnar') || m.includes('kerala')) return botReplies.munnar;
  if (m.includes('ooty') || m.includes('kodaikanal')) return botReplies.ooty;
  if (m.includes('madurai') || m.includes('rameshwaram')) return botReplies.madurai;
  if (m.includes('price') || m.includes('cost') || m.includes('₹') || m.includes('cheap') || m.includes('package')) return botReplies.price;
  if (m.includes('hotel') || m.includes('stay') || m.includes('accommodation')) return botReplies.hotel;
  if (m.includes('book') || m.includes('reserve')) return botReplies.book;
  if (m.includes('contact') || m.includes('phone') || m.includes('number') || m.includes('address')) return botReplies.contact;
  return botReplies.default;
}

function LiveChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "👋 Hi! Welcome to YatraGo. Ask me about South India tour packages, prices, hotels or destinations!" }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  function send() {
    const text = input.trim();
    if (!text) return;
    setMessages(prev => [...prev, { from: 'user', text }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { from: 'bot', text: getReply(text) }]);
    }, 1000);
  }

  function handleKey(e) {
    if (e.key === 'Enter') send();
  }

  const quickQuestions = ['Package prices?', 'Munnar tour', 'Hotel arrangements', 'Book a tour'];

  return (
    <div className={`livechat ${open ? 'livechat--open' : ''}`}>
      {open && (
        <div className="livechat__window">
          <div className="livechat__header">
            <div className="livechat__header-info">
              <div className="livechat__avatar">🧳</div>
              <div>
                <div className="livechat__name">YatraGo Support</div>
                <div className="livechat__status">● Online Now</div>
              </div>
            </div>
            <div className="livechat__header-actions">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="livechat__wa-link"
                title="Open in WhatsApp"
              >💬</a>
              <button className="livechat__close" onClick={() => setOpen(false)}>✕</button>
            </div>
          </div>

          <div className="livechat__messages">
            {messages.map((m, i) => (
              <div key={i} className={`livechat__msg livechat__msg--${m.from}`}>
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="livechat__msg livechat__msg--bot livechat__typing">
                <span /><span /><span />
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="livechat__quick">
            {quickQuestions.map(q => (
              <button key={q} className="livechat__quick-btn" onClick={() => {
                setMessages(prev => [...prev, { from: 'user', text: q }]);
                setTyping(true);
                setTimeout(() => {
                  setTyping(false);
                  setMessages(prev => [...prev, { from: 'bot', text: getReply(q) }]);
                }, 900);
              }}>{q}</button>
            ))}
          </div>

          <div className="livechat__input-row">
            <input
              className="livechat__input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type your question..."
            />
            <button className="livechat__send" onClick={send}>➤</button>
          </div>
        </div>
      )}

      <button className="livechat__toggle" onClick={() => setOpen(!open)} aria-label="Live Chat">
        {open ? '✕' : '💬'}
        {!open && <span className="livechat__badge">1</span>}
      </button>
    </div>
  );
}

export default LiveChat;
