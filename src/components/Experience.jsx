import React from 'react';

const experiences = [
  {
    title: "Développeur Full-Stack",
    company: "CFSPLUS - MESCERTIFS",
    period: "Mars 2025 - Mars 2026",
    type: "Alternance",
    description: [
      "Développement du Front-end selon le cahier des charges",
      "Développement du Back-end via les API et l'architecture App Router",
      "Intégration du CI/CD et des pipelines avec GitLab",
      "Intégration d'une API d'intelligence artificielle",
      "Automatisation de tâches avec Python (CRON)",
      "Déploiement via Docker",
      "Gestion de MongoDB, Express, PostgreSQL, Portainer et Hostinger"
    ]
  },
  {
    title: "Développeur Full-Stack",
    company: "FREELANCE - Projet E-Learning",
    period: "Mai 2025 - Projet en continu",
    type: "Projet personnel",
    description: [
      "Développement du front-end conformément au cahier des charges",
      "Développement du back-end via les API et l'architecture App Router",
      "Intégration DevOps",
      "Création d'un tableau de bord administratif",
      "Automatisation du suivi des élèves"
    ]
  },
  {
    title: "Développeur Full-Stack",
    company: "MIELQUALITYS",
    period: "Juin 2024 - Octobre 2024",
    type: "Stage",
    description: [
      "Conception des maquettes Front-end avec Figma pour tous types d'appareils",
      "Modélisation du Back-end (MCD, MLD, MPD) avec Merise et draw.io",
      "Développement Front-end : HTML, CSS, SCSS, JavaScript",
      "Développement Back-end : PHP, SQL, MySQL avec architecture MVC"
    ]
  },
  {
    title: "Électrotechnicien Industriel",
    company: "CARRIER PROFROID & SEALED AIR B+",
    period: "2021 - 2023",
    type: "International",
    description: [
      "Lecture et interprétation de schémas électriques et électroniques",
      "Diagnostic et résolution de dysfonctionnements",
      "Câblage d'appareillages, platines et machines industrielles",
      "Maintenance et suivi technique des installations"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Expérience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <p className="text-gray-500 text-sm mt-2 md:mt-0">{exp.period}</p>
              </div>
              <ul className="space-y-2 text-gray-700">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
