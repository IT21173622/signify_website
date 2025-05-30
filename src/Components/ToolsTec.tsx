'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const tools = [
  {
    name: 'Machine & Deep Learning',
    description: 'CatBoost, Random Forest, Gradient Boosting, XGBoost, CNN, LSTM',
    src: '/assets/ml.png',
  },
  { name: 'Mobile Application', description: 'Flutter', src: '/assets/flutter.svg' },
  { name: 'Database', description: 'Firebase', src: '/assets/firebase.svg' },
  { name: 'Server', description: 'Fast API', src: '/assets/fastapi.svg' },
  { name: '3D Modelling', description: 'Blender', src: '/assets/blender.svg' },
  { name: 'Programming Language', description: 'Python', src: '/assets/python.png' },
  { name: 'Development Environment', description: 'Google Colab', src: '/assets/googlecolab.png' },
  { name: 'Version Control', description: 'GitHub', src: '/assets/git.png' },
];

export default function ToolsTec() {
  return (
    <section
      id="toolstechnologies"
      className="relative w-full py-20 px-6 bg-gradient-to-br from-[#1f104a] via-[#4b2e83] to-[#1f104a] text-white scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🛠️ Tools and Technologies Used
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="backdrop-blur-lg bg-white/10 border border-white/20 hover:shadow-lg rounded-2xl p-6 w-full max-w-[220px] flex flex-col items-center justify-center"
            >
              <Image
                src={tool.src}
                alt={tool.name}
                width={64}
                height={64}
                className="object-contain mb-5"
              />
              <h3 className="font-semibold text-lg">{tool.name}</h3>
              <p className="text-sm text-[#bdbdbd] mt-2">{tool.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
