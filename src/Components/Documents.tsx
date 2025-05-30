'use client';
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const allDocuments: Record<string, { name: string; file: string }[]> = {
  'Project Registration Documents': [
    { name: 'Topic Assessment Form', file: '/docs/prf/TAF_24-25J-281.pdf' },
  ],
  'Project Proposal Individual': [
    { name: 'IT21159558_Z.F.Sahla.pdf', file: '/docs/Proposal/IT21159558_Z.F.Sahla.pdf' },
    { name: 'IT21173622_MSM Shazny.pdf', file: '/docs/Proposal/IT21173622_MSM Shazny.pdf' },
    { name: 'IT21311840_Rizan S.pdf', file: '/docs/Proposal/IT21311840_Rizan S.pdf' },
  ],
  'Proposal Presentation': [
    { name: 'Proposal Presentation', file: 'https://docs.google.com/presentation/d/1NdYJ-2MsoLsAyCXH_AsAZDiE9tRmHoE9/edit?usp=drive_link&ouid=116184159624059502853&rtpof=true&sd=true' },
  ],
  'Checklist': [
    { name: 'Checklist 1', file: '/docs/Checklist/24_25J_281_MasterSheetOfResearchPapersStudied-2.xlsx' },
    { name: 'Checklist 2', file: '/docs/Checklist/24-25j-281__Data_Analysis_Report.pdf' },
    { name: 'Checklist 3', file: '/docs/Checklist/24_25J_281_Ethycal_Analysis_Report.pdf' },
    { name: 'Checklist 4', file: '/docs/Checklist/24-25J-281_MLOps Report.pdf' },
  ],
  'Progress Presentation 01': [
    { name: 'Progress Presentation 1', file: 'https://docs.google.com/presentation/d/1lgpv-UoMvYbBgHMO2Ee9HHBH56hl7Op4/edit?usp=drive_link&ouid=116184159624059502853&rtpof=true&sd=true' },
  ],
  'Research Paper': [
    { name: 'Research Paper', file: '/docs/Research Paper/24_25J_281.pdf' },
  ],
  'Progress Presentation 02': [
    { name: 'Progress Presentation 2', file: 'https://docs.google.com/presentation/d/1G-H5hWbSeC4llPVEbS56yGuJNBq-PmqM/edit?usp=sharing&rtpof=true&sd=true' },
  ],
  'Final Reports': [
    { name: 'Final Group Report - 24-25j-281', file: '/docs/Final Report/Final Group Report - 24-25j-281.pdf' },
    { name: 'MSM Shazny - IT21173622', file: '/docs/Final Report/MSM Shazny - IT21173622.pdf' },
    { name: 'Rizan S - IT21311840', file: '/docs/Final Report/Rizan S - IT21311840.pdf' },
    { name: 'ZF Sahla - IT21159558.pdf', file: '/docs/Final Report/ZF Sahla - IT21159558.pdf' },
  ],
  'Final Presentation': [
    { name: 'Final Presentation', file: 'https://docs.google.com/presentation/d/1NdYJ-2MsoLsAyCXH_AsAZDiE9tRmHoE9/edit?usp=drive_link&ouid=116184159624059502853&rtpof=true&sd=true' },
  ],
  'Logbook': [
    { name: 'Project Logbook', file: '' },
  ],
};

export default function Documents() {
  const [activeTab, setActiveTab] = useState('Project Proposal Individual');

  useEffect(() => {
    gsap.fromTo(
      '.file-card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
    );
  }, [activeTab]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    gsap.to('.tab-btn', {
      scale: 1.2,
      duration: 0.3,
      ease: 'ease-out',
      onComplete: () => {
        gsap.to('.tab-btn', { scale: 1, duration: 0.3 });
      },
    });
  };

  return (
    <section
      id="documents"
      className="w-full py-20 px-6 bg-[#1f104a] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10">📁 Project Documents</h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(allDocuments).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`tab-btn px-4 py-2 rounded-full text-sm font-medium cursor-pointer ${
                tab === activeTab
                  ? 'bg-[#536dfe] text-white shadow'
                  : 'bg-[#4b2e83] text-[#bdbdbd] hover:bg-[#536dfe]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {allDocuments[activeTab]?.map((file, index) => (
            <div
              key={index}
              className="file-card bg-[#4b2e83] shadow-md rounded-lg p-5 w-full max-w-xs flex flex-col items-center hover:shadow-lg transition"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                alt="PDF Icon"
                width={56}
                height={56}
                className="mb-4"
              />
              <p className="text-md font-semibold mb-2 text-white break-words">{file.name}</p>
              <a
                href={file.file}
                download
                className="text-sm bg-[#536dfe] hover:bg-[#5e35b1] px-4 py-2 rounded transition"
                style={{ color: 'white', fontWeight: '600' }}
                target={file.file.startsWith('http') ? '_blank' : undefined}
                rel={file.file.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
