import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="container">
      <h2 className="section-title">Contacto</h2>
      <div className="contact-grid">
        <a href="mailto:douglasdonizeth.contato@gmail.com" className="contact-card">
          Email
        </a>
        {/* Substitui pelo teu número real do WhatsApp no link abaixo */}
        <a href="https://wa.me/351912345678" className="contact-card" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </section>
  );
}