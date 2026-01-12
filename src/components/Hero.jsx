import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGitlab } from 'react-icons/si';
import image from '../assets/img/photo_4.jpeg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
      {/* Grid background pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%)'
        }}
      />
      <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
        <img
          src={image}
          alt="Said Soidroudine"
          className="w-40 h-40 rounded-full mx-auto mb-8 object-cover border-4 border-gray-100 shadow-sm"
        />

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Said Soidroudine
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
          Développeur Full-Stack
        </p>

        <div className="flex gap-4 justify-center mb-8">
          <a
            href="/cv-soidroudine-said-2026.pdf"
            target="_blank"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center gap-2"
          >
            Resume
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Connect me
          </a>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/SaidS9113"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://gitlab.com/Said_Soidroudine"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <SiGitlab size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/soidroudine-said-329312242/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
