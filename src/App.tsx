import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';
import ContactMe from './components/ContactMe';
import './index.css';


const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />

      </main>
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
