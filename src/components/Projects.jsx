import { div, span } from 'framer-motion/client';
import image1 from '../assets/img/project-1-siteECommerce.png';
import image2 from '../assets/img/api-rest-symfony-react.png';
import image3 from '../assets/img/mescertifs.png';
import image4 from '../assets/img/methodeERPR.png';

import { motion } from "framer-motion";
// Tableau des informations du projets
const projectsData = [
  {
    image: image3,
    title: "MesCertifs",
    description: (
      <>
      Plateforme web dynamique référençant certifications RS et RNCP et organismes de formation. <a
          href="https://gitlab.com/IkramMbz/mescertifs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Voir le projet
        </a>
      </>
    ),
    technologies: ["Next.JS", "Tailwind CSS", "Python", "ElasticSearch", "PostegreSQL", "GitLab" ,  "Docker"],
  },
    {
    image: image4,
    title: "WebApp dynamique et automatisée",
    description: (
      <>
      WebApp d'apprentissage de la langue arabe littéraire dynamique avec automatisation. <a
          href="https://github.com/saids1393/methode-ERPR-son-importance"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Voir le projet
        </a>
      </>
    ),
    technologies: ["Next.JS", "Tailwind CSS", "PostgreSQL", "NeonDB", "GitHub", "Vercel", ],
  },
  {
    image: image2,
    title: "SportCars",
    description: (
      <>
        Site e-commerce de voitures de sport avec API REST, authentification JWT et CRUD administration responsive. <a
          href="https://github.com/SaidS9113/API-SYMFONY-REACT"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Voir le projet
        </a>
      </>
    ),
    technologies: ["Symfony", "React", "Tailwind CSS", "SCSS", "SQL", "Redux", "Axios"],
  },
  {
    image: image1,
    title: "MielQualityS",
    description: (
      <>
        E-commerce développé durant stage de 3 mois avec CRUD et architecture MVC, front-end et back-end. <a
          href="https://github.com/SaidS9113/Projet-Site-E-Commerce-PHP-Architecture-MVC"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Voir le projet
        </a>

      </>
    ),
    technologies: ["HTML", "CSS", "Sass", "JS", "PHP", "SQL"],
  },
]
// Effet de scroll
const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}
// Boucle du tableau qui retourne les informations du projet
const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <section className='flex flex-col items-start gap-8 md:flex-row md:gap-24'>
        <div className='flex flex-col gap-3 flex-1'>
          <h3 className='text-xl font-semibold'>{project.title}</h3>
          <p className='text-gray-400 line-clamp-4'>{project.description}</p>
          <div className='flex flex-wrap gap-5'>
            {
              project.technologies.map((tech, index) => (
                <span key={index} className='rounded-lg bg-black p-3 text-sm'>
                  {tech}
                </span>
              ))
            }
          </div>
        </div>
        <img src={project.image} alt="" className='w-full rounded-2xl md:w-[400px] md:h-auto flex-shrink-0' />
      </section>
    </ScrollReveal>
  )
}
const Projects = () => {
  return (
    <section id='projects' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24 z-0'>
      <ScrollReveal>
        <h2 className='text-4xl font-light text-white md:text-6xl'>Projets</h2>
      </ScrollReveal>
      <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }
      </div>
    </section>

  )
}

export default Projects
