

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Apenas a importação do ícone

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/351935063009" 
      className="whatsapp-float" 
      target="_blank" 
      rel="noreferrer"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}