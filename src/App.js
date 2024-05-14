import React from 'react';
import Header from './Header';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import About from './About'; 
import './styles.css';

function App() {
  return (
    <div className="bg-blue-100">
      <Header />
      <main>
          <About />
          <Education/>
        <Projects />
        <Skills/>
        <Contact />
      </main>
    </div>
  );
}

export default App;
