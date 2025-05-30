'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function Introduction() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.floating-heading', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.waving-subtext', {
        rotation: 1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="introduction"
      ref={sectionRef}
      className="w-full px-6 py-20 text-[#bdbdbd] scroll-mt-20 overflow-hidden relative"
      style={{
        backgroundImage: "url('assets/Intro-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-[#1f104a] bg-opacity-80 z-0" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="floating-heading text-5xl sm:text-6xl font-[var(--font-poppins)] mb-6 text-white"
        >
          What is Signify?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="waving-subtext sm:text-3xl font-semibold mb-8"
        >
          Empowering Hearing-Impaired Children with AI-Enhanced, Interactive E-Learning
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-base sm:text-xl leading-relaxed tracking-wide text-[#bdbdbd]"
        >
          Signify is a research-driven platform combining Augmented Reality, Machine Learning, and Natural Language Processing to make learning accessible, interactive, and effective for children with hearing impairments aged 4 to 12. Our solution integrates real-time ASL recognition, educational content translation, and an AI-powered assistant to foster confident, inclusive education.
        </motion.p>
      </div>
    </section>
  );
}
