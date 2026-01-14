import React from 'react';
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />

      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-200">
        <p>&copy; 2026 Said Soidroudine. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
