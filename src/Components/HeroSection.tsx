'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const wordVariants = {
  hover: {
    scale: 1.05,
    color: '#536dfe',
    transition: { duration: 0.3 },
  },
};

export default function HeroSection() {
  const [scrolling, setScrolling] = useState(false);
  const controls = useAnimation();

  const handleScroll = () => {
    setScrolling(window.scrollY > 50);
  };

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) / 10;
    const y = (clientY - window.innerHeight / 2) / 10;
    controls.start({ x, y, transition: { duration: 0.1 } });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const titleText = 'Signify';
  const subtitle = 'AI-Enhanced E-Learning for Hearing-Impaired Children';
  const words = titleText.split(' ');

  return (
    <section
      id="home"
      className="relative w-full min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('assets/hero-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ backgroundPosition: scrolling ? '100% 100%' : '0% 0%' }}
        transition={{ duration: 1, ease: 'linear' }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-[#1f104a] backdrop-blur-3xl opacity-70" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 w-full max-w-[90%] sm:max-w-4xl text-center px-4"
      >
        <h1 className="sm:text-6xl font-bold text-white mb-4 leading-tight break-words">
          <motion.div initial="hidden" animate="visible" whileHover="hover" variants={wordVariants}>
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-2">
                {word.split('').map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    custom={letterIndex}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.div>
        </h1>

        <motion.p
          className="sm:text-2xl font-semibold text-white mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          {subtitle}
        </motion.p>

        <motion.p
          className="text-sm italic text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ color: '#536dfe', transition: { duration: 0.3 } }}
        >
          — Your Personal Assistant in Sign Language
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0"
        animate={controls}
        initial={{ x: 0, y: 0 }}
        transition={{ duration: 0.1 }}
      />
    </section>
  );
}
