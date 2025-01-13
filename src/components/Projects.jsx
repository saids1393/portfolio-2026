  import { div, span } from 'framer-motion/client';
  import image1 from '../assets/img/project-1-siteECommerce.png';
  import image2 from '../assets/img/api-rest-symfony-react.png';
  import { motion } from "framer-motion";
// Tableau des informations du projets
  const projectsData = [
    {
      image: image2,
      title: "Site e-commerce de voitures de sport",
      description : (
        <>
        Voici un site e-commerce de voitures de sport actuellement en développement, que j'ai réalisé moi-même.
        L'objectif était de monter en compétences dans un domaine qui me passionne. Ce projet repose sur une API REST et est entièrement responsive pour tous les appareils. Il intègre de nombreuses fonctionnalités, comme l'authentification via JWT, un CRUD (GET, POST, PUT, DELETE) côté administration, et bien plus encore.{" "}
          <a
            href="https://sportcars.alwaysdata.net"
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
      title: "Site e-commerce de miels",
      description : (
        <>
          Voici un site e-commerce que j'ai développé comme projet durant mon stage de 3 mois. L'objectif était de mettre en pratique toutes mes connaissances acquises lors de ma formation, tant du côté front-end (design) que du côté back-end (gestion des bases de données) en implémentant les fonctionnalités CRUD avec une architecture MVC.{" "}
          <a
            href="https://ssd.alwaysdata.net/ctrl/accueil.php"
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
  const ScrollReveal = ({children}) => {
    return (
      <motion.div
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      transition={{duration:0.8}}
      >
        {children}
      </motion.div>
    )
  }
// Boucle du tableau qui retourne les informations du projet
  const ProjectCard = ({project}) => {
    return (
      <ScrollReveal>
      <section className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
        <img src={project.image} alt="" className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]'/>
        <div className='flex flex-col gap-5'>
      <div className=' flex flex-col gap-3'>
  <h3 className='text-xl font-semibold'>{project.title}</h3>
    <p className='text-gray-400'>{project.description}</p>
  </div>
  <div className='flex flex-wrap gap-5'>
      {
        project.technologies.map((tech, index) => (
          <span key={index} className='rounded-lg bg-black p-3'>
            {tech}
          </span>
      ))
      }
      </div>
        </div>
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
            <ProjectCard key={index} project={project}/>
          ))
        }
        </div>
      </section>
      
    )
  }

  export default Projects
