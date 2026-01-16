import React from 'react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
           <a href="#" className="text-xl font-serif font-bold tracking-tighter">
             MG<span className="text-brand-accent">.</span>
           </a>
           <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} Webdesign MG by Raes. All rights reserved.</p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-white transition-colors transform hover:-translate-y-1"><Instagram size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors transform hover:-translate-y-1"><Twitter size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors transform hover:-translate-y-1"><Linkedin size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors transform hover:-translate-y-1"><Github size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;