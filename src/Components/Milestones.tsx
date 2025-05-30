'use client';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const milestones = [
  {
    title: 'Topic Assessment Submission',
    date: 'May 2024',
    description: 'Initial submission including research problem, objectives, and member task breakdown.',
    marks: 'No marks allocated',
  },
  {
    title: 'Project Charter Submission',
    date: 'June 2024',
    description: 'Finalized project scope, timeline, and member contributions submitted.',
    marks: 'No marks allocated',
  },
  {
    title: 'Proposal Presentation',
    date: 'July 2024',
    description: 'Presentation of the proposed research to the panel.',
    marks: '6%',
  },
  {
    title: 'Proposal Report Submission',
    date: 'August 2024',
    description: 'Detailed proposal report submitted for evaluation.',
    marks: '6%',
  },
  {
    title: 'Status Document 1',
    date: 'December 2024',
    description: 'Report of implementation phase progress.',
    marks: '1%',
  },
  {
    title: 'Progress Presentation 1',
    date: 'December 2024',
    description: 'Evaluation of 50% project completion.',
    marks: '15%',
  },
  {
    title: 'Research Paper Draft',
    date: 'March 2025',
    description: 'Draft submitted to supervisor for feedback.',
    marks: '10%',
  },
  {
    title: 'Final Thesis Submission',
    date: 'March 2025',
    description: 'Submission of final group and individual thesis documents.',
    marks: '19%',
  },
  {
    title: 'Progress Presentation 2',
    date: 'March 2025',
    description: 'Evaluation of 90% project completion.',
    marks: '18%',
  },
  {
    title: 'Log Book & Status Document 2',
    date: 'June 2025',
    description: 'Final implementation progress reports submitted along with project website.',
    marks: '3%',
  },
  {
    title: 'Website Assessment',
    date: 'June 2025',
    description: 'Research project website submitted for evaluation.',
    marks: '2%',
  },
  {
    title: 'Final Report & Viva',
    date: 'May 2025',
    description: 'Final evaluation of completed project and viva.',
    marks: '40%',
  },
];

export default function Milestones() {
  return (
    <section
      id="milestones"
      className="w-full bg-[#1f104a] text-white py-20 px-4 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          Project Milestones
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-[#536dfe] z-0" />

          {/* Timeline items */}
          <div className="flex flex-col gap-12">
            {milestones.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              const { ref, inView } = useInView({ threshold: 0.2 });
              const controls = useAnimation();

              useEffect(() => {
                if (inView) controls.start('visible');
                else controls.start('hidden');
              }, [inView, controls]);

              return (
                <motion.div
                  key={idx}
                  ref={ref}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.1 }}
                  variants={{
                    hidden: { opacity: 0, y: isLeft ? 80 : -80 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={`relative z-10 flex flex-col md:flex-row ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  <motion.div
                    className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#536dfe] border-4 border-[#1f104a] rounded-full shadow top-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />

                  <div className={`md:w-1/2 px-4 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-[#4b2e83] text-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm font-medium text-[#bdbdbd] mb-2">{item.date}</p>
                      <p className="text-base leading-relaxed">{item.description}</p>
                      <p className="text-sm font-semibold text-right mt-4">{item.marks}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
