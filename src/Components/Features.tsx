'use client';
import { useEffect, useRef, useState } from 'react';
import { FaSignLanguage, FaRobot, FaLanguage } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Interactive ASL Learning',
    icon: <FaSignLanguage className="w-12 h-12 mx-auto text-white" />,
    description:
      'Real-time American Sign Language recognition enhanced with Augmented Reality for immersive and interactive learning experiences.',
    bgColor: 'bg-[#4b2e83]',
    textColor: 'text-white',
  },
  {
    title: 'Real-Time Translation & Emotional Analysis',
    icon: <FaLanguage className="w-12 h-12 mx-auto text-white" />,
    description:
      'Seamlessly translate educational audio into captions and synchronized sign language animations to make content accessible. Additionally, integrate real-time emotion detection and sentiment analysis to personalize learning and adapt feedback according to learner engagement.',
    bgColor: 'bg-[#5e35b1]',
    textColor: 'text-white',
  },
  {
    title: 'AI Learning Assistant',
    icon: <FaRobot className="w-12 h-12 mx-auto text-white" />,
    description:
      'An intelligent chatbot supporting text and sign language interactions, personalized course recommendations, quizzes, and performance prediction.',
    bgColor: 'bg-[#4b2e83]', // default purple, NOT blue by default
    activeBgColor: 'bg-[#536dfe]', // blue when active
    textColor: 'text-white',
  },
];

export default function Features() {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    featureRefs.current.forEach((feature, idx) => {
      gsap.from(feature, {
        opacity: 0,
        y: 50,
        scale: 0.8,
        duration: 1,
        delay: idx * 0.2,
        scrollTrigger: {
          trigger: feature,
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(feature, {
        scale: 1.05,
        opacity: 1,
        duration: 0.3,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: feature,
          start: 'top 90%',
          end: 'bottom 70%',
          scrub: true,
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <section id="features" className="w-full py-20 px-4 bg-[#1f104a] text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">What We Provide</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              ref={(el) => {
                featureRefs.current[idx] = el;
              }}
              onClick={() => setActiveIndex(idx)}
              className={`rounded-lg p-6 shadow-md text-center cursor-pointer ${
                activeIndex === idx
                  ? feature.activeBgColor ?? feature.bgColor
                  : feature.bgColor
              } ${feature.textColor} group relative`}
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              {feature.icon}
              <p className="mt-4 text-base leading-relaxed">{feature.description}</p>

              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
