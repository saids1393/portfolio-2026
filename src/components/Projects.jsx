import React, { useState, useEffect } from 'react';
import image1 from '../assets/img/project-1-siteECommerce.png';
import image2 from '../assets/img/sportcars.png';
import image3 from '../assets/img/mescertifs.png';
import image6 from '../assets/img/dashboard-AppMescertifs.PNG';
import imageLangProgress from '../assets/img/langprogress.png';

const entrepriseProjects = [
  {
    image: image3,
    title: "MesCertifs",
    date: "2025 - 2026",
    description: "Moteur de recherche référençant tous les organismes de formation et les certifications RNCP et RS actives uniquement.",
    link: "https://mescertifs.fr",
    technologies: ["Next.js", "TypeScript", "Python", "Prisma"]
  },
  {
    image: image6,
    title: "AppMesCertifs",
    date: "2025 - 2026",
    description: "Dashboard de MesCertifs permettant aux organismes de référencer gratuitement leur structure et leurs formations.",
    link: "https://app.mescertifs.fr",
    technologies: ["NestJS", "Python", "Appwrite", "TypeScript"]
  },
  {
    image: image1,
    title: "MielQualityS",
    date: "2024",
    description: "E-commerce développé durant stage avec CRUD et architecture MVC, front-end et back-end.",
    link: "https://github.com/SaidS9113/Projet-Site-E-Commerce-PHP-Architecture-MVC",
    technologies: ["PHP", "SQL", "MySQL", "GitHub"]
  }
];

const personnelProjects = [
  {
    image: imageLangProgress,
    title: "LangProgress",
    date: "2025 - 2026",
    description: "Plateforme automatisée et dynamique, modulable pour l'apprentissage de toutes les langues.",
    link: "https://langprogress-s.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind"]
  },
  {
    image: image2,
    title: "SportCars",
    date: "2024 - 2025",
    description: "Site e-commerce de voitures de sport avec API REST, authentification JWT et CRUD administration responsive.",
    link: "https://github.com/SaidS9113/API-SYMFONY-REACT",
    technologies: ["Symfony", "React", "API REST", "JWT"]
  }
];

const Carousel = ({ projects, title, autoPlay = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  // Grouper les projets par 2
  const slides = [];
  for (let i = 0; i < projects.length; i += 2) {
    slides.push(projects.slice(i, i + 2));
  }
  
  // Cloner le premier slide à la fin et le dernier au début pour boucle infinie
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];
  const [position, setPosition] = useState(1);

  useEffect(() => {
    if (!isAutoPlaying || slides.length <= 1) return;
    const interval = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Gérer la transition infinie
  useEffect(() => {
    if (position === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setPosition(slides.length);
      }, 500);
    } else if (position === slides.length + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setPosition(1);
      }, 500);
    }
  }, [position, slides.length]);

  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => setIsTransitioning(true), 50);
    }
  }, [isTransitioning]);

  const goToSlide = (index) => {
    setPosition(index + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setPosition((prev) => prev - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setPosition((prev) => prev + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Calculer l'index réel pour les dots
  const realIndex = position === 0 ? slides.length - 1 : position === slides.length + 1 ? 0 : position - 1;

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">{title}</h3>
      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden rounded-xl">
          <div 
            className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
            style={{ transform: `translateX(-${position * 100}%)` }}
          >
            {extendedSlides.map((slide, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className={`grid gap-4 px-2 ${slide.length === 1 ? 'grid-cols-1 max-w-md mx-auto' : 'grid-cols-1 md:grid-cols-2'}`}>
                  {slide.map((project, index) => (
                    <a
                      key={index}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200"
                    >
                      <div className="aspect-video overflow-hidden bg-gray-100">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">
                            {project.title}
                          </h4>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {project.date}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-indigo-600 text-sm font-medium flex items-center gap-1 hover:text-indigo-700">
                            Voir plus
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                          <div className="flex gap-1 flex-wrap justify-end">
                            {project.technologies?.map((tech, i) => (
                              <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-all z-10"
              aria-label="Projet précédent"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-all z-10"
              aria-label="Projet suivant"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {slides.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === realIndex 
                    ? 'bg-indigo-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Projets</h2>
        
        <Carousel projects={personnelProjects} title="Projets Personnels" />
        <Carousel projects={entrepriseProjects} title="Projets Entreprise" autoPlay={false} />
      </div>
    </section>
  );
}

export default Projects;
