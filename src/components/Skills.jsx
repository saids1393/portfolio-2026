import React from 'react';
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiPython, 
  SiNodedotjs, 
  SiPostgresql, 
  SiMongodb, 
  SiMysql, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3, 
  SiSass, 
  SiDocker, 
  SiNginx, 
  SiElasticsearch, 
  SiGitlab, 
  SiGithub, 
  SiFigma, 
  SiPhp, 
  SiSymfony 
} from 'react-icons/si';

const skills = [
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "SCSS", icon: SiSass, color: "#CC6699" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Nginx", icon: SiNginx, color: "#009639" },
  { name: "ElasticSearch", icon: SiElasticsearch, color: "#005571" },
  { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Symfony", icon: SiSymfony, color: "#000000" }
];

const Skills = () => {
  // Dupliquer les skills pour un défilement infini fluide
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-24 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 px-4">Compétences</h2>
      
        {/* Carrousel défilant */}
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-6 animate-scroll"
            style={{
              width: 'fit-content',
            }}
          >
            {duplicatedSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-3 bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-md hover:border-indigo-300 transition-all w-[100px] flex-shrink-0"
                >
                  <IconComponent size={40} style={{ color: skill.color }} />
                  <span className="text-gray-700 text-xs font-medium text-center">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default Skills;
