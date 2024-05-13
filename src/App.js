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
    <div className="bg-gray-100">
      <Header />
      <main>
          <About />
          <Education/>
          <Skills/>
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
