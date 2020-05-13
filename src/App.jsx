import React from 'react';
import './App.scss';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />

      <Footer />
    </div>
  );
}

export default App;
