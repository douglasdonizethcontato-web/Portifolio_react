import React from 'react';
import DouglasImg from '../assets/Douglas.jpg.jpg'; 

export default function Hero() {
  return (
    <section id="home" className="hero" style={{ position: 'relative', zIndex: 1 }}>
      <div className="hero-container">
        <div className="profile-box">
          <span className="badge">Disponível para novos projetos</span>
          <img src={DouglasImg} alt="Douglas" className="profile-img" />
        </div>
        
        <div className="hero-content">
          <h1>
            Desenvolvedor Frontend especializado em React, focado em criar interfaces modernas, rápidas e responsivas.
            <span className="text-gradient"></span>git push origin main
          </h1>
          <p>Apaixonado por transformar requisitos de negócio em código limpo e eficiente.</p>
          
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">Ver Trabalho</a>
            <a href="https://wa.me/351935063009" className="btn-secondary" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}