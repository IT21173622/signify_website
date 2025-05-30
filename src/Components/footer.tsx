import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1f104a] border-t border-[#4b2e83] pt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-6 text-[#bdbdbd]">
        <div>
          <h3 className="text-xl font-bold text-white">Signify</h3>
          <p className="mt-2 text-sm text-[#bdbdbd]">
            Empowering hearing-impaired children with inclusive AI-enhanced e-learning.
          </p>
          <div className="mt-3 space-y-1 text-sm">
            <p className="flex items-center gap-2">
              <Phone size={16} /> +94 77 259 5231
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> info@signify.com
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> SLIIT Malabe Campus, Sri Lanka
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#home" className="hover:text-[#536dfe]">Home</a></li>
            <li><a href="#domain" className="hover:text-[#536dfe]">Domain</a></li>
            <li><a href="#introduction" className="hover:text-[#536dfe]">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Documents</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#documents" className="hover:text-[#536dfe]">Documentation</a></li>
            <li><a href="#presentations" className="hover:text-[#536dfe]">Presentations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Useful Links</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#milestones" className="hover:text-[#536dfe]">Milestones</a></li>
            <li><a href="#features" className="hover:text-[#536dfe]">Features</a></li>
            <li><a href="#team" className="hover:text-[#536dfe]">Our Team</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Follow Us</h4>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-[#536dfe] hover:scale-110 transition"><Twitter size={20} /></a>
            <a href="#" className="text-[#536dfe] hover:scale-110 transition"><Facebook size={20} /></a>
            <a href="#" className="text-[#536dfe] hover:scale-110 transition"><Instagram size={20} /></a>
            <a href="https://github.com/SilverlineIT" className="text-[#536dfe] hover:scale-110 transition"><Github size={20} /></a>
            <a href="https://linkedin.com/in/silverlineit" className="text-[#536dfe] hover:scale-110 transition"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-[#4b2e83] pt-4 pb-6 text-center text-sm text-[#bdbdbd]">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Signify</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
