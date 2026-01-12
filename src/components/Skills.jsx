import React from 'react';

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Python",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "SCSS",
  "Docker",
  "Nginx",
  "ElasticSearch",
  "GitLab",
  "GitHub",
  "Figma",
  "PHP",
  "Symfony"
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
