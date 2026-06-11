import React, { useState } from 'react';

export default function Projects() {
  // 1. Criamos uma lista de projetos com categorias diferentes
  const meusProjetos = [
    { id: 1, titulo: "E-Commerce Retro", categoria: "Frontend", descricao: "Loja virtual com design synthwave." },
    { id: 2, titulo: "App de Notas", categoria: "React", descricao: "Aplicação avançada com salvamento local." },
    { id: 3, titulo: "Landing Page Neon", categoria: "Frontend", descricao: "Página de conversão de alta performance." },
  ];

  // 2. Criamos um "estado" para saber qual categoria está selecionada
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  // 3. Filtramos a lista com base no botão clicado
  const projetosFiltrados = categoriaAtiva === 'Todos' 
    ? meusProjetos 
    : meusProjetos.filter(p => p.categoria === categoriaAtiva);

  return (
    <section id="projects" className="container">
      <h2 className="section-title">Projetos</h2>
      
      {/* Botões de Filtro */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center' }}>
        {['Todos', 'Frontend', 'React'].map(cat => (
          <button 
            key={cat}
            onClick={() => setCategoriaAtiva(cat)}
            style={{
              padding: '8px 16px',
              backgroundColor: categoriaAtiva === cat ? '#00ffff' : 'transparent',
              color: categoriaAtiva === cat ? '#000' : '#fff',
              border: '1px solid #00ffff',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'all 0.3s'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de Projetos Filtrados */}
      <div className="grid">
        {projetosFiltrados.map((projeto) => (
          <div key={projeto.id} className="card">
            <span style={{ fontSize: '0.8rem', color: '#00ffff' }}>{projeto.categoria}</span>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}