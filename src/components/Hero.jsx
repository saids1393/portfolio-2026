import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import image from '../assets/img/photo_4.jpeg';

const Hero = () => {
  const fullText = "Développeur Full-Stack, doté d’une grande autonomie, d’une expertise en front-end et de compétences en back-end, je gère efficacement mes responsabilités et relève de nouveaux défis. Mon adaptabilité et mes aptitudes en communication assurent une intégration rapide, une collaboration fluide et une performance constante, même sous pression.";
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 40);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="mt-[100px] px-16 flex min-h-screen w-full items-center justify-center pb-8 md:px-32 z-0">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{y: -50, opacity: 0}}
          animate={{y: 0, opacity:1}}
          transition={{duration: 0.8, delay:0.2}}
        >
          <a id="hero"
            href="https://www.linkedin.com/in/soidroudine-said-329312242/" 
            target="_blank" 
            rel="noopener noreferrer" 
          >
            <img 
              src={image} 
              alt="" 
              className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md/w-[350px] z-0"
            />
          </a>
        </motion.div>
        <motion.div
          initial={{y: 50, opacity: 0}}
          animate={{y: 0, opacity:1}}
          transition={{duration: 0.8, delay:0.2}}
          className='flex max-w-[600px] flex-col items-center justify-center gap-3 text-center'
        >
          <h2 className='animate-gradient bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl'>
            Said Soidroudine
          </h2>
          <h3 className='animate-gradient bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl'>
            Développeur Full-Stack
          </h3>
          <p className='md:text-base text-pretty text-sm text-gray-400'>
            {text}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;