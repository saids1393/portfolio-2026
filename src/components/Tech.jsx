import { BiLogoJavascript, BiSolidFileCss, BiLogoTailwindCss, BiLogoReact } from "react-icons/bi"
import { FaHtml5, FaSymfony, FaPython, FaGithub, FaGitlab } from "react-icons/fa";
import { SiPhp, SiTypescript, SiNextdotjs, SiElasticsearch, SiMongodb, SiMysql, SiPostgresql, SiFigma, SiPrisma } from "react-icons/si";
import { PiFileSqlFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Tech = () => {
  const technologies = [
    { icon: FaHtml5, color: "text-orange-500", name: "HTML5" },
    { icon: BiSolidFileCss, color: "text-blue-500", name: "CSS" },
    { icon: BiLogoJavascript, color: "text-yellow-500", name: "JavaScript" },
    { icon: BiLogoReact, color: "text-sky-500", name: "React" },
    { icon: SiNextdotjs, color: "text-white", name: "Next.js" },
    { icon: BiLogoTailwindCss, color: "text-cyan-400", name: "Tailwind CSS" },
    { icon: FaSymfony, color: "text-orange-400", name: "Symfony" },
    { icon: SiPhp, color: "text-purple-500", name: "PHP" },
    { icon: FaPython, color: "text-blue-400", name: "Python" },
    { icon: SiTypescript, color: "text-blue-600", name: "TypeScript" },
    { icon: FaGithub, color: "text-white", name: "GitHub" },
    { icon: FaGitlab, color: "text-orange-600", name: "GitLab" },
    { icon: SiElasticsearch, color: "text-yellow-500", name: "Elasticsearch" },
    { icon: SiMongodb, color: "text-green-500", name: "MongoDB" },
    { icon: SiMysql, color: "text-blue-600", name: "MySQL" },
    { icon: SiPostgresql, color: "text-blue-500", name: "PostgreSQL" },
    { icon: PiFileSqlFill, color: "text-pink-500", name: "SQL" },
    { icon: SiFigma, color: "text-purple-500", name: "Figma" },
    { icon: SiPrisma, color: "text-white", name: "Prisma" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const getItemsPerView = () => {
    if (screenSize < 640) return 1;
    if (screenSize < 1024) return 2;
    if (screenSize < 1536) return 4;
    return 6;
  };

  const itemsPerView = getItemsPerView();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const getVisibleTechs = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      visible.push(technologies[(currentIndex + i) % technologies.length]);
    }
    return visible;
  };

  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32 z-0">
      <motion.h2
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.4 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h2>

      <div className="flex w-full items-center justify-center gap-12 px-8">
        <button
          onClick={() => {
            setDirection(-1);
            setCurrentIndex((prev) => (prev - 1 + technologies.length) % technologies.length);
          }}
          className="rounded-full bg-white/10 p-3 hover:bg-white/20 transition-all duration-300 flex-shrink-0"
        >
          ←
        </button>

        <div className="relative w-full max-w-[1200px] overflow-hidden">
          <div className="flex justify-center gap-16 p-5">
            {getVisibleTechs().map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center gap-3"
                >
                  <Icon className={`${tech.color} cursor-pointer text-[80px] transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]`} />
                  <p className="text-white text-sm md:text-base">{tech.name}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % technologies.length);
          }}
          className="rounded-full bg-white/10 p-3 hover:bg-white/20 transition-all duration-300 flex-shrink-0"
        >
          →
        </button>
      </div>

      <div className="flex gap-2">
        {technologies.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-blue-500 w-8" : "bg-white/20 w-2"
            }`}
            onClick={() => setCurrentIndex(index)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Tech;
