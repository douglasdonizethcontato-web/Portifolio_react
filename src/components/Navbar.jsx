import React from 'react';

export default function Navbar() {
  return (
   <nav className="glass-nav">
      <div className="logo">DOUGLAS SILVA<span></span></div>
      <ul className="nav-links">
        <li><a href="#home">Início</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}