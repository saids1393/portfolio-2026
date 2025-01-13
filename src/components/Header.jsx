  import { BsGithub, BsLinkedin } from "react-icons/bs"
  import { useState, useEffect } from "react";
  import { header } from "framer-motion/client";
//Header
  function Header() {
      const [showLinks, setShowLinks] = useState(false);
    
      // Fonction pour basculer l'affichage du menu
      const handleShowLinks = () => {
        setShowLinks(!showLinks);
      };
    
      // Fonction pour fermer le menu si on clique à l'extérieur
      const handleClickOutside = (event) => {
        const nav = document.querySelector(".navbar");
        if (nav && !nav.contains(event.target)) {
          setShowLinks(false);
        }
      };
    
      // Fonction pour gérer le verrouillage du scroll
      const toggleBodyScroll = (shouldLock) => {
        if (shouldLock) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
      };
    
      // Ajouter un écouteur d'événement de clic lorsque le menu est ouvert
      useEffect(() => {
        if (showLinks) {
          document.addEventListener("click", handleClickOutside);
          toggleBodyScroll(true);
        } else {
          document.removeEventListener("click", handleClickOutside);
          toggleBodyScroll(false);
        }
    
        // Nettoyage de l'écouteur lors du démontage du composant
        return () => {
          document.removeEventListener("click", handleClickOutside);
          toggleBodyScroll(false);
        };
      }, [showLinks]);
    
      // Fonction pour gérer le clic sur un lien
      const handleLinkClick = () => {
        setShowLinks(false);
        toggleBodyScroll(false);
      };
    // Code HTML et Tailwind
      return (
        // Menu destock, tablette et mobile
          <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} z-50`}>
                  <h1><a href="#home" className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100">SSDév</a></h1>
                <ul className='navbar__links hidden md:flex gap-10 transition-all duration-300 hover:opacity-100'>
                      <li className='navbar__item slideInDown-1 transition-all duration-300 hover:text-red-500'>
                          <a href="#home" className='navbar__link' onClick={handleLinkClick}>
                          Accueil
                          </a>
                      </li>
                      <li className='navbar__item slideInDown-2 transition-all duration-300 hover:text-red-500'>
                          <a href="#hero" className='navbar__link' onClick={handleLinkClick}>
                          Présentation
                      </a>
                      </li>
                      <li className='navbar__item slideInDown-3 transition-all duration-300 hover:text-red-500'>
                          <a href="#tech" className='navbar__link' onClick={handleLinkClick}>
                          Technologies
                          </a>
                      </li>
                      <li className='navbar__item slideInDown-4 transition-all duration-300 hover:text-red-500'>
                          <a href="#projects" className='navbar__link' onClick={handleLinkClick}>
                          Projets
                          </a>
                      </li>
                      <li className='navbar__item slideInDown-4 transition-all duration-300 hover:text-red-500'>
                          <a href="#contact" className='navbar__link' onClick={handleLinkClick}>
                          Contact
                          </a>
                      </li>
                      <li className='navbar__item slideInDown-5'>
                          <a 
                          href="https://www.linkedin.com/in/soidroudine-said-329312242/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className='navbar__link'
                        
                          >
                          <BsLinkedin/>
                          </a>
                          <a 
                        href="https://github.com/SaidS9113" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='navbar__link'
                        >
                          <BsGithub/>
                          </a>
                      </li>
                  </ul>
                  <ul className='navbar__links-res hidden md:flex gap-5 mr-19'>
                      <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100'>
                        <a 
                        href="https://www.linkedin.com/in/soidroudine-said-329312242/"
                        target="_blank" 
                        rel="noopener noreferrer"> 
                        <BsLinkedin/>
                        </a>
                      </li>
                      <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100'>
                          <a
                          target="_blank" 
                          rel="noopener noreferrer"
                          href="https://github.com/SaidS9113"
                          >
                          <BsGithub/>
                          </a>
                      </li>
                  </ul>
                  <button className='navbar__icon' onClick={handleShowLinks}>
                      <span className='navbar__bar'></span>
                  </button>
              </nav>
      );
  };
  export default Header;
