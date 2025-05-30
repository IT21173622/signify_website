'use client';
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const tabs = [
  { name: 'Background', icon: <span>🌐</span> },
  { name: 'Research Gap', icon: <span>📊</span> },
  { name: 'Research Problems', icon: <span>❓</span> },
  { name: 'Research Objectives', icon: <span>🎯</span> },
];

const tabContent: Record<string, React.JSX.Element> = {
  Background: (
    <>
      <p className="mb-4 text-[#bdbdbd]">
        Our project focuses on developing <strong>Signify</strong>, an AI-enhanced e-learning platform designed to improve educational accessibility for hearing-impaired children aged 4–12. The platform integrates augmented reality, machine learning, and natural language processing to provide interactive American Sign Language (ASL) learning, real-time content translation, and an AI assistant for personalized support.
      </p>
      <p className="text-[#bdbdbd]">
        Signify aims to bridge communication barriers by enabling real-time ASL recognition, video captioning, and adaptive learning recommendations to empower hearing-impaired learners.
      </p>
    </>
  ),

  'Research Gap': (
    <>
      <p className="mb-4 text-[#bdbdbd]">
        Current e-learning platforms largely lack:
      </p>
      <ul className="list-disc list-inside text-[#bdbdbd] space-y-2">
        <li>Real-time sign language translation integrated with educational content.</li>
        <li>Interactive and immersive ASL learning modules with immediate feedback.</li>
        <li>Emotional and sentiment analysis to personalize and adapt the learning experience.</li>
        <li>A unified system combining ASL practice, translation, and AI assistance seamlessly.</li>
      </ul>
      <p className="mt-4 text-[#bdbdbd]">
        Our project addresses these gaps by combining these features into a single cohesive platform, targeting improved learning outcomes and accessibility.
      </p>
    </>
  ),

  'Research Problems': (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[#bdbdbd]">
      {[{
          title: 'Limited Interactive ASL Practice',
          description:
            'Existing systems provide passive learning without immediate gesture recognition or augmented reality feedback.',
        },
        {
          title: 'No Real-Time Translation',
          description:
            'Educational content often lacks synchronized captioning and sign language interpretation, creating accessibility challenges.',
        },
        {
          title: 'Lack of Personalized Assistance',
          description:
            'Few solutions offer adaptive learning recommendations or performance prediction tailored to individual needs.',
        },
        {
          title: 'Fragmented Solutions',
          description:
            'Current tools are isolated, lacking integration between ASL learning, content translation, and AI-driven assistance.',
        },
      ].map(({ title, description }, idx) => (
        <div
          key={idx}
          className="bg-[#6e55a6] p-6 rounded-lg shadow-lg flex flex-col justify-start"
        >
          <h3 className="font-semibold text-xl mb-4 text-white">{title}</h3>
          <p className="text-base leading-relaxed">{description}</p>
        </div>
      ))}
    </div>
  ),

  'Research Objectives': (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[#bdbdbd]">
      <div className="bg-[#6e55a6] p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-xl mb-3 text-white text-center">Main Objective</h3>
        <p className="text-justify">
          Our main goal is to develop an AI-enhanced e-learning platform designed specifically for hearing-impaired students aged 4 to 12. The platform integrates augmented reality, real-time translation technologies, and adaptive AI assistance to create an inclusive and personalized educational experience. It ensures seamless access to learning materials through real-time captions, sign language interpretation, and interactive support. At the same time, it adapts dynamically to the unique needs of each child to improve their learning engagement and outcomes.
        </p>
      </div>
      <div className="bg-[#6e55a6] p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-xl mb-3 text-white text-center">Sub Objectives</h3>
        <ul className="list-disc list-inside space-y-3">
          <li>Creating interactive ASL learning sessions using AR and machine learning.</li>
          <li>Real-time translation of educational content to captions, sign language, and integrating emotion and sentiment analysis to adapt learning dynamically.</li>
          <li>AI-powered personalized learning assistant with sign language support.</li>
        </ul>
      </div>
    </div>
  ),
};

export default function Domain() {
  const [activeTab, setActiveTab] = useState('Background');
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current || !contentRef.current) return;

    const tl = gsap.timeline();

    // Heading pop animation
    tl.fromTo(
      headingRef.current,
      { opacity: 0, scale: 0.7 },
      { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }
    );

    // Content fade & slide in
    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '>-0.2'
    );

    // Cleanup function that kills the timeline
    return () => {
      tl.kill();
    };
  }, [activeTab]);

  return (
    <section id="domain" className="w-full px-4 py-20 bg-[#1f104a] text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10">Our Domain</h2>

        <div className="flex justify-center flex-wrap gap-4 mb-8 border-b border-[#4b2e83] pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`tab-button px-6 py-3 rounded-md text-lg font-medium flex items-center transition-transform duration-300 ${
                activeTab === tab.name
                  ? 'text-[#536dfe] border-b-2 border-[#536dfe] scale-105'
                  : 'text-[#bdbdbd] hover:text-[#536dfe] hover:scale-105'
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        <div
          className="bg-[#4b2e83] p-6 rounded-xl shadow-lg mb-10 tab-content-container text-left max-w-4xl mx-auto"
          key={activeTab}
        >
          <h3
            ref={headingRef}
            className="text-2xl font-bold mb-6"
          >
            {activeTab}
          </h3>
          <div ref={contentRef}>{tabContent[activeTab]}</div>
        </div>
      </div>
    </section>
  );
}
