import React from 'react';

const education = [
  {
    degree: "Concepteur Développeur d'Applications | RNCP 6 (Bac+3)",
    school: "One Business School - Paris",
    period: "2025 - 2026",
    description: "Formation en alternance axée sur le développement d'applications web et mobile avec une expertise approfondie en architecture logicielle et gestion de projets."
  },
  {
    degree: "Développeur web et web mobile | RNCP 5 (Bac+2)",
    school: "GRETA-CFA Académie d'Aix-Marseille - Lycée Denis Diderot",
    period: "2024",
    description: "Formation complète en développement web couvrant le front-end et le back-end, avec une approche pratique à travers des projets réels."
  },
  {
    degree: "Baccalauréat Professionnel Électrotechnique",
    school: "Lycée Ampère, Marseille",
    period: "2020",
    description: "Formation technique en systèmes électriques et électroniques avec une expérience pratique en maintenance industrielle."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600">{edu.school}</p>
                </div>
                <p className="text-gray-500 text-sm mt-2 md:mt-0">{edu.period}</p>
              </div>
              <p className="text-gray-700">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
