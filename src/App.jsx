import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <WhatsAppButton />
      <Navbar />
      <Hero />
      <Projects />
    </>
  );
}

export default App;