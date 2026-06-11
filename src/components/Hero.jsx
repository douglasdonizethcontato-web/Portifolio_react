import React from 'react';
// Importamos o ficheiro 'hero.png' que disseste que está na pasta assets
import DouglasImg from '../assets/Douglas.jpg.jpg'; 

export default function Hero() {
  return (
    <section id="home" className="hero" style={{ position: 'relative', zIndex: 1 }}>
      <div className="hero-container">
        <div className="profile-box">
          <span className="badge">Disponível para novos projetos</span>
          {/* Aqui entra a tua foto real */}
          <img src={DouglasImg} alt="Douglas" className="profile-img" />
        </div>
        <div className="hero-content">
          <h1>Criando o futuro através do <span className="text-gradient">código.</span></h1>
          <p>Desenvolvedor Frontend especializado em interfaces modernas.</p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">Ver Trabalho</a>
            <a href="https://wa.me/351912345678" className="btn-secondary" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}