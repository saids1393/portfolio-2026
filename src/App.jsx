import React from 'react';
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Contact />

      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-200">
        <p>&copy; 2025 Said Soidroudine. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
