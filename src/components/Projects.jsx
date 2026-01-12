import React from 'react';
import image1 from '../assets/img/project-1-siteECommerce.png';
import image2 from '../assets/img/sportcars.png';
import image3 from '../assets/img/mescertifs.png';
import image4 from '../assets/img/methodeERPR.png';

const projectsData = [
  {
    image: image3,
    title: "MesCertifs",
    description: "Plateforme web dynamique référençant certifications RS et RNCP et organismes de formation.",
    link: "https://gitlab.com/IkramMbz/mescertifs"
  },
  {
    image: image4,
    title: "Méthode ERPR",
    description: "WebApp d'apprentissage de la langue arabe littéraire dynamique avec automatisation.",
    link: "https://github.com/saids1393/methode-ERPR-son-importance"
  },
  {
    image: image2,
    title: "SportCars",
    description: "Site e-commerce de voitures de sport avec API REST, authentification JWT et CRUD administration responsive.",
    link: "https://github.com/SaidS9113/API-SYMFONY-REACT"
  },
  {
    image: image1,
    title: "MielQualityS",
    description: "E-commerce développé durant stage avec CRUD et architecture MVC, front-end et back-end.",
    link: "https://github.com/SaidS9113/Projet-Site-E-Commerce-PHP-Architecture-MVC"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-200"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
