import React from 'react';
import DouglasImg from '../assets/Douglas.jpg.jpg'; 

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        
        <div className="profile-box">
          <span className="badge">Disponível para novos projetos</span>
          <img src={DouglasImg} alt="Douglas" className="profile-img" />
        </div>
        
        <div className="hero-content">
          <h1>
            Desenvolvedor Frontend especializado em React, 
            <span className="text-gradient"> focado em criar interfaces modernas.</span>
          </h1>
          <p>Apaixonado por transformar requisitos de negócio em código limpo e eficiente.</p>
          
          <div className="hero-btns">
            <a href="#projects" className="btn-primary"></a>
            <a href="https://wa.me/351935063009" className="btn-secondary" target="_blank" rel="noreferrer">
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}