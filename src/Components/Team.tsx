'use client';
import { motion } from 'framer-motion';
import { Linkedin, Facebook, Mail } from 'lucide-react';
import Image from 'next/image';

interface Member {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  facebook?: string;
  email?: string;
}

const students: Member[] = [
  {
    name: 'Rizan S',
    role: 'Interactive ASL Learning Developer',
    image: '/team/rizan.jpg',
    linkedin: '',
    facebook: '',
    email: 'mailto:it21311840@my.sliit.lk',
  },
  {
    name: 'M.S.M. Shazny',
    role: 'Real-Time Translation Developer',
    image: '/team/shazny.jpg',
    linkedin: '',
    facebook: '',
    email: 'mailto:it21173622@my.sliit.lk',
  },
  {
    name: 'Z.F. Sahla',
    role: 'AI Learning Assistant Developer',
    image: '/team/sahla.jpg',
    linkedin: '',
    facebook: '',
    email: 'mailto:it21159558@my.sliit.lk',
  },
];

const supervisors: Member[] = [
  {
    name: 'Ms. Thamali Kelegama',
    role: 'Supervisor',
    image: '/team/thamali.jpg',
    linkedin: 'https://linkedin.com/in/thamali-kelegama',
    facebook: '#',
    email: 'mailto:thamali.k@sliit.lk',
  },
  {
    name: 'Ms. Vindhya Kalapuge',
    role: 'Co-Supervisor',
    image: '/team/vindhya.jpg',
    linkedin: 'https://linkedin.com/in/vindhya-kalapuge',
    facebook: '#',
    email: 'mailto:vindhya.k@sliit.lk',
  },
];

function MemberCard({ member, idx }: { member: Member; idx: number }) {
  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: '0 0 15px 3px #5e35b1' }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
      className="bg-[#4b2e83] text-white rounded-xl shadow-md w-60 flex flex-col items-center py-8 px-6 hover:shadow-lg transition-shadow"
    >
      <Image
        src={member.image}
        alt={member.name}
        width={144}  // 36 * 4 (tailwind w-36/h-36 is 9rem = 144px)
        height={144}
        className="object-cover rounded-full shadow-md mb-4 bg-[#1f104a] border-4 border-[#536dfe] scale-110"
      />
      <h3 className="font-bold text-lg text-center">{member.name}</h3>
      <p className="text-sm text-[#bdbdbd] text-center">{member.role}</p>

      <div className="flex justify-center gap-6 mt-4">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded border border-[#536dfe] hover:bg-[#536dfe] hover:text-white transition"
          >
            <Linkedin className="text-white" size={20} />
          </a>
        )}
        {member.facebook && member.facebook !== '#' && (
          <a
            href={member.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded border border-[#536dfe] hover:bg-[#536dfe] hover:text-white transition"
          >
            <Facebook className="text-white" size={20} />
          </a>
        )}
        {member.email && (
          <a
            href={member.email}
            className="p-2 rounded border border-[#536dfe] hover:bg-[#536dfe] hover:text-white transition"
          >
            <Mail className="text-white" size={20} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="bg-[#1f104a] text-white py-20 px-4">
      <h2 className="text-4xl font-bold mb-12 text-center">Team</h2>

      {/* Students row */}
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto mb-16">
        {students.map((member, idx) => (
          <MemberCard key={idx} member={member} idx={idx} />
        ))}
      </div>

      {/* Supervisors row */}
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {supervisors.map((member, idx) => (
          <MemberCard key={idx} member={member} idx={idx} />
        ))}
      </div>
    </section>
  );
}
