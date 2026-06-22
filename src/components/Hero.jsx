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
            Desenvolvedor Front-End especializado em React, 
            <span className="text-gradient"> focado em criar interfaces modernas.</span>
          </h1>
             <div className="skills-container">
               <span className="skill-item">React</span>
               <span className="skill-item">JavaScript</span>
               <span className="skill-item">Html</span>
               <span className="skill-item">CSS</span>
               <span className="skill-item">Git</span>
               <span className="skill-item">GitHub</span>
               <span className="skill-item">Responsive Design</span>
          </div>
          
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