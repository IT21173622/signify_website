'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';  // Import Next.js Image component

const navItems = [
  'Home',
  'Introduction',
  'Domain',
  'Milestones',
  'Features',
  'Documents',
  'Tools & Technologies',
  'Publication Details',
  'Team',
  'Contact Us',
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const formatId = (item: string) =>
    item.toLowerCase().replace(/[^a-z0-9]/g, '');

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-white shadow z-50"
    >
      <div className="w-full pl-4 pr-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/logo.jpeg"
            alt="Signify Logo"
            width={40}   // approximate height of 10 (h-10 in tailwind) = 40px
            height={40}
            className="w-auto"
          />
          <span className="text-xl font-bold text-[#0b3d91]">Signify</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex flex-1 justify-center gap-x-6 ml-6">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={`#${formatId(item)}`}
              className="text-sm font-bold text-[#0b3d91] hover:text-[#536dfe] transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <X className="w-6 h-6 text-[#0b3d91]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0b3d91]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100vh', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white px-4 pt-4 pb-10 shadow overflow-y-auto"
          >
            <div className="flex flex-col space-y-4 max-h-screen overflow-y-auto">
              {navItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={`#${formatId(item)}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-[#0b3d91] hover:text-[#536dfe] transition duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
