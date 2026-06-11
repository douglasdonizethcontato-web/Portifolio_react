import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // Chamando o Hero real agora
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
    </>
  );
}

export default App;