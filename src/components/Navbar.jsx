import React from 'react';

export default function Navbar() {
  return (
    <nav className="glass-nav">
      <div className="logo">DOUGLAS SILVA<span></span></div>
      <ul className="nav-links">
        <li><a href="#about" className="nav-link">Sobre Mim</a></li>
        <li><a href="#projects" className="nav-link">Projetos</a></li>
        <li><a href="#contact" className="nav-link">Contacto</a></li>
      </ul>
    </nav>
  );
}