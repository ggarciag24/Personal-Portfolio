import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';


import './index.css';

function App() {
  return (
    <div className="App">
      <Intro />
      <Contact />
      <Projects />
      <Resume />
      <Skills />
      <About />
      <br></br>
    </div>
  );
}

export default App;
